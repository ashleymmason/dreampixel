import Link from "next/link"
import Image from "next/image"
import { insights, categories } from "@/lib/insights"

export const metadata = { title: "Insights on web design, development and SEO", description: "Practical thinking from Dream Pixel on building clearer websites and stronger digital foundations.", alternates: { canonical: "/insights" } }

function Meta({ item }: { item: (typeof insights)[number] }) { return <p className="eyebrow text-muted-foreground">{item.category} <span aria-hidden="true">/</span> {item.date} <span aria-hidden="true">/</span> {item.readTime}</p> }

export default function InsightsPage() {
 const featured = insights[0]
 return <div className="bg-background text-foreground">
  <section className="section-dark px-6 py-24 md:px-12 md:py-36"><div className="mx-auto max-w-7xl">
   <p className="eyebrow text-accent">INSIGHTS / DREAM PIXEL</p><h1 className="mt-8 max-w-5xl text-5xl font-semibold tracking-tight text-balance md:text-8xl">Thoughts on websites, search and everything in between.</h1><p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">Practical ideas, opinions and useful guides on web design, SEO, digital experiences and growing better online.</p>
  </div></section>
  <main className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
   <nav aria-label="Insight categories" className="mb-16 flex flex-wrap gap-3 border-b border-border pb-6">{categories.map((category) => <Link key={category} href={category === "All" ? "/insights" : `/insights/${category.toLowerCase().replace(" ", "-")}`} className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary">{category}</Link>)}</nav>
   <article className="grid overflow-hidden border border-border bg-card md:grid-cols-2"><div className="relative min-h-80"><Image src={featured.image} alt={featured.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority /></div><div className="flex flex-col justify-between bg-primary p-8 text-primary-foreground md:p-12"><div><Meta item={featured}/><h2 className="mt-6 text-4xl font-semibold tracking-tight text-balance md:text-6xl">{featured.title}</h2><p className="mt-6 text-lg leading-relaxed text-primary-foreground/75">{featured.excerpt}</p></div><Link href={`/insights/${featured.slug}`} className="mt-12 font-semibold underline underline-offset-4">Read article <span aria-hidden="true">↗</span></Link></div></article>
   <div className="mt-24 grid gap-x-10 gap-y-16 md:grid-cols-2">{insights.slice(1).map((item, index) => <article key={item.slug} className={index % 2 === 0 ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-10" : ""}><Link href={`/insights/${item.slug}`} className="group block"> <div className="relative aspect-[16/10] overflow-hidden bg-muted"><Image src={item.image} alt={item.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" /></div><div className="pt-6"><Meta item={item}/><h2 className="mt-4 text-3xl font-semibold tracking-tight group-hover:text-primary md:text-4xl">{item.title}</h2><p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">{item.excerpt}</p><span className="mt-6 inline-block font-semibold">Read article ↗</span></div></Link></article>)}</div>
  </main>
 </div>
}
