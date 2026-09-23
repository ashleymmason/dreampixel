"use client"

import { useState } from "react"
import { AlertCircle, Check, Loader2 } from "lucide-react"
import { sendEmail } from "@/app/actions/send-email"

type FormState = {
  name: string
  email: string
  company: string
  services: string[]
  projectType: string
  goals: string
  budget: string
  timeline: string
  website: string
  referral: string
}

const initialState: FormState = { name: "", email: "", company: "", services: [], projectType: "", goals: "", budget: "", timeline: "", website: "", referral: "" }
const serviceOptions = ["Website Design", "Website Redesign", "E-commerce", "SEO", "Website Development", "Ongoing Support", "Something Else"]
const projectTypes = ["New website", "Existing website", "E-commerce", "SEO / Growth", "Other"]
const budgets = ["Under £5k", "£5k–£10k", "£10k–£20k", "£20k+", "Not sure yet"]
const timelines = ["As soon as possible", "1–3 months", "3–6 months", "6+ months", "Just exploring"]

function Field({ label, htmlFor, optional, children }: { label: string; htmlFor?: string; optional?: boolean; children: React.ReactNode }) {
  return <div className="flex flex-col gap-2"><label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground" htmlFor={htmlFor}>{label} {optional && <span className="text-muted-foreground/60">(optional)</span>}</label>{children}</div>
}

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [error, setError] = useState("")
  const update = (key: keyof FormState, value: string) => setForm((current) => ({ ...current, [key]: value }))
  const toggleService = (service: string) => setForm((current) => ({ ...current, services: current.services.includes(service) ? current.services.filter((item) => item !== service) : [...current.services, service] }))

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError("")
    if (!form.services.length) {
      setStatus("error")
      setError("Please choose at least one service so we know how to help.")
      return
    }
    setStatus("sending")
    const result = await sendEmail(form)
    if (result.success) setStatus("success")
    else { setStatus("error"); setError(result.message || "Something went wrong. Please try again.") }
  }

  if (status === "success") return <div aria-live="polite" className="flex min-h-[28rem] flex-col justify-center border border-accent/40 bg-accent/10 p-8 md:p-12"><span className="mb-8 flex size-12 items-center justify-center bg-accent text-accent-foreground"><Check className="size-6" /></span><p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">Enquiry received</p><h3 className="font-display text-5xl font-medium leading-none tracking-[-0.06em] text-foreground md:text-7xl">Nice. We&apos;ve got it.</h3><p className="mt-6 max-w-md leading-7 text-muted-foreground">Thanks for sending over the details. We&apos;ll take a look and get back to you shortly.</p><div className="mt-10 flex flex-wrap gap-6 font-mono text-xs uppercase tracking-[0.18em]"><a className="text-primary hover:text-accent" href="/">Back to home</a><a className="text-primary hover:text-accent" href="/portfolio">View our work</a></div></div>

  return <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
    <div className="grid gap-6 md:grid-cols-2"><Field label="Name *" htmlFor="name"><input autoComplete="name" className="contact-input" id="name" name="name" onChange={(e) => update("name", e.target.value)} required value={form.name} /></Field><Field label="Email *" htmlFor="email"><input autoComplete="email" className="contact-input" id="email" name="email" onChange={(e) => update("email", e.target.value)} required type="email" value={form.email} /></Field></div>
    <Field label="Company" htmlFor="company" optional><input autoComplete="organization" className="contact-input" id="company" name="company" onChange={(e) => update("company", e.target.value)} value={form.company} /></Field>
    <fieldset><legend className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">What can we help with? *</legend><div className="grid gap-3 sm:grid-cols-2">{serviceOptions.map((service) => <label className={`choice ${form.services.includes(service) ? "choice-active" : ""}`} key={service}><input checked={form.services.includes(service)} name="services" onChange={() => toggleService(service)} type="checkbox" /><span>{service}</span></label>)}</div></fieldset>
    <fieldset><legend className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Project type</legend><div className="flex flex-wrap gap-3">{projectTypes.map((item) => <label className={`choice ${form.projectType === item ? "choice-active" : ""}`} key={item}><input checked={form.projectType === item} name="projectType" onChange={() => update("projectType", item)} type="radio" /><span>{item}</span></label>)}</div></fieldset>
    <Field label="What are you looking to achieve? *" htmlFor="goals"><textarea className="contact-input min-h-36 resize-y" id="goals" name="goals" onChange={(e) => update("goals", e.target.value)} required value={form.goals} /></Field>
    <div className="grid gap-8 md:grid-cols-2"><fieldset><legend className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Budget</legend><div className="flex flex-col gap-2">{budgets.map((item) => <label className={`choice ${form.budget === item ? "choice-active" : ""}`} key={item}><input checked={form.budget === item} name="budget" onChange={() => update("budget", item)} type="radio" /><span>{item}</span></label>)}</div></fieldset><fieldset><legend className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Timeline</legend><div className="flex flex-col gap-2">{timelines.map((item) => <label className={`choice ${form.timeline === item ? "choice-active" : ""}`} key={item}><input checked={form.timeline === item} name="timeline" onChange={() => update("timeline", item)} type="radio" /><span>{item}</span></label>)}</div></fieldset></div>
    <div className="grid gap-6 md:grid-cols-2"><Field label="Current website" htmlFor="website" optional><input className="contact-input" id="website" name="website" onChange={(e) => update("website", e.target.value)} type="url" value={form.website} /></Field><Field label="How did you hear about us?" htmlFor="referral" optional><input className="contact-input" id="referral" name="referral" onChange={(e) => update("referral", e.target.value)} value={form.referral} /></Field></div>
    {status === "error" && <div aria-live="assertive" className="flex gap-3 border border-destructive/40 bg-destructive/10 p-4 text-sm text-foreground"><AlertCircle className="size-5 shrink-0 text-destructive" />{error}</div>}
    <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-xs text-xs leading-5 text-muted-foreground">Not sure what to say? A rough idea is more than enough to start.</p><button className="inline-flex min-h-14 items-center justify-center gap-3 bg-primary px-6 font-mono text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground disabled:cursor-wait disabled:opacity-60" disabled={status === "sending"} type="submit">{status === "sending" && <Loader2 className="size-4 animate-spin" />} {status === "sending" ? "Sending enquiry" : "Start the conversation"}</button></div>
  </form>
}

