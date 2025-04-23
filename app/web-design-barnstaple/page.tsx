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
  title: "Web Design in Barnstaple | Professional Website Design Services",
  description:
    "Expert web design services in Barnstaple. We create beautiful, functional websites that help your business stand out and convert visitors into customers.",
}

export default function WebDesignBarnstaple() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/barnstaple-reflected-in-water.webp')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/95"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Web Design in{" "}
              <span className="bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
                Barnstaple
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professional, creative web design services for businesses in Barnstaple and North Devon. Stand out from
              the competition with a website that converts visitors into customers.
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
                <span>Local Barnstaple Business</span>
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

      {/* About Web Design in Barnstaple */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Web Design Services in Barnstaple</h2>
              <p className="text-lg text-muted-foreground">
                At Dream Pixel, we provide comprehensive web design services to businesses in Barnstaple and throughout
                North Devon. Our team of experienced designers and developers create websites that not only look
                stunning but also drive results for your business.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you're a small local business or a larger enterprise, we tailor our web design services to meet
                your specific needs and goals. From responsive design to e-commerce functionality, we have the expertise
                to bring your vision to life.
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
                    <p className="text-sm text-muted-foreground">Rank higher in search results</p>
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Barnstaple-fgusmo0685Qy0QiKAHGjaKHfR3eWoV.webp"
                alt="Barnstaple town with buildings along a river with reflections in the water"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Dream Pixel for Web Design in Barnstaple?
            </h2>
            <p className="text-xl text-muted-foreground">
              We combine local knowledge with industry expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-purple-600">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
                <p className="text-muted-foreground">
                  As a Barnstaple-based business, we understand the local market and can help you connect with customers
                  in North Devon effectively.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Service</h3>
                <p className="text-muted-foreground">
                  We take the time to understand your business goals and create a website that reflects your unique
                  brand and meets your specific needs.
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
                  your business objectives.
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
                  accessible to businesses of all sizes in Barnstaple.
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
                  ensure your site continues to perform at its best.
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
                  Barnstaple business thrive online.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Web Design Process</h2>
            <p className="text-xl text-muted-foreground">A streamlined approach to creating your perfect website</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-200 to-green-200 hidden md:block"></div>

            <div className="space-y-12 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right space-y-4 order-2 md:order-1">
                  <h3 className="text-2xl font-bold">1. Discovery</h3>
                  <p className="text-muted-foreground">
                    We start by understanding your business, goals, target audience, and competitors to create a
                    strategic plan for your website.
                  </p>
                </div>
                <div className="relative order-1 md:order-2">
                  <div className="absolute -inset-4 bg-purple-100 rounded-full blur-3xl opacity-30 hidden md:block"></div>
                  <div className="md:pl-12 relative">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center justify-center text-2xl font-bold absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 hidden md:flex">
                      1
                    </div>
                    <div className="rounded-lg shadow-lg overflow-hidden">
                      <DiscoveryAnimation />
                    </div>
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
                    <div className="rounded-lg shadow-lg overflow-hidden">
                      <DesignAnimation />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">2. Design</h3>
                  <p className="text-muted-foreground">
                    Our designers create wireframes and mockups of your website, focusing on user experience, brand
                    consistency, and conversion optimization.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right space-y-4 order-2 md:order-1">
                  <h3 className="text-2xl font-bold">3. Development</h3>
                  <p className="text-muted-foreground">
                    Our developers bring the designs to life, building a responsive, fast-loading website with clean
                    code and SEO best practices.
                  </p>
                </div>
                <div className="relative order-1 md:order-2">
                  <div className="absolute -inset-4 bg-purple-100 rounded-full blur-3xl opacity-30 hidden md:block"></div>
                  <div className="md:pl-12 relative">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center justify-center text-2xl font-bold absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 hidden md:flex">
                      3
                    </div>
                    <div className="rounded-lg shadow-lg overflow-hidden">
                      <DevelopmentAnimation />
                    </div>
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
                    <div className="rounded-lg shadow-lg overflow-hidden">
                      <LaunchAnimation />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">4. Testing & Launch</h3>
                  <p className="text-muted-foreground">
                    We thoroughly test your website across different devices and browsers before launching it to ensure
                    everything works perfectly.
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
              <h2 className="text-3xl md:text-4xl font-bold">Ready to elevate your Barnstaple business online?</h2>
              <p className="text-xl text-muted-foreground">
                Contact us today to discuss your web design project and see how we can help your Barnstaple business
                grow online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600"
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <LocationCTAAnimation />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
