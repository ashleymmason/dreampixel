"use client"

import { MessageCircle } from "lucide-react"

const whatsappUrl = "https://wa.me/447714028676?text=Hi%20Dream%20Pixel%2C%20I%27d%20like%20to%20talk%20about%20a%20website%20project."

export function MobileActionBar() {
  return (
    <div className="mobile-action-bar" aria-label="Quick contact actions">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-16 w-full items-center justify-center gap-3 border border-accent bg-accent px-6 py-4 text-center text-base font-bold text-accent-foreground shadow-[0_12px_36px_hsl(var(--background)/.45)] transition-transform duration-200 hover:-translate-y-1 focus-visible:-translate-y-1"
        aria-label="Message Dream Pixel on WhatsApp"
      >
        <MessageCircle aria-hidden="true" className="size-6" />
        <span>Message us on WhatsApp</span>
      </a>
    </div>
  )
}

export default MobileActionBar
