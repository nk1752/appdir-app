/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'standalone',
  env: {
    nadeem: 'khalid'
  }
}

module.exports = nextConfig
