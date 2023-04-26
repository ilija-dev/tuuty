/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  styledComponents: true,
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
    };

    return config;
  },
  images: {
    domains: ["gateway.pinata.cloud", "img.youtube.com"],
    formats: ["image/webp"],
  },
  env: {
    WEB3STORAGE_TOKEN: process.env.WEB3STORAGE_TOKEN,
  },
};

module.exports = nextConfig;
