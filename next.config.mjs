/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [
      "images.unsplash.com",
      "avatars.githubusercontent.com",
      "api.microlink.io",
      "assets.aceternity.com",
    ],
  },
};

export default nextConfig;
