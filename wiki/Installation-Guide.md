# 📦 Installation Guide

This comprehensive guide will help you get CapMeToo up and running in just a few minutes.

## 🎯 Choose Your Installation Method

### 🌐 Option 1: Use Online (Recommended)

The easiest way to use CapMeToo is through our hosted version:

1. **Visit** [CapMeToo](https://YOUR-USERNAME.github.io/capmetoo)
2. **Get your API key** (see [API Key Setup](API-Key-Setup))
3. **Start generating captions!**

**Advantages:**
- ✅ No installation required
- ✅ Always up-to-date
- ✅ Works on any device
- ✅ PWA installation available

---

### 💻 Option 2: Local Development

Perfect for developers who want to contribute or customize CapMeToo:

#### Prerequisites
- **Node.js 18+** - [Download here](https://nodejs.org/)
- **npm 8+** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)
- **Google AI API Key** - [Get it here](https://aistudio.google.com/app/apikey)

#### Step-by-Step Installation

1. **Clone the Repository**
   \`\`\`bash
   git clone https://github.com/YOUR-USERNAME/capmetoo.git
   cd capmetoo
   \`\`\`

2. **Install Dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start Development Server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open in Browser**
   \`\`\`
   http://localhost:3000
   \`\`\`

#### Available Scripts
\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint with auto-fix
npm run lint:check   # Check linting without fixing
npm run type-check   # Run TypeScript checks
npm run deploy       # Deploy to GitHub Pages
\`\`\`

---

### 🚀 Option 3: Deploy Your Own Instance

Want to host CapMeToo on your own domain? Here are your options:

#### GitHub Pages (Free)
1. **Fork** the [CapMeToo repository](https://github.com/YOUR-USERNAME/capmetoo)
2. **Enable GitHub Pages** in repository settings
3. **Set source** to "GitHub Actions"
4. **Push to main branch** - automatic deployment starts!

#### Vercel (Free)
1. **Import** your forked repository to [Vercel](https://vercel.com)
2. **Deploy** with one click
3. **Custom domain** supported

#### Netlify (Free)
1. **Connect** your repository to [Netlify](https://netlify.com)
2. **Build command**: `npm run build`
3. **Publish directory**: `out`
4. **Deploy** automatically

---

## 📱 PWA Installation

CapMeToo works as a Progressive Web App on all devices:

### 📱 Mobile Installation

#### iOS (Safari)
1. Open CapMeToo in Safari
2. Tap the **Share** button (📤)
3. Select **"Add to Home Screen"**
4. Tap **"Add"**

#### Android (Chrome)
1. Open CapMeToo in Chrome
2. Tap the **menu** (⋮)
3. Select **"Add to Home Screen"**
4. Tap **"Add"**

### 💻 Desktop Installation

#### Chrome/Edge
1. Open CapMeToo
2. Look for the **install icon** (⬇️) in the address bar
3. Click **"Install"**

#### Firefox
1. Open CapMeToo
2. Click the **menu** (☰)
3. Select **"Install This Site as an App"**

---

## 🔧 System Requirements

### Minimum Requirements
- **Browser**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **RAM**: 2GB
- **Storage**: 50MB free space
- **Internet**: Required for AI generation

### Recommended Requirements
- **Browser**: Latest version of Chrome, Firefox, Safari, or Edge
- **RAM**: 4GB+
- **Storage**: 100MB+ free space
- **Internet**: Stable broadband connection

---

## 🌐 Browser Compatibility

| Browser | Version | Support Level |
|---------|---------|---------------|
| Chrome | 90+ | ✅ Full Support |
| Firefox | 88+ | ✅ Full Support |
| Safari | 14+ | ✅ Full Support |
| Edge | 90+ | ✅ Full Support |
| Opera | 76+ | ✅ Full Support |
| Samsung Internet | 14+ | ✅ Full Support |

---

## 🔍 Verification

After installation, verify everything works:

1. **✅ App loads** without errors
2. **✅ Theme toggle** works (light/dark)
3. **✅ Image upload** functions properly
4. **✅ API key setup** completes successfully
5. **✅ Caption generation** works with test image

---

## 🚨 Troubleshooting

### Common Installation Issues

#### "npm install" fails
\`\`\`bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
\`\`\`

#### Port 3000 already in use
\`\`\`bash
# Use different port
npm run dev -- -p 3001
\`\`\`

#### Build fails
\`\`\`bash
# Check Node.js version
node --version  # Should be 18+

# Update dependencies
npm update

# Clean build
npm run clean
npm run build
\`\`\`

### Browser Issues

#### App won't load
- Clear browser cache and cookies
- Disable browser extensions
- Try incognito/private mode
- Check JavaScript is enabled

#### PWA won't install
- Ensure HTTPS connection
- Clear browser data
- Try different browser
- Check service worker registration

---

## 📞 Need Help?

If you encounter any issues during installation:

- 🐛 **Bug Report**: [Create an issue](https://github.com/YOUR-USERNAME/capmetoo/issues/new?template=bug_report.md)
- ❓ **Questions**: [Ask in Discussions](https://github.com/YOUR-USERNAME/capmetoo/discussions)
- 📖 **Documentation**: Check our [Troubleshooting Guide](Troubleshooting)
- 💬 **Community**: Join our [GitHub Discussions](https://github.com/YOUR-USERNAME/capmetoo/discussions)

---

## ⏭️ Next Steps

Once CapMeToo is installed:

1. **[Set up your API key](API-Key-Setup)** - Required for AI generation
2. **[Take your first steps](First-Steps)** - Generate your first caption
3. **[Explore caption styles](Caption-Styles-Guide)** - Master all 9 styles
4. **[Try different languages](Multi-Language-Support)** - Generate in 8 languages

---

<div align="center">
  <p><strong>🎉 Installation Complete!</strong></p>
  <p>Ready to create amazing captions? <a href="First-Steps">Let's get started!</a></p>
</div>
