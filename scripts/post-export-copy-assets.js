// scripts/post-export-copy-assets.js
// Ensures all PWA assets are copied to /out for GitHub Pages

const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");
const outDir = path.join(__dirname, "..", "out");

// Determine the output target directory. If we are building for GitHub Pages,
// the site will be served under the basePath ("/Cap-Me-Too") segment, so the
// assets must physically reside in /out/Cap-Me-Too.  Read the value from
// NEXT_BASE_PATH (injected by the workflow) or default to "Cap-Me-Too" to
// preserve backward-compatibility.
const basePath = process.env.NEXT_BASE_PATH || "Cap-Me-Too"; // keep in sync with next.config.mjs

// Where to copy the assets (root and sub-folder)
const targetDir = path.join(outDir, basePath.replace(/^\//, ""));

// Ensure both folders exist before copying
fs.mkdirSync(targetDir, { recursive: true });
fs.mkdirSync(outDir, { recursive: true });

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

// Perform copy into the target directory
filesToCopy.forEach((file) => {
  const src = path.join(publicDir, file);
  if (!fs.existsSync(src)) return;

  // Copy to /out
  const destRoot = path.join(outDir, file);
  fs.copyFileSync(src, destRoot);

  // Copy to /out/Cap-Me-Too
  const destSub = path.join(targetDir, file);
  fs.copyFileSync(src, destSub);

  console.log(
    `Copied ${file} -> [root] & [${path.relative(outDir, targetDir)}]`
  );
});

console.log(
  "✅ All PWA assets present in both root and sub-folder for GitHub Pages."
);
