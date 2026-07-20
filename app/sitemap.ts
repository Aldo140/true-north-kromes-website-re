import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const baseUrl = "https://www.tnkromes.ca"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/timeline", "/gallery", "/blog", "/contact"]
  const posts = [
    "/blog/our-digital-workflow",
    "/blog/denturism-canada-feature",
    "/blog/benefits-of-3d-printed-frameworks",
    "/blog/digital-workflow-guide",
  ]

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "/blog" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.7,
    })),
    ...posts.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ]
}
