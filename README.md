# Echo Home - Fleet Management System

## 🚀 Vercel Deployment Guide

### Prerequisites
- Node.js 18+ installed
- npm 8+ installed
- A Vercel account

### Local Development
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:8080](http://localhost:8080) in your browser

### Building for Production
```bash
npm run build:vercel
```

### Deploying to Vercel
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Configure the build settings:
   - Build Command: `npm run build:vercel`
   - Output Directory: `dist/spa`
   - Install Command: `npm install`
4. Click "Deploy"

## 🛠️ Troubleshooting
If you encounter any issues during deployment, check the following:
1. Make sure all dependencies are installed
2. Verify that the build command is correct
3. Check the Vercel logs for any errors
4. Make sure the output directory is set correctly

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details. 