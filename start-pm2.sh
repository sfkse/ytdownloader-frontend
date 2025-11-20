#!/bin/bash

# PM2 startup script for Next.js frontend

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    yarn install
fi

# Build the application if .next doesn't exist
if [ ! -d ".next" ]; then
    echo "Building application..."
    yarn build
fi

# Create logs directory
mkdir -p logs

# Update ecosystem.config.js with current path
sed -i "s|/path/to/ytdownloader/_frontend|$SCRIPT_DIR|g" ecosystem.config.js 2>/dev/null || \
sed -i '' "s|/path/to/ytdownloader/_frontend|$SCRIPT_DIR|g" ecosystem.config.js 2>/dev/null || true

# Start with PM2
echo "Starting Next.js with PM2..."
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

echo "Frontend started! Check status with: pm2 status"
echo "View logs with: pm2 logs ytdownloader-frontend"

