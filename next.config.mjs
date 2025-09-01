/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  transpilePackages: ["firebase"],

  // 🚀 Add this
  experimental: {
    optimizeCss: false,
    optimizePackageImports: [],
  },
};

export default nextConfig;
