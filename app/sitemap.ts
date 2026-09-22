import type { MetadataRoute } from "next"
import { insights } from "@/lib/insights"
import { serviceSlugs } from "@/lib/services"

const siteUrl = "https://dreampixel.co.uk"
const routes = ["/", "/about", "/portfolio", "/services", "/contact", "/locations", "/insights", "/insights/web-design", "/insights/seo"]
const workSlugs = ["rcs-tuning", "truck-bracket", "withymead-cottage", "rjh-construction"]
const locationSlugs = ["barnstaple", "bideford", "exeter", "plymouth", "torquay"]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date() })),
    ...serviceSlugs.map((slug) => ({ url: `${siteUrl}/services/${slug}`, lastModified: new Date() })),
    ...workSlugs.map((slug) => ({ url: `${siteUrl}/work/${slug}`, lastModified: new Date() })),
    ...insights.map((item) => ({ url: `${siteUrl}/insights/${item.slug}`, lastModified: new Date(item.isoDate) })),
    ...locationSlugs.map((slug) => ({ url: `${siteUrl}/web-design-${slug}`, lastModified: new Date() })),
  ]
}
