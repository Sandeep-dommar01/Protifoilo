# Deploy Portfolio to Ubuntu Server

## Prerequisites on Ubuntu Server

1. **Install Docker**:
```bash
sudo apt update
sudo apt install -y docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
```

2. **Install Nginx (optional, for reverse proxy)**:
```bash
sudo apt install -y nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

## Local Development

1. **Start dev server**:
```bash
npm run dev
```

2. **Build production**:
```bash
npm run build
```

3. **Test Docker locally**:
```bash
docker build -t portfolio-app .
docker run -p 3000:3000 portfolio-app
```

## Deployment Options

### Option 1: Automated Deployment Script

Run the deployment script:
```bash
chmod +x scripts/deploy.sh
./scripts/deploy.sh YOUR_SERVER_IP SSH_USERNAME /path/to/private/key
```

### Option 2: Manual Deployment

1. **Build and save Docker image**:
```bash
docker build -t portfolio-app .
docker save portfolio-app | gzip > portfolio-app.tar.gz
```

2. **Transfer to server**:
```bash
scp -i YOUR_KEY portfolio-app.tar.gz user@server:/tmp/
```

3. **Deploy on server**:
```bash
ssh -i YOUR_KEY user@server
cd /tmp
gunzip -c portfolio-app.tar.gz | docker load
docker stop portfolio-app || true
docker rm portfolio-app || true
docker run -d --name portfolio-app -p 80:3000 portfolio-app
```

### Option 3: Nginx Reverse Proxy Setup

1. **Create Nginx config** (`/etc/nginx/sites-available/portfolio`):
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

2. **Enable site**:
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## SSL Certificate with Let's Encrypt

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## Troubleshooting

- Check Docker container logs: `docker logs portfolio-app`
- Check Nginx logs: `sudo tail -f /var/log/nginx/error.log`
- Verify port 3000 is accessible: `curl localhost:3000`
- Check firewall: `sudo ufw status`
