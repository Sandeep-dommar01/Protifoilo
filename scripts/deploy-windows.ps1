# PowerShell deployment script for Windows
# Usage: .\deploy-windows.ps1 -ServerIP "YOUR_IP" -SSHUser "YOUR_USER" -SSHKey "path\to\key.pem"

param(
    [Parameter(Mandatory=$true)]
    [string]$ServerIP,
    
    [Parameter(Mandatory=$true)]
    [string]$SSHUser,
    
    [Parameter(Mandatory=$true)]
    [string]$SSHKey,
    
    [Parameter(Mandatory=$false)]
    [int]$SSHPort = 22
)

Write-Host "Starting deployment to $ServerIP..." -ForegroundColor Green

# Check if scp/ssh are available
if (!(Get-Command ssh -ErrorAction SilentlyContinue)) {
    Write-Host "Error: SSH client not found. Please install OpenSSH client." -ForegroundColor Red
    Write-Host "Run: Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0" -ForegroundColor Yellow
    exit 1
}

# Create deployment package using PowerShell compression
Write-Host "Creating deployment package..." -ForegroundColor Yellow
$deployFiles = @('.next', 'package.json', 'package-lock.json', 'public', 'src')
Compress-Archive -Path $deployFiles -DestinationPath "portfolio-build.zip" -Force

# Transfer files
Write-Host "Transferring files to server..." -ForegroundColor Yellow
scp -i $SSHKey -P $SSHPort "portfolio-build.zip" "${SSHUser}@${ServerIP}:~/"

if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Failed to transfer files" -ForegroundColor Red
    exit 1
}

# Deploy on server
Write-Host "Deploying on server..." -ForegroundColor Yellow
$deployScript = @'
#!/bin/bash
set -e

echo "Installing Node.js if not present..."
if ! command -v node >/dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

echo "Installing PM2 for process management..."
if ! command -v pm2 >/dev/null; then
    sudo npm install -g pm2
fi

echo "Installing unzip if not present..."
if ! command -v unzip >/dev/null; then
    sudo apt-get update
    sudo apt-get install -y unzip
fi

echo "Creating app directory..."
sudo mkdir -p /var/www/portfolio
sudo chown $USER /var/www/portfolio
cd /var/www/portfolio

echo "Extracting application..."
unzip -o ~/portfolio-build.zip

echo "Installing dependencies..."
npm ci --production

echo "Stopping existing process..."
pm2 stop portfolio 2>/dev/null || true
pm2 delete portfolio 2>/dev/null || true

echo "Starting new process..."
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup

echo "Cleaning up..."
rm ~/portfolio-build.zip

echo "✅ Deployment complete! App running on http://localhost:3000"
echo "🌐 External access: http://192.168.1.165:3000"

echo "Checking status..."
pm2 status
'@

# Write script to temporary file and execute
$tempScript = "deploy_temp.sh"
$deployScript | Out-File -FilePath $tempScript -Encoding ASCII
scp -i $SSHKey -P $SSHPort $tempScript "${SSHUser}@${ServerIP}:~/"
ssh -i $SSHKey -p $SSHPort "${SSHUser}@${ServerIP}" "chmod +x ~/$tempScript && ~/$tempScript"
Remove-Item $tempScript -ErrorAction SilentlyContinue

if ($LASTEXITCODE -eq 0) {
    Write-Host "🚀 Deployment successful!" -ForegroundColor Green
    Write-Host "Your portfolio is available at: http://${ServerIP}:3000" -ForegroundColor Cyan
} else {
    Write-Host "❌ Deployment failed" -ForegroundColor Red
}

# Cleanup
Remove-Item "portfolio-build.zip" -ErrorAction SilentlyContinue
Write-Host "Deployment script completed." -ForegroundColor Green
