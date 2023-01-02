/** @type {import('next').NextConfig} */

const _env = process.env.NODE_ENV;

const DEV_MODE = _env === "development";
const PROD_MODE = _env === "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: DEV_MODE ? true : false,

  compiler: {
    styledComponents: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
