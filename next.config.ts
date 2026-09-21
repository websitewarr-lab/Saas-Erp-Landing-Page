import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/robot.txt",
        destination: "/robots.txt",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

