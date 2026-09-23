import type { MetadataRoute } from "next"
import { insights } from "@/lib/insights"
import { serviceSlugs } from "@/lib/services"

const siteUrl = "https://dreampixel.co.uk"
const routes = ["/", "/about", "/portfolio", "/services", "/contact", "/locations", "/testimonials", "/glossary/", "/insights", "/insights/web-design", "/insights/seo"]
const workSlugs = ["rcs-tuning", "truck-bracket", "withymead-cottage", "rjh-construction", "bandpress", "capstones-lookout", "upcoming-bands", "meg-scoins"]
const locationSlugs = ["barnstaple", "bideford", "exeter", "plymouth", "torquay"]
const siteLastModified = new Date("2026-09-29")

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: siteLastModified })),
    ...serviceSlugs.map((slug) => ({ url: `${siteUrl}/services/${slug}`, lastModified: siteLastModified })),
    ...workSlugs.map((slug) => ({ url: `${siteUrl}/work/${slug}`, lastModified: siteLastModified })),
    ...insights.map((item) => ({ url: `${siteUrl}/insights/${item.slug}`, lastModified: new Date(item.isoDate) })),
    ...locationSlugs.map((slug) => ({ url: `${siteUrl}/web-design-${slug}`, lastModified: siteLastModified })),
  ]
}
