import type { Metadata } from "next"
import { getLocation } from "@/lib/locations"

const copy: Record<string, { title: string; description: string }> = {
  barnstaple: {
    title: "Web Design Barnstaple | Websites & Local SEO",
    description:
      "Web design in Barnstaple by Dream Pixel, a local studio. Fast, search-ready websites, redesigns, e-commerce and local SEO for North Devon businesses.",
  },
  "north-devon": {
    title: "Web Design North Devon | Barnstaple Studio",
    description:
      "Web design for North Devon businesses from our Barnstaple studio. Clear, fast, search-ready websites, e-commerce and local SEO across the region.",
  },
  bideford: {
    title: "Web Design Bideford | Websites & Local SEO",
    description:
      "Web design for Bideford and Torridge businesses, from our Barnstaple studio nearby. Fast, search-ready websites, redesigns and local SEO.",
  },
  exeter: {
    title: "Web Design Exeter | Websites, SEO & E-commerce",
    description:
      "Web design for Exeter businesses from Dream Pixel, a Devon studio. Strategic, search-ready websites, e-commerce and SEO built to generate enquiries.",
  },
  plymouth: {
    title: "Web Design Plymouth | Websites & SEO",
    description:
      "Web design for Plymouth businesses from Dream Pixel, a Devon studio. Fast, search-ready websites, redesigns and SEO built to generate enquiries.",
  },
  torquay: {
    title: "Web Design Torquay | Websites & SEO",
    description:
      "Web design for Torquay and English Riviera businesses from Dream Pixel, a Devon studio. Memorable, search-ready websites and local SEO.",
  },
}

export function locationMetadata(slug: string): Metadata {
  const location = getLocation(slug)
  const { title, description } = copy[slug]
  const path = `/web-design-${slug}`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title: `${title} | Dream Pixel`,
      description,
      url: path,
      images: location ? [{ url: location.image, alt: location.imageAlt }] : undefined,
    },
    twitter: { card: "summary_large_image", title: `${title} | Dream Pixel`, description },
  }
}
