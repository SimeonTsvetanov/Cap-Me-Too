/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  basePath: isProd ? "/Cap-Me-Too" : "",
  assetPrefix: isProd ? "/Cap-Me-Too/" : "",
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
