#!/bin/bash

# Execute the deployment script
echo "🚀 Starting deployment process..."
echo ""

# Make the script executable and run it
chmod +x scripts/deploy-workflows.sh
./scripts/deploy-workflows.sh

echo ""
echo "🎉 Deployment script completed!"
echo ""
echo "🔍 What happens next:"
echo "1. GitHub Actions will automatically start building your site"
echo "2. The build process takes about 2-3 minutes"
echo "3. Once complete, your site will be live at:"
echo "   https://SimeonTsvetanov.github.io/Cap-Me-Too"
echo ""
echo "📊 Monitor progress at:"
echo "   https://github.com/SimeonTsvetanov/Cap-Me-Too/actions"
echo ""
echo "✅ All GitHub configurations are now complete!"
