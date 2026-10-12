import type { Metadata } from "next"
import { LocationPage } from "@/components/location-page"
import { getLocation } from "@/lib/locations"
import { locationMetadata } from "@/lib/location-metadata"

const location = getLocation("exeter")!
export const metadata: Metadata = locationMetadata("exeter")
export default function ExeterPage() { return <LocationPage location={location} /> }
