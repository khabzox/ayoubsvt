/** @type {import('next').NextConfig} */
const nextConfig = {
  ...withNextVideo(withPWA()),
};

export default nextConfig;