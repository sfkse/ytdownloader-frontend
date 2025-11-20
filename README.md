# YouTube Downloader - Frontend

Modern Next.js frontend for downloading YouTube videos. Built with React, TypeScript, and Mantine UI components.

## 🚀 Features

- Clean, modern UI built with Mantine
- Real-time download status updates
- Automatic file download to user's Downloads folder
- Responsive design
- Error handling and user feedback

## 📋 Prerequisites

- Node.js 18+ 
- Yarn 4+ (or npm)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/sfkse/ytdownloader-frontend.git
cd ytdownloader-frontend
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Configure API URL in `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://api.ytdownload.help
```

For local development:
```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8080
```

## 🏃 Running the Application

### Development Mode

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build the application
yarn build

# Start production server
yarn start
```

## ⚙️ Configuration

### Environment Variables

Create `.env.local` (for local development) or `.env.production` (for production):

```env
NEXT_PUBLIC_API_URL=https://api.ytdownload.help
```

- `NEXT_PUBLIC_API_URL` - Backend API URL (required)

## 🏗️ Project Structure

```
ytdownloader-frontend/
├── app/
│   ├── api/
│   │   └── download/
│   │       └── route.ts    # Next.js API route (proxies to backend)
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component
├── public/                  # Static assets
├── theme.ts                 # Mantine theme configuration
├── next.config.mjs          # Next.js configuration
├── package.json             # Dependencies
└── tsconfig.json            # TypeScript configuration
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Set environment variable:
   - `NEXT_PUBLIC_API_URL=https://api.ytdownload.help`
4. Deploy

### Self-Hosted

1. Build the application:
```bash
yarn build
```

2. Start the production server:
```bash
yarn start
```

3. Configure Nginx reverse proxy (see deployment docs)

### Environment Setup

Make sure to set `NEXT_PUBLIC_API_URL` in your deployment platform:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables
- Self-hosted: `.env.production` file

## 🔧 Development

### Tech Stack

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Mantine** - UI component library
- **Yarn** - Package manager

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## 📝 License

[Add your license here]

## 🤝 Contributing

[Add contribution guidelines here]

## 📧 Support

For issues and questions, please open an issue on GitHub.
