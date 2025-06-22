#!/bin/bash

# Usage: ./deploy.sh <server_ip> <ssh_user> <path_to_private_key>

SERVER_IP=$1
SSH_USER=$2
SSH_KEY=$3
APP_DIR="/var/www/portfolio-app"

if [ -z "$SERVER_IP" ] || [ -z "$SSH_USER" ] || [ -z "$SSH_KEY" ]; then
  echo "Usage: $0 <server_ip> <ssh_user> <path_to_private_key>"
  exit 1
fi

# Build Docker image locally
docker build -t portfolio-app .

# Save Docker image to tar
docker save portfolio-app | gzip > portfolio-app.tar.gz

# Copy to server
scp -i "$SSH_KEY" portfolio-app.tar.gz "$SSH_USER@$SERVER_IP:~"

# SSH and deploy
ssh -i "$SSH_KEY" "$SSH_USER@$SERVER_IP" << EOF
  # Install Docker if not exists
  if ! command -v docker >/dev/null; then
    sudo apt-get update && sudo apt-get install -y docker.io
  fi
  
  # Create application directory
  sudo mkdir -p "$APP_DIR"
  sudo chown $SSH_USER "$APP_DIR"
  
  # Load image and run
  gunzip -c portfolio-app.tar.gz | docker load
  docker stop portfolio-app || true
  docker rm portfolio-app || true
  docker run -d --name portfolio-app -p 80:3000 portfolio-app

  # Clean up
  rm portfolio-app.tar.gz
EOF

echo "Deployment complete. Visit http://$SERVER_IP to view the app."
