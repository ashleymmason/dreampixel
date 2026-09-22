import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const explore = [["Work", "/portfolio"], ["Services", "/services"], ["About", "/about"], ["Insights", "/insights"], ["Contact", "/contact"]]
const services = [["Web Design", "/services/web-design"], ["Development", "/services/web-development"], ["E-commerce", "/services/e-commerce"], ["SEO", "/services/seo"], ["Local SEO", "/services/local-seo"], ["Maintenance", "/services/maintenance"]]

export function Footer() {
  return <footer className="border-t border-border bg-card text-foreground">
    <div className="container border-b border-border py-20 md:py-32">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div><p className="eyebrow mb-5 text-primary">Have something in mind?</p><h2 className="max-w-3xl font-display text-5xl leading-[.95] tracking-[-0.07em] md:text-8xl">Let&apos;s make it<br /><span className="text-primary">worth finding.</span></h2></div>
        <Link href="/contact" className="button-primary shrink-0">Start a project <ArrowUpRight data-icon="inline-end" aria-hidden="true" /></Link>
      </div>
    </div>
    <div className="container py-14 md:py-20">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-8">
        <div><Link href="/" className="inline-flex" aria-label="Dream Pixel home"><Image src="/images/dream-pixel-logo.png" alt="Dream Pixel" width={184} height={28} className="h-auto w-40" /></Link><p className="mt-6 max-w-xs text-sm leading-6 text-muted-foreground">An independent digital studio for brands with somewhere to go.</p><p className="mt-8 text-xs uppercase tracking-[0.16em] text-muted-foreground">Barnstaple · Devon · UK</p></div>
        <div><p className="eyebrow mb-5 text-accent">Explore</p><div className="flex flex-col items-start gap-3">{explore.map(([label, href]) => <Link key={label} href={href} className="footer-link">{label}</Link>)}</div></div>
        <div><p className="eyebrow mb-5 text-accent">Services</p><div className="flex flex-col items-start gap-3">{services.map(([label, href]) => <Link key={label} href={href} className="footer-link">{label}</Link>)}</div></div>
        <div><p className="eyebrow mb-5 text-accent">Connect</p><a href="mailto:info@dreampixel.co.uk" className="footer-link inline-flex items-center gap-2">Email us <ArrowUpRight aria-hidden="true" /></a><p className="mt-5 max-w-[14rem] text-sm leading-6 text-muted-foreground">Good conversations start with hello.</p></div>
      </div>
      <div className="mt-16 flex flex-col gap-4 border-t border-border pt-5 text-xs uppercase tracking-[0.14em] text-muted-foreground md:flex-row md:items-center md:justify-between"><span>© {new Date().getFullYear()} Dream Pixel</span><div className="flex gap-5"><Link href="/privacy-policy" className="footer-link">Privacy</Link><Link href="/terms-of-service" className="footer-link">Terms</Link><Link href="/accessibility" className="footer-link">Accessibility</Link></div></div>
    </div>
  </footer>
}
export default Footer
