import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Link2, Globe, BarChart, TrendingUp, Search, Award } from "lucide-react"

export const metadata = {
  title: "Backlink Building Services in Devon | Link Building Strategies",
  description:
    "Expert backlink building services in Devon. We help improve your website's authority and search rankings with high-quality, relevant backlinks.",
}

export default function BacklinkService() {
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
              <span className="bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
                Backlink
              </span>{" "}
              Building
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Boost your website's authority and search rankings with our ethical, results-driven backlink building
              strategies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600"
              >
                <Link href="/contact">Get a Free Backlink Audit</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">View Our Results</Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>White-Hat Strategies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Quality Over Quantity</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Sustainable Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Backlink Building Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive link building strategies to improve your website's authority and search rankings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <Link2 className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Content-Based Link Building</h3>
                <p className="text-muted-foreground mb-4">
                  We create high-quality, linkable content that naturally attracts backlinks from relevant websites in
                  your industry.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Linkable asset creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Data-driven research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Infographics and visual content</span>
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
                <h3 className="text-xl font-bold mb-2">Guest Posting</h3>
                <p className="text-muted-foreground mb-4">
                  We secure guest posting opportunities on relevant, high-authority websites to build quality backlinks
                  to your site.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Targeted outreach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>High-quality content creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Relevant, authoritative placements</span>
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
                <h3 className="text-xl font-bold mb-2">Competitor Backlink Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  We analyze your competitors' backlink profiles to identify opportunities and develop strategies to
                  outperform them.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Comprehensive competitor analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Gap identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Strategic opportunity targeting</span>
                  </li>
                </ul>
                <Link href="/contact" className="group inline-flex items-center text-purple-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Broken Link Building</h3>
                <p className="text-muted-foreground mb-4">
                  We identify broken links on relevant websites and offer your content as a replacement, creating
                  valuable backlinks.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Broken link identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Replacement content creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Strategic outreach</span>
                  </li>
                </ul>
                <Link href="/contact" className="group inline-flex items-center text-green-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <Search className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Local Link Building</h3>
                <p className="text-muted-foreground mb-4">
                  We help you build relevant local backlinks to improve your visibility in local search results across
                  Devon and beyond.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Local directory submissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Local business partnerships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Community engagement</span>
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
                <h3 className="text-xl font-bold mb-2">Link Quality Audit & Cleanup</h3>
                <p className="text-muted-foreground mb-4">
                  We analyze your existing backlink profile, identify toxic links, and implement disavowal strategies to
                  protect your site.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Comprehensive link audit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Toxic link identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Disavow file creation</span>
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

      {/* Our Backlink Building Process */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Backlink Building Process</h2>
            <p className="text-xl text-muted-foreground">
              A strategic, white-hat approach to building high-quality backlinks that improve your search rankings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Analysis & Strategy</h3>
                <p className="text-muted-foreground">
                  We analyze your website, competitors, and industry to develop a customized backlink strategy aligned
                  with your goals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Content Development</h3>
                <p className="text-muted-foreground">
                  We create high-quality, linkable content assets designed to attract backlinks from relevant,
                  authoritative websites.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Outreach & Acquisition</h3>
                <p className="text-muted-foreground">
                  We implement strategic outreach campaigns to secure high-quality backlinks from relevant websites in
                  your industry.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Monitoring & Reporting</h3>
                <p className="text-muted-foreground">
                  We track the performance of your backlink profile, provide detailed reports, and continuously refine
                  our strategy.
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
                alt="Backlink Building Benefits"
                width={600}
                height={600}
                className="relative z-10 rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">Why Invest in Backlink Building?</h2>
              <p className="text-lg text-muted-foreground">
                Quality backlinks remain one of the most important ranking factors in search engine algorithms, helping
                your website gain authority and visibility.
              </p>

              <div className="grid gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Improved Search Rankings</h3>
                    <p className="text-sm text-muted-foreground">
                      Quality backlinks help your pages rank higher in search results
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Increased Domain Authority</h3>
                    <p className="text-sm text-muted-foreground">
                      Backlinks from reputable sites boost your website's authority
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">More Referral Traffic</h3>
                    <p className="text-sm text-muted-foreground">
                      Quality backlinks drive targeted traffic directly to your website
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Enhanced Brand Visibility</h3>
                    <p className="text-sm text-muted-foreground">
                      Backlinks increase your brand's exposure across the web
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600"
                >
                  <Link href="/contact">Start Building Quality Backlinks</Link>
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
            <p className="text-xl text-muted-foreground">Common questions about our backlink building services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How long does it take to see results from backlink building?</h3>
                <p className="text-muted-foreground">
                  Backlink building is a long-term strategy. While some improvements can be seen within a few weeks,
                  significant results typically take 3-6 months. The timeline depends on factors like your website's
                  current authority, competition, and the quality of backlinks acquired.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Do you use black hat link building techniques?</h3>
                <p className="text-muted-foreground">
                  No, we exclusively use white hat, ethical link building strategies that comply with search engine
                  guidelines. Black hat techniques may provide short-term gains but often result in penalties that can
                  severely damage your website's rankings and reputation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How many backlinks will you build each month?</h3>
                <p className="text-muted-foreground">
                  We focus on quality over quantity. The number of backlinks we build depends on your specific goals,
                  industry, and competition. We prioritize acquiring high-quality, relevant backlinks that provide real
                  value rather than pursuing a high volume of low-quality links.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How do you measure the success of backlink building?</h3>
                <p className="text-muted-foreground">
                  We track various metrics including the number and quality of acquired backlinks, improvements in
                  domain authority, keyword rankings, organic traffic growth, and referral traffic. We provide regular
                  reports that show the impact of our backlink building efforts.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Can bad backlinks hurt my website?</h3>
                <p className="text-muted-foreground">
                  Yes, low-quality or spammy backlinks can potentially harm your website's search rankings. As part of
                  our service, we conduct regular backlink audits to identify and disavow toxic links that could
                  negatively impact your site's performance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Do you guarantee specific results?</h3>
                <p className="text-muted-foreground">
                  While we can't guarantee specific rankings (no ethical SEO company can), we do guarantee that we'll
                  build high-quality, relevant backlinks using white hat methods. We're transparent about our processes
                  and provide regular reports showing the progress of our work.
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
              <h2 className="text-3xl md:text-4xl font-bold">Ready to boost your website's authority?</h2>
              <p className="text-xl text-muted-foreground">
                Contact us today for a free backlink audit and consultation. Let's develop a strategy to improve your
                search rankings and drive more organic traffic to your website.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600"
                >
                  <Link href="/contact">Get a Free Backlink Audit</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/portfolio">View Our Results</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-green-100 rounded-full blur-3xl opacity-30"></div>
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Backlink Building"
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
