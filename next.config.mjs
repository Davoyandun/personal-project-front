/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "assets.aceternity.com",
      "json-store.p.rapidapi.com",
      "res.cloudinary.com",
      "images.unsplash.com",
      "fakestoreapi.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "json-store.p.rapidapi.com",
        port: "**",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "**",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "**",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "**",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "**",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
