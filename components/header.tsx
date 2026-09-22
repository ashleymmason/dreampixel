"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [["Work", "/portfolio"], ["Services", "/services/web-design"], ["About", "/about"], ["Contact", "/contact"]]

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="font-display text-2xl font-bold tracking-[-0.08em]" onClick={() => setOpen(false)}>dream<span className="text-primary">*</span>pixel</Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => <Link key={label} href={href} className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground">{label}</Link>)}
        </nav>
        <Link href="/contact" className="hidden border border-foreground px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-foreground hover:text-background md:inline-flex">Let&apos;s talk <span className="ml-3 text-primary">↗</span></Link>
        <button type="button" className="md:hidden" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      <div className={cn("container border-t border-border py-8 md:hidden", open ? "block" : "hidden")}>
        <nav className="flex flex-col gap-6">
          {links.map(([label, href]) => <Link key={label} href={href} className="font-display text-4xl tracking-[-0.05em]" onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
      </div>
    </header>
  )
}
export default Header
