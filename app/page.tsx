import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Monitor, Search, Zap, Users, BarChart, Code } from "lucide-react"
import TestimonialCarousel from "@/components/testimonial-carousel"
import GrowthAnimation from "@/components/growth-animation"
import AnalyticsDebugger from "@/components/analytics-debugger"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/95"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Turning{" "}
                <span className="bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
                  dreams
                </span>{" "}
                into digital reality
              </h1>
              <p className="text-xl text-muted-foreground">
                We create beautiful, functional websites that help your business stand out in the digital landscape.
                Based in Barnstaple, serving all of Devon and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600"
                >
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No obligation consultation</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-green-100 rounded-full blur-3xl opacity-30"></div>
              <Image
                src="/images/responsive-showcase.png"
                alt="Responsive website designs on multiple devices"
                width={600}
                height={400}
                className="relative z-10 rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital solutions to help your business thrive online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <Monitor className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Web Design</h3>
                <p className="text-muted-foreground mb-4">
                  Beautiful, responsive websites that look great on all devices and help convert visitors into
                  customers.
                </p>
                <Link
                  href="/services/web-design"
                  className="group inline-flex items-center text-purple-600 font-medium"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <Search className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">SEO</h3>
                <p className="text-muted-foreground mb-4">
                  Improve your search engine rankings and drive more organic traffic to your website.
                </p>
                <Link href="/services/seo" className="group inline-flex items-center text-green-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <Zap className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">PPC</h3>
                <p className="text-muted-foreground mb-4">
                  Targeted pay-per-click advertising campaigns that deliver immediate results and ROI.
                </p>
                <Link href="/services/ppc" className="group inline-flex items-center text-purple-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">UX/UI Design</h3>
                <p className="text-muted-foreground mb-4">
                  User-centered design that creates intuitive, enjoyable experiences for your customers.
                </p>
                <Link href="/services/ux-ui" className="group inline-flex items-center text-green-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <BarChart className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Content Creation</h3>
                <p className="text-muted-foreground mb-4">
                  Engaging, SEO-optimized content that resonates with your audience and drives engagement.
                </p>
                <Link href="/services/content" className="group inline-flex items-center text-purple-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <Code className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Backlink Building</h3>
                <p className="text-muted-foreground mb-4">
                  Strategic link building to improve your site's authority and search engine rankings.
                </p>
                <Link href="/services/backlinks" className="group inline-flex items-center text-green-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving All of Devon</h2>
            <p className="text-xl text-muted-foreground">
              Local web design and digital marketing services throughout Devon
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/web-design-barnstaple" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src="/images/barnstaple-reflected-in-water.webp"
                  alt="Barnstaple riverside with historic buildings reflected in water"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">Barnstaple</h3>
                  <p className="text-white/80">Web Design Services</p>
                </div>
              </div>
            </Link>

            <Link href="/web-design-bideford" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src="/images/bideford-waterfront.png"
                  alt="Bideford waterfront with historic buildings and bridge"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">Bideford</h3>
                  <p className="text-white/80">Web Design Services</p>
                </div>
              </div>
            </Link>

            <Link href="/web-design-exeter" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src="/images/exeter-aerial-view.jpeg"
                  alt="Aerial view of Exeter with River Exe and cityscape"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">Exeter</h3>
                  <p className="text-white/80">Web Design Services</p>
                </div>
              </div>
            </Link>

            <Link href="/web-design-plymouth" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src="/images/plymouth-hoe-aerial.jpeg"
                  alt="Aerial view of Plymouth Hoe with Smeaton's Tower lighthouse and coastline"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">Plymouth</h3>
                  <p className="text-white/80">Web Design Services</p>
                </div>
              </div>
            </Link>

            <Link href="/web-design-torquay" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src="/images/torquay-harbor.jpeg"
                  alt="Torquay harbor with boats and waterfront buildings"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">Torquay</h3>
                  <p className="text-white/80">Web Design Services</p>
                </div>
              </div>
            </Link>

            <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-gradient-to-br from-purple-500 to-green-500 flex items-center justify-center p-6">
              <div className="text-center text-white">
                <h3 className="text-xl font-bold mb-2">Serving All of Devon</h3>
                <p className="mb-4">And surrounding areas</p>
                <Button asChild variant="secondary">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-50 to-green-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to transform your online presence?</h2>
              <p className="text-xl text-muted-foreground">
                Let's work together to create a website that truly represents your brand and helps you achieve your
                business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600"
                >
                  <Link href="/contact">Get Started Today</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-green-100 rounded-full blur-3xl opacity-30"></div>
              <GrowthAnimation />
            </div>
          </div>
        </div>
      </section>
      <AnalyticsDebugger />
    </div>
  )
}
