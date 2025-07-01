#!/bin/bash

echo "🔍 Checking and fixing GitHub workflows..."

# Check if .github/workflows directory exists
if [ ! -d ".github/workflows" ]; then
    echo "📁 Creating .github/workflows directory..."
    mkdir -p .github/workflows
fi

# Check if deploy.yml exists
if [ ! -f ".github/workflows/deploy.yml" ]; then
    echo "📝 Creating deploy.yml workflow..."
    cat > .github/workflows/deploy.yml << 'EOF'
name: 🚀 Deploy CapMeToo to GitHub Pages

on:
  push:
    branches: [ main ]
    paths-ignore:
      - 'README.md'
      - 'docs/**'
      - '.github/ISSUE_TEMPLATE/**'
  pull_request:
    branches: [ main ]
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    steps:
      - name: 📥 Checkout
        uses: actions/checkout@v4
        
      - name: 🟢 Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: 📄 Setup Pages
        uses: actions/configure-pages@v4
        with:
          static_site_generator: next
          
      - name: 🔄 Restore cache
        uses: actions/cache@v3
        with:
          path: |
            .next/cache
          key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json') }}-${{ hashFiles('**.[jt]s', '**.[jt]sx') }}
          restore-keys: |
            ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json') }}-
            
      - name: 📦 Install dependencies
        run: npm ci
        
      - name: 🏗️ Build with Next.js
        run: npm run build
        env:
          NODE_ENV: production
          
      - name: 📤 Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main'
    steps:
      - name: 🚀 Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
        
      - name: 🎉 Deployment Success
        run: |
          echo "🎉 Deployment completed successfully!"
          echo "🌐 Site URL: ${{ steps.deployment.outputs.page_url }}"
EOF
else
    echo "✅ deploy.yml already exists"
fi

# Check if ci.yml exists
if [ ! -f ".github/workflows/ci.yml" ]; then
    echo "📝 Creating ci.yml workflow..."
    cat > .github/workflows/ci.yml << 'EOF'
name: 🔍 Continuous Integration

on:
  pull_request:
    branches: [ main, develop ]
  push:
    branches: [ develop ]

jobs:
  test:
    name: 🧪 Test & Lint
    runs-on: ubuntu-latest
    
    steps:
      - name: 📥 Checkout
        uses: actions/checkout@v4
        
      - name: 🟢 Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: 📦 Install dependencies
        run: npm ci
        
      - name: 🔍 Lint code
        run: npm run lint:check
        
      - name: 🔧 Type check
        run: npm run type-check
        
      - name: 🏗️ Build application
        run: npm run build
        env:
          NODE_ENV: production
          
      - name: ✅ Build Success
        run: echo "✅ All checks passed!"
EOF
else
    echo "✅ ci.yml already exists"
fi

echo "📤 Adding and committing workflow files..."
git add .github/workflows/
git commit -m "🔧 Add GitHub Actions workflows for deployment and CI

- Added deploy.yml for automatic GitHub Pages deployment
- Added ci.yml for pull request validation
- Configured proper permissions and caching"

echo "🚀 Pushing workflows to GitHub..."
git push origin main

echo "✅ Workflows should now appear in GitHub Actions!"
echo "🌐 Check: https://github.com/SimeonTsvetanov/Cap-Me-Too/actions"
