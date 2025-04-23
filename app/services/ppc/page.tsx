import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Zap, Target, BarChart, LineChart, PieChart, DollarSign } from "lucide-react"

export const metadata = {
  title: "PPC Services in Devon | Pay-Per-Click Advertising",
  description:
    "Expert PPC services in Devon. We create and manage high-performing paid advertising campaigns that drive targeted traffic and maximize your ROI.",
}

export default function PPCService() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/95"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Strategic{" "}
              <span className="bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">PPC</span>{" "}
              Advertising
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Drive immediate, targeted traffic to your website with expertly managed pay-per-click campaigns that
              maximize your return on investment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600"
              >
                <Link href="/contact">Get a Free PPC Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">View Our Campaigns</Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Google Ads Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Transparent Reporting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>ROI Focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our PPC Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive pay-per-click advertising solutions to drive targeted traffic and conversions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <Zap className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Google Ads Management</h3>
                <p className="text-muted-foreground mb-4">
                  We create and manage high-performing Google Ads campaigns that drive targeted traffic and maximize
                  your ROI.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Search campaign management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Display network advertising</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Shopping campaigns</span>
                  </li>
                </ul>
                <Link href="/contact" className="group inline-flex items-center text-purple-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Social Media Advertising</h3>
                <p className="text-muted-foreground mb-4">
                  We develop targeted social media ad campaigns that reach your ideal audience on platforms they use
                  daily.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Facebook & Instagram Ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>LinkedIn Advertising</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Twitter Ads</span>
                  </li>
                </ul>
                <Link href="/contact" className="group inline-flex items-center text-green-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <BarChart className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Remarketing Campaigns</h3>
                <p className="text-muted-foreground mb-4">
                  We help you reconnect with website visitors who didn't convert, bringing them back to complete their
                  journey.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Display remarketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Social media remarketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Email remarketing</span>
                  </li>
                </ul>
                <Link href="/contact" className="group inline-flex items-center text-purple-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <LineChart className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Landing Page Optimization</h3>
                <p className="text-muted-foreground mb-4">
                  We design and optimize high-converting landing pages that maximize the effectiveness of your PPC
                  campaigns.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Conversion-focused design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>A/B testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>User experience improvements</span>
                  </li>
                </ul>
                <Link href="/contact" className="group inline-flex items-center text-green-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <PieChart className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">PPC Audits & Strategy</h3>
                <p className="text-muted-foreground mb-4">
                  We analyze your current PPC efforts and develop strategic plans to improve performance and reduce
                  wasted spend.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Account structure analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Keyword optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Competitor analysis</span>
                  </li>
                </ul>
                <Link href="/contact" className="group inline-flex items-center text-purple-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <DollarSign className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Performance Tracking & Reporting</h3>
                <p className="text-muted-foreground mb-4">
                  We provide comprehensive tracking and regular reporting to measure campaign performance and ROI.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Conversion tracking setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Custom dashboard creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Regular performance reports</span>
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

      {/* Our PPC Process */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our PPC Management Process</h2>
            <p className="text-xl text-muted-foreground">
              A strategic approach to creating and managing high-performing paid advertising campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Research & Planning</h3>
                <p className="text-muted-foreground">
                  We research your industry, competitors, and target audience to develop a strategic PPC plan aligned
                  with your business goals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Campaign Setup</h3>
                <p className="text-muted-foreground">
                  We build optimized campaign structures with targeted ad groups, compelling ad copy, and strategic
                  keyword targeting.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Optimization</h3>
                <p className="text-muted-foreground">
                  We continuously monitor and optimize your campaigns, refining keywords, bids, ad copy, and targeting
                  to maximize performance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Analysis & Reporting</h3>
                <p className="text-muted-foreground">
                  We analyze campaign performance, provide detailed reports, and make data-driven recommendations for
                  continuous improvement.
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
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-green-100 rounded-full blur-3xl opacity-30"></div>
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="PPC Benefits"
                width={600}
                height={600}
                className="relative z-10 rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">Why Invest in PPC Advertising?</h2>
              <p className="text-lg text-muted-foreground">
                Pay-per-click advertising offers immediate visibility, precise targeting, and measurable results, making
                it an essential component of a comprehensive digital marketing strategy.
              </p>

              <div className="grid gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Immediate Results</h3>
                    <p className="text-sm text-muted-foreground">
                      Start driving targeted traffic to your website as soon as your campaigns go live
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Precise Targeting</h3>
                    <p className="text-sm text-muted-foreground">
                      Reach your ideal customers based on demographics, interests, and search intent
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Measurable ROI</h3>
                    <p className="text-sm text-muted-foreground">
                      Track every click, conversion, and penny spent to measure your return on investment
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Budget Control</h3>
                    <p className="text-sm text-muted-foreground">
                      Set your own budget and adjust spending based on performance
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600"
                >
                  <Link href="/contact">Start Your PPC Campaign</Link>
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
            <p className="text-xl text-muted-foreground">Common questions about our PPC services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How much should I budget for PPC advertising?</h3>
                <p className="text-muted-foreground">
                  Your PPC budget depends on your industry, competition, and business goals. We work with clients of all
                  sizes and can recommend an appropriate budget based on your specific situation. We focus on maximizing
                  ROI regardless of budget size.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How quickly will I see results from PPC?</h3>
                <p className="text-muted-foreground">
                  One of the biggest advantages of PPC is the speed of results. Your ads can start appearing in search
                  results as soon as your campaigns are approved, which typically takes 24-48 hours. However, campaign
                  optimization is an ongoing process, and performance often improves over time.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Which PPC platforms do you work with?</h3>
                <p className="text-muted-foreground">
                  We manage campaigns across all major PPC platforms including Google Ads, Microsoft Advertising (Bing),
                  Facebook Ads, Instagram, LinkedIn, Twitter, and more. We recommend the best platforms based on your
                  target audience and business goals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How do you measure PPC success?</h3>
                <p className="text-muted-foreground">
                  We track various metrics including click-through rates, conversion rates, cost per acquisition, and
                  return on ad spend. We set up comprehensive tracking and provide regular reports that show the
                  performance and ROI of your campaigns.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Do you require long-term contracts?</h3>
                <p className="text-muted-foreground">
                  We offer flexible contract options. While we recommend a minimum of three months to properly optimize
                  campaigns and see meaningful results, we don't lock clients into long-term contracts. Our focus is on
                  delivering results that make you want to continue working with us.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How often will I receive reports on my campaigns?</h3>
                <p className="text-muted-foreground">
                  We provide detailed monthly reports that outline campaign performance, key metrics, and strategic
                  recommendations. We also offer access to real-time dashboards so you can monitor performance at any
                  time. Additionally, we schedule regular check-in calls to discuss results and strategy.
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
              <h2 className="text-3xl md:text-4xl font-bold">Ready to boost your online advertising?</h2>
              <p className="text-xl text-muted-foreground">
                Contact us today for a free PPC consultation and proposal. Let's create campaigns that drive targeted
                traffic and maximize your return on investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600"
                >
                  <Link href="/contact">Get a Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/portfolio">View Our Campaigns</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-green-100 rounded-full blur-3xl opacity-30"></div>
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="PPC Advertising"
                width={500}
                height={500}
                className="relative z-10 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
