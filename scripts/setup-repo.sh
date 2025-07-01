#!/bin/bash

# CapMeToo Repository Setup Script
# This script sets up the repository with proper tags, descriptions, and settings

echo "🚀 Setting up CapMeToo repository..."

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

# Update package.json with correct repository info
echo -e "${YELLOW}📝 Updating package.json...${NC}"
sed -i.bak "s/YOUR-USERNAME/${USERNAME}/g" package.json
sed -i.bak "s/your-username/${USERNAME}/g" package.json
rm package.json.bak

# Update README.md with correct repository info
echo -e "${YELLOW}📝 Updating README.md...${NC}"
sed -i.bak "s/YOUR-USERNAME/${USERNAME}/g" README.md
sed -i.bak "s/your-username/${USERNAME}/g" README.md
rm README.md.bak

# Update issue templates
echo -e "${YELLOW}📝 Updating issue templates...${NC}"
find .github/ISSUE_TEMPLATE -name "*.md" -exec sed -i.bak "s/YOUR-USERNAME/${USERNAME}/g" {} \;
find .github/ISSUE_TEMPLATE -name "*.bak" -delete

# Update other configuration files
echo -e "${YELLOW}📝 Updating configuration files...${NC}"
sed -i.bak "s/YOUR-USERNAME/${USERNAME}/g" public/robots.txt && rm public/robots.txt.bak
sed -i.bak "s/YOUR-USERNAME/${USERNAME}/g" public/sitemap.xml && rm public/sitemap.xml.bak
sed -i.bak "s/your-username/${USERNAME}/g" public/sitemap.xml && rm public/sitemap.xml.bak

# Create initial commit with all files
echo -e "${YELLOW}📦 Preparing initial commit...${NC}"
git add .
git commit -m "🎉 Initial commit: CapMeToo AI Caption Generator

✨ Features:
- AI-powered caption generation with Google Gemini
- 9 caption styles (Funny, General, Travel, Food, etc.)
- 8 language support (EN, BG, DE, ES, FR, PT, ZH, HI)
- Progressive Web App (PWA) ready
- Modern glass morphism UI design
- Dark/light theme support
- Mobile-first responsive design
- GitHub Pages deployment ready

🛠️ Tech Stack:
- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Radix UI components
- Google Gemini 2.0 Flash API
- Automated CI/CD with GitHub Actions

🚀 Ready for deployment to GitHub Pages!"

# Create and push tags
echo -e "${YELLOW}🏷️ Creating release tags...${NC}"
git tag -a v1.0.0 -m "🎉 CapMeToo v1.0.0 - Initial Release

🚀 First stable release of CapMeToo AI Caption Generator

✨ Features:
- AI-powered social media caption generation
- 9 different caption styles
- 8 language support
- Progressive Web App
- Modern responsive design
- Privacy-first approach
- GitHub Pages deployment

🛠️ Built with Next.js 14, TypeScript, and Tailwind CSS
🤖 Powered by Google Gemini 2.0 Flash API"

# Push everything to main
echo -e "${YELLOW}📤 Pushing to GitHub...${NC}"
git push origin main
git push origin --tags

echo -e "${GREEN}✅ Repository setup complete!${NC}"
echo -e "${BLUE}🌐 Your app will be available at: https://${USERNAME}.github.io/capmetoo${NC}"
echo -e "${YELLOW}⏳ GitHub Pages deployment may take a few minutes...${NC}"

# Instructions for manual GitHub settings
echo -e "\n${BLUE}📋 Manual GitHub Settings Required:${NC}"
echo -e "1. Go to: https://github.com/${USERNAME}/${REPO_NAME}/settings"
echo -e "2. Under 'General' → 'Features':"
echo -e "   ✅ Check 'Issues'"
echo -e "   ✅ Check 'Projects' (optional)"
echo -e "3. Under 'Pages':"
echo -e "   📄 Source: 'GitHub Actions'"
echo -e "4. Under 'Actions' → 'General':"
echo -e "   🔧 Workflow permissions: 'Read and write permissions'"
echo -e "5. Add repository topics:"
echo -e "   🏷️ ai, caption-generator, pwa, nextjs, social-media"

echo -e "\n${GREEN}🎉 Setup complete! Your CapMeToo repository is ready!${NC}"
