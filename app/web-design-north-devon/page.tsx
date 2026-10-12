import type { Metadata } from "next"
import { LocationPage } from "@/components/location-page"
import { getLocation } from "@/lib/locations"
import { locationMetadata } from "@/lib/location-metadata"

const location = getLocation("north-devon")!

export const metadata: Metadata = locationMetadata("north-devon")

export default function NorthDevonPage() {
  return <LocationPage location={location} />
}
