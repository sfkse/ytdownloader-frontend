#!/bin/bash
# YouTube Downloader Frontend - Quick Install Script

set -e

echo "🎬 YouTube Downloader Frontend - Installation"
echo "============================================="
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is required but not installed."
    echo "   Please install Node.js 18+ and try again."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js found: $(node --version)"

# Check yarn or npm
if command -v yarn &> /dev/null; then
    PACKAGE_MANAGER="yarn"
    echo "✓ Yarn found: $(yarn --version)"
elif command -v npm &> /dev/null; then
    PACKAGE_MANAGER="npm"
    echo "✓ npm found: $(npm --version)"
else
    echo "❌ Neither yarn nor npm found. Please install one:"
    echo "   npm: Comes with Node.js"
    echo "   yarn: npm install -g yarn"
    exit 1
fi

# Install dependencies
echo "📥 Installing dependencies..."
if [ "$PACKAGE_MANAGER" = "yarn" ]; then
    yarn install
else
    npm install
fi

# Create .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo "📝 Creating .env.local file..."
    cp .env.example .env.local 2>/dev/null || echo "NEXT_PUBLIC_API_URL=http://127.0.0.1:8080" > .env.local
    echo "✓ Created .env.local (configure if needed)"
fi

echo ""
echo "✅ Installation complete!"
echo ""
echo "🚀 To start the development server, run:"
echo "   ./start.sh"
echo ""
echo "   Or manually:"
if [ "$PACKAGE_MANAGER" = "yarn" ]; then
    echo "   yarn dev"
else
    echo "   npm run dev"
fi
echo ""

