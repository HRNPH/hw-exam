import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    return config;
  },
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "Cross-Origin-Embedder-Policy",
          value: "require-corp",
        },
        {
          key: "Cross-Origin-Opener-Policy",
          value: "same-origin",
        },
      ],
    },
    {
      source: "/:path*.wasm",
      headers: [
        {
          key: "Content-Type",
          value: "application/wasm",
        },
      ],
    },
  ],
};

export default nextConfig;
