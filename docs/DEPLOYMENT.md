# 🚀 GitHub Pages Deployment Guide

This document provides a comprehensive guide for deploying CapMeToo to GitHub Pages using Next.js static export.

## 📋 Prerequisites

- GitHub repository with GitHub Pages enabled
- Node.js 18+ and pnpm installed locally
- GitHub Actions enabled for your repository

## 🔧 Configuration Overview

### Static Export Setup

CapMeToo is configured for static export to work with GitHub Pages:

```javascript
// next.config.mjs
const nextConfig = {
  output: "export", // Enables static export
  basePath: "/Cap-Me-Too", // Repository name for GitHub Pages
  assetPrefix: "/Cap-Me-Too/", // Asset prefix for GitHub Pages
  trailingSlash: true, // Required for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  // ... other config
};
```

### Environment Variables

The build process uses the `GITHUB_PAGES` environment variable to configure the build for GitHub Pages:

```bash
GITHUB_PAGES=true pnpm run build
```

## 🛠️ Local Development vs Production

### Local Development

```bash
pnpm run dev
# Runs on http://localhost:3000
```

### Production Build (GitHub Pages)

```bash
GITHUB_PAGES=true pnpm run build
# Creates static files in ./out directory
```

## 🚀 Deployment Process

### 1. Automatic Deployment (Recommended)

The GitHub Actions workflow automatically deploys on every push to the `main` branch:

1. **Push to main branch** → Triggers deployment
2. **Build process**:
   - Installs dependencies with pnpm
   - Builds with `GITHUB_PAGES=true`
   - Verifies `out` directory exists
   - Uploads artifacts to GitHub Pages
3. **Deployment** → Site goes live at `https://yourusername.github.io/Cap-Me-Too/`

### 2. Manual Deployment

If you need to deploy manually:

```bash
# 1. Build for GitHub Pages
GITHUB_PAGES=true pnpm run build

# 2. Verify build output
ls out/

# 3. Push to main branch to trigger deployment
git add .
git commit -m "Manual deployment"
git push origin main
```

## 🔍 Troubleshooting

### Common Issues and Solutions

#### 1. Build Fails - "Cannot read properties of undefined (reading 'length')"

**Cause**: Webpack cache corruption or Node.js version issues

**Solution**:

```bash
# Clear all caches
Remove-Item -Recurse -Force .next, out, node_modules\.cache -ErrorAction SilentlyContinue

# Reinstall dependencies
pnpm install

# Try build again
GITHUB_PAGES=true pnpm run build
```

#### 2. "out" Directory Not Created

**Cause**: Middleware or server-side features preventing static export

**Solution**:

- Ensure `middleware.ts` is renamed to `middleware.ts.disabled`
- Check for any server-side code (`use server`, API routes, etc.)
- Verify `next.config.mjs` has `output: "export"`

#### 3. Assets Not Loading (404 Errors)

**Cause**: Incorrect basePath or assetPrefix configuration

**Solution**:

- Verify `basePath` and `assetPrefix` match your repository name
- Ensure `trailingSlash: true` is set
- Check that all internal links use relative paths

#### 4. GitHub Actions Build Fails

**Cause**: Various CI/CD issues

**Solutions**:

```yaml
# Check the workflow file for:
- Correct Node.js version (18+)
- Proper pnpm setup
- Environment variable `GITHUB_PAGES=true`
- Correct artifact path (`./out`)
```

#### 5. Security Headers Not Working

**Cause**: Middleware disabled for static export

**Solution**: Security headers are now implemented in `app/layout.tsx` using meta tags:

```tsx
{/* Security Headers for Static Export */}
<meta httpEquiv="X-Frame-Options" content="DENY" />
<meta httpEquiv="X-Content-Type-Options" content="nosniff" />
<meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
<meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
```

## 📁 File Structure After Build

