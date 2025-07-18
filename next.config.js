/** @type {import('next').NextConfig} */
const repo = 'portfolio'; // your repo name
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['avatars.githubusercontent.com', 'leetcode.com'],
  },
  basePath: '/' + repo,
  assetPrefix: '/' + repo + '/',
};

module.exports = nextConfig; 