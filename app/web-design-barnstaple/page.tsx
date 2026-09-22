import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LocationPage } from "@/components/location-page"
import { getLocation } from "@/lib/locations"

const location = getLocation("barnstaple")!
export const metadata: Metadata = { title: "Web Design Barnstaple | Dream Pixel", description: `${location.descriptor} ${location.intro}`, alternates: { canonical: "/web-design-barnstaple" }, openGraph: { title: "Web Design Barnstaple | Dream Pixel", description: location.intro, images: [{ url: location.image, alt: location.imageAlt }] } }
export default function BarnstaplePage() { if (!location) notFound(); return <LocationPage location={location} /> }
