import Link from "next/link"

import { ArrowUpRight, Check, Mail, MapPin } from "lucide-react"
import ContactForm from "@/components/contact-form"

const steps = [
  ["01", "You tell us about the project."],
  ["02", "We review what you need."],
  ["03", "We arrange a conversation if it feels like a good fit."],
  ["04", "We scope the project together."],
]

export const metadata = {
  title: "Start a Project | Dream Pixel",
  description: "Tell us what you are working on and start a conversation about a better digital experience.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative bg-background px-6 pb-20 pt-28 md:px-12 md:pb-28 md:pt-40">
        <div className="pointer-events-none absolute right-[-12rem] top-16 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-24">
            <div>
              <p className="mb-8 font-mono text-xs uppercase tracking-[0.28em] text-accent">Start a project</p>
              <h1 className="max-w-4xl font-display text-6xl font-medium leading-[0.9] tracking-[-0.07em] text-foreground md:text-8xl lg:text-[8.5rem]">
                Let&apos;s build something worth finding.
              </h1>
            </div>
            <div className="max-w-md border-l border-border pl-6 pb-2 md:pl-8">
              <p className="text-lg leading-7 text-muted-foreground md:text-xl">
                Have a new website in mind, need to rethink an existing one, or want to make your current site work harder? Tell us a little about what you&apos;re working on.
              </p>
              <div className="mt-10 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                <span className="size-2 rounded-full bg-accent" /> No finished brief required
              </div>
            </div>
          </div>
          <div className="mt-20 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-12 bg-primary" /> Tell us where to begin <span className="text-primary">↓</span>
          </div>
        </div>
      </section>

      <section className="bg-card px-6 py-16 md:px-12 md:py-24" id="enquiry">
        <div className="container grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <aside className="flex flex-col justify-between gap-16">
            <div>
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-primary">The first step</p>
              <h2 className="max-w-sm font-display text-4xl font-medium leading-none tracking-[-0.05em] text-foreground md:text-6xl">
                A good project starts with a good conversation.
              </h2>
              <p className="mt-7 max-w-sm leading-7 text-muted-foreground">
                Share the shape of the challenge. We&apos;ll bring the questions, experience and a clear next step.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">What happens next</p>
              <div className="flex flex-col gap-5">
                {steps.map(([number, label]) => (
                  <div className="flex gap-4" key={number}>
                    <span className="font-mono text-xs text-accent">{number}</span>
                    <span className="max-w-xs text-sm leading-5 text-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 border-t border-border pt-6 sm:grid-cols-2 lg:grid-cols-1">
              <a className="group flex items-start gap-3" href="mailto:info@dreampixel.co.uk">
                <Mail className="mt-0.5 size-4 text-primary" />
                <span><span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Email</span><span className="text-sm text-foreground group-hover:text-primary">info@dreampixel.co.uk</span></span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-accent" />
                <span><span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Based in</span><span className="text-sm text-foreground">Barnstaple, Devon</span></span>
              </div>
            </div>
          </aside>

          <div className="border border-border bg-background p-6 md:p-10">
            <div className="mb-10 flex items-start justify-between gap-4 border-b border-border pb-6">
              <div><p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Project enquiry</p><p className="mt-2 text-sm text-muted-foreground">Fields marked * are required.</p></div>
              <span className="font-mono text-xs text-muted-foreground">DP / 01</span>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-primary px-6 py-16 text-primary-foreground md:px-12 md:py-24">
        <div className="container grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground/70">Not sure what you need?</p><h2 className="max-w-2xl font-display text-4xl font-medium leading-none tracking-[-0.05em] md:text-6xl">That&apos;s completely fine. Start with the rough idea.</h2></div>
          <p className="max-w-xs text-sm leading-6 text-primary-foreground/75">Your project details stay confidential. A clear brief can come later.</p>
        </div>
      </section>

      <section className="bg-background px-6 py-16 md:px-12 md:py-24">
        <div className="container flex flex-col gap-8 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl font-display text-3xl leading-tight tracking-[-0.04em] text-foreground md:text-4xl">Prefer to explore first? See what we&apos;ve been making.</p>
          <Link className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary" href="/portfolio">View our work <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>
        </div>
      </section>
    </main>
  )
}

export function ContactTrustMark() {
  return <span aria-hidden="true"><Check className="size-4" /></span>
}
