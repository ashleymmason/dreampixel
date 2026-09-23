"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Search } from "lucide-react"
import { glossaryCategories, type GlossaryCategory, type GlossaryTerm } from "@/lib/glossary"

export default function GlossaryBrowser({ terms }: { terms: GlossaryTerm[] }) {
  const [activeCategory, setActiveCategory] = useState<GlossaryCategory | "All">("All")
  const [query, setQuery] = useState("")
  const normalizedQuery = query.trim().toLowerCase()
  const visibleTerms = useMemo(() => terms.filter((term) => {
    const matchesCategory = activeCategory === "All" || term.category === activeCategory
    const matchesQuery = !normalizedQuery || `${term.term} ${term.definition} ${term.category}`.toLowerCase().includes(normalizedQuery)
    return matchesCategory && matchesQuery
  }), [activeCategory, normalizedQuery, terms])

  return (
    <div>
      <div className="sticky top-0 z-10 mx-0 border-y border-border bg-background/95 px-6 py-4 backdrop-blur md:-mx-12 md:px-12" aria-label="Glossary tools">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <nav aria-label="Glossary categories" className="flex flex-wrap gap-2">
            <button type="button" aria-pressed={activeCategory === "All"} onClick={() => setActiveCategory("All")} className="filter-pill">All terms</button>
            {glossaryCategories.map((category) => <button key={category} type="button" aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)} className="filter-pill">{category}</button>)}
          </nav>
          <label className="relative block w-full max-w-sm">
            <span className="sr-only">Search the Digital Dictionary</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search terms" className="h-11 w-full border border-border bg-card pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30" />
          </label>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex items-center justify-between border-b border-border py-5 text-xs uppercase tracking-[0.16em] text-muted-foreground"><span>{visibleTerms.length} {visibleTerms.length === 1 ? "term" : "terms"}</span><span className="hidden md:inline">Plain English / Useful context / No agency waffle</span></div>
        <div className="divide-y divide-border">
          {visibleTerms.map((term, index) => <article id={term.slug} key={term.slug} className="scroll-mt-32 py-12 md:grid md:grid-cols-[12rem_1fr] md:gap-12 md:py-16">
            <div><p className="eyebrow text-primary">{String(index + 1).padStart(2, "0")} / {term.category}</p><h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{term.term}</h2></div>
            <div className="mt-8 max-w-3xl md:mt-0"><p className="text-xl leading-relaxed text-foreground md:text-2xl">{term.definition}</p><div className="mt-8 grid gap-8 border-t border-border pt-8 lg:grid-cols-2"><div><p className="eyebrow text-muted-foreground">Why it matters</p><p className="mt-3 leading-7 text-muted-foreground">{term.whyItMatters}</p></div>{term.example && <div><p className="eyebrow text-muted-foreground">A simple example</p><p className="mt-3 leading-7 text-muted-foreground">{term.example}</p></div>}</div><div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm"><span className="eyebrow text-muted-foreground">Related</span>{term.related.map((relatedSlug) => { const related = terms.find((item) => item.slug === relatedSlug); return related ? <Link key={relatedSlug} href={`#${related.slug}`} className="font-medium text-primary underline-offset-4 hover:underline">{related.term}</Link> : null })}</div>{(term.service || term.insight) && <div className="mt-8 flex flex-wrap gap-4 border-t border-border pt-6">{term.service && <Link href={term.service.href} className="inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline">{term.service.label}<ArrowUpRight className="size-4" aria-hidden="true" /></Link>}{term.insight && <Link href={term.insight.href} className="inline-flex items-center gap-2 font-semibold underline-offset-4 hover:text-primary hover:underline">{term.insight.label}<ArrowUpRight className="size-4" aria-hidden="true" /></Link>}</div>}</div>
          </article>)}
        </div>
        {!visibleTerms.length && <div className="py-24 text-center"><p className="text-xl font-semibold">No terms found.</p><p className="mt-3 text-muted-foreground">Try a broader search or choose another category.</p></div>}
      </div>
    </div>
  )
}
