import type { Metadata } from "next"
import { LocationPage } from "@/components/location-page"
import { getLocation } from "@/lib/locations"
import { locationMetadata } from "@/lib/location-metadata"

const location = getLocation("plymouth")!
export const metadata: Metadata = locationMetadata("plymouth")
export default function PlymouthPage() { return <LocationPage location={location} /> }
