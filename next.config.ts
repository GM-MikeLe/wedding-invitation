import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.cinelove.me',
      },
      {
        protocol: 'https',
        hostname: 'cdn-resource.cinelove.me',
      },
    ],
  },
};

export default nextConfig;
