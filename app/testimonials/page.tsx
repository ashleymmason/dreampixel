import Link from "next/link"
import { ArrowDownRight, ArrowUpRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Carole Winter",
    business: "Withymead Cottage",
    quote: "Dream Pixel created a new website for our business, the website has everything we asked for and more, it is professional, user friendly and stands out from the crowd. We have found that any small changes we require are implemented quickly so the site remains current at all times. We highly recommend Dream Pixel and would not hesitate to contact them anytime.",
  },
  {
    name: "Richard Summers",
    business: "RCS Tuning",
    quote: "Ash built me my website and is still adding bits I want now. Absolute top guy with lots of talent and has worked all hours for me to get it up and running. Thanks Ash.",
  },
  {
    name: "Levi Tucker",
    quote: "Helped with the current build of my website, will be returning when it comes to getting a full rebuild in the near future. Great service and advice.",
  },
  {
    name: "Charlotte Wilson",
    quote: "10/10 would definitely recommend. Super helpful service and they helped me set up the perfect creative portfolio site, couldn’t be happier.",
  },
  {
    name: "Sheila Shepherd",
    business: "The Sheila Shepherd School of Reflexology",
    quote: "I cannot recommend Dream Pixel enough. They created my website The Sheila Shepherd School of Reflexology within a tight deadline, working very closely with me to get it how I had visualised it. They are continuing to work with me. Their kindness and patience are really appreciated. Thank you so much.",
  },
  {
    name: "Joseph Davis",
    quote: "Courteous and professional, Ash was able to help me with my photography website as I was having some issues with SEO. He was quick to identify the areas that needed fixing and as a result my website performs much better. Would 100% recommend.",
  },
  {
    name: "Emily Tomlin",
    quote: "Fantastic professional service. Incredibly knowledgeable and helped me to get set up through great advice.",
  },
]

export const metadata = {
  title: "Client Testimonials | Dream Pixel Devon",
  description: "Read what businesses and creative professionals say about working with Dream Pixel on websites, branding, SEO and digital growth.",
  alternates: { canonical: "https://www.dreampixel.co.uk/testimonials" },
  openGraph: {
    title: "Client Testimonials | Dream Pixel Devon",
    description: "Read what businesses and creative professionals say about working with Dream Pixel.",
    url: "https://www.dreampixel.co.uk/testimonials",
    type: "website",
  },
}

export default function TestimonialsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Dream Pixel client testimonials",
    url: "https://www.dreampixel.co.uk/testimonials",
    description: metadata.description,
    mainEntity: testimonials.map((testimonial) => ({
      "@type": "Review",
      author: { "@type": "Person", name: testimonial.name },
      reviewBody: testimonial.quote,
      itemReviewed: { "@type": "ProfessionalService", name: "Dream Pixel", url: "https://www.dreampixel.co.uk" },
    })),
  }

  return (
    <main className="overflow-hidden bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="relative border-b border-border px-6 py-24 md:px-12 md:py-40">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] [background-size:4rem_4rem]" />
        <div className="container relative grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="eyebrow mb-8 text-accent">Client words / 01</p>
            <h1 className="max-w-5xl font-display text-6xl font-bold leading-[0.88] tracking-[-0.07em] md:text-8xl lg:text-[8.5rem]">Good work is better when people <span className="text-primary">feel it.</span></h1>
          </div>
          <div className="flex flex-col gap-8 lg:pb-2">
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl">A few words from the businesses, creatives and people Dream Pixel has helped move forward online.</p>
            <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"><span className="h-px w-16 bg-accent" /> Devon / UK / Beyond</div>
          </div>
        </div>
        <div className="container relative mt-20 flex items-center justify-between border-t border-border pt-5 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"><span>Read what they say</span><ArrowDownRight className="text-accent" aria-hidden="true" /></div>
      </section>

      <section className="px-6 py-20 md:px-12 md:py-32">
        <div className="container">
          <div className="mb-14 flex items-end justify-between gap-6 border-b border-border pb-6"><div><p className="eyebrow mb-4 text-primary">The proof / 02</p><h2 className="font-display text-5xl font-bold leading-none tracking-[-0.06em] md:text-7xl">From the people<br /><span className="text-accent">behind the projects.</span></h2></div><span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:block">07 testimonials</span></div>
          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <article key={testimonial.name} className={`flex flex-col justify-between border border-border p-6 md:p-8 ${index === 0 ? "md:col-span-2 md:min-h-72" : "min-h-64"}`}>
                <div><Quote className="mb-8 size-8 text-primary" aria-hidden="true" /><blockquote className="max-w-3xl font-display text-2xl leading-[1.05] tracking-[-0.04em] text-foreground md:text-3xl">“{testimonial.quote}”</blockquote></div>
                <footer className="mt-10 flex items-end justify-between gap-4 border-t border-border pt-5"><div><p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{testimonial.name}</p>{testimonial.business && <p className="mt-2 text-sm text-muted-foreground">{testimonial.business}</p>}</div><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span></footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-6 py-20 text-primary-foreground md:px-12 md:py-32"><div className="container flex flex-col justify-between gap-10 md:flex-row md:items-end"><div><p className="eyebrow mb-6 text-primary-foreground/70">Your next chapter / 03</p><h2 className="max-w-4xl font-display text-6xl font-bold leading-[0.88] tracking-[-0.07em] md:text-8xl">Ready to make<br /><span className="text-foreground">your mark?</span></h2></div><Link href="/contact" className="button-primary bg-foreground text-background hover:bg-background hover:text-foreground">Start a project <ArrowUpRight data-icon="inline-end" aria-hidden="true" /></Link></div></section>
    </main>
  )
}
