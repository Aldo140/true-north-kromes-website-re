import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const baseUrl = "https://www.tnkromes.ca"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
