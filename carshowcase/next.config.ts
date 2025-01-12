import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.imagin.studio",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
