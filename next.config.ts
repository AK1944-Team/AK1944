import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "ak1944.pl" },
      { hostname: "wp.ak1944.pl" },
    ],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.stories\.(js|jsx|ts|tsx)$/,
      loader: "ignore-loader",
    });
    return config;
  },
};

export default nextConfig;
