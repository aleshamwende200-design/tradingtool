/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev-webpack' : '.next',
  devIndicators: false,
  transpilePackages: ['@deriv/core'],
}

module.exports = nextConfig
