import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://dreampixel.co.uk/sitemap.xml",
    host: "https://dreampixel.co.uk",
  }
}
