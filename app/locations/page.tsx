import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MapPin } from "lucide-react"

export const metadata = {
  title: "Web Design Locations in Devon | Dream Pixel",
  description:
    "Professional web design services throughout Devon. We create beautiful, functional websites for businesses in Barnstaple, Bideford, Exeter, Plymouth, Torquay, and beyond.",
}

export default function Locations() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/95"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Web Design in{" "}
              <span className="bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">Devon</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professional web design services throughout Devon. We create beautiful, functional websites for businesses
              in Barnstaple, Bideford, Exeter, Plymouth, Torquay, and beyond.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
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
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas We Serve</h2>
            <p className="text-xl text-muted-foreground">Web design and digital marketing services throughout Devon</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/web-design-barnstaple" className="group">
              <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/barnstaple-reflected-in-water.webp"
                    alt="Barnstaple riverside with historic buildings reflected in water"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Barnstaple</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-2 mb-4">
                    <MapPin className="h-5 w-5 text-purple-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">North Devon</h3>
                      <p className="text-sm text-muted-foreground">Our home base</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    As a Barnstaple-based business, we provide expert web design services to local businesses, helping
                    them establish a strong online presence.
                  </p>
                  <div className="flex items-center text-purple-600 font-medium group-hover:underline">
                    Learn more about our Barnstaple web design services
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/web-design-bideford" className="group">
              <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/bideford-waterfront.png"
                    alt="Bideford waterfront with historic buildings and bridge"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Bideford</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-2 mb-4">
                    <MapPin className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">North Devon</h3>
                      <p className="text-sm text-muted-foreground">Historic port town</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    We help Bideford businesses stand out online with custom web design services tailored to the local
                    market and customer needs.
                  </p>
                  <div className="flex items-center text-green-600 font-medium group-hover:underline">
                    Learn more about our Bideford web design services
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/web-design-exeter" className="group">
              <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/exeter-aerial-view.jpeg"
                    alt="Aerial view of Exeter with River Exe and cityscape"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Exeter</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-2 mb-4">
                    <MapPin className="h-5 w-5 text-purple-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">East Devon</h3>
                      <p className="text-sm text-muted-foreground">Cathedral city</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Our web design services help Exeter businesses compete in a dynamic market with websites that
                    capture attention and drive conversions.
                  </p>
                  <div className="flex items-center text-purple-600 font-medium group-hover:underline">
                    Learn more about our Exeter web design services
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/web-design-plymouth" className="group">
              <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/plymouth-hoe-aerial.jpeg"
                    alt="Aerial view of Plymouth Hoe with Smeaton's Tower lighthouse and coastline"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Plymouth</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-2 mb-4">
                    <MapPin className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">South Devon</h3>
                      <p className="text-sm text-muted-foreground">Ocean city</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    We create modern, responsive websites for Plymouth businesses that help them stand out in a
                    competitive market and reach more customers.
                  </p>
                  <div className="flex items-center text-green-600 font-medium group-hover:underline">
                    Learn more about our Plymouth web design services
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/web-design-torquay" className="group">
              <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/torquay-harbor.jpeg"
                    alt="Torquay harbor with boats and waterfront buildings"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Torquay</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-2 mb-4">
                    <MapPin className="h-5 w-5 text-purple-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">South Devon</h3>
                      <p className="text-sm text-muted-foreground">English Riviera</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Our web design services help Torquay businesses in the tourism and hospitality sectors attract more
                    visitors with engaging, conversion-focused websites.
                  </p>
                  <div className="flex items-center text-purple-600 font-medium group-hover:underline">
                    Learn more about our Torquay web design services
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Card className="overflow-hidden bg-gradient-to-br from-purple-500 to-green-500 text-white hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="p-6 flex flex-col h-full justify-center items-center text-center">
                <h3 className="text-2xl font-bold mb-4">Serving All of Devon</h3>
                <p className="mb-6">
                  We provide web design and digital marketing services throughout Devon and the surrounding areas. If
                  you don't see your location listed, don't worry – we can still help!
                </p>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose a Local Web Designer?</h2>
              <p className="text-lg text-muted-foreground">
                Working with a local web design agency in Devon offers numerous advantages for your business. We
                understand the local market, can meet face-to-face, and are invested in the success of our community.
              </p>

              <div className="grid gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Local Market Knowledge</h3>
                    <p className="text-sm text-muted-foreground">We understand Devon's unique business landscape</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Face-to-Face Meetings</h3>
                    <p className="text-sm text-muted-foreground">In-person consultations and project discussions</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Supporting Local Business</h3>
                    <p className="text-sm text-muted-foreground">Investing in our community's economic growth</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Responsive Support</h3>
                    <p className="text-sm text-muted-foreground">Quick assistance when you need it</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-green-100 rounded-full blur-3xl opacity-30"></div>
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Devon Map"
                width={600}
                height={600}
                className="relative z-10 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-50 to-green-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today to discuss your project and see how we can help your Devon business succeed online.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600"
            >
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
