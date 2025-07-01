/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  basePath: isGithubPages ? "/Cap-Me-Too" : "",
  // `assetPrefix` needs a trailing slash so that Next.js prefixes
  // **all** generated assets, especially the `/_next/` bundle files.
  assetPrefix: isGithubPages ? "/Cap-Me-Too/" : "",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  // Optimize for production
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
  // Remove source maps in production
  productionBrowserSourceMaps: false,
};

export default nextConfig;
