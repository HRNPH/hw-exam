import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/hw-exam",
  assetPrefix: "/hw-exam",
};

export default nextConfig;
