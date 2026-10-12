import type { Metadata } from "next"
import { LocationPage } from "@/components/location-page"
import { getLocation } from "@/lib/locations"
import { locationMetadata } from "@/lib/location-metadata"

const location = getLocation("bideford")!
export const metadata: Metadata = locationMetadata("bideford")
export default function BidefordPage() { return <LocationPage location={location} /> }
