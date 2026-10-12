import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { locations } from "@/lib/locations"
import { getService } from "@/lib/services"

type RegionalLinksProps =
  | { kind: "service"; serviceSlug: string }
  | { kind: "location"; locationSlug: string }

const servicePathByLabel: Record<string, string> = {
  "Web design": "/services/web-design",
  "Website development": "/services/website-development",
  "E-commerce": "/services/ecommerce",
  "Website redesign": "/services/website-redesign",
  SEO: "/services/seo",
  "Local SEO": "/services/local-seo",
  "Technical SEO": "/services/technical-seo",
  Content: "/services/content",
  "Digital PR": "/services/digital-pr",
  "Website maintenance": "/services/website-maintenance",
}

const locationLinks = locations
  .filter((location) => ["barnstaple", "north-devon", "bideford"].includes(location.slug))
  .map((location) => ({ label: `Web design in ${location.name}`, href: `/web-design-${location.slug}` }))

function LinkCard({ label, eyebrow, href }: { label: string; eyebrow: string; href: string }) {
  return (
    <Link href={href} className="group flex min-h-36 flex-col justify-between border border-border bg-background p-5 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground">
      <span className="font-mono text-[10px] uppercase tracking-[.18em] text-accent group-hover:text-primary-foreground/75">{eyebrow}</span>
      <span className="flex items-end justify-between gap-4 text-lg font-semibold leading-tight tracking-[-.02em]">{label}<ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
    </Link>
  )
}

export function RelatedRegionalLinks(props: RegionalLinksProps) {
  const cards = props.kind === "service" ? (() => {
    const service = getService(props.serviceSlug)
    if (!service) return []
    const relatedServices = service.related
      .map((slug) => getService(slug))
      .filter((item): item is NonNullable<typeof item> => Boolean(item))
      .slice(0, 2)
      .map((item) => ({ label: item.shortTitle, eyebrow: "Related service", href: `/services/${item.slug}` }))
    return [
      ...locationLinks.slice(0, 2).map((item) => ({ ...item, eyebrow: "Regional hub" })),
      ...relatedServices,
    ]
  })() : (() => {
    const location = locations.find((item) => item.slug === props.locationSlug)
    if (!location) return []
    const serviceCards = location.focus
      .map((label) => ({ label, href: servicePathByLabel[label] }))
      .filter((item): item is { label: string; href: string } => Boolean(item.href))
      .slice(0, 2)
      .map((item) => ({ ...item, eyebrow: "Related service" }))
    const regionalCards = (location.relatedLocations ?? [])
      .map((item) => ({ label: item.label, eyebrow: "Nearby regional hub", href: `/web-design-${item.slug}` }))
      .slice(0, 2)
    return [...serviceCards, ...regionalCards]
  })()

  if (!cards.length) return null

  return (
    <section aria-labelledby="related-regional-links" className="border-y border-border bg-card px-6 py-20 md:px-12 md:py-28">
      <div className="container">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.3em] text-primary">Keep exploring</p>
            <h2 id="related-regional-links" className="mt-5 max-w-3xl font-display text-5xl font-black leading-[.9] tracking-[-.06em] md:text-7xl">Related regional insights<br /><span className="text-primary">&amp; services.</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">Useful next steps between local expertise, regional hubs and the services that support your website.</p>
        </div>
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => <LinkCard key={`${card.href}-${card.label}`} {...card} />)}
        </div>
      </div>
    </section>
  )
}
