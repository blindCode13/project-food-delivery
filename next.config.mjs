/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  allowedDevOrigins: [
    "192.168.0.106",
    "192.168.0.106:3000",
  ],
};

export default nextConfig;