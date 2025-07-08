/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        // puedes agregar pathname si quieres más especificidad
      },
    ],
  },
};

module.exports = nextConfig;
