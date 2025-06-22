#!/bin/bash

# Node.js deployment script (without Docker)
# Usage: ./deploy-nodejs.sh <server_ip> <ssh_user> <path_to_private_key>

SERVER_IP=$1
SSH_USER=$2
SSH_KEY=$3
APP_DIR="/var/www/portfolio"

if [ -z "$SERVER_IP" ] || [ -z "$SSH_USER" ] || [ -z "$SSH_KEY" ]; then
  echo "Usage: $0 <server_ip> <ssh_user> <path_to_private_key>"
  exit 1
fi

echo "Building application locally..."
npm run build

echo "Creating deployment package..."
tar -czf portfolio-build.tar.gz .next package.json package-lock.json public src

echo "Transferring files to server..."
scp -i "$SSH_KEY" portfolio-build.tar.gz "$SSH_USER@$SERVER_IP:~"

echo "Deploying on server..."
ssh -i "$SSH_KEY" "$SSH_USER@$SERVER_IP" << EOF
  # Install Node.js if not present
  if ! command -v node >/dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
  fi

  # Install PM2 for process management
  if ! command -v pm2 >/dev/null; then
    sudo npm install -g pm2
  fi

  # Create app directory
  sudo mkdir -p "$APP_DIR"
  sudo chown $USER "$APP_DIR"
  cd "$APP_DIR"

  # Extract and install
  tar -xzf ~/portfolio-build.tar.gz
  npm ci --production

  # Stop existing process and start new one
  pm2 stop portfolio || true
  pm2 delete portfolio || true
  pm2 start npm --name "portfolio" -- start
  pm2 save
  pm2 startup

  # Clean up
  rm ~/portfolio-build.tar.gz

  echo "Deployment complete! App running on http://localhost:3000"
EOF

# Clean up local files
rm portfolio-build.tar.gz

echo "Deployment finished. Your portfolio is now running on the server."
