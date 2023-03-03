/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'standalone',
  //distDir: './dist'
  env: {
    nadeem: 'khalid'
  }
}

module.exports = nextConfig
