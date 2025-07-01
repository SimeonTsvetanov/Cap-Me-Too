// scripts/post-export-copy-assets.js
// Ensures all PWA assets are copied to /out for GitHub Pages

const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");
const outDir = path.join(__dirname, "..", "out");

// List of files to copy (add more if needed)
const filesToCopy = [
  "manifest.json",
  "sw.js",
  "icon.svg",
  "favicon.ico",
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
  "icon-512.png",
  "icon-1024x1024.png",
  "maskable-icon-192x192.png",
  "maskable-icon-512x512.png",
  "monochrome-icon-192x192.png",
  "monochrome-icon-512x512.png",
  // Add screenshots if you use them
  "screenshot-wide.png",
  "screenshot-narrow.png",
];

filesToCopy.forEach((file) => {
  const src = path.join(publicDir, file);
  const dest = path.join(outDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} to /out`);
  }
});

console.log("✅ All PWA assets copied to /out for GitHub Pages.");
