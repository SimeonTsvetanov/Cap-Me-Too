#!/bin/bash

# CapMeToo Wiki Setup Script
# This script helps set up the GitHub Wiki with all documentation

echo "📚 Setting up CapMeToo Wiki..."

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
    # Extract username and repo name from URL
    REPO_INFO=$(echo $REPO_URL | sed -n 's/.*github\.com[:/]$$[^/]*$$\/$$[^/.]*$$.*/\1\/\2/p')
    USERNAME=$(echo $REPO_INFO | cut -d'/' -f1)
    REPO_NAME=$(echo $REPO_INFO | cut -d'/' -f2)
    echo -e "${BLUE}📁 Repository: ${USERNAME}/${REPO_NAME}${NC}"
else
    echo -e "${RED}❌ Error: Not a GitHub repository${NC}"
    exit 1
fi

# Create wiki directory if it doesn't exist
if [ ! -d "wiki" ]; then
    mkdir wiki
    echo -e "${GREEN}📁 Created wiki directory${NC}"
fi

# Update wiki files with correct repository info
echo -e "${YELLOW}📝 Updating wiki files with repository information...${NC}"

# Update all wiki markdown files
find wiki -name "*.md" -exec sed -i.bak "s/YOUR-USERNAME/${USERNAME}/g" {} \;
find wiki -name "*.md" -exec sed -i.bak "s/your-username/${USERNAME}/g" {} \;
find wiki -name "*.bak" -delete

echo -e "${GREEN}✅ Wiki files updated successfully!${NC}"

# Instructions for manual wiki setup
echo -e "\n${BLUE}📋 Manual Wiki Setup Instructions:${NC}"
echo -e "\n${YELLOW}1. Enable Wiki in GitHub Repository:${NC}"
echo -e "   • Go to: https://github.com/${USERNAME}/${REPO_NAME}/settings"
echo -e "   • Scroll to 'Features' section"
echo -e "   • ✅ Check 'Wikis'"
echo -e "   • Save changes"

echo -e "\n${YELLOW}2. Clone Wiki Repository:${NC}"
echo -e "   git clone https://github.com/${USERNAME}/${REPO_NAME}.wiki.git"
echo -e "   cd ${REPO_NAME}.wiki"

echo -e "\n${YELLOW}3. Copy Wiki Files:${NC}"
echo -e "   cp ../wiki/*.md ."

echo -e "\n${YELLOW}4. Commit and Push Wiki:${NC}"
echo -e "   git add ."
echo -e "   git commit -m \"📚 Initial wiki setup with comprehensive documentation\""
echo -e "   git push origin master"

echo -e "\n${YELLOW}5. Wiki Pages to Create:${NC}"
echo -e "   📄 Home.md (Main wiki page)"
echo -e "   📦 Installation-Guide.md"
echo -e "   🔑 API-Key-Setup.md"
echo -e "   🎨 Caption-Styles-Guide.md"
echo -e "   🌍 Multi-Language-Support.md"
echo -e "   📱 Mobile-Usage.md"
echo -e "   🚀 PWA-Installation.md"
echo -e "   🛠️ Development-Setup.md"
echo -e "   📖 API-Reference.md"
echo -e "   🏗️ Architecture-Overview.md"
echo -e "   🚀 Deployment-Guide.md"
echo -e "   🤝 Contributing-Guide.md"
echo -e "   📝 Code-Style-Guide.md"
echo -e "   🌐 Translation-Guide.md"
echo -e "   🐛 Bug-Reporting.md"
echo -e "   ⚡ Performance-Optimization.md"
echo -e "   🔒 Security-Privacy.md"
echo -e "   🚨 Troubleshooting.md"
echo -e "   ❓ FAQ.md"

echo -e "\n${GREEN}📚 Wiki setup preparation complete!${NC}"
echo -e "${BLUE}🌐 Your wiki will be available at: https://github.com/${USERNAME}/${REPO_NAME}/wiki${NC}"

# Create a quick setup file for easy copying
cat > wiki-setup-commands.txt << EOF
# CapMeToo Wiki Setup Commands
# Run these commands to set up your wiki

# 1. Clone wiki repository
git clone https://github.com/${USERNAME}/${REPO_NAME}.wiki.git
cd ${REPO_NAME}.wiki

# 2. Copy wiki files
cp ../wiki/*.md .

# 3. Commit and push
git add .
git commit -m "📚 Initial wiki setup with comprehensive documentation

✨ Wiki Pages Added:
- 🏠 Home - Main wiki page with navigation
- 📦 Installation Guide - Complete setup instructions
- 🔑 API Key Setup - Google AI API configuration
- 🎨 Caption Styles Guide - Master all 9 styles
- 🌍 Multi-Language Support - 8 language generation
- 📱 Mobile Usage - Perfect mobile experience
- 🚀 PWA Installation - Install as native app
- 🛠️ Development Setup - Local development guide
- 📖 API Reference - Technical documentation
- 🏗️ Architecture Overview - System design
- 🚀 Deployment Guide - Deploy your own instance
- 🤝 Contributing Guide - How to contribute
- 📝 Code Style Guide - Coding standards
- 🌐 Translation Guide - Help translate
- 🐛 Bug Reporting - Report issues effectively
- ⚡ Performance Optimization - Speed tips
- 🔒 Security & Privacy - Data protection
- 🚨 Troubleshooting - Common issues
- ❓ FAQ - Frequently asked questions

🎯 Complete documentation for users, developers, and contributors!"

git push origin master

# 4. Your wiki is now live at:
# https://github.com/${USERNAME}/${REPO_NAME}/wiki
EOF

echo -e "\n${GREEN}📄 Created 'wiki-setup-commands.txt' with all commands${NC}"
echo -e "${YELLOW}💡 Tip: You can copy and paste commands from this file${NC}"

echo -e "\n${GREEN}🎉 Wiki setup preparation complete!${NC}"
