module.exports = {
  apps: [
    {
      name: 'portfolio',
      cwd: '/var/www/portfolio',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      }
    }
  ]
};
