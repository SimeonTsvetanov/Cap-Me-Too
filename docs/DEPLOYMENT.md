# Deployment Guide

## 🚀 GitHub Pages (Recommended)

CapMeToo is pre-configured for automatic GitHub Pages deployment with zero configuration needed.

### Quick Setup

1. **Fork or Clone Repository**
   \`\`\`bash
   git clone https://github.com/your-username/capmetoo.git
   cd capmetoo
   \`\`\`

2. **Push to GitHub**
   \`\`\`bash
   git remote set-url origin https://github.com/YOUR-USERNAME/capmetoo.git
   git push -u origin main
   \`\`\`

3. **Enable GitHub Pages**

   - Go to repository Settings
   - Navigate to Pages section
   - Select "GitHub Actions" as source
   - Save settings

4. **Automatic Deployment**
   - Every push to `main` branch triggers deployment
   - Check Actions tab for deployment status
   - Site will be available at `https://YOUR-USERNAME.github.io/capmetoo`

### GitHub Actions Workflow

The included `.github/workflows/deploy.yml` automatically:

- ✅ Builds Next.js application
- ✅ Optimizes for static hosting
- ✅ Handles GitHub Pages configuration
- ✅ Deploys on every push to main
- ✅ Provides deployment status

### Custom Domain (Optional)

1. **Add CNAME file**
   \`\`\`bash
   echo "your-domain.com" > public/CNAME
   \`\`\`

2. **Configure DNS**

   - Add CNAME record pointing to `your-username.github.io`
   - Or A records pointing to GitHub Pages IPs

3. **Enable HTTPS**
   - GitHub Pages automatically provides SSL
   - Force HTTPS in repository settings

## ⚡ Alternative Deployments

### Vercel

\`\`\`bash

# Install Vercel CLI

npm i -g vercel

# Deploy

vercel --prod
\`\`\`

### Netlify

\`\`\`bash

# Build locally

npm run build

# Upload 'out' directory to Netlify

# Or connect GitHub repository for auto-deploy

\`\`\`

### Docker

\`\`\`dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package\*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
\`\`\`

## 🔧 Configuration

### Environment Variables (Optional)

\`\`\`bash

# For enhanced analytics (optional)

NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_HOTJAR_ID=your_hotjar_id
\`\`\`

### Build Optimization

The project includes optimizations for:

- ✅ Static export for GitHub Pages
- ✅ Image optimization disabled for static hosting
- ✅ Trailing slash handling
- ✅ Package import optimization
- ✅ Proper asset paths

### GitHub Pages Base Path & Asset Prefix

If you deploy to GitHub Pages, your site will be served from a subdirectory (e.g., `/Cap-Me-Too/`). To ensure all assets and routes work correctly, the project uses conditional configuration in `next.config.mjs`:

```js
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  basePath: isGithubPages ? "/Cap-Me-Too" : "",
  assetPrefix: isGithubPages ? "/Cap-Me-Too/" : "",
  // ...rest of your config
};

export default nextConfig;
```

- **Local development:** Just run as usual (`pnpm run dev` or `pnpm run build`).
- **GitHub Pages deployment:** Build with:
  ```bash
  GITHUB_PAGES=true pnpm run build
  ```
  This ensures all links and assets work from the correct subdirectory.

## 🚨 Troubleshooting

### Common Issues

**Build Fails**
\`\`\`bash

# Clear cache and rebuild

rm -rf .next node_modules package-lock.json
npm install
npm run build
\`\`\`

**GitHub Pages Not Updating**

- Check Actions tab for deployment status
- Ensure GitHub Pages source is set to "GitHub Actions"
- Verify repository is public or you have GitHub Pro

**404 Errors**

- Ensure `trailingSlash: true` in next.config.mjs
- Check that all routes are properly exported

### Deployment Checklist

- [ ] Repository pushed to GitHub
- [ ] GitHub Pages enabled with "GitHub Actions" source
- [ ] Build completes successfully in Actions
- [ ] Site accessible at GitHub Pages URL
- [ ] All features working (API key, image upload, generation)
- [ ] PWA installation works
- [ ] Mobile responsive design verified

## 📊 Monitoring

### Performance

- Monitor Core Web Vitals
- Use Lighthouse for audits
- Check GitHub Pages analytics

### Uptime

- GitHub Pages provides 99.9% uptime SLA
- Monitor via GitHub Status page
- Set up status page monitoring if needed

---

**Ready to deploy?** Just push to main branch and watch the magic happen! 🚀
