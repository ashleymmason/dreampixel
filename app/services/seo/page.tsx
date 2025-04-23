import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Search, BarChart, Globe, TrendingUp, Target, Award } from "lucide-react"
import LocationCTAAnimation from "@/components/animations/location-cta-animation"

export const metadata = {
  title: "SEO Services in Devon | Search Engine Optimization",
  description:
    "Expert SEO services in Devon. We help your business rank higher in search results, drive more organic traffic, and increase conversions with proven strategies.",
}

export default function SEOService() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/95"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Expert{" "}
              <span className="bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">SEO</span>{" "}
              Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Boost your online visibility and drive more organic traffic to your website with our data-driven search
              engine optimization strategies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600"
              >
                <Link href="/contact">Get a Free SEO Audit</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">View Our Results</Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Transparent Reporting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Local SEO Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Proven Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our SEO Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive search engine optimization solutions to improve your rankings and drive organic growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <Search className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Technical SEO</h3>
                <p className="text-muted-foreground mb-4">
                  We optimize your website's technical foundation to ensure search engines can crawl, index, and
                  understand your content effectively.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Site speed optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Mobile-friendly improvements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Schema markup implementation</span>
                  </li>
                </ul>
                <Link href="/contact" className="group inline-flex items-center text-purple-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">On-Page SEO</h3>
                <p className="text-muted-foreground mb-4">
                  We optimize individual pages on your website to rank higher and earn more relevant traffic in search
                  engines.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Keyword optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Content optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Meta tag optimization</span>
                  </li>
                </ul>
                <Link href="/contact" className="group inline-flex items-center text-green-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Local SEO</h3>
                <p className="text-muted-foreground mb-4">
                  We help your business stand out in local search results, making it easier for nearby customers to find
                  you.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Google Business Profile optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Local citation building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Local content strategy</span>
                  </li>
                </ul>
                <Link href="/contact" className="group inline-flex items-center text-purple-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <BarChart className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Content Strategy</h3>
                <p className="text-muted-foreground mb-4">
                  We develop and implement content strategies that attract, engage, and convert your target audience.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Keyword research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Content gap analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Content calendar development</span>
                  </li>
                </ul>
                <Link href="/contact" className="group inline-flex items-center text-green-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Link Building</h3>
                <p className="text-muted-foreground mb-4">
                  We build high-quality backlinks to improve your website's authority and search engine rankings.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Competitor backlink analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Strategic outreach campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Guest posting opportunities</span>
                  </li>
                </ul>
                <Link href="/contact" className="group inline-flex items-center text-purple-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">SEO Audits & Reporting</h3>
                <p className="text-muted-foreground mb-4">
                  We provide comprehensive SEO audits and regular reporting to track progress and identify
                  opportunities.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Technical SEO audits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Competitor analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Monthly performance reports</span>
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

      {/* Our SEO Process */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our SEO Process</h2>
            <p className="text-xl text-muted-foreground">
              A strategic, data-driven approach to improving your search engine rankings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Research & Analysis</h3>
                <p className="text-muted-foreground">
                  We conduct thorough keyword research, competitor analysis, and website audits to identify
                  opportunities and challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Strategy Development</h3>
                <p className="text-muted-foreground">
                  We create a customized SEO strategy based on our findings, focusing on the tactics that will deliver
                  the best results for your business.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Implementation</h3>
                <p className="text-muted-foreground">
                  We implement on-page and off-page SEO tactics, technical improvements, and content strategies to boost
                  your rankings.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Monitoring & Refinement</h3>
                <p className="text-muted-foreground">
                  We continuously monitor your performance, provide detailed reports, and refine our strategy to ensure
                  ongoing improvement.
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
                alt="SEO Benefits"
                width={600}
                height={600}
                className="relative z-10 rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">Why Invest in SEO?</h2>
              <p className="text-lg text-muted-foreground">
                Search engine optimization is one of the most cost-effective marketing strategies, delivering long-term
                results and sustainable growth for your business.
              </p>

              <div className="grid gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Increased Organic Traffic</h3>
                    <p className="text-sm text-muted-foreground">
                      Drive more qualified visitors to your website without paying for each click
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Better User Experience</h3>
                    <p className="text-sm text-muted-foreground">
                      SEO improvements enhance your website's usability and performance
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Higher Conversion Rates</h3>
                    <p className="text-sm text-muted-foreground">
                      SEO-optimized websites convert better than non-optimized sites
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Long-Term Results</h3>
                    <p className="text-sm text-muted-foreground">
                      Unlike paid advertising, SEO continues to deliver results over time
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600"
                >
                  <Link href="/contact">Get Started with SEO</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our SEO Portfolio</h2>
            <p className="text-xl text-muted-foreground">Take a look at some of our successful SEO projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src="/images/portfolio/truck-bracket.png"
                  alt="Truck Bracket UK - Truck accessories and brackets"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">Truck Bracket</h3>
                  <p className="text-white/80">Improved organic rankings for key product terms</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src="/images/portfolio/upcoming-bands.png"
                  alt="Upcoming Bands - Discover new music and bands"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">Upcoming Bands</h3>
                  <p className="text-white/80">Increased organic traffic by 150% in 6 months</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image
                  src="/images/portfolio/bandpress.png"
                  alt="BandPress - Music promotion and artist platform"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">BandPress</h3>
                  <p className="text-white/80">Comprehensive SEO strategy with top 3 rankings</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Common questions about our SEO services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How long does it take to see results from SEO?</h3>
                <p className="text-muted-foreground">
                  SEO is a long-term strategy. While some improvements can be seen within a few weeks, significant
                  results typically take 3-6 months. The timeline depends on factors like your website's current state,
                  competition, and the strategies implemented.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How much does SEO cost?</h3>
                <p className="text-muted-foreground">
                  Our SEO packages are customized based on your business needs, goals, and competition. We offer
                  flexible pricing options to accommodate different budgets while ensuring you receive a positive return
                  on investment.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Do you guarantee first-page rankings?</h3>
                <p className="text-muted-foreground">
                  No reputable SEO agency can guarantee specific rankings as search algorithms are constantly evolving.
                  However, we use proven strategies and best practices to significantly improve your rankings and
                  organic traffic over time.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How do you measure SEO success?</h3>
                <p className="text-muted-foreground">
                  We track various metrics including keyword rankings, organic traffic, conversion rates, bounce rates,
                  and more. We provide regular reports that show your progress and the return on your investment.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Do you focus on local SEO?</h3>
                <p className="text-muted-foreground">
                  Yes, we specialize in local SEO for Devon businesses. We optimize your Google Business Profile, build
                  local citations, and implement strategies to help you rank in local search results and Google Maps.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">What makes your SEO services different?</h3>
                <p className="text-muted-foreground">
                  We take a holistic, transparent approach to SEO. We focus on sustainable, white-hat strategies that
                  deliver long-term results. As a local Devon agency, we understand the regional market and provide
                  personalized service.
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
              <h2 className="text-3xl md:text-4xl font-bold">Ready to improve your search rankings?</h2>
              <p className="text-xl text-muted-foreground">
                Contact us today for a free SEO audit and consultation. Let's develop a strategy to boost your online
                visibility and drive more organic traffic to your website.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600"
                >
                  <Link href="/contact">Get a Free SEO Audit</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/portfolio">View Our Results</Link>
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
