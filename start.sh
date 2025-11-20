#!/bin/bash
# Simple start script for local development

cd "$(dirname "$0")"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "❌ Dependencies not installed. Run ./install.sh first"
    exit 1
fi

# Check for package manager
if command -v yarn &> /dev/null; then
    PACKAGE_MANAGER="yarn"
elif command -v npm &> /dev/null; then
    PACKAGE_MANAGER="npm"
else
    echo "❌ Neither yarn nor npm found"
    exit 1
fi

# Start server
echo "🚀 Starting YouTube Downloader Frontend..."
echo "📍 Frontend will be available at: http://localhost:3001"
echo "🔗 Make sure backend is running at: http://localhost:8080"
echo "🛑 Press Ctrl+C to stop"
echo ""

if [ "$PACKAGE_MANAGER" = "yarn" ]; then
    yarn dev
else
    npm run dev
fi

