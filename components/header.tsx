"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const locations = [
  { name: "Barnstaple", href: "/web-design-barnstaple" },
  { name: "Bideford", href: "/web-design-bideford" },
  { name: "Exeter", href: "/web-design-exeter" },
  { name: "Plymouth", href: "/web-design-plymouth" },
  { name: "Torquay", href: "/web-design-torquay" },
]

const services = [
  { name: "Web Design", href: "/services/web-design" },
  { name: "SEO", href: "/services/seo" },
  { name: "PPC", href: "/services/ppc" },
  { name: "Content Creation", href: "/services/content" },
  { name: "Backlink Building", href: "/services/backlinks" },
  { name: "UX/UI Design", href: "/services/ux-ui" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/dream-pixel-logo.png"
            alt="Dream Pixel Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="bg-gray-100/80 backdrop-blur-sm rounded-full px-2 py-2 flex items-center space-x-1">
            <Link
              href="/"
              className="relative px-4 py-2 text-sm font-medium transition-colors rounded-full hover:text-primary"
            >
              <span className="relative z-10">Home</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-green-500/90 rounded-full opacity-0 hover:opacity-10 transition-opacity"></span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="relative px-4 py-2 text-sm font-medium transition-colors rounded-full hover:text-primary">
                  <span className="relative z-10">Services</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-green-500/90 rounded-full opacity-0 hover:opacity-10 transition-opacity"></span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link href={service.href}>{service.name}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild>
                  <Link href="/services/hosting">Hosting</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="relative px-4 py-2 text-sm font-medium transition-colors rounded-full hover:text-primary">
                  <span className="relative z-10">Locations</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-green-500/90 rounded-full opacity-0 hover:opacity-10 transition-opacity"></span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {locations.map((location) => (
                  <DropdownMenuItem key={location.name} asChild>
                    <Link href={location.href}>{location.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/portfolio"
              className="relative px-4 py-2 text-sm font-medium transition-colors rounded-full hover:text-primary"
            >
              <span className="relative z-10">Portfolio</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-green-500/90 rounded-full opacity-0 hover:opacity-10 transition-opacity"></span>
            </Link>

            <Link
              href="/about"
              className="relative px-4 py-2 text-sm font-medium transition-colors rounded-full hover:text-primary"
            >
              <span className="relative z-10">About</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-green-500/90 rounded-full opacity-0 hover:opacity-10 transition-opacity"></span>
            </Link>

            <Link
              href="/contact"
              className="relative px-4 py-2 text-sm font-medium transition-colors rounded-full hover:text-primary"
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-green-500/90 rounded-full opacity-0 hover:opacity-10 transition-opacity"></span>
            </Link>
          </div>
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600"
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button type="button" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-background",
          mobileMenuOpen ? "slide-in-from-bottom-80" : "hidden",
        )}
      >
        <div className="relative z-20 grid gap-6 rounded-md p-4">
          <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
            <span className="font-medium">Home</span>
          </Link>
          <div className="grid gap-3">
            <div className="font-medium">Services</div>
            <div className="grid grid-cols-1 gap-3 pl-4">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-3">
            <Link href="/locations" className="font-medium" onClick={() => setMobileMenuOpen(false)}>
              Locations
            </Link>
            <div className="grid grid-cols-1 gap-3 pl-4">
              {locations.map((location) => (
                <Link
                  key={location.name}
                  href={location.href}
                  className="text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {location.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/portfolio" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
            <span className="font-medium">Portfolio</span>
          </Link>
          <Link href="/about" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
            <span className="font-medium">About</span>
          </Link>
          <Link href="/contact" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
            <span className="font-medium">Contact</span>
          </Link>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600"
          >
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              Get a Quote
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

// Keep the default export for backward compatibility
export default Header
