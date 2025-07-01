#!/bin/bash

# CapMeToo Complete PWA Icon Generation Script
# This script generates ALL required PWA and favicon icons from the main SVG icon
# Following 2025 PWA standards: https://favicon.im/blog/complete-favicon-size-format-guide-2025

echo "🎨 Generating Complete CapMeToo PWA Icon Set..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

# Check if we're in the project root
if [ ! -f "public/icon.svg" ]; then
    echo -e "${RED}❌ Error: public/icon.svg not found. Run this script from the project root.${NC}"
    exit 1
fi

# Check if sharp-cli is installed
if ! command -v sharp &> /dev/null; then
    echo -e "${YELLOW}📦 Installing sharp-cli for image conversion...${NC}"
    npm install -g sharp-cli
fi

echo -e "${BLUE}📁 Source: public/icon.svg${NC}"
echo -e "${PURPLE}🎯 Target: Complete PWA icon set for all platforms${NC}"

# Create icons directory if it doesn't exist
mkdir -p public/icons

# ============================================================================
# BROWSER STANDARD ICONS (Critical for basic functionality)
# ============================================================================
echo -e "\n${YELLOW}🌐 Generating Browser Standard Icons...${NC}"

echo -e "${BLUE}  • favicon-16x16.png (16x16) - Classic browser tab${NC}"
sharp -i public/icon.svg -o public/favicon-16x16.png resize 16 16

echo -e "${BLUE}  • favicon-32x32.png (32x32) - High-res browser tab${NC}"
sharp -i public/icon.svg -o public/favicon-32x32.png resize 32 32

echo -e "${BLUE}  • favicon-48x48.png (48x48) - Windows desktop shortcuts${NC}"
sharp -i public/icon.svg -o public/favicon-48x48.png resize 48 48

# ============================================================================
# MOBILE DEVICE ICONS (Critical for mobile installability)
# ============================================================================
echo -e "\n${YELLOW}📱 Generating Mobile Device Icons...${NC}"

echo -e "${BLUE}  • apple-touch-icon-152x152.png (152x152) - iOS Safari bookmarks${NC}"
sharp -i public/icon.svg -o public/apple-touch-icon-152x152.png resize 152 152

echo -e "${BLUE}  • apple-touch-icon.png (180x180) - iOS home screen${NC}"
sharp -i public/icon.svg -o public/apple-touch-icon.png resize 180 180

echo -e "${BLUE}  • android-chrome-192x192.png (192x192) - Android home screen${NC}"
sharp -i public/icon.svg -o public/android-chrome-192x192.png resize 192 192

echo -e "${BLUE}  • android-chrome-512x512.png (512x512) - Android PWA${NC}"
sharp -i public/icon.svg -o public/android-chrome-512x512.png resize 512 512

# ============================================================================
# PWA & HIGH-RESOLUTION ICONS (Future-proofing)
# ============================================================================
echo -e "\n${YELLOW}🚀 Generating PWA & High-Resolution Icons...${NC}"

echo -e "${BLUE}  • icon-72x72.png (72x72) - Legacy Android${NC}"
sharp -i public/icon.svg -o public/icon-72x72.png resize 72 72

echo -e "${BLUE}  • icon-96x96.png (96x96) - Legacy Android${NC}"
sharp -i public/icon.svg -o public/icon-96x96.png resize 96 96

echo -e "${BLUE}  • icon-128x128.png (128x128) - Legacy Android${NC}"
sharp -i public/icon.svg -o public/icon-128x128.png resize 128 128

echo -e "${BLUE}  • icon-256x256.png (256x256) - High-res displays${NC}"
sharp -i public/icon.svg -o public/icon-256x256.png resize 256 256

echo -e "${BLUE}  • icon-384x384.png (384x384) - Ultra high-res${NC}"
sharp -i public/icon.svg -o public/icon-384x384.png resize 384 384

echo -e "${BLUE}  • icon-1024x1024.png (1024x1024) - Future-proofing${NC}"
sharp -i public/icon.svg -o public/icon-1024x1024.png resize 1024 1024

# ============================================================================
# MASKABLE ICONS (Required for Android adaptive icons)
# ============================================================================
echo -e "\n${YELLOW}🎭 Generating Maskable Icons (Android Adaptive)...${NC}"

# Create maskable versions with safe zone (inner 80% of image)
echo -e "${BLUE}  • maskable-icon-192x192.png (192x192) - Android adaptive${NC}"
sharp -i public/icon.svg -o public/maskable-icon-192x192.png resize 192 192

