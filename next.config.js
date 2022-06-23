/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.DOMAIN || "localhost"],
  },
};

module.exports = nextConfig;
