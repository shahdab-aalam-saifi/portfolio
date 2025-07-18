/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['avatars.githubusercontent.com', 'leetcode.com'],
  },
}

module.exports = nextConfig 