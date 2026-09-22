import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  { name: "RCS Tuning", type: "E-commerce / Performance", image: "/images/portfolio/rcs-tuning.png", href: "https://rcs-tuning.co.uk/" },
  { name: "Withymead Cottage", type: "Hospitality / Booking", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Withymead%20Cottage-Wqepc419lRND4ta7syWnEjDgsvH419.png", href: "https://exmoorcottagewithypool.com/" },
  { name: "The Sheila Shepherd School", type: "Brand / Experience", image: "/images/portfolio/sheila-shepherd.png", href: "#" },
  { name: "RJH Construction", type: "Business / Lead generation", image: "/images/portfolio/rjh-construction.png", href: "https://rjhconstruction.co.uk/" },
  { name: "Yetland Farm", type: "Hospitality / Web design", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yetland%20Farm%20Holiday%20Cottages-RjJfjYcdIx0QuueQt4fbeiNbtzwyk4.png", href: "https://yetlandfarmholidaycottages.com/" },
  { name: "Capstone&apos;s Lookout", type: "Property / Booking", image: "/images/portfolio/capstones-lookout.png", href: "https://capstoneslookout.co.uk/" },
]

export default function Portfolio() {
  return (
    <main className="overflow-hidden bg-background">
      <section className="relative bg-foreground px-6 py-24 text-background md:px-12 md:py-36">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-primary [clip-path:polygon(38%_0,100%_0,100%_100%,0_100%)]" />
        <div className="container relative z-10"><p className="mb-8 font-mono text-xs uppercase tracking-[0.35em] text-accent">Selected work / 02</p><h1 className="max-w-5xl text-6xl font-black leading-[0.88] tracking-[-0.07em] md:text-8xl lg:text-[9rem]">Ideas made<br /><span className="text-primary">visible.</span></h1><p className="mt-10 max-w-xl text-lg leading-relaxed text-background/70 md:text-xl">A selection of websites, brands and digital experiences built for businesses with somewhere to go.</p></div>
      </section>
      <section className="bg-secondary px-6 py-20 md:px-12 md:py-32"><div className="container"><div className="mb-16 flex items-end justify-between gap-6"><div><p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-primary">The archive</p><h2 className="text-5xl font-black tracking-[-0.06em] md:text-7xl">Recent work.</h2></div><span className="font-mono text-xs text-muted-foreground">{projects.length} projects</span></div><div className="grid gap-6 md:grid-cols-2">{projects.map((project, index) => <article key={project.name} className={`group border border-border bg-background ${index % 3 === 1 ? "md:translate-y-16" : ""}`}><Link href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} className="block"><div className="relative aspect-[4/3] overflow-hidden bg-primary/20"><Image src={project.image} alt={project.name.replace("&apos;", "'")} fill className="object-cover transition duration-700 group-hover:scale-105" /></div><div className="flex items-start justify-between gap-4 p-6 md:p-8"><div><p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">{project.type}</p><h3 className="text-2xl font-bold tracking-tight md:text-3xl">{project.name}</h3></div><ArrowUpRight className="size-6 text-accent transition group-hover:-translate-y-1 group-hover:translate-x-1" /></div></Link></article>)}</div></div></section>
      <section className="bg-primary px-6 py-20 text-primary-foreground md:px-12 md:py-28"><div className="container flex flex-col justify-between gap-8 md:flex-row md:items-end"><h2 className="max-w-3xl text-5xl font-black leading-none tracking-[-0.06em] md:text-7xl">Your project could be next.</h2><Link href="/contact" className="inline-flex items-center gap-3 border border-primary-foreground/40 px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] transition hover:bg-primary-foreground hover:text-primary">Start a project <ArrowUpRight className="size-5" /></Link></div></section>
    </main>
  )
}
