# 🔧 Troubleshooting Guide

Quick solutions for common CapMeToo deployment issues.

## 🚨 Critical Issues

### Build Fails - "Cannot read properties of undefined (reading 'length')"

**Immediate Fix:**

```bash
# Clear all caches
Remove-Item -Recurse -Force .next, out, node_modules\.cache -ErrorAction SilentlyContinue

# Reinstall dependencies
pnpm install

# Try build again
GITHUB_PAGES=true pnpm run build
```

**Root Cause:** Webpack cache corruption or Node.js version mismatch

### "out" Directory Not Created

**Immediate Fix:**

```bash
# Check if middleware is disabled
ls middleware.ts.disabled

# If middleware.ts exists, rename it
mv middleware.ts middleware.ts.disabled

# Try build again
GITHUB_PAGES=true pnpm run build
```

**Root Cause:** Middleware or server-side features preventing static export

### GitHub Actions Build Fails

**Check These First:**

1. **Node.js Version**: Ensure workflow uses Node.js 18+
2. **Environment Variable**: Verify `GITHUB_PAGES=true` is set
3. **Artifact Path**: Confirm path is `./out`
4. **Permissions**: Check repository has proper GitHub Actions permissions

**Workflow Debug:**

```yaml
# Add this step to debug
- name: Debug Build
  run: |
    echo "Node version: $(node --version)"
    echo "GITHUB_PAGES: $GITHUB_PAGES"
    echo "Current directory: $(pwd)"
    ls -la
```

## ⚠️ Common Warnings

### Metadata Warnings

**Warning:** `metadataBase property in metadata export is not set`

**Fix:** Add metadataBase to `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://yourusername.github.io"),
  // ... rest of metadata
};
```

### Viewport Warnings

**Warning:** `Unsupported metadata viewport is configured`

**Fix:** Move viewport config to separate export:

```tsx
// In app/layout.tsx
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#6366f1",
};
```

## 🔍 Debugging Steps

### 1. Local Build Test

```bash
# Test build locally first
GITHUB_PAGES=true pnpm run build

# Check output
ls out/
cat out/index.html | head -20
```

### 2. Check Dependencies

```bash
# Verify all dependencies are installed
pnpm list --depth=0

# Check for version conflicts
pnpm audit
```

### 3. Verify Configuration

```bash
# Check Next.js config
cat next.config.mjs

# Verify package.json scripts
cat package.json | grep -A 5 '"scripts"'
```

### 4. Environment Variables

```bash
# Test environment variable
echo $GITHUB_PAGES

# Set and test
$env:GITHUB_PAGES="true"; echo $env:GITHUB_PAGES
```

## 🌐 Deployment Issues

### Site Not Accessible

**Check:**

1. **GitHub Pages Settings**: Source set to "GitHub Actions"
2. **Repository Visibility**: Public or GitHub Pro required
3. **Branch**: Deployment from correct branch (usually `main`)
4. **Actions**: Build completed successfully

**URL Format:**

```
https://yourusername.github.io/Cap-Me-Too/
```

### Assets Not Loading (404 Errors)

**Common Causes:**

1. **Wrong basePath**: Must match repository name exactly
2. **Missing trailing slash**: Ensure `trailingSlash: true`
3. **Incorrect assetPrefix**: Should be `/repository-name/`
4. **Assets not in `/Cap-Me-Too/` subfolder**: All icons and static assets must be in `/Cap-Me-Too/` for GitHub Pages to serve them correctly.

**Fix:**

```javascript
// next.config.mjs
const nextConfig = {
  basePath: "/Cap-Me-Too", // Must match repository name
  assetPrefix: "/Cap-Me-Too/", // Must end with slash
  trailingSlash: true, // Required for GitHub Pages
};
```

**Note:**

- All icon files (favicon.ico, icon.svg, PWA icons) must be in the `/Cap-Me-Too/` subfolder, not the root or public/ for deployment.
- Example: `https://username.github.io/Cap-Me-Too/favicon.ico` is served from `out/Cap-Me-Too/favicon.ico`.

### API Calls Failing

