import type { Metadata } from "next"
import { LocationPage } from "@/components/location-page"
import { getLocation } from "@/lib/locations"
const location = getLocation("torquay")!
export const metadata: Metadata = { title: "Web Design Torquay | Dream Pixel", description: `${location.descriptor} ${location.intro}`, alternates: { canonical: "/web-design-torquay" }, openGraph: { title: "Web Design Torquay | Dream Pixel", description: location.intro, images: [{ url: location.image, alt: location.imageAlt }] } }
export default function TorquayPage() { return <LocationPage location={location} /> }
