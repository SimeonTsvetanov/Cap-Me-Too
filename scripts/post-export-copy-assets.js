// scripts/post-export-copy-assets.js
// Ensures all PWA assets are copied to /out for GitHub Pages

const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");
const outDir = path.join(__dirname, "..", "out");

// Determine the output target directory. If we are building for GitHub Pages,
// the site will be served under the basePath ("/Cap-Me-Too") segment
const basePath = process.env.GITHUB_PAGES === "true" ? "Cap-Me-Too" : "";

// Where to copy the assets (root and sub-folder)
const targetDir = path.join(outDir, basePath);

// Ensure both folders exist before copying
try {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`✅ Created directory: ${targetDir}`);
} catch (error) {
  if (error.code !== "EEXIST") {
    console.error(`❌ Error creating directory ${targetDir}:`, error);
  }
}

// List of PWA assets to copy
const pwaAssets = [
  "manifest.json",
  "favicon.ico",
  "icon.svg",
  "favicon-16x16.png",
  "favicon-32x32.png",
  "favicon-48x48.png",
  "apple-touch-icon.png",
  "apple-touch-icon-152x152.png",
  "android-chrome-192x192.png",
  "android-chrome-512x512.png",
  "icon-72x72.png",
  "icon-96x96.png",
  "icon-128x128.png",
  "icon-256x256.png",
  "icon-384x384.png",
  "icon-1024x1024.png",
  "maskable-icon-192x192.png",
  "maskable-icon-512x512.png",
  "monochrome-icon-192x192.png",
  "monochrome-icon-512x512.png",
  "sw.js",
];

// Copy each PWA asset from public to out/Cap-Me-Too AND out/
console.log(`🔄 Copying PWA assets to ${targetDir}`);

// For GitHub Pages, we need assets in both locations:
// 1. /out/Cap-Me-Too/ - for correct paths with basePath
// 2. /out/ - for service worker and manifest.json references
const copyDestinations = [targetDir];

// Also copy to root for GitHub Pages if using basePath
if (basePath) {
  copyDestinations.push(outDir);
}

let successCount = 0;
let errorCount = 0;

pwaAssets.forEach((asset) => {
  const srcPath = path.join(publicDir, asset);

  if (!fs.existsSync(srcPath)) {
    console.warn(`⚠️ Asset not found: ${srcPath}`);
    errorCount++;
    return;
  }

  // Copy to all destinations
  copyDestinations.forEach((destDir) => {
    const destPath = path.join(destDir, asset);
    try {
      fs.copyFileSync(srcPath, destPath);
      console.log(`✅ Copied ${asset} to ${destDir}`);
      successCount++;
    } catch (error) {
      console.error(`❌ Error copying ${asset} to ${destDir}:`, error);
      errorCount++;
    }
  });
});

console.log(`
📊 PWA Asset Copy Summary:
✅ Successfully copied: ${successCount} files
❌ Errors: ${errorCount}
`);

if (errorCount === 0) {
  console.log("✨ All PWA assets copied successfully!");
} else {
  console.warn(`⚠️ Completed with ${errorCount} errors. Check logs above.`);
}
