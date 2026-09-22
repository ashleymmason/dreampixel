import type { Metadata } from "next"
import { LocationPage } from "@/components/location-page"
import { getLocation } from "@/lib/locations"
const location = getLocation("plymouth")!
export const metadata: Metadata = { title: "Web Design Plymouth | Dream Pixel", description: `${location.descriptor} ${location.intro}`, alternates: { canonical: "/web-design-plymouth" }, openGraph: { title: "Web Design Plymouth | Dream Pixel", description: location.intro, images: [{ url: location.image, alt: location.imageAlt }] } }
export default function PlymouthPage() { return <LocationPage location={location} /> }
