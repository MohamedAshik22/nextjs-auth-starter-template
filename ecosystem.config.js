module.exports = {
    apps: [
      {
        name: 'nextjs-app',
        script: 'npm',
        args: 'start',
        cwd: './', // optional: path to your project folder
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  