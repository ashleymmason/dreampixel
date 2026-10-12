import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { locations } from "@/lib/locations"
import { serviceLabel } from "@/components/topical-links"

const regionalHubs = ["north-devon", "barnstaple", "bideford", "exeter", "plymouth", "torquay"]

function locationLabel(slug: string) {
  return locations.find((location) => location.slug === slug)?.name ?? slug.replaceAll("-", " ")
}

export function RelatedRegionalLinks({ mode, slug, relatedServices = [], relatedLocations = [] }: { mode: "service" | "location"; slug: string; relatedServices?: string[]; relatedLocations?: string[] }) {
  const locationLinks = mode === "service"
    ? regionalHubs.filter((hub) => hub !== slug).slice(0, 4)
    : [...relatedLocations, ...regionalHubs].filter((hub, index, all) => hub !== slug && all.indexOf(hub) === index).slice(0, 4)
  const serviceLinks = mode === "location"
    ? [...relatedServices, "web-design", "local-seo"].filter((service, index, all) => all.indexOf(service) === index).slice(0, 4)
    : relatedServices.slice(0, 4)

  return (
    <section className="border-y border-border bg-card px-6 py-20 md:px-12 md:py-28" aria-labelledby="related-regional-links-heading">
      <div className="container grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[.3em] text-primary">Keep exploring</p>
          <h2 id="related-regional-links-heading" className="mt-5 max-w-lg font-display text-5xl font-black leading-[.9] tracking-[-.06em] md:text-7xl">Related regional insights &amp; services.</h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">Useful routes between local web design, digital services and the places we work.</p>
        </div>
        <div className="grid gap-px bg-border sm:grid-cols-2">
          {locationLinks.map((location) => <Link key={location} href={`/web-design-${location}`} className="group bg-background p-6 transition hover:bg-primary hover:text-primary-foreground"><span className="font-mono text-xs uppercase tracking-[.16em] text-accent group-hover:text-primary-foreground/75">Regional hub</span><span className="mt-12 flex items-center justify-between gap-4 text-xl font-semibold">Web design in {locationLabel(location)}<ArrowUpRight className="size-5 shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></span></Link>)}
          {serviceLinks.map((service) => <Link key={service} href={`/services/${service}`} className="group bg-background p-6 transition hover:bg-primary hover:text-primary-foreground"><span className="font-mono text-xs uppercase tracking-[.16em] text-primary group-hover:text-primary-foreground/75">Service</span><span className="mt-12 flex items-center justify-between gap-4 text-xl font-semibold">{serviceLabel(service)}<ArrowUpRight className="size-5 shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></span></Link>)}
        </div>
      </div>
    </section>
  )
}

export default RelatedRegionalLinks
