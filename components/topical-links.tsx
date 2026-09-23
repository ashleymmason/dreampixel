import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const serviceLabels: Record<string, string> = {
  "web-design": "Web design",
  "website-development": "Website development",
  ecommerce: "E-commerce",
  "website-redesign": "Website redesign",
  seo: "SEO strategy",
  "local-seo": "Local SEO",
  "technical-seo": "Technical SEO",
  content: "Content",
  "digital-pr": "Digital PR & authority",
  "website-maintenance": "Website maintenance",
}

export function TopicalLinks({ heading = "Continue exploring", services = [] }: { heading?: string; services?: string[] }) {
  if (!services.length) return null
  return (
    <section className="border-t border-border py-12" aria-labelledby="topical-links-heading">
      <p id="topical-links-heading" className="eyebrow text-primary">{heading}</p>
      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
        {services.map((slug) => <Link key={slug} href={`/services/${slug}`} className="inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline">
          {serviceLabels[slug] ?? slug.replaceAll("-", " ")}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>)}
      </div>
    </section>
  )
}

export const serviceLabel = (slug: string) => serviceLabels[slug] ?? slug
