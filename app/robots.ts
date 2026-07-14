import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const baseUrl = "https://aldo140.github.io/true-north-kromes-website-re"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
