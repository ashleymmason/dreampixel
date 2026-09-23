import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Accessibility | Dream Pixel",
  description: "Dream Pixel's commitment to making its website and digital work accessible to as many people as possible.",
}

export default function AccessibilityPage() {
  return (
    <main>
      <section className="bg-primary px-6 py-24 text-primary-foreground md:px-12 md:py-36">
        <div className="container">
          <p className="eyebrow text-primary-foreground/70">Accessibility</p>
          <h1 className="mt-6 max-w-4xl font-display text-6xl leading-[.86] tracking-[-.07em] md:text-9xl">Digital experiences should be useful to everyone.</h1>
          <p className="mt-10 max-w-2xl text-lg leading-7 text-primary-foreground/80">We aim to make the Dream Pixel website and the websites we create clear, usable and accessible across devices, browsers and assistive technologies.</p>
        </div>
      </section>
      <section className="container grid gap-12 px-6 py-20 md:grid-cols-[.7fr_1.3fr] md:px-12 md:py-32">
        <h2 className="font-display text-5xl leading-[.9] tracking-[-.06em]">Our approach</h2>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>We work towards the Web Content Accessibility Guidelines (WCAG) and consider accessibility from the beginning of a project, not as a final checklist. That includes semantic structure, keyboard access, readable contrast, meaningful focus states, sensible heading order, descriptive alternatives for images and responsive layouts.</p>
          <p>Accessibility is an ongoing practice. If you find something on this website that makes it difficult to use, please let us know and we will investigate it.</p>
          <p>Email <a className="font-semibold text-foreground underline underline-offset-4" href="mailto:hello@dreampixel.co.uk">hello@dreampixel.co.uk</a> with the page you were visiting, what went wrong and any assistive technology or browser details you are comfortable sharing.</p>
          <Link href="/contact" className="button-primary inline-flex">Contact Dream Pixel</Link>
        </div>
      </section>
    </main>
  )
}
