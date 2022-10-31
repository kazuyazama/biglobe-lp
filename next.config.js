/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts:true,
  images: {
    loader:'custom'
  }
 
}

module.exports = nextConfig
