"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ChevronDown, X } from "lucide-react"
import { cn } from "@/lib/utils"

const primaryLinks = [
  ["Work", "/portfolio"],
  ["About", "/about"],
  ["Insights", "/insights"],
] as const

const serviceGroups = [
  { label: "Websites", items: [["Web Design", "/services/web-design"], ["Web Development", "/services/website-development"], ["E-commerce", "/services/ecommerce"], ["Website Redesign", "/services/website-redesign"], ["UX / UI", "/services/web-design"]] },
  { label: "Growth", items: [["SEO", "/services/seo"], ["Local SEO", "/services/local-seo"], ["Technical SEO", "/services/technical-seo"], ["Content", "/services/content"], ["Digital PR", "/services/digital-pr"]] },
  { label: "Ongoing", items: [["Maintenance", "/services/website-maintenance"], ["Hosting", "/services/hosting"], ["Ongoing SEO", "/services/seo"], ["Optimisation", "/services/technical-seo"]] },
] as const

export function Header() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  const closeMenu = () => { setOpen(false); setServicesOpen(false) }

  return (
    <header className={cn("sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl transition-[box-shadow,background-color] duration-300", scrolled && "bg-background/95 shadow-[0_12px_40px_hsl(var(--background)/.35)]")}>
      <div className="container flex h-[4.5rem] items-center justify-between transition-[height] duration-300 md:h-20" data-scrolled={scrolled}>
        <Link href="/" className="shrink-0" onClick={closeMenu} aria-label="Dream Pixel home">
          <Image src="/images/dream-pixel-logo-white.png" alt="Dream Pixel" width={1549} height={298} className="h-auto w-32 md:w-40" priority />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          <Link href="/portfolio" className="nav-link">Work</Link>
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button type="button" className="nav-link inline-flex items-center gap-1" aria-expanded={servicesOpen} onClick={() => setServicesOpen(!servicesOpen)}>
              Services <ChevronDown className={cn("size-3 transition-transform", servicesOpen && "rotate-180")} aria-hidden="true" />
            </button>
            <div className={cn("absolute right-0 top-full mt-5 w-[42rem] border border-border bg-card p-6 shadow-2xl transition-all duration-200", servicesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0")}>
              <div className="grid grid-cols-3 gap-6">
                {serviceGroups.map((group) => <div key={group.label}><p className="eyebrow mb-4 text-primary">{group.label}</p><div className="flex flex-col gap-3">{group.items.map(([label, href]) => <Link key={label} href={href} className="text-sm text-muted-foreground transition-colors hover:text-foreground" onClick={closeMenu}>{label}</Link>)}</div></div>)}
              </div>
              <Link href="/services" className="link-arrow mt-7 inline-flex border-t border-border pt-4 text-sm font-semibold" onClick={closeMenu}>View all services <ArrowUpRight aria-hidden="true" /></Link>
            </div>
          </div>
          {primaryLinks.slice(1).map(([label, href]) => <Link key={label} href={href} className="nav-link">{label}</Link>)}
          <Link href="/locations" className="nav-link">Locations</Link>
          <Link href="/testimonials" className="nav-link">Testimonials</Link>
        </nav>
        <Link href="/contact" className="button-primary hidden md:inline-flex" onClick={closeMenu}>Start a project <ArrowUpRight data-icon="inline-end" aria-hidden="true" /></Link>
        <button type="button" className="inline-flex size-11 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary md:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <span className="flex flex-col gap-1.5" aria-hidden="true"><span className="block h-px w-5 bg-current" /><span className="block h-px w-5 bg-current" /></span>}</button>
      </div>
      <div id="mobile-navigation" className={cn("absolute inset-x-0 top-full z-[60] h-[calc(100dvh-4.5rem)] overflow-y-auto bg-[hsl(var(--background))] px-6 pb-8 pt-6 transition-[opacity,visibility] duration-300 md:hidden", open ? "visible opacity-100" : "invisible opacity-0")}>
        <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
          <Link href="/portfolio" className="font-display text-4xl leading-none tracking-[-0.06em]" onClick={closeMenu}>Work</Link>
          <div className="border-y border-border py-4"><button type="button" className="flex w-full items-center justify-between font-display text-4xl leading-none tracking-[-0.06em]" aria-expanded={servicesOpen} onClick={() => setServicesOpen(!servicesOpen)}>Services <ChevronDown className={cn("size-5 transition-transform", servicesOpen && "rotate-180")} aria-hidden="true" /></button>{servicesOpen && <div className="mt-4 grid gap-4 pl-1"><p className="eyebrow text-primary">Websites · Growth · Ongoing</p><div className="grid grid-cols-2 gap-x-4 gap-y-2">{serviceGroups.flatMap((group) => group.items).map(([label, href]) => <Link key={label} href={href} className="text-base leading-6 text-muted-foreground" onClick={closeMenu}>{label}</Link>)}</div><Link href="/services" className="link-arrow text-sm font-semibold" onClick={closeMenu}>View all services <ArrowUpRight aria-hidden="true" /></Link></div>}</div>
          <Link href="/about" className="font-display text-4xl leading-none tracking-[-0.06em]" onClick={closeMenu}>About</Link>
          <Link href="/insights" className="font-display text-4xl leading-none tracking-[-0.06em]" onClick={closeMenu}>Insights</Link>
          <Link href="/locations" className="font-display text-4xl leading-none tracking-[-0.06em]" onClick={closeMenu}>Locations</Link>
          <Link href="/testimonials" className="font-display text-4xl leading-none tracking-[-0.06em]" onClick={closeMenu}>Testimonials</Link>
          <Link href="/contact" className="button-primary mt-2 w-full justify-between" onClick={closeMenu}>Start a project <ArrowUpRight data-icon="inline-end" aria-hidden="true" /></Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
