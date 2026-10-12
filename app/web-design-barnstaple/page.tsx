import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LocationPage } from "@/components/location-page"
import { getLocation } from "@/lib/locations"
import { locationMetadata } from "@/lib/location-metadata"

const location = getLocation("barnstaple")!
export const metadata: Metadata = locationMetadata("barnstaple")
export default function BarnstaplePage() { if (!location) notFound(); return <LocationPage location={location} /> }
