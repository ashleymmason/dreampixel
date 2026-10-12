import type { Metadata } from "next"
import { LocationPage } from "@/components/location-page"
import { getLocation } from "@/lib/locations"
import { locationMetadata } from "@/lib/location-metadata"

const location = getLocation("torquay")!
export const metadata: Metadata = locationMetadata("torquay")
export default function TorquayPage() { return <LocationPage location={location} /> }
