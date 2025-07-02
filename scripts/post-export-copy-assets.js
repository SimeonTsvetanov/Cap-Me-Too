// scripts/post-export-copy-assets.js
// Ensures all PWA assets are copied to /out for GitHub Pages

const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");
const outDir = path.join(__dirname, "..", "out");

// Determine the output target directory. If we are building for GitHub Pages,
// the site will be served under the basePath ("/Cap-Me-Too") segment, so the
// assets must physically reside in /out/Cap-Me-Too.
const basePath = process.env.GITHUB_PAGES === "true" ? "Cap-Me-Too" : "";

// Where to copy the assets (root and sub-folder)
const targetDir = path.join(outDir, basePath);

// Ensure both folders exist before copying
fs.mkdirSync(targetDir, { recursive: true });

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

// Copy each PWA asset from public to out
console.log(`Copying PWA assets to ${targetDir}`);
pwaAssets.forEach((asset) => {
  const srcPath = path.join(publicDir, asset);
  const destPath = path.join(targetDir, asset);

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✅ Copied ${asset}`);
  } else {
    console.warn(`⚠️ Asset not found: ${srcPath}`);
  }
});

console.log("✅ All PWA assets copied successfully");
