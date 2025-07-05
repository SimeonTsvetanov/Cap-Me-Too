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

CapMeToo is a Next.js 14 application designed for static export and deployment on GitHub Pages using the **gh-pages branch method**. This approach uses the `gh-pages` npm package to deploy the built static files to a separate branch, providing a clean separation between source code and deployment artifacts.

## ✅ Prerequisites

- Node.js 18+
- pnpm (recommended)
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
pnpm build
```

## 🌐 GitHub Pages Deployment (gh-pages branch)

### 🎯 **Simplified Deployment Method**

This project uses a **single-command deployment** that:

1. Builds the Next.js application
2. Exports static files to the `out/` directory
3. Publishes the `out/` directory to the `gh-pages` branch using the `gh-pages` npm package

### 🚀 **Deploy Command**

```bash
pnpm run gh-deploy
```

This single command does everything:

```json
{
  "gh-deploy": "pnpm build && gh-pages -d out --dotfiles"
}
```

### 📋 **What This Does:**

1. **`pnpm build`** - Builds and exports static files to `out/`
2. **`gh-pages -d out --dotfiles`** - Publishes the `out/` directory to the `gh-pages` branch, including dotfiles like `.nojekyll`

### 🔧 **GitHub Pages Settings**

1. Go to repository Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `gh-pages`
4. Folder: `/ (root)`

## 📱 PWA Configuration

### Complete PWA Features

- ✅ **Manifest**: All icon `src` and `start_url` fields are relative (no leading `/`)
- ✅ **Service Worker**: Caches assets using relative paths for GitHub Pages compatibility
- ✅ **Icons**: Comprehensive icon set for all platforms in `/public/`
- ✅ **Install Prompt**: Automatic PWA installability
- ✅ **Offline Support**: Cached assets and API responses

### Manifest and Service Worker Notes

- All asset paths in `manifest.json` and `sw.js` must be **relative** (e.g., `"icon-192.png"`, not `"/icon-192.png"`).
- The `start_url` in `manifest.json` should be `"."`.
- The service worker's `urlsToCache` array should use relative paths.

## 🎨 Icon System

_All icons are located in the `/public/` directory and automatically deployed._

- `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `favicon-48x48.png`
- `apple-touch-icon-152x152.png`, `apple-touch-icon.png`
- `android-chrome-192x192.png`, `android-chrome-512x512.png`
- `icon-72x72.png`, `icon-96x96.png`, `icon-128x128.png`, `icon-256x256.png`, `icon-384x384.png`, `icon-1024x1024.png`
- `maskable-icon-192x192.png`, `maskable-icon-512x512.png`, `monochrome-icon-192x192.png`, `monochrome-icon-512x512.png`

## ⚙️ Technical Configuration

### Next.js Configuration

The project uses static export with proper basePath for GitHub Pages:

```javascript
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  basePath: isProd ? "/Cap-Me-Too" : "",
  assetPrefix: isProd ? "/Cap-Me-Too/" : "",
  images: { unoptimized: true },
};
export default nextConfig;
```

## 🛠️ Troubleshooting

### Common Issues

**Issue**: 404 errors for manifest, icons, or service worker
**Solution**: Ensure all asset paths in `manifest.json`, `sw.js`, and HTML are **relative** (not root-relative). Rebuild and redeploy.

**Issue**: Build fails with WasmHash or Jest worker error
**Solution**: Run:

```bash
rm -rf .next out node_modules pnpm-lock.yaml
pnpm install
```

Then redeploy.

**Issue**: PWA install prompt not showing
**Solution**: Check for manifest or service worker errors in the browser console. Ensure all icons are present and referenced correctly.

### Build Verification

After deployment, verify:

1. Visit: `https://YOUR-USERNAME.github.io/Cap-Me-Too/`
2. Check PWA installability
3. Verify all icons load correctly
4. No 404 errors in the browser console

## 🎯 Why This Method?

This deployment method was chosen because:

1. **Proven**: Git subtree is a standard method for GitHub Pages
2. **Simple**: No complex CI/CD setup required
3. **Fast**: Direct deployment without external services
4. **Reliable**: Works consistently across different environments
5. **Clean**: Keeps source code and build artifacts completely separate

## 🚀 Quick Deploy Checklist

- [ ] `pnpm run gh-deploy` - Deploy to GitHub Pages
- [ ] Check GitHub Pages settings (gh-pages branch)
- [ ] Visit your site: `https://USERNAME.github.io/Cap-Me-Too/`
- [ ] Test PWA installation
- [ ] Verify all features work

---

_This approach has been tested and works reliably for Next.js PWA deployment to GitHub Pages._
