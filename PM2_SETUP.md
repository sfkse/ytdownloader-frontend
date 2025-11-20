# PM2 Setup for Frontend

## Problem
PM2 cannot directly run `yarn` because it's a shell script. PM2 needs to run Node.js processes.

## Solution
Use the provided `ecosystem.config.js` configuration file.

## Setup Steps

### 1. Update the path in ecosystem.config.js
Edit `ecosystem.config.js` and update the `cwd` path to your actual frontend directory path.

### 2. Build the application first
```bash
cd _frontend
yarn build
```

### 3. Start with PM2
```bash
# Option A: Use the startup script (recommended)
chmod +x start-pm2.sh
./start-pm2.sh

# Option B: Start directly with PM2
pm2 start ecosystem.config.js
```

### 4. Save PM2 configuration
```bash
pm2 save
pm2 startup  # Follow instructions to enable auto-start on reboot
```

## Alternative: Direct Node.js Command

If you prefer not to use ecosystem.config.js:

```bash
cd _frontend
pm2 start node_modules/.bin/next --name "ytdownloader-frontend" -- start -p 3001
pm2 save
```

## Environment Variables

Make sure to set environment variables. You can:
1. Add them to `ecosystem.config.js` in the `env` section
2. Or create a `.env.production` file in the frontend directory

## Useful PM2 Commands

```bash
# Check status
pm2 status

# View logs
pm2 logs ytdownloader-frontend

# Restart
pm2 restart ytdownloader-frontend

# Stop
pm2 stop ytdownloader-frontend

# Delete
pm2 delete ytdownloader-frontend

# Monitor
pm2 monit
```

## Troubleshooting

If you still get errors:
1. Make sure you've built the app: `yarn build`
2. Check that `node_modules/.bin/next` exists
3. Verify the path in `ecosystem.config.js` is correct
4. Check logs: `pm2 logs ytdownloader-frontend --lines 100`

