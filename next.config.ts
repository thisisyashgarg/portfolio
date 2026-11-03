import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
  },
  redirects: async () => [{ source: "/blog/:slug*", destination: "https://medium.com/@thisisyashgarg", permanent: true }],
};

export default nextConfig;
