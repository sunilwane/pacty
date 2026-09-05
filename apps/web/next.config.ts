/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@pactly/shared", "@pactly/validation"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
};

export default nextConfig;
