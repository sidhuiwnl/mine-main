/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    remotePatterns : [
      {
        protocol : "https",
        hostname :"utfs.io"
      },
      {
        protocol : "https",
        hostname :"us7xgl2xx9.ufs.sh"

      }
    ]
  }
};

export default nextConfig;
