#!/bin/bash

echo "🚀 Deploying GitHub Actions workflows..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Add all the new .github files
echo "📁 Adding .github folder and workflows..."
git add .github/

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit - workflows may already be up to date"
else
    # Commit the changes
    echo "💾 Committing workflow files..."
    git commit -m "🔧 Add GitHub Actions workflows and templates

✨ Features:
- Automated deployment to GitHub Pages
- Continuous Integration for PRs
- Issue and PR templates
- Funding configuration

🚀 This enables:
- Automatic site deployment on push to main
- Code quality checks on PRs
- Better issue management
- Community contribution guidelines"

    # Push to GitHub
    echo "📤 Pushing to GitHub..."
    git push origin main

    echo "✅ Successfully deployed workflows!"
    echo ""
    echo "🎯 Next steps:"
    echo "1. Check the Actions tab for running workflows"
    echo "2. Wait for the deployment workflow to complete"
    echo "3. Your site will be live shortly!"
    echo ""
    echo "🌐 Your site will be available at:"
    echo "   https://SimeonTsvetanov.github.io/Cap-Me-Too"
    echo ""
    echo "📊 Check workflow status at:"
    echo "   https://github.com/SimeonTsvetanov/Cap-Me-Too/actions"
fi
