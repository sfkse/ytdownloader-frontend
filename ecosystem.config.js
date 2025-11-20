module.exports = {
  apps: [
    {
      name: "ytdownloader-frontend",
      script: "node_modules/.bin/next",
      args: "start -p 3001",
      cwd: "/path/to/ytdownloader/_frontend", // Update this path
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3001,
        NEXT_PUBLIC_API_URL: "https://api.ytdownload.help",
      },
      error_file: "./logs/pm2-error.log",
      out_file: "./logs/pm2-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
    },
  ],
};

