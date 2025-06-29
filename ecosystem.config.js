module.exports = {
  apps: [
    {
      name: 'portfolio',
      script: 'npm',
      args: 'start',
      cwd: '/home/secureadmin', // Explicitly set the working directory
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      }
    }
  ]
};
