import Image from "next/image"
import Link from "next/link"
import { ArrowDownRight, ArrowUpRight, Check, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const process = [
  ["01", "Discover", "Understand the business, audience, goals and problems before deciding what to build."],
  ["02", "Strategy", "Define the structure, positioning, content and technical direction."],
  ["03", "Design", "Create the visual and user experience system that makes the right things clear."],
  ["04", "Build", "Develop the experience with performance, accessibility and search in mind."],
  ["05", "Launch & grow", "Launch, measure, improve and support the work as the business moves forward."],
] as const

const values = [
  ["Think before you build", "Good work starts with understanding the problem."],
  ["Make it useful", "Design should improve the experience, not simply decorate it."],
  ["Sweat the details", "Small decisions create a better overall experience."],
  ["Keep improving", "A website is not finished simply because it has launched."],
] as const

const projects = [
  { name: "RCS Tuning", type: "Strategy / Web design / Development", image: "/images/portfolio/rcs-tuning.png", href: "/work/rcs-tuning" },
  { name: "Withymead Cottage", type: "Brand-led digital experience", image: "/images/portfolio/withymead-cottage.png", href: "/work/withymead-cottage" },
]

export const metadata = {
  title: "About Dream Pixel | Digital Studio in Devon",
  description: "Meet Dream Pixel, an independent digital studio creating thoughtful websites, digital experiences and growth strategies in Devon and beyond.",
}

export default function About() {
  return (
    <main className="overflow-hidden bg-background">
      <section className="relative border-b border-border bg-background px-6 py-28 md:px-12 md:py-40">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] [background-size:4rem_4rem]" />
        <div className="container relative grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.35em] text-accent">About Dream Pixel / 01</p>
            <h1 className="font-display max-w-5xl text-6xl font-bold leading-[0.9] tracking-[-0.07em] text-foreground md:text-8xl lg:text-[8.5rem]">We build digital experiences with a little more <span className="text-primary">thought</span> behind them.</h1>
          </div>
          <div className="flex flex-col gap-10 lg:pb-2">
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl">Dream Pixel is an independent digital studio in Barnstaple, Devon, specialising in web design, website development, e-commerce and SEO for ambitious businesses across Devon and beyond.</p>
            <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"><span className="h-px w-16 bg-accent" /> Small studio / Clear thinking</div>
          </div>
        </div>
        <div className="container relative mt-24 flex items-center justify-between border-t border-border pt-5 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"><span>Scroll to explore</span><ArrowDownRight className="text-accent" /></div>
      </section>

      <section className="bg-secondary px-6 py-24 text-secondary-foreground md:px-12 md:py-36">
        <div className="container grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-primary">The brand story / 02</p><h2 className="font-display max-w-xl text-5xl font-bold leading-[0.95] tracking-[-0.06em] md:text-7xl">Good design isn&apos;t decoration.</h2></div>
          <div className="grid gap-8 text-lg leading-relaxed text-secondary-foreground/70 md:text-xl"><p>Dream Pixel exists to help good businesses establish a stronger presence online. That means making work that is considered, useful and built for the people who need it.</p><p>A website should not simply look good in a presentation. It should make a business easier to understand, easier to find and easier to choose.</p><p>That is why design and performance belong in the same conversation. The sharpest visual idea is only valuable when the experience is fast, accessible and working towards a clear goal.</p><div className="mt-4 flex items-center gap-4 border-t border-secondary-foreground/20 pt-6 font-mono text-xs uppercase tracking-[0.25em] text-primary"><span className="text-3xl">DP</span> Digital, with intent</div></div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-36"><div className="container"><div className="mb-16 max-w-4xl"><p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-accent">The point of view / 03</p><h2 className="font-display text-5xl font-bold leading-[0.92] tracking-[-0.06em] md:text-8xl">Design gets attention. <span className="text-primary">Performance gets results.</span></h2></div><div className="grid gap-12 border-t border-border pt-8 lg:grid-cols-[0.7fr_1.3fr]"><p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">One connected system</p><div><p className="max-w-3xl text-2xl leading-tight text-foreground md:text-4xl">UX, design, development, technical SEO, content, performance and conversion are not separate jobs to hand off. They are parts of the same experience.</p><div className="mt-14 flex flex-wrap gap-3">{["UX", "Design", "Development", "Technical SEO", "Content", "Performance", "Conversion"].map((item, index) => <span key={item} className={`border px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] ${index % 3 === 0 ? "border-primary/50 text-primary" : index % 3 === 1 ? "border-accent/50 text-accent" : "border-border text-muted-foreground"}`}>{item}</span>)}</div></div></div></div></section>

      <section className="bg-foreground px-6 py-24 text-background md:px-12 md:py-36"><div className="container"><div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-accent">How we work / 04</p><h2 className="font-display text-5xl font-bold leading-none tracking-[-0.06em] md:text-8xl">From first thought<br /><span className="text-primary">to the next chapter.</span></h2></div><p className="max-w-xs text-background/60">A straightforward process, with enough room for the good ideas to emerge.</p></div><div className="grid border-t border-background/20">{process.map(([number, title, text]) => <div key={number} className="grid gap-6 border-b border-background/20 py-8 md:grid-cols-[0.2fr_0.5fr_1fr] md:items-start"><span className="font-mono text-sm text-accent">{number}</span><h3 className="font-display text-3xl font-bold tracking-[-0.04em] md:text-4xl">{title}</h3><p className="max-w-md leading-relaxed text-background/60">{text}</p></div>)}</div></div></section>

      <section className="px-6 py-24 md:px-12 md:py-36"><div className="container grid gap-16 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-primary">Values / 05</p><h2 className="font-display text-5xl font-bold leading-none tracking-[-0.06em] md:text-7xl">Small enough<br />to <span className="text-accent">care.</span></h2></div><div className="grid border-t border-border">{values.map(([title, text], index) => <div key={title} className="grid gap-5 border-b border-border py-7 md:grid-cols-[0.15fr_0.7fr_1fr]"><span className="font-mono text-xs text-primary">0{index + 1}</span><h3 className="font-display text-2xl font-bold tracking-[-0.04em]">{title}</h3><p className="text-muted-foreground">{text}</p></div>)}</div></div></section>

      <section className="bg-primary px-6 py-24 text-primary-foreground md:px-12 md:py-32"><div className="container grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground/70">The people / 06</p><h2 className="font-display text-6xl font-bold leading-[0.88] tracking-[-0.07em] md:text-8xl">A small studio,<br />by design.</h2></div><div className="max-w-xl"><p className="text-2xl leading-tight md:text-4xl">No layers of account management. No agency theatre. Just thoughtful digital work, close collaboration and the people doing the work staying close to it.</p><p className="mt-8 max-w-md text-primary-foreground/70">Dream Pixel is intentionally personal. We keep the studio small so the work can stay focused, direct and genuinely collaborative.</p></div></div></section>

      <section className="px-6 py-24 md:px-12 md:py-36"><div className="container"><div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-accent">Selected work / 07</p><h2 className="font-display text-5xl font-bold leading-none tracking-[-0.06em] md:text-8xl">Some things<br /><span className="text-primary">we&apos;ve built.</span></h2></div><Link href="/portfolio" className="group flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">View all work <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link></div><div className="grid gap-8 lg:grid-cols-3">{projects.map((project, index) => <Link key={project.name} href={project.href} className={`group ${index === 1 ? "lg:mt-20" : ""}`}><div className="relative aspect-[4/3] overflow-hidden bg-muted"><Image src={project.image} alt={`${project.name} project preview`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" /></div><div className="flex items-start justify-between gap-4 border-b border-border py-5"><div><h3 className="font-display text-2xl font-bold tracking-[-0.04em]">{project.name}</h3><p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">{project.type}</p></div><ArrowUpRight className="text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div></Link>)}</div></div></section>

      <section className="bg-secondary px-6 py-24 text-secondary-foreground md:px-12 md:py-32"><div className="container grid gap-12 lg:grid-cols-2 lg:items-end"><div><p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-primary">The name / 08</p><h2 className="font-display text-7xl font-bold leading-[0.78] tracking-[-0.08em] md:text-[10rem]">DREAM<br /><span className="text-primary">PIXEL</span></h2></div><div className="flex max-w-md flex-col gap-6"><Plus className="text-accent" /><p className="text-2xl leading-tight md:text-4xl">Imagination, made tangible. A little dream, built one considered pixel at a time.</p><p className="text-secondary-foreground/60">The name is a reminder to hold both sides of the work at once: the ambition of the idea and the craft of making it real.</p></div></div></section>

      <section className="bg-foreground px-6 py-24 text-background md:px-12 md:py-32"><div className="container flex flex-col justify-between gap-12 md:flex-row md:items-end"><div><p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-accent">Start something / 09</p><h2 className="font-display max-w-4xl text-6xl font-bold leading-[0.88] tracking-[-0.07em] md:text-9xl">Got a project<br /><span className="text-primary">in mind?</span></h2><p className="mt-8 max-w-md text-lg text-background/60">Tell us what you&apos;re working on and let&apos;s see where we can take it.</p></div><div className="flex flex-wrap gap-4"><Button asChild size="lg" variant="secondary"><Link href="/contact">Start a project <ArrowUpRight data-icon="inline-end" /></Link></Button><Button asChild size="lg" variant="outline" className="border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground"><Link href="/portfolio">View our work <ArrowUpRight data-icon="inline-end" /></Link></Button></div></div></section>
    </main>
  )
}
