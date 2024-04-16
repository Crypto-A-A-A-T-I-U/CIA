/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ADMIN_PASSWORD: process.env.NEXT_PUBLIC_ADMIN_PASSWORD,
  },
}

export default nextConfig
