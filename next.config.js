/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['assets.coingecko.com'],
  },
  staticPageGenerationTimeout: 100,
};

module.exports = nextConfig;
