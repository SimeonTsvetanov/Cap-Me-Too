# 🚀 CapMeToo Deployment Guide

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Local Development](#local-development)
- [GitHub Pages Deployment (gh-pages branch)](#github-pages-deployment-gh-pages-branch)
- [PWA Configuration](#pwa-configuration)
- [Troubleshooting](#troubleshooting)
- [Icon System](#icon-system)

## 🎯 Overview

CapMeToo is a Next.js 14 application designed for static export and deployment on GitHub Pages using the **gh-pages branch method**. This approach uses `git subtree` to deploy the built static files to a separate branch, providing a clean separation between source code and deployment artifacts.

## ✅ Prerequisites

- Node.js 18+
- npm (recommended)
- Git
- GitHub account
- Google Gemini API key

## 🛠️ Local Development

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file:

```env
GOOGLE_GEMINI_API_KEY=your_api_key_here
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

## 🌐 GitHub Pages Deployment (gh-pages branch)

### 🎯 **Simplified Deployment Method**

This project uses a **single-command deployment** that:

1. Builds the Next.js application
2. Creates a `.nojekyll` file for GitHub Pages
3. Commits the build output to git
4. Pushes to `gh-pages` branch using `git subtree`

### 🚀 **Deploy Command**

```bash
npm run deploy
```

This single command does everything:

```json
{
  "deploy": "npm run build && echo. > out/.nojekyll && git add -f out/ && git commit -m \"deploy: static export\" || echo \"No changes to commit\" && git subtree push --prefix out origin gh-pages"
}
```

### 📋 **What This Does:**

1. **`npm run build`** - Builds and exports static files to `out/`
2. **`echo. > out/.nojekyll`** - Creates `.nojekyll` file (Windows compatible)
3. **`git add -f out/`** - Forces add of build output (normally gitignored)
4. **`git commit`** - Commits the build artifacts
5. **`git subtree push`** - Pushes `out/` directory to `gh-pages` branch

### 🔧 **GitHub Pages Settings**

1. Go to repository Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `gh-pages`
4. Folder: `/ (root)`

## 📱 PWA Configuration

### Complete PWA Features

- ✅ **Manifest**: Complete with 18 different icon sizes
- ✅ **Service Worker**: Caching strategies and offline support
- ✅ **Icons**: Comprehensive icon set for all platforms
- ✅ **Install Prompt**: Automatic PWA installability
- ✅ **Offline Support**: Cached assets and API responses

### PWA Manifest Features

- **Display**: Standalone (full-screen app experience)
- **Theme Color**: #6366f1 (brand purple)
- **Background Color**: #ffffff (white)
- **Orientation**: Portrait-primary
- **Scope**: /Cap-Me-Too/
- **Shortcuts**: Quick actions for caption generation
- **Screenshots**: App store previews
- **Protocol Handlers**: Custom URL scheme support

## 🎨 Icon System

### Complete Icon Set (18 Icons)

All icons are located in the `/public/` directory and automatically deployed:

#### Browser Icons

- `favicon.ico` (32x32) - Universal browser compatibility
- `favicon-16x16.png` (16x16) - Classic browser tabs
- `favicon-32x32.png` (32x32) - High-res browser tabs
- `favicon-48x48.png` (48x48) - Windows desktop shortcuts

#### Mobile Icons

- `apple-touch-icon-152x152.png` (152x152) - iOS Safari bookmarks
- `apple-touch-icon.png` (180x180) - iOS home screen
- `android-chrome-192x192.png` (192x192) - Android home screen
- `android-chrome-512x512.png` (512x512) - Android PWA

#### PWA Icons

- `icon-72x72.png` (72x72) - Legacy Android
- `icon-96x96.png` (96x96) - Legacy Android
- `icon-128x128.png` (128x128) - Legacy Android
- `icon-256x256.png` (256x256) - High-res displays
- `icon-384x384.png` (384x384) - Ultra high-res
- `icon-1024x1024.png` (1024x1024) - Future-proofing

#### Specialized Icons

- `maskable-icon-192x192.png` (192x192) - Android adaptive icons
- `maskable-icon-512x512.png` (512x512) - Android adaptive high-res
- `monochrome-icon-192x192.png` (192x192) - System badges
- `monochrome-icon-512x512.png` (512x512) - System badges high-res

## ⚙️ Technical Configuration

### Next.js Configuration

The project uses static export with proper basePath for GitHub Pages:

```javascript
const nextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  basePath: "/Cap-Me-Too",
  assetPrefix: "/Cap-Me-Too/",
  images: {
    unoptimized: true,
  },
  // ... other optimizations
};
```

### Key Benefits of This Approach

✅ **Simple**: Single command deployment
✅ **Clean**: Source code and build artifacts separated
✅ **Fast**: Direct git subtree push
✅ **Reliable**: No complex CI/CD dependencies
✅ **Standard**: Uses established git subtree method

## 🛠️ Troubleshooting

### Common Issues

**Issue**: `touch` command not recognized on Windows
**Solution**: We use `echo. > out/.nojekyll` for Windows compatibility

**Issue**: Git subtree push fails
**Solution**: Ensure you have push access to the repository

**Issue**: PWA assets not loading
**Solution**: All paths use `/Cap-Me-Too/` basePath - verify this matches your repository name

**Issue**: Build fails
**Solution**: Run `npm run build` separately to debug build issues

### Build Verification

After deployment, verify:

1. Visit: `https://YOUR-USERNAME.github.io/Cap-Me-Too/`
2. Check PWA installability
3. Verify all icons load correctly
4. Test offline functionality

## 🎯 Why This Method?

This deployment method was chosen because:

1. **Proven**: Git subtree is a standard method for GitHub Pages
2. **Simple**: No complex CI/CD setup required
3. **Fast**: Direct deployment without external services
4. **Reliable**: Works consistently across different environments
5. **Clean**: Keeps source code and build artifacts completely separate

## 🚀 Quick Deploy Checklist

- [ ] `npm run build` - Verify build works locally
- [ ] `npm run deploy` - Deploy to GitHub Pages
- [ ] Check GitHub Pages settings (gh-pages branch)
- [ ] Visit your site: `https://USERNAME.github.io/Cap-Me-Too/`
- [ ] Test PWA installation
- [ ] Verify all features work

---

_This approach has been tested and works reliably for Next.js PWA deployment to GitHub Pages._
