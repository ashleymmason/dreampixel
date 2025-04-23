import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import DiscoveryAnimation from "@/components/animations/discovery-animation"
import DesignAnimation from "@/components/animations/design-animation"
import DevelopmentAnimation from "@/components/animations/development-animation"
import LaunchAnimation from "@/components/animations/launch-animation"
import LocationCTAAnimation from "@/components/animations/location-cta-animation"

export const metadata = {
  title: "Web Design in Torquay | Professional Website Design Services",
  description:
    "Expert web design services in Torquay. We create beautiful, functional websites that help your business stand out and convert visitors into customers.",
}

export default function WebDesignTorquay() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/torquay-harbor.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/95"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Web Design in{" "}
              <span className="bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
                Torquay
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professional, creative web design services for businesses in Torquay, the heart of the English Riviera.
              Stand out from the competition with a website that converts visitors into customers.
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
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Torquay-Focused Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Fast Turnaround Times</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Affordable Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Web Design in Torquay */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Web Design Services in Torquay</h2>
              <p className="text-lg text-muted-foreground">
                At Dream Pixel, we provide comprehensive web design services to businesses in Torquay, the jewel of the
                English Riviera. Our team of experienced designers and developers create websites that not only look
                stunning but also drive results for your business in this popular tourist destination.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you're a hotel on the seafront, a restaurant in the harbor, a tourist attraction, or any other
                Torquay enterprise, we tailor our web design services to meet your specific needs and goals. From
                responsive design to e-commerce functionality, we have the expertise to bring your vision to life.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Responsive Design</h3>
                    <p className="text-sm text-muted-foreground">Looks great on all devices</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">SEO Optimized</h3>
                    <p className="text-sm text-muted-foreground">Rank higher in Torquay searches</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Fast Loading</h3>
                    <p className="text-sm text-muted-foreground">Optimized for performance</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">User-Friendly</h3>
                    <p className="text-sm text-muted-foreground">Intuitive navigation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-green-100 rounded-full blur-3xl opacity-30"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/torquay.jpg-s6xKEqtf67GNqcaSxTZyjhgikmfpcv.jpeg"
                alt="Torquay harbor with boats and buildings along the waterfront"
                width={600}
                height={600}
                className="relative z-10 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Dream Pixel for Web Design in Torquay?</h2>
            <p className="text-xl text-muted-foreground">
              We understand Torquay's tourism-focused economy and create websites that attract visitors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-purple-600">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Tourism Expertise</h3>
                <p className="text-muted-foreground">
                  We understand Torquay's tourism-driven economy and create websites that appeal to visitors while
                  effectively showcasing what makes your business special in the English Riviera.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Seasonal Business Focus</h3>
                <p className="text-muted-foreground">
                  We design websites that help you maximize business during peak tourist seasons while maintaining
                  visibility and generating leads during quieter periods.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Results-Driven Approach</h3>
                <p className="text-muted-foreground">
                  We focus on creating websites that not only look great but also drive conversions and help you achieve
                  your business objectives in Torquay's competitive tourism market.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Affordable Pricing</h3>
                <p className="text-muted-foreground">
                  We offer competitive pricing without compromising on quality, making professional web design
                  accessible to businesses of all sizes in Torquay, from small B&Bs to large attractions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-purple-600">5</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  Our relationship doesn't end when your website launches. We provide ongoing support and maintenance to
                  ensure your Torquay business continues to thrive online.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-green-600">6</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Full-Service Digital Agency</h3>
                <p className="text-muted-foreground">
                  Beyond web design, we offer SEO, content creation, and other digital marketing services to help your
                  Torquay business establish a strong online presence in this competitive tourist destination.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Web Design Process for Torquay Businesses</h2>
            <p className="text-xl text-muted-foreground">A streamlined approach to creating your perfect website</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-200 to-green-200 hidden md:block"></div>

            <div className="space-y-12 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right space-y-4 order-2 md:order-1">
                  <h3 className="text-2xl font-bold">1. Discovery</h3>
                  <p className="text-muted-foreground">
                    We start by understanding your Torquay business, your goals, target audience, and local competitors
                    to create a strategic plan for your website that resonates with both locals and tourists.
                  </p>
                </div>
                <div className="relative order-1 md:order-2">
                  <div className="absolute -inset-4 bg-purple-100 rounded-full blur-3xl opacity-30 hidden md:block"></div>
                  <div className="md:pl-12 relative">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center justify-center text-2xl font-bold absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 hidden md:flex">
                      1
                    </div>
                    <DiscoveryAnimation />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-green-100 rounded-full blur-3xl opacity-30 hidden md:block"></div>
                  <div className="md:pr-12 relative">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-center text-2xl font-bold absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 hidden md:flex">
                      2
                    </div>
                    <DesignAnimation />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">2. Design</h3>
                  <p className="text-muted-foreground">
                    Our designers create wireframes and mockups of your website, focusing on user experience, brand
                    consistency, and elements that will appeal to your Torquay customer base and visitors to the area.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right space-y-4 order-2 md:order-1">
                  <h3 className="text-2xl font-bold">3. Development</h3>
                  <p className="text-muted-foreground">
                    Our developers bring the designs to life, building a responsive, fast-loading website with clean
                    code and SEO best practices tailored to help you rank for Torquay and English Riviera-related
                    searches.
                  </p>
                </div>
                <div className="relative order-1 md:order-2">
                  <div className="absolute -inset-4 bg-purple-100 rounded-full blur-3xl opacity-30 hidden md:block"></div>
                  <div className="md:pl-12 relative">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center justify-center text-2xl font-bold absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 hidden md:flex">
                      3
                    </div>
                    <DevelopmentAnimation />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-green-100 rounded-full blur-3xl opacity-30 hidden md:block"></div>
                  <div className="md:pr-12 relative">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-center text-2xl font-bold absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 hidden md:flex">
                      4
                    </div>
                    <LaunchAnimation />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">4. Testing & Launch</h3>
                  <p className="text-muted-foreground">
                    We thoroughly test your website across different devices and browsers before launching it to ensure
                    everything works perfectly for your Torquay customers and visitors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-50 to-green-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to elevate your Torquay business online?</h2>
              <p className="text-xl text-muted-foreground">
                Contact us today for a free consultation and quote. Let's create a website that helps your Torquay
                business stand out in the English Riviera and attract more customers from both the local area and
                visitors.
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
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-green-100 rounded-full blur-3xl opacity-30"></div>
              <LocationCTAAnimation />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