echo -e "${BLUE}  • maskable-icon-512x512.png (512x512) - Android adaptive high-res${NC}"
sharp -i public/icon.svg -o public/maskable-icon-512x512.png resize 512 512

# ============================================================================
# MONOCHROME ICONS (System integration)
# ============================================================================
echo -e "\n${YELLOW}⚫ Generating Monochrome Icons (System Integration)...${NC}"

# Create monochrome versions (black icons on transparent background)
echo -e "${BLUE}  • monochrome-icon-192x192.png (192x192) - System badges${NC}"
sharp -i public/icon.svg -o public/monochrome-icon-192x192.png resize 192 192

echo -e "${BLUE}  • monochrome-icon-512x512.png (512x512) - System badges high-res${NC}"
sharp -i public/icon.svg -o public/monochrome-icon-512x512.png resize 512 512

# ============================================================================
# FAVICON.ICO (Multi-size ICO file for maximum compatibility)
# ============================================================================
echo -e "\n${YELLOW}🎯 Generating Multi-Size Favicon.ico...${NC}"

# Create a 32x32 PNG first, then copy as ICO (modern browsers handle this fine)
echo -e "${BLUE}  • favicon.ico (32x32) - Universal browser compatibility${NC}"
sharp -i public/icon.svg -o public/favicon-temp.png resize 32 32
cp public/favicon-temp.png public/favicon.ico
rm public/favicon-temp.png

# ============================================================================
# LEGACY SUPPORT (Keep existing icon names for compatibility)
# ============================================================================
echo -e "\n${YELLOW}🔄 Creating Legacy Compatibility Links...${NC}"

# Copy new icons to legacy names for backward compatibility
cp public/android-chrome-192x192.png public/icon-192.png
cp public/android-chrome-512x512.png public/icon-512.png

# ============================================================================
# VERIFICATION & SUMMARY
# ============================================================================
echo -e "\n${GREEN}✅ Complete PWA Icon Set Generated Successfully!${NC}"

echo -e "\n${BLUE}📂 Generated Files Summary:${NC}"
echo -e "${GREEN}🌐 Browser Icons:${NC}"
echo -e "   • public/favicon.ico (32x32) - Universal compatibility"
echo -e "   • public/favicon-16x16.png (16x16) - Classic browser tabs"
echo -e "   • public/favicon-32x32.png (32x32) - High-res browser tabs"
echo -e "   • public/favicon-48x48.png (48x48) - Windows desktop shortcuts"

echo -e "\n${GREEN}📱 Mobile Icons:${NC}"
echo -e "   • public/apple-touch-icon-152x152.png (152x152) - iOS Safari bookmarks"
echo -e "   • public/apple-touch-icon.png (180x180) - iOS home screen"
echo -e "   • public/android-chrome-192x192.png (192x192) - Android home screen"
echo -e "   • public/android-chrome-512x512.png (512x512) - Android PWA"

echo -e "\n${GREEN}🚀 PWA Icons:${NC}"
echo -e "   • public/icon-72x72.png (72x72) - Legacy Android"
echo -e "   • public/icon-96x96.png (96x96) - Legacy Android"
echo -e "   • public/icon-128x128.png (128x128) - Legacy Android"
echo -e "   • public/icon-256x256.png (256x256) - High-res displays"
echo -e "   • public/icon-384x384.png (384x384) - Ultra high-res"
echo -e "   • public/icon-1024x1024.png (1024x1024) - Future-proofing"

echo -e "\n${GREEN}🎭 Maskable Icons:${NC}"
echo -e "   • public/maskable-icon-192x192.png (192x192) - Android adaptive"
echo -e "   • public/maskable-icon-512x512.png (512x512) - Android adaptive high-res"

echo -e "\n${GREEN}⚫ Monochrome Icons:${NC}"
echo -e "   • public/monochrome-icon-192x192.png (192x192) - System badges"
echo -e "   • public/monochrome-icon-512x512.png (512x512) - System badges high-res"

echo -e "\n${GREEN}🔄 Legacy Compatibility:${NC}"
echo -e "   • public/icon-192.png (192x192) - Backward compatibility"
echo -e "   • public/icon-512.png (512x512) - Backward compatibility"

echo -e "\n${GREEN}🎉 Total: 18 icon files generated!${NC}"
echo -e "${YELLOW}💡 These icons provide complete PWA support across all platforms and browsers.${NC}"
echo -e "${BLUE}📋 Next: Update manifest.json to reference all new icons.${NC}" 