```
out/
├── _next/           # Next.js static assets
├── .well-known/     # Security and verification files
├── 404.html         # Custom 404 page
├── index.html       # Main page
├── manifest.json    # PWA manifest
├── sw.js           # Service worker
└── ...             # Other static assets
```

## 🔒 Security Considerations

### Static Export Limitations

Since we're using static export, some server-side features are not available:

- ❌ API Routes (`/api/*`)
- ❌ Middleware (moved to meta tags)
- ❌ Server Actions (`use server`)
- ❌ Dynamic routes without `generateStaticParams`
- ❌ Server-side data fetching

### Security Headers

Security headers are implemented via meta tags in `app/layout.tsx`:

- **X-Frame-Options**: Prevents clickjacking
- **X-Content-Type-Options**: Prevents MIME sniffing
- **Referrer-Policy**: Controls referrer information
- **Permissions-Policy**: Restricts browser features
- **Content-Security-Policy**: Controls resource loading

## 🌐 Domain Configuration

### Custom Domain (Optional)

To use a custom domain:

1. Add `CNAME` file to your repository root:

   ```
   yourdomain.com
   ```

2. Configure DNS:

   - Add CNAME record: `yourdomain.com` → `yourusername.github.io`
   - Or A records pointing to GitHub Pages IPs

3. Enable custom domain in GitHub repository settings

### Repository Settings

Ensure these are configured in your GitHub repository:

1. **Settings** → **Pages**

   - Source: "GitHub Actions"
   - Branch: `main` (or your default branch)

2. **Settings** → **Actions** → **General**
   - Actions permissions: "Allow all actions and reusable workflows"

## 📊 Monitoring and Maintenance

### Build Verification

After each deployment, verify:

1. **Build Success**: Check GitHub Actions logs
2. **Site Accessibility**: Visit your GitHub Pages URL
3. **Functionality**: Test core features (image upload, caption generation)
4. **Assets Loading**: Check browser console for 404 errors

### Performance Monitoring

Monitor these metrics:

- **Build Time**: Should be under 5 minutes
- **Bundle Size**: Main bundle under 200KB
- **Load Time**: First contentful paint under 3 seconds
- **Core Web Vitals**: Good scores in Lighthouse

## 🔄 Migration from Server Deployment

If migrating from a server deployment (Vercel, Netlify, etc.):

1. **Disable Middleware**: Rename `middleware.ts` to `middleware.ts.disabled`
2. **Update Security**: Move headers to meta tags in layout
3. **Verify API Calls**: Ensure all API calls are client-side
4. **Test Build**: Run `GITHUB_PAGES=true pnpm run build`
5. **Deploy**: Push to main branch

## 📝 Best Practices

### Development Workflow

1. **Local Testing**: Always test with `GITHUB_PAGES=true` locally
2. **Incremental Changes**: Make small, testable changes
3. **Branch Protection**: Use feature branches for major changes
4. **Rollback Plan**: Keep previous working commits accessible

### Performance Optimization

1. **Image Optimization**: Use Next.js Image component with `unoptimized: true`
2. **Bundle Splitting**: Monitor bundle sizes
3. **Caching**: Leverage browser caching for static assets
4. **CDN**: GitHub Pages provides global CDN automatically

### Security Best Practices

1. **API Keys**: Never commit API keys to repository
2. **Environment Variables**: Use GitHub Secrets for sensitive data
3. **Content Security Policy**: Regularly review and update CSP
4. **Dependencies**: Keep dependencies updated and audit regularly

## 🆘 Getting Help

If you encounter issues:

1. **Check Logs**: Review GitHub Actions build logs
2. **Local Reproduction**: Try to reproduce locally
3. **Documentation**: Review this guide and Next.js docs
4. **Community**: Check GitHub Issues and Discussions
5. **Support**: Create an issue with detailed error information

## 📚 Additional Resources

- [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Next.js App Router](https://nextjs.org/docs/app)

---

**Last Updated**: January 2025  
**Next.js Version**: 14.2.16  
**Deployment Method**: Static Export to GitHub Pages
