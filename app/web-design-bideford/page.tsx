import type { Metadata } from "next"
import { LocationPage } from "@/components/location-page"
import { getLocation } from "@/lib/locations"
const location = getLocation("bideford")!
export const metadata: Metadata = { title: "Web Design Bideford | Dream Pixel", description: `${location.descriptor} ${location.intro}`, alternates: { canonical: "/web-design-bideford" }, openGraph: { title: "Web Design Bideford | Dream Pixel", description: location.intro, images: [{ url: location.image, alt: location.imageAlt }] } }
export default function BidefordPage() { return <LocationPage location={location} /> }
