import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ak1944.pl",
      },
      {
        protocol: "https",
        hostname: "wp.ak1944.pl",
      },
      {
        protocol: "https",
        hostname: "cms.ak1944.pl",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
    ],
  },
};

export default withPayload(nextConfig);
