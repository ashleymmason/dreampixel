import type { Metadata } from "next"
import { LocationPage } from "@/components/location-page"
import { getLocation } from "@/lib/locations"
const location = getLocation("exeter")!
export const metadata: Metadata = { title: "Web Design Exeter | Dream Pixel", description: `${location.descriptor} ${location.intro}`, alternates: { canonical: "/web-design-exeter" }, openGraph: { title: "Web Design Exeter | Dream Pixel", description: location.intro, images: [{ url: location.image, alt: location.imageAlt }] } }
export default function ExeterPage() { return <LocationPage location={location} /> }
