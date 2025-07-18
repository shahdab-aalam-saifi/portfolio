/** @type {import('next').NextConfig} */
const repo = 'portfolio';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['avatars.githubusercontent.com', 'leetcode.com'],
  },
  basePath: isProd ? '/' + repo : '',
  assetPrefix: isProd ? '/' + repo + '/' : '',
};

module.exports = nextConfig; 