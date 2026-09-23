import type { Metadata } from "next"
import { LocationPage } from "@/components/location-page"
import { getLocation } from "@/lib/locations"

const location = getLocation("north-devon")!

export const metadata: Metadata = {
  title: "Web Design in North Devon | Dream Pixel",
  description: "Web design in North Devon for ambitious local businesses. Dream Pixel creates clear, distinctive and search-ready websites from Barnstaple and across the region.",
  alternates: { canonical: "/web-design-north-devon" },
  openGraph: { title: "Web Design in North Devon | Dream Pixel", description: location.intro, images: [{ url: location.image, alt: location.imageAlt }] },
}

export default function NorthDevonPage() {
  return <LocationPage location={location} />
}
