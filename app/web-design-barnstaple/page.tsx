import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LocationPage } from "@/components/location-page"
import { getLocation } from "@/lib/locations"

const location = getLocation("barnstaple")!
export const metadata: Metadata = { title: "Web Design in Barnstaple | Dream Pixel", description: "Web design in Barnstaple for businesses across North Devon. Dream Pixel creates fast, strategic websites, redesigns and SEO-friendly digital experiences.", alternates: { canonical: "/web-design-barnstaple" }, openGraph: { title: "Web Design in Barnstaple | Dream Pixel", description: "Strategic web design, development and SEO for Barnstaple and North Devon businesses.", images: [{ url: location.image, alt: location.imageAlt }] } }
export default function BarnstaplePage() { if (!location) notFound(); return <LocationPage location={location} /> }
