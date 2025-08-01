# 🏠 CapMeToo Wiki - Home

<div align="center">
  <img src="https://raw.githubusercontent.com/SimeonTsvetanov/Cap-Me-Too/main/public/icon-192x192.png" alt="CapMeToo Logo" width="120" height="120">
  
  # Welcome to CapMeToo Wiki! ✨
  
  **Your complete guide to the AI-powered social media caption generator**
</div>

---

## 🚀 Quick Navigation

### 📚 **Getting Started**

- **[Installation Guide](Installation-Guide)** - Set up CapMeToo in minutes
- **[First Steps](First-Steps)** - Your first caption generation
- **[API Key Setup](API-Key-Setup)** - Complete Google AI API configuration

### 🎯 **User Guides**

- **[Caption Styles Guide](Caption-Styles-Guide)** - Master all 9 caption styles
- **[Multi-Language Support](Multi-Language-Support)** - Generate captions in 8 languages
- **[Mobile Usage](Mobile-Usage)** - Perfect mobile experience tips
- **[PWA Installation](PWA-Installation)** - Install as a native app

### 🛠️ **Technical Documentation**

- **[Development Setup](Development-Setup)** - Local development environment
- **[API Reference](API-Reference)** - Complete API documentation
- **[Architecture Overview](Architecture-Overview)** - Technical deep dive
- **[Deployment Guide](Deployment-Guide)** - Deploy your own instance

### 🤝 **Contributing**

- **[Contributing Guide](Contributing-Guide)** - How to contribute
- **[Code Style Guide](Code-Style-Guide)** - Coding standards
- **[Translation Guide](Translation-Guide)** - Help translate CapMeToo
- **[Bug Reporting](Bug-Reporting)** - Report issues effectively

### 🔧 **Advanced Topics**

- **[Performance Optimization](Performance-Optimization)** - Speed up your experience
- **[Security & Privacy](Security-Privacy)** - How we protect your data
- **[Troubleshooting](Troubleshooting)** - Common issues and solutions
- **[FAQ](FAQ)** - Frequently asked questions

---

## 🌟 What is CapMeToo?

CapMeToo is a **free, open-source Progressive Web App** that transforms your photos into engaging social media captions using Google's Gemini AI. With support for **9 different caption styles** and **8 languages**, it's the perfect tool for content creators, social media managers, and anyone who wants to enhance their online presence.

### ✨ Key Features

- 🆓 **Completely Free** - No subscriptions, no hidden costs
- 🔒 **Privacy First** - Your photos and API keys stay on your device
- 🌍 **Multi-Language** - Generate captions in 8 different languages
- 📱 **Works Everywhere** - PWA that works on any device
- ⚡ **Lightning Fast** - Optimized for speed and performance
- 🎨 **Beautiful Design** - Modern, clean interface with dark/light themes and a global animated blurred background for visual appeal

---

## 🎯 Caption Styles Overview

| Style            | Description                  | Perfect For                   |
| ---------------- | ---------------------------- | ----------------------------- |
| 😂 **Funny**     | Humorous and entertaining    | Memes, casual posts           |
| ✨ **General**   | Versatile for any occasion   | Daily posts, sharing          |
| ✈️ **Travel**    | Adventure and wanderlust     | Vacation photos, travel blogs |
| 🍕 **Food**      | Delicious descriptions       | Restaurant visits, cooking    |
| 💪 **Fitness**   | Motivational health content  | Gym photos, workout progress  |
| 🌟 **Lifestyle** | Aspirational content         | Daily life, personal branding |
| 💼 **Business**  | Professional growth-minded   | LinkedIn, business updates    |
| 🌿 **Nature**    | Environmental peaceful vibes | Outdoor photos, nature shots  |
| 👗 **Fashion**   | Style and trend-focused      | Outfit posts, fashion content |

---

## 🌍 Supported Languages

- 🇺🇸 **English** - Native AI generation
- 🇧🇬 **Bulgarian** - Native AI generation
- 🇩🇪 **German** - Native AI generation
- 🇪🇸 **Spanish** - Native AI generation
- 🇫🇷 **French** - Native AI generation
- 🇵🇹 **Portuguese** - Native AI generation
- 🇨🇳 **Chinese** - Native AI generation
- 🇮🇳 **Hindi** - Native AI generation

---

## 🚀 Quick Start

1. **Visit** [CapMeToo](https://simeontsvetanov.github.io/Cap-Me-Too)
2. **Get API Key** - Free [Google AI API key](https://aistudio.google.com/app/apikey)
3. **Upload & Generate** - Upload a photo and start creating captions!

---

## 📞 Need Help?

- 🐛 **Found a Bug?** → [Report it here](https://github.com/SimeonTsvetanov/Cap-Me-Too/issues/new?template=bug_report.md)
- ✨ **Feature Request?** → [Suggest it here](https://github.com/SimeonTsvetanov/Cap-Me-Too/issues/new?template=feature_request.md)
- ❓ **Have Questions?** → [Ask in Discussions](https://github.com/SimeonTsvetanov/Cap-Me-Too/discussions)
- ☕ **Support Development** → [Buy me a coffee](https://buymeacoffee.com/simeontsvetanov)

---

## 🏆 Community

Join our growing community of content creators and developers:

- ⭐ **Star the project** on GitHub
- 🍴 **Fork and contribute** to the codebase
- 💬 **Join discussions** and share your experience
- 📢 **Share CapMeToo** with your friends and followers

---

<div align="center">
  <p><strong>Made with ❤️ for content creators worldwide</strong></p>
  <p>
    <a href="https://simeontsvetanov.github.io/Cap-Me-Too">🚀 Try CapMeToo</a> •
    <a href="https://github.com/SimeonTsvetanov/Cap-Me-Too">📁 GitHub Repository</a> •
    <a href="https://buymeacoffee.com/simeontsvetanov">☕ Support</a>
  </p>
</div>

## 🛡️ Deployment Notes

- All icons and static assets (favicon.ico, icon.svg, PWA icons) must be in the `/Cap-Me-Too/` subfolder for GitHub Pages deployment.
- Do not place deployment icons in the root or public/ folders.
- Example: `https://username.github.io/Cap-Me-Too/favicon.ico` is served from `out/Cap-Me-Too/favicon.ico`.

## 🌈 Global Animated Background

CapMeToo features a global animated blurred background (floating colored circles) that appears on all pages and overlays, in both light and dark mode. This effect is implemented as a single React component (`AnimatedBackground`) rendered globally in the root layout. It uses CSS-only animations for performance and is theme-aware.

- **Location:** `components/ui/animated-background.tsx`
- **How it works:** The background is rendered once in `app/layout.tsx` and should NOT be added to individual screens or modals. If you need to hide it for a specific page, use CSS overrides.
- **Why:** This ensures a consistent, beautiful look across the entire app without code duplication or performance issues.
