import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Clock, Lightbulb, Target, Heart } from "lucide-react"
import TeamAnimation from "@/components/animations/team-animation"
import ValuesAnimation from "@/components/animations/values-animation"

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/95"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
                Dream Pixel
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're a passionate team of web designers and digital marketers based in Barnstaple, Devon, dedicated to
              helping businesses succeed online.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Dream Pixel was founded with a simple mission: to help businesses in Devon and beyond establish a strong
                online presence through beautiful, functional websites and effective digital marketing strategies.
              </p>
              <p className="text-lg text-muted-foreground">
                What started as a small freelance operation has grown into a full-service digital agency, but our core
                values remain the same. We believe in creating websites that not only look stunning but also drive real
                results for our clients.
              </p>
              <p className="text-lg text-muted-foreground">
                Based in Barnstaple, we're proud to serve businesses throughout North Devon and the wider region. Our
                local knowledge combined with our industry expertise allows us to create digital solutions that truly
                resonate with your target audience.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-green-100 rounded-full blur-3xl opacity-30"></div>
              <TeamAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Client-Focused</h3>
                <p className="text-muted-foreground">
                  We put our clients at the center of everything we do. Your success is our success, and we're committed
                  to delivering solutions that meet your specific needs and goals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in every project we undertake. From design and development to marketing and
                  support, we're committed to delivering the highest quality work.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <Lightbulb className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  The digital landscape is constantly evolving, and so are we. We stay at the forefront of industry
                  trends and technologies to provide innovative solutions that give our clients a competitive edge.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Results-Driven</h3>
                <p className="text-muted-foreground">
                  We focus on creating websites and implementing strategies that drive real, measurable results for your
                  business, whether that's increased traffic, leads, or sales.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Reliability</h3>
                <p className="text-muted-foreground">
                  We deliver on our promises and meet our deadlines. You can count on us to be there when you need us,
                  providing ongoing support and guidance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Passion</h3>
                <p className="text-muted-foreground">
                  We're passionate about what we do. We love creating beautiful websites and helping businesses grow,
                  and that passion shines through in every project we work on.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-50 to-green-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-green-100 rounded-full blur-3xl opacity-30"></div>
              <ValuesAnimation />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose Dream Pixel?</h2>
              <p className="text-lg text-muted-foreground">
                When you choose Dream Pixel, you're not just getting a website – you're getting a dedicated partner
                committed to your online success.
              </p>

              <div className="grid gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Local Expertise</h3>
                    <p className="text-sm text-muted-foreground">Based in Barnstaple, we understand the local market</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Personalized Service</h3>
                    <p className="text-sm text-muted-foreground">Tailored solutions for your specific needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Results-Driven Approach</h3>
                    <p className="text-sm text-muted-foreground">Focus on achieving your business objectives</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Ongoing Support</h3>
                    <p className="text-sm text-muted-foreground">We're here for you long after your website launches</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600"
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-50 to-green-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to work with us?</h2>
            <p className="text-xl text-muted-foreground">
              Contact us today to discuss your project and see how we can help your business grow online.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
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
        </div>
      </section>
    </div>
  )
}
