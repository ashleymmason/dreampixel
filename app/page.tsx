import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Asterisk, MoveRight } from "lucide-react"

const services = [
  ["01", "Web design", "Distinctive, useful websites built around your next chapter.", "/services/web-design"],
  ["02", "Search & growth", "Make the right people find you, then give them a reason to stay.", "/services/seo"],
  ["03", "Digital direction", "Clear thinking for brands ready to move with intent.", "/services/ux-ui"],
]

const places = [
  ["Barnstaple", "/web-design-barnstaple"],
  ["Bideford", "/web-design-bideford"],
  ["Exeter", "/web-design-exeter"],
  ["Plymouth", "/web-design-plymouth"],
  ["Torquay", "/web-design-torquay"],
]

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="container relative flex min-h-[calc(100vh-5rem)] flex-col justify-between pb-10 pt-16 md:pt-24">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <span>Independent digital studio</span>
          <span className="hidden md:inline-flex items-center gap-2"><span className="size-2 rounded-full bg-primary" /> North Devon / UK</span>
        </div>
        <div className="relative z-10 py-20">
          <p className="mb-6 max-w-xs text-sm leading-6 text-muted-foreground">Dream Pixel makes digital work for ambitious people, places and businesses.</p>
          <h1 className="max-w-6xl font-display text-[clamp(3.8rem,11vw,10.5rem)] font-medium leading-[0.84] tracking-[-0.075em] text-balance">
            Better <span className="text-primary">online.</span><br />More you.
          </h1>
          <div className="mt-10 flex flex-col gap-6 md:ml-[38%] md:max-w-md">
            <p className="text-lg leading-7 text-muted-foreground">Websites and digital growth with a little more character. Strategy first, pixels second.</p>
            <Link href="/contact" className="group inline-flex w-fit items-center gap-4 border-b border-foreground pb-3 text-sm font-semibold uppercase tracking-[0.16em] transition-colors hover:border-primary hover:text-primary">
              Start a conversation <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="flex items-end justify-between border-t border-border pt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span>Scroll to explore</span><span>01 — 04</span>
        </div>
        <div className="pointer-events-none absolute right-[-10%] top-[26%] hidden h-72 w-72 rounded-full border border-primary/50 md:block" />
        <div className="pointer-events-none absolute right-[2%] top-[38%] hidden h-40 w-40 rounded-full bg-primary/90 md:block" />
      </section>

      <section className="bg-secondary py-24 md:py-36">
        <div className="container">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xs text-sm uppercase tracking-[0.18em] text-muted-foreground">What we do</p>
            <h2 className="max-w-3xl font-display text-4xl leading-[0.95] tracking-[-0.05em] md:text-7xl">Useful things, made beautifully.</h2>
          </div>
          <div className="border-t border-border">
            {services.map(([number, title, description, href]) => (
              <Link key={number} href={href} className="group grid grid-cols-[3rem_1fr_auto] items-start gap-4 border-b border-border py-7 transition-colors hover:text-primary md:grid-cols-[5rem_1fr_1fr_auto] md:gap-8">
                <span className="font-mono text-xs text-muted-foreground">{number}</span>
                <h3 className="font-display text-3xl tracking-[-0.04em] md:text-5xl">{title}</h3>
                <p className="hidden max-w-xs text-sm leading-6 text-muted-foreground md:block">{description}</p>
                <MoveRight className="transition-transform group-hover:translate-x-2" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24 md:py-36">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.18em] text-muted-foreground">A local point of view</p>
            <h2 className="font-display text-5xl leading-[0.9] tracking-[-0.06em] md:text-8xl">Rooted in Devon.<br /><span className="text-primary">Open to everywhere.</span></h2>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <Image src="/images/barnstaple-reflected-in-water.webp" alt="Barnstaple riverside reflected in the water" fill className="object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0" />
            <div className="absolute bottom-5 left-5 bg-background px-4 py-2 text-xs uppercase tracking-[0.18em]">Barnstaple, Devon</div>
          </div>
        </div>
        <div className="mt-20 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-5 text-sm text-muted-foreground">
          {places.map(([name, href]) => <Link key={name} href={href} className="transition-colors hover:text-primary">{name} ↗</Link>)}
        </div>
      </section>

      <section className="bg-primary px-6 py-24 text-primary-foreground md:py-36">
        <div className="mx-auto max-w-7xl">
          <Asterisk className="mb-10 size-12" aria-hidden="true" />
          <h2 className="max-w-5xl font-display text-6xl leading-[0.86] tracking-[-0.07em] md:text-9xl">Have a good idea?<br />Let&apos;s make it real.</h2>
          <Link href="/contact" className="mt-14 inline-flex items-center gap-4 border-b border-primary-foreground pb-3 text-sm font-semibold uppercase tracking-[0.16em] transition-opacity hover:opacity-70">Get in touch <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>
    </div>
  )
}