**Check:**

1. **CORS**: API calls are client-side, no CORS issues
2. **API Key**: Stored in localStorage, not environment variables
3. **Network**: Check browser console for network errors

**Debug:**

```javascript
// Add to your API call
console.log("API Key:", apiKey);
console.log("Request URL:", url);
```

## 🔒 Security Issues

### Security Headers Not Working

**Cause:** Middleware disabled for static export

**Solution:** Headers are now in meta tags in `app/layout.tsx`:

```tsx
{/* Security Headers for Static Export */}
<meta httpEquiv="X-Frame-Options" content="DENY" />
<meta httpEquiv="X-Content-Type-Options" content="nosniff" />
<meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
<meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
```

### Content Security Policy Issues

**If CSP blocks resources:**

```tsx
// Update CSP in app/layout.tsx
<meta
  httpEquiv="Content-Security-Policy"
  content="
  default-src 'self'; 
  script-src 'self' 'unsafe-eval' 'unsafe-inline'; 
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
  font-src 'self' https://fonts.gstatic.com; 
  img-src 'self' data: blob:; 
  connect-src 'self' https://generativelanguage.googleapis.com;
"
/>
```

## 📱 PWA Issues

### Service Worker Not Working

**Check:**

1. **HTTPS**: GitHub Pages provides HTTPS automatically
2. **Manifest**: Verify `manifest.json` exists in `out/`
3. **Service Worker**: Check `sw.js` is generated

**Debug:**

```javascript
// Check service worker registration
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => console.log("SW registered"))
    .catch((error) => console.log("SW registration failed:", error));
}
```

### App Installation Not Working

**Check:**

1. **Manifest**: Valid `manifest.json` with required fields
2. **Icons**: All icon sizes present and accessible
3. **HTTPS**: Site served over HTTPS
4. **User Agent**: Test on mobile device or Chrome DevTools

## 🔄 Performance Issues

### Slow Build Times

**Optimizations:**

```bash
# Use pnpm for faster installs
pnpm install --frozen-lockfile

# Clear cache if needed
Remove-Item -Recurse -Force .next, node_modules\.cache -ErrorAction SilentlyContinue
```

### Large Bundle Size

**Check:**

1. **Bundle Analyzer**: Run `pnpm run analyze` (if configured)
2. **Dependencies**: Remove unused dependencies
3. **Code Splitting**: Ensure proper dynamic imports

### Slow Page Load

**Optimizations:**

1. **Images**: Use appropriate formats and sizes
2. **Fonts**: Optimize font loading
3. **Caching**: Leverage browser caching
4. **CDN**: GitHub Pages provides global CDN

## 🆘 Emergency Procedures

### Rollback Deployment

**Quick Rollback:**

```bash
# Revert to previous commit
git revert HEAD

# Push to trigger new deployment
git push origin main
```

### Disable GitHub Actions

**Temporary Disable:**

1. Go to repository Settings
2. Navigate to Actions → General
3. Select "Disable actions for this repository"
4. Re-enable when ready

### Manual Deployment

**If Actions fail:**

```bash
# Build locally
GITHUB_PAGES=true pnpm run build

# Upload out/ directory manually to GitHub Pages
# (Use GitHub's manual upload feature)
```

## 📞 Getting Help

### Before Asking for Help

1. **Check Logs**: Review GitHub Actions logs completely
2. **Reproduce Locally**: Try to reproduce the issue locally
3. **Search Issues**: Check existing GitHub Issues
4. **Document**: Prepare detailed error information

### Information to Include

When reporting issues, include:

- **Error Message**: Exact error text
- **Environment**: Node.js version, OS, browser
- **Steps**: Exact steps to reproduce
- **Logs**: Relevant console/terminal output
- **Configuration**: Relevant config files

### Support Channels

1. **GitHub Issues**: Create detailed issue
2. **Documentation**: Review this guide and DEPLOYMENT.md
3. **Community**: Check Discussions tab
4. **Next.js**: Consult Next.js documentation

---

**Remember:** Most issues can be resolved by clearing cache and rebuilding! 🔧
