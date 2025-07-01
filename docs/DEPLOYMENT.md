# 🚀 CapMeToo Deployment Guide

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Local Development](#local-development)
- [GitHub Pages Deployment](#github-pages-deployment)
- [PWA Configuration](#pwa-configuration)
- [Troubleshooting](#troubleshooting)
- [Icon System](#icon-system)

## 🎯 Overview

CapMeToo is a Next.js 14 application designed for static export and deployment on GitHub Pages. This guide covers the complete deployment process, including PWA configuration and icon system management.

## ✅ Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- Git
- GitHub account
- Google Gemini API key

## 🛠️ Local Development

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file:

```env
GOOGLE_GEMINI_API_KEY=your_api_key_here
```

### 3. Run Development Server

```bash
pnpm dev
```

### 4. Build for Production

```bash
# Standard build
npm run build

# Build with GitHub Pages configuration
$env:GITHUB_PAGES="true"; npm run build
```

## 🌐 GitHub Pages Deployment

### 1. Repository Setup

- Repository must be public
- Repository name: `Cap-Me-Too`
- Branch: `main`

### 2. GitHub Actions Workflow

The deployment is automated via `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: "npm"
      - run: npm ci
      - run: npm run build
        env:
          GITHUB_PAGES: true
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 3. GitHub Pages Settings

1. Go to repository Settings → Pages
2. Source: "GitHub Actions"
3. Branch: `main`

## 📱 PWA Configuration

### Complete PWA Features

- ✅ **Manifest**: Complete with all icon sizes and purposes
- ✅ **Service Worker**: Caching strategies and offline support
- ✅ **Icons**: 18 different sizes for all platforms
- ✅ **Install Prompt**: Automatic PWA installability
- ✅ **Offline Support**: Cached assets and API responses
- ✅ **Background Sync**: Pending requests when back online

### PWA Manifest Features

- **Display**: Standalone (full-screen app experience)
- **Theme Color**: #6366f1 (brand purple)
- **Background Color**: #ffffff (white)
- **Orientation**: Portrait-primary
- **Scope**: /Cap-Me-Too/
- **Shortcuts**: Quick actions for caption generation
- **Screenshots**: App store previews
- **Protocol Handlers**: Custom URL scheme support

### Service Worker Features

- **Cache Strategies**:
  - Static assets: Cache First
  - API requests: Network First
  - Other requests: Stale While Revalidate
- **Background Sync**: Offline caption generation
- **Push Notifications**: New caption alerts
- **Cache Management**: Automatic cleanup of old caches

## 🎨 Icon System

### Complete Icon Set (18 Icons)

The application includes a comprehensive icon set generated from the main `/public/icon.svg`:

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

### Icon Generation

Use the provided script to regenerate all icons:

```bash
# On Linux/macOS
bash scripts/generate-icons.sh

# On Windows (PowerShell)
# Run individual sharp commands as needed
sharp -i public/icon.svg -o public/favicon-16x16.png resize 16 16
```

### Icon Purposes

- **any**: General use across all platforms
- **maskable**: Android adaptive icons (safe zone)
- **monochrome**: System integration and badges

## 🔍 Troubleshooting

### Icon System Issues (RESOLVED - January 2025)

**Problem**: During deployment fixes, duplicate incorrect icons were created in wrong locations, breaking the existing icon workflow and causing favicon display issues.

**Symptoms**:

- Wrong favicon showing (simple icon instead of brand icon)
- Icons in root directory conflicting with `/public/` icons
- Manifest.json pointing to non-existent icon files

**Solution Applied**:

- ✅ Removed duplicate icons from root directory
- ✅ Generated proper PWA icons from `/public/icon.svg` using sharp-cli:
  - `favicon.ico` (32x32) - Browser favicon
  - `apple-touch-icon.png` (180x180) - iOS home screen icon
  - `icon-192.png` (192x192) - PWA icon
  - `icon-512.png` (512x512) - PWA icon (high-res)
- ✅ Updated manifest.json with complete icon set (18 icons)
- ✅ Updated layout.tsx with all icon references
- ✅ Updated service worker with correct icon paths
- ✅ Added legacy compatibility links

### Common Issues and Solutions

#### 1. Build Fails - "Cannot read properties of undefined (reading 'length')"

**Cause**: Webpack/Next.js build environment issue with WasmHash
**Solution**:

- Try building without environment variables first: `npm run build`
- If successful, the issue is with the `GITHUB_PAGES=true` environment variable
- The build will still work correctly for GitHub Pages deployment

#### 2. PWA Not Installing

**Check**:

- Manifest.json is accessible at `/Cap-Me-Too/manifest.json`
- Service worker is registered at `/Cap-Me-Too/sw.js`
- All icon files exist and are properly referenced
- HTTPS is enabled (required for PWA)

**Solution**:

- Verify all icon files are in `/public/` directory
- Check browser console for 404 errors
- Ensure GitHub Pages is serving from the correct branch

#### 3. Icons Not Displaying

**Check**:

- Icon files exist in `/public/` directory
- Manifest.json has correct paths with `/Cap-Me-Too/` prefix
- Layout.tsx includes all necessary icon links

**Solution**:

- Regenerate icons using the provided script
- Verify all paths in manifest.json and layout.tsx
- Clear browser cache and reload

#### 4. Service Worker Not Registering

**Check**:

- Service worker file exists at `/public/sw.js`
- Registration script in layout.tsx is correct
- No JavaScript errors in console

**Solution**:

- Verify service worker file exists and is valid
- Check for syntax errors in sw.js
- Ensure HTTPS is enabled

### Performance Optimization

#### Build Optimization

- Static export reduces bundle size
- Images are optimized during build
- Service worker caches critical assets
- Lazy loading for non-critical components

#### PWA Performance

- Cache-first strategy for static assets
- Network-first for API requests
- Background sync for offline functionality
- Automatic cache cleanup

## 🔧 Development Workflow

### Making Changes

1. Make code changes
2. Test locally: `pnpm dev`
3. Build locally: `npm run build`
4. Commit and push to main branch
5. GitHub Actions automatically deploys

### Icon Updates

1. Update `/public/icon.svg` (main source)
2. Run icon generation script
3. Test build and deployment
4. Verify all icons display correctly

### PWA Updates

1. Update manifest.json if needed
2. Update service worker for new caching strategies
3. Test PWA functionality locally
4. Deploy and verify installability

## 📚 Additional Resources

- [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [PWA Best Practices](https://web.dev/progressive-web-apps/)
- [GitHub Pages Documentation](https://pages.github.com/)
- [Web App Manifest Specification](https://developer.mozilla.org/en-US/docs/Web/Manifest)

## 🎉 Success Criteria

Your deployment is successful when:

- ✅ Website loads at `https://username.github.io/Cap-Me-Too/`
- ✅ PWA install prompt appears on mobile devices
- ✅ All icons display correctly in browser tabs and home screens
- ✅ Service worker registers without errors
- ✅ Offline functionality works
- ✅ Caption generation works with Gemini API
- ✅ No console errors related to missing assets

---

**Last Updated**: January 2025  
**Version**: 1.1.0  
**Status**: ✅ Production Ready
