/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.rlss.gg", "rlss.blob.core.windows.net"]
  }
}

module.exports = nextConfig
