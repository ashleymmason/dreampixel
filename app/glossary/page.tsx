import type { Metadata } from "next"
import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import GlossaryBrowser from "@/components/glossary-browser"
import { glossaryCategories, glossaryTerms } from "@/lib/glossary"

export const metadata: Metadata = {
  title: "Digital Dictionary | Web Design, SEO & Digital Terms",
  description: "Web design, SEO, development and digital marketing terms explained in plain English. Explore the Dream Pixel Digital Dictionary.",
  alternates: { canonical: "/glossary" },
  openGraph: { title: "Digital Dictionary | Dream Pixel", description: "Digital terms explained in plain English, without the agency waffle.", url: "/glossary" },
}

const categoryDescriptions: Record<(typeof glossaryCategories)[number], string> = {
  SEO: "Search, visibility and the technical foundations behind being found.",
  "Web Design & UX": "The structures, decisions and details that make a website easier to use.",
  "Web Development": "The code, platforms and infrastructure behind a dependable website.",
  "E-commerce": "The parts of an online shop that shape discovery, trust and buying.",
  "Digital Marketing": "The channels and measures that help a business earn attention and action.",
}

export default function GlossaryPage() {
  const dictionarySchema = { "@context": "https://schema.org", "@type": "DefinedTermSet", name: "The Digital Dictionary", description: "Digital terms explained in plain English by Dream Pixel.", url: "https://www.dreampixel.co.uk/glossary", hasDefinedTerm: glossaryTerms.map((term) => ({ "@type": "DefinedTerm", name: term.term, description: term.definition, url: `https://www.dreampixel.co.uk/glossary#${term.slug}` })) }
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.dreampixel.co.uk/" }, { "@type": "ListItem", position: 2, name: "The Digital Dictionary", item: "https://www.dreampixel.co.uk/glossary" }] }

  return <div className="bg-background text-foreground">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dictionarySchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <section className="section-dark px-6 pb-20 pt-24 md:px-12 md:pb-32 md:pt-36"><div className="mx-auto max-w-7xl">
      <div className="flex flex-col gap-16 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-5xl"><p className="eyebrow text-accent">THE DIGITAL DICTIONARY</p><h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-tight text-balance md:text-8xl">Digital jargon, explained properly.</h1><p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">SEO, web design, development and digital marketing terms explained in plain English, without the agency waffle.</p></div><ArrowDown className="size-10 shrink-0 text-accent" aria-hidden="true" /></div>
      <div className="mt-20 grid gap-8 border-t border-border pt-8 md:grid-cols-5">{glossaryCategories.map((category) => <a key={category} href={`#category-${category.toLowerCase().replaceAll(" ", "-").replace("&", "and")}`} className="group"><p className="eyebrow text-muted-foreground">{String(glossaryTerms.filter((term) => term.category === category).length).padStart(2, "0")}</p><p className="mt-3 font-semibold group-hover:text-accent">{category}</p></a>)}</div>
    </div></section>
    <main>
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24"><div className="grid gap-10 md:grid-cols-5">{glossaryCategories.map((category) => <div id={`category-${category.toLowerCase().replaceAll(" ", "-").replace("&", "and")}`} key={category} className="border-t border-border pt-5"><p className="eyebrow text-primary">{category}</p><p className="mt-4 text-sm leading-6 text-muted-foreground">{categoryDescriptions[category]}</p></div>)}</div></section>
      <GlossaryBrowser terms={glossaryTerms} />
      <section className="section-dark mx-6 my-16 px-6 py-16 md:mx-12 md:px-12 md:py-24"><div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow text-accent">NEED HELP?</p><h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">Still not sure what you need?</h2><p className="mt-6 max-w-xl leading-7 text-muted-foreground">That&apos;s what we&apos;re here for. Tell us what you&apos;re trying to achieve and we&apos;ll help you work out the right approach.</p></div><Link href="/contact" className="button-primary shrink-0">Start a project <ArrowUpRight data-icon="inline-end" aria-hidden="true" /></Link></div></section>
    </main>
  </div>
}
