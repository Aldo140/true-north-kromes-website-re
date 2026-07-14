import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const baseUrl = "https://aldo140.github.io/true-north-kromes-website-re"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/gallery", "/blog", "/contact"]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.7,
  }))
}
