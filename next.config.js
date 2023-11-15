/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  env: {
    BASE_URL_DEV: process.env.BASE_URL_DEV,
    BASE_URL_PROUD: process.env.BASE_URL_PROUD,
    NEXT_AUTH_URL: process.env.NEXT_AUTH_URL,
  },
};

module.exports = nextConfig;
