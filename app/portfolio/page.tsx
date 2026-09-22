import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Selected work and case studies",
  description: "Explore websites and digital experiences created by Dream Pixel for businesses across Devon and beyond.",
  alternates: { canonical: "/portfolio" },
}


const projects = [
  { slug: "rcs-tuning", name: "RCS Tuning", industry: "Automotive", services: "Web design / E-commerce / SEO", description: "A sharper digital garage for a performance-led tuning business.", image: "/images/portfolio/rcs-tuning.png", layout: "feature" },
  { slug: "withymead-cottage", name: "Withymead Cottage", industry: "Hospitality", services: "Web design / Booking journey", description: "A calmer, clearer booking experience for a North Devon escape.", image: "/images/portfolio/withymead-cottage.png", layout: "split" },
  { slug: "truck-bracket", name: "Truck Bracket", industry: "E-commerce", services: "Web design / Development / SEO", description: "A clearer product journey for a specialist automotive parts business.", image: "/images/portfolio/truck-bracket.png", layout: "split-reverse" },
  { slug: "rjh-construction", name: "RJH Construction", industry: "Construction", services: "Web design / Lead generation", description: "A confident online presence built to turn capability into enquiries.", image: "/images/portfolio/rjh-construction.png", layout: "feature" },
  { slug: "bandpress", name: "BandPress", industry: "Music / Media", services: "Brand direction / Digital experience", description: "A bold identity and digital presence for a music-focused platform.", image: "/images/portfolio/bandpress.png", layout: "split" },
  { slug: "capstones-lookout", name: "Capstones Lookout", industry: "Hospitality / Tourism", services: "Brand identity / Digital presence", description: "A distinctive visual identity rooted in Ilfracombe and the North Devon coast.", image: "/images/portfolio/capstones-lookout.png", layout: "split-reverse" },
  { slug: "upcoming-bands", name: "Upcoming Bands", industry: "Music / Community", services: "Brand identity / Digital experience", description: "A high-energy visual world for discovering new music.", image: "/images/portfolio/upcoming-bands.png", layout: "feature" },
]

export default function Portfolio() {
  return (
    <main className="overflow-hidden bg-background">
      <section className="relative min-h-[78vh] bg-background px-6 py-28 text-foreground md:px-12 md:py-40">
        <div className="pointer-events-none absolute right-[-12%] top-[-18%] h-[70vw] w-[70vw] rounded-full border border-primary/25 md:right-[-22%] md:top-[-42%]" />
        <div className="pointer-events-none absolute bottom-12 right-12 h-3 w-3 bg-accent shadow-[0_0_0_12px_hsl(var(--accent)/0.12)]" />
        <div className="container relative z-10">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.35em] text-accent">Selected work / 02</p>
          <h1 className="max-w-6xl font-display text-6xl font-black leading-[0.88] tracking-[-0.07em] md:text-8xl lg:text-[9.5rem]">Work we&apos;re<br /><span className="text-primary">proud of.</span></h1>
          <div className="mt-12 flex max-w-3xl flex-col justify-between gap-8 border-t border-foreground/20 pt-6 md:flex-row md:items-end"><p className="max-w-xl text-lg leading-relaxed text-foreground/70 md:text-xl">A selection of websites, digital experiences and growth projects we&apos;ve created for businesses across Devon and beyond.</p><a href="#work" className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">Scroll to explore <ArrowDown className="size-4" /></a></div>
        </div>
      </section>

      <section id="work" className="bg-background px-6 py-24 md:px-12 md:py-36"><div className="container"><div className="mb-20 flex items-end justify-between border-b border-border pb-6"><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">The archive</p><h2 className="font-display text-5xl font-black tracking-[-0.06em] md:text-7xl">Selected projects.</h2></div><span className="font-mono text-xs text-muted-foreground">{projects.length} / 07</span></div><div className="flex flex-col gap-28 md:gap-44">{projects.map((project, index) => <article key={project.slug} className={`group ${project.layout === "split-reverse" ? "md:flex-row-reverse" : project.layout === "split" ? "md:flex-row" : ""} ${project.layout === "feature" ? "" : "flex flex-col gap-8 md:items-center md:gap-16"}`}><Link href={`/work/${project.slug}`} className={`relative block overflow-hidden bg-card ${project.layout === "feature" ? "aspect-[16/8] w-full" : "aspect-[4/3] w-full md:w-[58%]"}`}><Image src={project.image} alt={`${project.name} website project`} fill className="object-cover transition duration-700 group-hover:scale-[1.035]" sizes="(max-width: 768px) 100vw, 70vw" /><span className="absolute left-5 top-5 bg-background px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground">0{index + 1}</span></Link><div className={`${project.layout === "feature" ? "flex max-w-3xl items-start justify-between gap-8 border-l-2 border-primary pl-6 md:pl-8" : "w-full md:w-[34%]"}`}><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-accent">{project.industry}</p><h3 className="font-display text-4xl font-black tracking-[-0.05em] md:text-5xl">{project.name}</h3><p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">{project.description}</p><p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-primary">{project.services}</p></div><ArrowUpRight className="mt-1 size-7 shrink-0 text-primary transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" /></div></article>)}</div></div></section>
      <section className="bg-primary px-6 py-24 text-primary-foreground md:px-12 md:py-32"><div className="container flex flex-col gap-10 md:flex-row md:items-end md:justify-between"><h2 className="max-w-4xl font-display text-5xl font-black leading-[0.92] tracking-[-0.06em] md:text-8xl">Your project could be next.</h2><Link href="/contact" className="inline-flex shrink-0 items-center gap-3 border border-primary-foreground/40 px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] transition hover:bg-primary-foreground hover:text-primary">Start a project <ArrowUpRight className="size-5" /></Link></div></section>
    </main>
  )
}
