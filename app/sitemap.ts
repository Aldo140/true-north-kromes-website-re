import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const baseUrl = "https://www.tnkromes.ca"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/timeline", "/gallery", "/blog", "/contact"]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.7,
  }))
}
