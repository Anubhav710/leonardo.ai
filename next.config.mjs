/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "leonardo-cdn.b-cdn.net",
      },
      {
        protocol: "https",
        hostname: "app.leonardo.ai",
      },
      {
        protocol: "https",
        hostname: "replicate.delivery",
      },
      {
        protocol: "https",
        hostname: "cdn.leonardo.ai",
      },
    ],
  },
};

export default nextConfig;
