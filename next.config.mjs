/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.GITHUB_ACTIONS === "true"
    ? {
        output: "export",
        basePath: "/true-north-kromes-website-re",
        assetPrefix: "/true-north-kromes-website-re/",
      }
    : {}),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
