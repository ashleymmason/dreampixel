import { readFileSync } from "fs"
import { NextResponse } from "next/server"
import path from "path"

export async function GET() {
  // Read the static sitemap file
  const filePath = path.join(process.cwd(), "public", "sitemap.xml")
  const sitemapContent = readFileSync(filePath, "utf8")

  // Return the sitemap with proper XML content type
  return new NextResponse(sitemapContent, {
    headers: {
      "Content-Type": "application/xml",
      // Add cache control to ensure freshness but also allow caching
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
