import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Palette, Users, Layout, Smartphone, Layers, Eye } from "lucide-react"
import UXUIAnimation from "@/components/animations/ux-ui-animation"
import LocationCTAAnimation from "@/components/animations/location-cta-animation"

export const metadata = {
  title: "UX/UI Design Services in Devon | User Experience Design",
  description:
    "Expert UX/UI design services in Devon. We create intuitive, engaging user experiences that enhance usability and drive conversions for your digital products.",
}

export default function UXUIService() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/95"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Intuitive{" "}
              <span className="bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">UX/UI</span>{" "}
              Design
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Create seamless, engaging user experiences that delight your customers and drive conversions across all
              your digital touchpoints.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600"
              >
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>User-Centered Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Conversion-Focused</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Cross-Platform Expertise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our UX/UI Design Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive design solutions to create intuitive, engaging user experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">User Research</h3>
                <p className="text-muted-foreground mb-4">
                  We conduct thorough research to understand your users' needs, behaviors, and pain points to inform the
                  design process.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>User interviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Usability testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Persona development</span>
                  </li>
                </ul>
                <Link href="/contact" className="group inline-flex items-center text-purple-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <Layout className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">UX Design</h3>
                <p className="text-muted-foreground mb-4">
                  We create intuitive user experiences that guide users through your digital product with ease and
                  efficiency.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Information architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>User flows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Wireframing</span>
                  </li>
                </ul>
                <Link href="/contact" className="group inline-flex items-center text-green-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <Palette className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">UI Design</h3>
                <p className="text-muted-foreground mb-4">
                  We design visually appealing interfaces that align with your brand and enhance the user experience.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Visual design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Design systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Interactive prototypes</span>
                  </li>
                </ul>
                <Link href="/contact" className="group inline-flex items-center text-purple-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <Smartphone className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
                <p className="text-muted-foreground mb-4">
                  We ensure your digital products provide a seamless experience across all devices and screen sizes.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Mobile-first approach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Cross-device testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Adaptive layouts</span>
                  </li>
                </ul>
                <Link href="/contact" className="group inline-flex items-center text-green-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <Layers className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Interaction Design</h3>
                <p className="text-muted-foreground mb-4">
                  We create engaging interactions and animations that enhance usability and delight users.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Micro-interactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Animation design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Interactive prototyping</span>
                  </li>
                </ul>
                <Link href="/contact" className="group inline-flex items-center text-purple-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <Eye className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Usability Testing</h3>
                <p className="text-muted-foreground mb-4">
                  We evaluate your digital products with real users to identify issues and opportunities for
                  improvement.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>User testing sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Heuristic evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Accessibility testing</span>
                  </li>
                </ul>
                <Link href="/contact" className="group inline-flex items-center text-green-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our UX/UI Design Process */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our UX/UI Design Process</h2>
            <p className="text-xl text-muted-foreground">
              A user-centered approach to creating intuitive, engaging digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Research & Discovery</h3>
                <p className="text-muted-foreground">
                  We conduct user research, analyze competitors, and define project goals to understand user needs and
                  business objectives.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">UX Planning</h3>
                <p className="text-muted-foreground">
                  We create user flows, information architecture, and wireframes to establish the foundation of the user
                  experience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">UI Design</h3>
                <p className="text-muted-foreground">
                  We develop visual designs and interactive prototypes that bring the user experience to life with your
                  brand identity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Testing & Refinement</h3>
                <p className="text-muted-foreground">
                  We test designs with real users, gather feedback, and make iterative improvements to optimize the user
                  experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <UXUIAnimation />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">Why Invest in UX/UI Design?</h2>
              <p className="text-lg text-muted-foreground">
                Good design is good business. Investing in UX/UI design delivers tangible benefits for your organization
                and customers.
              </p>

              <div className="grid gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Increased Conversion Rates</h3>
                    <p className="text-sm text-muted-foreground">
                      Intuitive interfaces guide users toward desired actions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Enhanced User Satisfaction</h3>
                    <p className="text-sm text-muted-foreground">
                      Positive experiences build loyalty and reduce frustration
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Reduced Development Costs</h3>
                    <p className="text-sm text-muted-foreground">
                      Addressing usability issues early prevents expensive fixes later
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Stronger Brand Perception</h3>
                    <p className="text-sm text-muted-foreground">Professional design builds credibility and trust</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600"
                >
                  <Link href="/contact">Elevate Your User Experience</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Common questions about our UX/UI design services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">What's the difference between UX and UI design?</h3>
                <p className="text-muted-foreground">
                  UX (User Experience) design focuses on the overall feel of the product and how users interact with it.
                  It involves research, user flows, wireframes, and ensuring the product is intuitive. UI (User
                  Interface) design focuses on the visual elements like colors, typography, buttons, and imagery that
                  users interact with.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How long does a UX/UI design project typically take?</h3>
                <p className="text-muted-foreground">
                  Project timelines vary based on complexity and scope. A simple website redesign might take 4-6 weeks,
                  while a complex application could take 3-6 months. We'll provide a detailed timeline during our
                  initial consultation based on your specific requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Do you work with developers to implement designs?</h3>
                <p className="text-muted-foreground">
                  Yes, we can work directly with your development team or our own developers to ensure designs are
                  implemented correctly. We provide detailed specifications, style guides, and assets, and can offer
                  ongoing support during the development phase to maintain design integrity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How do you ensure designs are accessible?</h3>
                <p className="text-muted-foreground">
                  We follow WCAG (Web Content Accessibility Guidelines) standards throughout our design process. This
                  includes considerations for color contrast, text size, keyboard navigation, screen reader
                  compatibility, and more. We can also conduct accessibility audits and testing to ensure compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">What deliverables can I expect from a UX/UI project?</h3>
                <p className="text-muted-foreground">
                  Typical deliverables include user research findings, user personas, user flows, wireframes,
                  interactive prototypes, visual designs, UI component libraries, and design specifications. We tailor
                  deliverables based on your project needs and can provide them in formats that work best for your team.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How do you measure the success of a UX/UI design project?</h3>
                <p className="text-muted-foreground">
                  We establish key performance indicators (KPIs) at the beginning of the project, which may include
                  metrics like conversion rates, task completion rates, user satisfaction scores, and engagement
                  metrics. We can also conduct post-launch usability testing to gather qualitative feedback.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-50 to-green-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to transform your user experience?</h2>
              <p className="text-xl text-muted-foreground">
                Contact us today to discuss your UX/UI design project. Let's create intuitive, engaging experiences that
                delight your users and drive business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600"
                >
                  <Link href="/contact">Discuss Your Project</Link>
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
