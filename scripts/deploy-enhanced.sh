#!/bin/bash

# Enhanced deployment script with error handling and logging
# Usage: ./deploy.sh <server_ip> <ssh_user> <path_to_private_key> [domain_name]

set -e  # Exit on any error

SERVER_IP=$1
SSH_USER=$2
SSH_KEY=$3
DOMAIN_NAME=${4:-$SERVER_IP}
APP_NAME="portfolio-app"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
LOG_FILE="deploy_${TIMESTAMP}.log"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}" | tee -a "$LOG_FILE"
}

error() {
    echo -e "${RED}[ERROR] $1${NC}" | tee -a "$LOG_FILE"
    exit 1
}

warn() {
    echo -e "${YELLOW}[WARNING] $1${NC}" | tee -a "$LOG_FILE"
}

# Validation
if [ -z "$SERVER_IP" ] || [ -z "$SSH_USER" ] || [ -z "$SSH_KEY" ]; then
    error "Usage: $0 <server_ip> <ssh_user> <path_to_private_key> [domain_name]"
fi

if [ ! -f "$SSH_KEY" ]; then
    error "SSH key file not found: $SSH_KEY"
fi

log "Starting deployment to $SERVER_IP"
log "Using SSH key: $SSH_KEY"
log "Domain: $DOMAIN_NAME"

# Build Docker image locally
log "Building Docker image..."
if ! docker build -t "$APP_NAME" .; then
    error "Failed to build Docker image"
fi

# Save Docker image to tar
log "Saving Docker image..."
if ! docker save "$APP_NAME" | gzip > "${APP_NAME}.tar.gz"; then
    error "Failed to save Docker image"
fi

# Test SSH connection
log "Testing SSH connection..."
if ! ssh -i "$SSH_KEY" -o ConnectTimeout=10 "$SSH_USER@$SERVER_IP" "echo 'SSH connection successful'"; then
    error "Failed to connect to server via SSH"
fi

# Copy to server
log "Transferring image to server..."
if ! scp -i "$SSH_KEY" "${APP_NAME}.tar.gz" "$SSH_USER@$SERVER_IP:~"; then
    error "Failed to transfer image to server"
fi

# SSH and deploy
log "Deploying on server..."
ssh -i "$SSH_KEY" "$SSH_USER@$SERVER_IP" << EOF || error "Deployment failed on server"
    set -e
    
    echo "Installing Docker if not present..."
    if ! command -v docker >/dev/null; then
        sudo apt-get update
        sudo apt-get install -y docker.io
        sudo systemctl start docker
        sudo systemctl enable docker
        sudo usermod -aG docker \$USER
        echo "Docker installed. You may need to log out and log back in."
    fi
    
    echo "Loading Docker image..."
    gunzip -c "${APP_NAME}.tar.gz" | sudo docker load
    
    echo "Stopping existing container..."
    sudo docker stop "$APP_NAME" 2>/dev/null || true
    sudo docker rm "$APP_NAME" 2>/dev/null || true
    
    echo "Starting new container..."
    sudo docker run -d --name "$APP_NAME" -p 80:3000 --restart unless-stopped "$APP_NAME"
    
    echo "Cleaning up..."
    rm "${APP_NAME}.tar.gz"
    
    echo "Verifying deployment..."
    sleep 5
    if sudo docker ps | grep -q "$APP_NAME"; then
        echo "✅ Container is running successfully"
        curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 || echo "Warning: HTTP check failed"
    else
        echo "❌ Container failed to start"
        sudo docker logs "$APP_NAME"
        exit 1
    fi
EOF

# Cleanup local files
log "Cleaning up local files..."
rm -f "${APP_NAME}.tar.gz"

log "🚀 Deployment complete!"
log "Your portfolio is now available at:"
log "  http://$DOMAIN_NAME"
log ""
log "To check container status:"
log "  ssh -i $SSH_KEY $SSH_USER@$SERVER_IP 'sudo docker ps'"
log ""
log "To view logs:"
log "  ssh -i $SSH_KEY $SSH_USER@$SERVER_IP 'sudo docker logs $APP_NAME'"
