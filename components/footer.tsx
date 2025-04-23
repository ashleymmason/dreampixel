import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/dream-pixel-logo.png"
                alt="Dream Pixel Logo"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground">
              Creating beautiful, functional websites that drive results for your business in Devon and beyond.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/dreampixeluk"
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/dreampixeldesign/"
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-design" className="text-muted-foreground hover:text-primary">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-muted-foreground hover:text-primary">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="/services/ppc" className="text-muted-foreground hover:text-primary">
                  PPC
                </Link>
              </li>
              <li>
                <Link href="/services/content" className="text-muted-foreground hover:text-primary">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link href="/services/backlinks" className="text-muted-foreground hover:text-primary">
                  Backlink Building
                </Link>
              </li>
              <li>
                <Link href="/services/ux-ui" className="text-muted-foreground hover:text-primary">
                  UX/UI Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Locations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/web-design-barnstaple" className="text-muted-foreground hover:text-primary">
                  Barnstaple
                </Link>
              </li>
              <li>
                <Link href="/web-design-bideford" className="text-muted-foreground hover:text-primary">
                  Bideford
                </Link>
              </li>
              <li>
                <Link href="/web-design-exeter" className="text-muted-foreground hover:text-primary">
                  Exeter
                </Link>
              </li>
              <li>
                <Link href="/web-design-plymouth" className="text-muted-foreground hover:text-primary">
                  Plymouth
                </Link>
              </li>
              <li>
                <Link href="/web-design-torquay" className="text-muted-foreground hover:text-primary">
                  Torquay
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">Barnstaple, Devon, UK</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">info@dreampixel.co.uk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Dream Pixel. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Keep the default export for backward compatibility
export default Footer
