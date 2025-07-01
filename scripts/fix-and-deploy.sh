#!/bin/bash

echo "🔧 Fixing package-lock.json and deploying..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Install dependencies to generate package-lock.json
echo "📦 Installing dependencies to generate package-lock.json..."
npm install

# Add the lock file to git
echo "📝 Adding package-lock.json to git..."
git add package-lock.json

# Update the workflow files
echo "🔄 Updating workflow files..."
git add .github/

# Commit the changes
echo "💾 Committing changes..."
git commit -m "🔧 Fix GitHub Actions workflow and add package-lock.json

- Updated deploy.yml to handle missing package-lock.json
- Updated ci.yml with proper dependency installation
- Generated package-lock.json for consistent builds
- Fixed workflow permissions and caching"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Done! Check GitHub Actions in a few minutes."
echo "🌐 Your site will be live at: https://SimeonTsvetanov.github.io/Cap-Me-Too"
