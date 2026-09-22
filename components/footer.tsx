import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16 md:py-24">
        <div className="flex flex-col gap-16 md:flex-row md:justify-between">
          <div><Link href="/" className="font-display text-3xl font-bold tracking-[-0.08em]">dream<span className="text-primary">*</span>pixel</Link><p className="mt-6 max-w-xs text-sm leading-6 text-background/60">An independent digital studio for brands with somewhere to go.</p></div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm text-background/70"><Link href="/portfolio" className="hover:text-primary">Work</Link><Link href="/services/web-design" className="hover:text-primary">Services</Link><Link href="/about" className="hover:text-primary">About</Link><Link href="/contact" className="hover:text-primary">Contact</Link><Link href="/privacy-policy" className="hover:text-primary">Privacy</Link><Link href="/terms-of-service" className="hover:text-primary">Terms</Link></div>
        </div>
        <div className="mt-20 flex flex-col gap-4 border-t border-background/20 pt-5 text-xs uppercase tracking-[0.16em] text-background/50 md:flex-row md:justify-between"><span>© {new Date().getFullYear()} Dream Pixel</span><a href="mailto:info@dreampixel.co.uk" className="inline-flex items-center gap-2 hover:text-primary">info@dreampixel.co.uk <ArrowUpRight aria-hidden="true" /></a></div>
      </div>
    </footer>
  )
}
export default Footer
