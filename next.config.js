/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.spoonacular.com',
        pathname: '/recipes/**',
      },
    ],
  },
}

module.exports = nextConfig

