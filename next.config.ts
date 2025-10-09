import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "ak1944.pl" }, { hostname: "wp.ak1944.pl" }],
  },
};

export default nextConfig;
