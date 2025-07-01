#!/bin/bash

# CapMeToo Final Push Script
# This script commits all changes and pushes to GitHub

echo "🚀 Final push to GitHub - Let's see the magic happen!"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo -e "${RED}❌ Error: Not in a git repository${NC}"
    exit 1
fi

# Get repository information
REPO_URL=$(git config --get remote.origin.url)
if [[ $REPO_URL == *"github.com"* ]]; then
    REPO_INFO=$(echo $REPO_URL | sed -n 's/.*github\.com[:/]$$[^/]*$$\/$$[^/.]*$$.*/\1\/\2/p')
    USERNAME=$(echo $REPO_INFO | cut -d'/' -f1)
    REPO_NAME=$(echo $REPO_INFO | cut -d'/' -f2)
    echo -e "${BLUE}📁 Repository: ${USERNAME}/${REPO_NAME}${NC}"
else
    echo -e "${RED}❌ Error: Not a GitHub repository${NC}"
    exit 1
fi

echo -e "${YELLOW}📝 Preparing final commit with all documentation...${NC}"

# Add all files
git add .

# Create comprehensive commit message
git commit -m "📚 Complete CapMeToo Documentation & Wiki Setup

🎯 Added comprehensive developer workflow documentation:
- 📖 DEVELOPER-WORKFLOW.md - Complete developer's bible
- 🏗️ Architecture & design decisions explained
- 🛠️ Technology stack and project structure
- 🔄 Development workflow and code standards
- 🎨 Component architecture and styling system
- 🗄️ State management and API integration
- 🚀 Build & deployment processes
- 📂 GitHub repository setup guide
- ⚙️ Automation & CI/CD configuration
- ⚡ Performance optimizations
- 🔒 Security considerations
- 🚨 Troubleshooting guide
- 🔮 Future development roadmap

📚 Wiki content ready for GitHub Wiki:
- 🏠 Home - Main navigation and overview
- 📦 Installation Guide - Complete setup instructions
- 🔑 API Key Setup - Google AI API configuration
- 🎨 Caption Styles Guide - Master all 9 styles
- 🌍 Multi-Language Support - 8 language generation
- 🚀 First Steps - Getting started tutorial
- 📱 Mobile Usage - Perfect mobile experience
- 🚀 PWA Installation - Install as native app
- 🛠️ Development Setup - Local development
- 📖 API Reference - Technical documentation
- 🏗️ Architecture Overview - System design
- 🚀 Deployment Guide - Deploy your own
- 🤝 Contributing Guide - How to contribute
- 📝 Code Style Guide - Coding standards
- 🌐 Translation Guide - Help translate
- 🐛 Bug Reporting - Report issues
- ⚡ Performance Optimization - Speed tips
- 🔒 Security & Privacy - Data protection
- 🚨 Troubleshooting - Common issues
- ❓ FAQ - Frequently asked questions

🛠️ Setup scripts included:
- 📜 setup-repo.sh - Repository configuration
- 📚 setup-wiki.sh - Wiki setup automation
- 🚀 final-push.sh - This deployment script

✨ Ready for:
- 🌐 GitHub Pages deployment
- 📚 Wiki population
- 🤝 Community contributions
- 🚀 Production use

🎉 CapMeToo is now fully documented and ready for the world!"

echo -e "${GREEN}✅ Commit created successfully!${NC}"

# Push to GitHub
echo -e "${YELLOW}📤 Pushing to GitHub...${NC}"
git push origin main

echo -e "${GREEN}🎉 Successfully pushed to GitHub!${NC}"

# Display next steps
echo -e "\n${BLUE}🎯 Next Steps:${NC}"
echo -e "1. 🌐 Check GitHub Pages deployment: https://github.com/${USERNAME}/${REPO_NAME}/actions"
echo -e "2. 📚 Set up Wiki: Run 'scripts/setup-wiki.sh' and follow instructions"
echo -e "3. ⚙️ Configure repository settings:"
echo -e "   • Enable Issues, Projects, Wiki, Discussions"
echo -e "   • Set GitHub Pages source to 'GitHub Actions'"
echo -e "   • Configure Actions permissions to 'Read and write'"
echo -e "4. 🏷️ Add repository topics: ai, caption-generator, pwa, nextjs, social-media"
echo -e "5. 🌟 Your app will be live at: https://${USERNAME}.github.io/capmetoo"

echo -e "\n${GREEN}🚀 CapMeToo is ready to change the world of social media captions!${NC}"
echo -e "${YELLOW}💡 Don't forget to star the repository and share it with the community!${NC}"
