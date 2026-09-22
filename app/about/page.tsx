import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Award, Clock, Lightbulb, Target, Heart, ArrowUpRight } from "lucide-react"
import TeamAnimation from "@/components/animations/team-animation"
import ValuesAnimation from "@/components/animations/values-animation"

const values = [
  [Users, "Client-focused", "Your goals shape every decision, from the first conversation to launch day."],
  [Award, "Craft matters", "We sweat the details so the final experience feels effortless and unmistakably yours."],
  [Lightbulb, "Stay curious", "Good digital work keeps moving. We test, learn and make the next version better."],
  [Target, "Make it useful", "Beauty is only half the job. Every page needs a clear purpose and a measurable outcome."],
  [Clock, "Keep promises", "Clear communication, honest timelines and a partner who stays involved after launch."],
  [Heart, "Bring energy", "We care about the work, the people behind it and the businesses brave enough to grow."],
] as const

export default function About() {
  return (
    <main className="overflow-hidden bg-background">
      <section className="relative bg-foreground px-6 py-24 text-background md:px-12 md:py-36">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-primary opacity-90 [clip-path:polygon(38%_0,100%_0,100%_100%,0_100%)]" />
        <div className="container relative z-10">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.35em] text-accent">About Dream Pixel / 01</p>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <h1 className="max-w-4xl text-6xl font-black leading-[0.88] tracking-[-0.07em] md:text-8xl lg:text-[9rem]">Small studio.<br /><span className="text-primary">Big intent.</span></h1>
            <p className="max-w-md text-lg leading-relaxed text-background/70 md:text-xl">We are a passionate team of web designers and digital marketers based in Barnstaple, Devon, building digital experiences that give good businesses somewhere to go.</p>
          </div>
          <div className="mt-20 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-background/60"><span className="h-px w-16 bg-accent" /> Independent since 2020</div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 md:py-32">
        <div className="container grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div><p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-primary">The story</p><h2 className="max-w-xl text-5xl font-black leading-none tracking-[-0.06em] md:text-7xl">Good work starts with <span className="text-primary">listening.</span></h2></div>
          <div className="grid gap-6 text-lg leading-relaxed text-muted-foreground"><p>Dream Pixel was founded with a simple mission: to help businesses in Devon and beyond establish a strong online presence through beautiful, functional websites and effective digital marketing.</p><p>What started as a small freelance operation has grown into a full-service digital studio. Our approach has stayed personal: understand the opportunity, find the sharpest idea, then make it real.</p><div className="relative mt-4 overflow-hidden border border-primary/30 bg-secondary p-5"><TeamAnimation /></div></div>
        </div>
      </section>

      <section className="bg-secondary px-6 py-20 md:px-12 md:py-32"><div className="container"><div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-primary">What we believe</p><h2 className="text-5xl font-black tracking-[-0.06em] md:text-7xl">The good stuff.</h2></div><p className="max-w-sm text-muted-foreground">The principles that keep the work clear, considered and full of character.</p></div><div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">{values.map(([Icon, title, text], index) => <article key={title} className={`min-h-64 p-8 ${index % 2 === 0 ? "bg-background" : "bg-primary text-primary-foreground"}`}><Icon className="mb-12 size-8" /><p className="mb-3 font-mono text-xs opacity-60">0{index + 1}</p><h3 className="mb-3 text-2xl font-bold">{title}</h3><p className="leading-relaxed opacity-75">{text}</p></article>)}</div></div></section>

      <section className="px-6 py-20 md:px-12 md:py-32"><div className="container grid gap-16 lg:grid-cols-2 lg:items-center"><div className="order-2 lg:order-1"><ValuesAnimation /></div><div className="order-1 lg:order-2"><p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-accent">Why Dream Pixel</p><h2 className="mb-8 text-5xl font-black leading-none tracking-[-0.06em] md:text-7xl">A partner, not a <span className="text-primary">supplier.</span></h2><div className="grid gap-5">{["Local expertise with a wider view", "Personal service without the agency theatre", "A results-driven approach to every decision", "Support long after your website launches"].map(item => <div key={item} className="flex items-center gap-4 border-b border-border pb-4 text-lg"><CheckCircle className="size-5 text-accent" />{item}</div>)}</div><Button asChild size="lg" className="mt-10"><Link href="/contact">Start a conversation <ArrowUpRight data-icon="inline-end" /></Link></Button></div></div></section>

      <section className="bg-primary px-6 py-20 text-primary-foreground md:px-12 md:py-28"><div className="container flex flex-col justify-between gap-10 md:flex-row md:items-end"><div><p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground/70">Have a good idea?</p><h2 className="max-w-3xl text-5xl font-black leading-none tracking-[-0.06em] md:text-8xl">Let&apos;s make it real.</h2></div><Button asChild variant="secondary" size="lg"><Link href="/portfolio">See the work <ArrowUpRight data-icon="inline-end" /></Link></Button></div></section>
    </main>
  )
}
