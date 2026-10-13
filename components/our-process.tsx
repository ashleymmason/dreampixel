import type { ReactNode } from "react"

type ProcessStep = {
  title: string
  description: string
}

type OurProcessProps = {
  eyebrow?: string
  title?: string
  subtitle?: string
  steps?: ProcessStep[]
  className?: string
  children?: ReactNode
}

const defaultSteps: ProcessStep[] = [
  {
    title: "Unpicking the Brief",
    description: "We start by getting to grips with your business, your target audience, and what you actually need the site to achieve. No jargon, just getting clear on the goals.",
  },
  {
    title: "Mapping Out the Plan",
    description: "A clear structure and content blueprint so we know exactly how visitors will navigate your site, what copy needs to say, and how to convert leads.",
  },
  {
    title: "Design & Platform Setup",
    description: "Bringing the site to life visually while choosing and configuring the right platform build, ensuring it looks great, loads fast, and is easy to manage.",
  },
  {
    title: "Launch & Ongoing Support",
    description: "Thorough testing across browsers and mobile devices before flipping the switch. After launch, we ensure everything is indexed properly and set up for real results.",
  },
]

export default function OurProcess({
  eyebrow = "How we work",
  title = "From brief to momentum",
  subtitle = "A clear, collaborative route from the first useful question to a digital experience that keeps getting better.",
  steps = defaultSteps,
  className = "",
}: OurProcessProps) {
  return (
    <section className={`border-y border-border bg-card px-6 py-24 md:px-12 md:py-32 ${className}`}>
      <div className="container grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
        <header className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-xs uppercase tracking-[.3em] text-primary">{eyebrow}</p>
          <h2 className="mt-6 max-w-lg font-display text-5xl font-black leading-[.9] tracking-[-.06em] md:text-7xl">{title}</h2>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
        </header>
        <ol className="relative flex flex-col before:absolute before:bottom-8 before:left-[1.15rem] before:top-8 before:w-px before:bg-border md:before:left-[1.35rem]">
          {steps.map((step, index) => (
            <li key={step.title} className="relative grid gap-6 border-t border-border py-8 first:border-t-0 md:grid-cols-[3.5rem_1fr] md:gap-8 md:py-10">
              <span className="relative z-10 flex size-11 items-center justify-center rounded-full border border-primary bg-card font-mono text-xs font-semibold text-primary" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-3xl font-bold leading-tight tracking-[-.04em] md:text-4xl">{step.title}</h3>
                <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
