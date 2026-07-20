const isStaticExport = process.env.GITHUB_ACTIONS === "true"

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isStaticExport
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
  // headers() is incompatible with output: "export" (static build), so it's
  // skipped there — Vercel (the real deploy target) always gets it.
  ...(isStaticExport
    ? {}
    : {
        async headers() {
          return [
            {
              source: "/:path*",
              headers: [
                { key: "X-Content-Type-Options", value: "nosniff" },
                { key: "X-Frame-Options", value: "SAMEORIGIN" },
                { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
              ],
            },
          ]
        },
      }),
}

export default nextConfig
