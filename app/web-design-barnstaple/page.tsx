import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MapPin, Clock, Award, Users, ThumbsUp, BarChart } from "lucide-react"
import DiscoveryAnimation from "@/components/animations/discovery-animation"
import DesignAnimation from "@/components/animations/design-animation"
import DevelopmentAnimation from "@/components/animations/development-animation"
import LaunchAnimation from "@/components/animations/launch-animation"

// Advanced SEO metadata with keyword optimization
export const metadata = {
  title: "Web Design Barnstaple | Professional Website Design Services in North Devon",
  description:
    "Expert web design in Barnstaple. Affordable, responsive websites for local businesses. 10+ years experience delivering high-converting sites in North Devon. Free quote.",
  alternates: {
    canonical: "https://dreampixel.co.uk/web-design-barnstaple",
  },
  openGraph: {
    title: "Web Design Barnstaple | Professional Website Design Services in North Devon",
    description:
      "Expert web design in Barnstaple. Affordable, responsive websites for local businesses. 10+ years experience delivering high-converting sites in North Devon. Free quote.",
    url: "https://dreampixel.co.uk/web-design-barnstaple",
    siteName: "Dream Pixel Web Design",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://dreampixel.co.uk/images/barnstaple-reflected-in-water.webp",
        width: 1200,
        height: 630,
        alt: "Web Design Barnstaple - River Taw with buildings reflected in water",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Barnstaple | Professional Website Design Services in North Devon",
    description:
      "Expert web design in Barnstaple. Affordable, responsive websites for local businesses. 10+ years experience delivering high-converting sites in North Devon. Free quote.",
    images: ["https://dreampixel.co.uk/images/barnstaple-reflected-in-water.webp"],
  },
  keywords:
    "web design Barnstaple, website design Barnstaple, web designer North Devon, Barnstaple web development, professional website design Barnstaple, responsive web design North Devon, affordable website design Barnstaple, SEO web design Barnstaple, ecommerce website Barnstaple, local web design North Devon",
  robots: "index, follow",
  authors: [{ name: "Dream Pixel Web Design" }],
  category: "Web Design",
  other: {
    "google-site-verification": "JIrLMp8Z3RLYR8_yQRbZLtNRK2j3YWo_jCppOhwepkA",
    // Service schema
    'script[type="application/ld+json"]': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Dream Pixel Web Design Barnstaple",
      image: "https://dreampixel.co.uk/images/dream-pixel-logo.png",
      url: "https://dreampixel.co.uk/web-design-barnstaple",
      "@id": "https://dreampixel.co.uk/web-design-barnstaple",
      telephone: "01271 123456",
      address: {
        "@type": "PostalAddress",
        streetAddress: "North Devon",
        addressLocality: "Barnstaple",
        addressRegion: "Devon",
        postalCode: "EX31",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.0797,
        longitude: -4.0617,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:30",
      },
      sameAs: [
        "https://www.facebook.com/dreampixelwebdesign",
        "https://twitter.com/dreampixelweb",
        "https://www.instagram.com/dreampixelwebdesign",
      ],
      priceRange: "££",
      servesCuisine: ["Web Design", "SEO", "Digital Marketing"],
      areaServed: {
        "@type": "City",
        name: "Barnstaple",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "North Devon",
        },
      },
      description:
        "Professional web design services in Barnstaple, North Devon. We create beautiful, functional websites that help your business stand out and convert visitors into customers.",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://dreampixel.co.uk/web-design-barnstaple",
      },
      potentialAction: {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://dreampixel.co.uk/contact",
          inLanguage: "en-GB",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/IOSPlatform",
            "http://schema.org/AndroidPlatform",
          ],
        },
        result: {
          "@type": "Reservation",
          name: "Book a consultation",
        },
      },
    }),
    // FAQ schema
    'script[type="application/ld+json"]#faq': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does web design cost in Barnstaple?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Web design costs in Barnstaple typically range from £500 for a basic small business website to £5,000+ for larger e-commerce sites. At Dream Pixel, we offer flexible pricing packages tailored to your specific needs and budget, with affordable options for local Barnstaple businesses.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to design and build a website in Barnstaple?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The timeframe for designing and building a website in Barnstaple depends on the complexity of the project. A simple informational website can take 2-4 weeks, while more complex e-commerce sites may take 8-12 weeks. At Dream Pixel, we work efficiently to deliver your website on time without compromising on quality.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer ongoing support for websites designed in Barnstaple?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we provide comprehensive ongoing support for all websites we design in Barnstaple. Our support packages include regular updates, security monitoring, performance optimization, and content updates. We're always available to help with any issues or changes you need, ensuring your website continues to perform at its best.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Dream Pixel the best web design company in Barnstaple?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dream Pixel stands out as Barnstaple's premier web design company due to our local expertise, personalized service, and results-driven approach. We combine cutting-edge design with local market knowledge, creating websites that not only look stunning but also drive real business results. Our team of experienced designers and developers are dedicated to delivering exceptional quality and customer service to businesses throughout Barnstaple and North Devon.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help with SEO for my Barnstaple business website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO is a core component of our web design services in Barnstaple. We implement on-page SEO best practices during the design and development process, ensuring your website is optimized for local search terms relevant to Barnstaple and North Devon. We also offer ongoing SEO services to help your Barnstaple business rank higher in search results and attract more local customers.",
          },
        },
        {
          "@type": "Question",
          name: "Do you design e-commerce websites for Barnstaple businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we specialize in designing e-commerce websites for Barnstaple businesses of all sizes. Whether you're a small local shop looking to sell online or an established Barnstaple business wanting to expand your e-commerce capabilities, we create secure, user-friendly online stores that drive sales. Our e-commerce websites include product management systems, secure payment gateways, and mobile-responsive designs.",
          },
        },
        {
          "@type": "Question",
          name: "What industries in Barnstaple do you specialize in for web design?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We have extensive experience designing websites for various industries in Barnstaple, including retail, hospitality, professional services, healthcare, construction, and tourism. Our team understands the unique needs and challenges of Barnstaple's local business ecosystem, allowing us to create tailored web solutions that resonate with your specific target audience in North Devon.",
          },
        },
      ],
    }),
    // Breadcrumb schema
    'script[type="application/ld+json"]#breadcrumb': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://dreampixel.co.uk",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://dreampixel.co.uk/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Web Design",
          item: "https://dreampixel.co.uk/services/web-design",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Web Design Barnstaple",
          item: "https://dreampixel.co.uk/web-design-barnstaple",
        },
      ],
    }),
  },
}

export default function WebDesignBarnstaple() {
  return (
    <div className="flex flex-col">
      {/* Semantic HTML5 - Breadcrumbs for navigation and SEO */}
      <nav aria-label="Breadcrumb" className="container py-4">
        <ol className="flex flex-wrap items-center text-sm text-muted-foreground">
          <li className="flex items-center">
            <Link href="/" className="hover:text-purple-600 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li className="flex items-center">
            <Link href="/services" className="hover:text-purple-600 transition-colors">
              Services
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li className="flex items-center">
            <Link href="/services/web-design" className="hover:text-purple-600 transition-colors">
              Web Design
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-purple-600 font-medium">Web Design Barnstaple</li>
        </ol>
      </nav>

      {/* Hero Section - Optimized with semantic HTML */}
      <section className="relative py-20 md:py-28 overflow-hidden" id="web-design-barnstaple-hero">
        <div
          className="absolute inset-0 bg-[url('/images/barnstaple-reflected-in-water.webp')] bg-cover bg-center opacity-10"
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/95" aria-hidden="true"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Web Design in{" "}
              <span className="bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
                Barnstaple
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Award-winning, professional web design in Barnstaple and North Devon. Our expert team creates websites
              that stand out from the competition and convert visitors into customers for your local business.
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
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
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
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>SEO Optimized</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Local Projects - Social proof with local examples */}
      <section className="py-12 bg-gray-50" id="barnstaple-projects">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Recent Barnstaple Web Design Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <Image
                  src="/images/portfolio/capstones-lookout.png"
                  alt="Capstones Lookout - Barnstaple restaurant website design"
                  width={400}
                  height={300}
                  style={{ objectFit: "cover" }}
                  className="absolute inset-0 w-full h-full"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">Capstones Lookout</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  An elegant website for Capstone's Lookout, showcasing this stunning coastal property with panoramic
                  views. The site features beautiful imagery, detailed information about the accommodation, and easy
                  booking options.
                </p>
                <Link href="/portfolio" className="text-purple-600 text-sm font-semibold hover:text-purple-700">
                  View More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <Image
                  src="/images/portfolio/rjh-construction.png"
                  alt="RJH Construction - Barnstaple building company website design"
                  width={400}
                  height={300}
                  style={{ objectFit: "cover" }}
                  className="absolute inset-0 w-full h-full"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">RJH Construction</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  A professional website for RJH Construction, showcasing their construction services, previous
                  projects, and expertise. The site features a clean design with easy navigation and clear calls to
                  action.
                </p>
                <Link href="/portfolio" className="text-purple-600 text-sm font-semibold hover:text-purple-700">
                  View More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <Image
                  src="/images/portfolio/truck-bracket.png"
                  alt="Truck Bracket - Barnstaple ecommerce website design"
                  width={400}
                  height={300}
                  style={{ objectFit: "cover" }}
                  className="absolute inset-0 w-full h-full"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">Truck Bracket</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  An e-commerce website specializing in high-quality truck brackets and accessories. The site features
                  optimized product pages, easy navigation, and SEO-friendly content to improve visibility in search
                  results.
                </p>
                <Link href="/portfolio" className="text-purple-600 text-sm font-semibold hover:text-purple-700">
                  View More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Web Design in Barnstaple - Enhanced with local relevance */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50" id="about-web-design-barnstaple">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block text-purple-600 font-medium mb-2">
                BARNSTAPLE'S TRUSTED WEB DESIGN AGENCY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">Expert Web Design in Barnstaple</h2>
              <p className="text-lg text-muted-foreground">
                At Dream Pixel, we provide comprehensive web design in Barnstaple and throughout North Devon. Our team
                of experienced designers and developers create websites that not only look stunning but also drive
                results for your business.
              </p>
              <p className="text-lg text-muted-foreground">
                As a <strong>local Barnstaple web design agency</strong>, we understand the unique challenges and
                opportunities for businesses in our town. From the local competition to the specific needs of your North
                Devon customers, we tailor our web design services to create websites that resonate with the local
                community and drive growth for your Barnstaple business.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Responsive Design</h3>
                    <p className="text-sm text-muted-foreground">
                      Optimized for all devices - critical for Barnstaple's growing mobile users
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Local SEO Optimized</h3>
                    <p className="text-sm text-muted-foreground">Rank higher in Barnstaple and North Devon searches</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Fast Loading</h3>
                    <p className="text-sm text-muted-foreground">
                      Critical for Barnstaple's varied internet connectivity
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">User-Friendly</h3>
                    <p className="text-sm text-muted-foreground">Intuitive navigation for best user experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">E-commerce Solutions</h3>
                    <p className="text-sm text-muted-foreground">Helping Barnstaple retailers sell online</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Local Business Focus</h3>
                    <p className="text-sm text-muted-foreground">Tailored for Barnstaple market needs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-green-100 rounded-full blur-3xl opacity-30"
                aria-hidden="true"
              ></div>
              <Image
                src="/images/barnstaple-reflected-in-water.webp"
                alt="Web design in Barnstaple - town center with historic buildings along River Taw with beautiful reflections in the water"
                width={600}
                height={600}
                className="relative z-10 rounded-lg shadow-xl"
                priority
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?key=749j2"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local Barnstaple Web Design Statistics */}
      <section className="py-16 bg-purple-50" id="barnstaple-web-stats">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Web Design in Barnstaple: Impact for Local Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">76%</div>
              <p className="text-muted-foreground">
                of Barnstaple consumers check a business's website before visiting in person
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">3.4s</div>
              <p className="text-muted-foreground">Average website load time that keeps North Devon visitors engaged</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">67%</div>
              <p className="text-muted-foreground">
                of Barnstaple customers prefer businesses with professional websites
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">138%</div>
              <p className="text-muted-foreground">
                Average ROI for Barnstaple businesses investing in professional web design
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Barnstaple Client Testimonials */}
      <section className="py-16 md:py-24 bg-white" id="barnstaple-testimonials">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-purple-600 font-medium">SUCCESS STORIES</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Barnstaple Businesses Say</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from local Barnstaple businesses we've helped succeed online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/portfolio/sheila-shepherd.png"
                    alt="Sheila Shepherd, Owner of Sheila Shepherd School of Reflexology"
                    width={50}
                    height={50}
                    className="rounded-full object-cover w-[50px] h-[50px]"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Sheila Shepherd</h3>
                  <p className="text-sm text-muted-foreground">Sheila Shepherd School of Reflexology</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="italic text-gray-700 mb-4">
                "I cannot recommend Dream Pixel enough. They created my website The Sheila Shepherd School of
                Reflexology within a tight deadline, working very closely with me to get it how I had visualised it.
                They are continuing to work with me. Their kindness and patience are really appreciated. Thank you so
                much."
              </blockquote>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/portfolio/rcs-tuning.png"
                    alt="Richard Summers, Founder of RCS Tuning"
                    width={50}
                    height={50}
                    className="rounded-full object-cover w-[50px] h-[50px]"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Richard Summers</h3>
                  <p className="text-sm text-muted-foreground">RCS Tuning</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="italic text-gray-700 mb-4">
                "Ash built me my website and still adding bits ect I want now, absolute top guy with lots of talent and
                has worked all hours for me to get it up and running, thanks Ash 5⭐️"
              </blockquote>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/portfolio/capstones-lookout.png"
                    alt="Carole Winter, Owner of Withymead Cottage"
                    width={50}
                    height={50}
                    className="rounded-full object-cover w-[50px] h-[50px]"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Carole Winter</h3>
                  <p className="text-sm text-muted-foreground">Withymead Cottage</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <blockquote className="italic text-gray-700 mb-4">
                "Dream Pixel created a new website for our business, the website has everything we asked for and more,
                it is professional, user friendly and stands out from the crowd. We have found that any small changes we
                require are implemented quickly so the site remans current at all times. We highly recommend Dream Pixel
                and would not hesitate to contact anytime."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced with more compelling content */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white" id="why-choose-us-barnstaple">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-purple-600 font-medium">BARNSTAPLE'S PREMIER WEB DESIGN AGENCY</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Why Choose Dream Pixel for Web Design in Barnstaple?
            </h2>
            <p className="text-xl text-muted-foreground">
              We combine deep local knowledge of Barnstaple and North Devon with cutting-edge design expertise to
              deliver exceptional results
            </p>
            <p className="text-xl text-muted-foreground">
              When you need professional web design in Barnstaple, our local expertise and proven track record make us
              the ideal partner for your digital success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Local Barnstaple Expertise</h3>
                <p className="text-muted-foreground">
                  As a Barnstaple-based business, we understand the local market dynamics, customer preferences, and
                  competitive landscape. We leverage this local knowledge to create websites that resonate with the
                  North Devon community and help you connect with Barnstaple customers effectively.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Service for Barnstaple Businesses</h3>
                <p className="text-muted-foreground">
                  We take the time to understand your business goals, target audience, and unique selling points. Each
                  website we create for Barnstaple businesses is custom-designed to reflect your brand identity and meet
                  the specific needs of your North Devon customers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Results-Driven Approach for Barnstaple</h3>
                <p className="text-muted-foreground">
                  We focus on creating websites that not only look great but also drive conversions and help you achieve
                  your business objectives. Our data-driven approach ensures your website performs well in Barnstaple's
                  competitive market and delivers a strong return on investment.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-green-600">£</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Affordable Web Design for Barnstaple SMEs</h3>
                <p className="text-muted-foreground">
                  We understand the budget constraints many Barnstaple small and medium-sized businesses face. That's
                  why we offer competitive, transparent pricing without compromising on quality, making professional web
                  design accessible to businesses of all sizes in Barnstaple and North Devon.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ongoing Support for Barnstaple Clients</h3>
                <p className="text-muted-foreground">
                  Our relationship doesn't end when your website launches. We provide ongoing support and maintenance to
                  Barnstaple businesses, ensuring your site continues to perform at its best and evolves with your
                  business and the changing digital landscape in North Devon.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Full-Service Digital Agency for Barnstaple</h3>
                <p className="text-muted-foreground">
                  Beyond web design, we offer comprehensive digital marketing services tailored to Barnstaple
                  businesses, including local SEO, content creation, PPC campaigns, and social media management. We're
                  your one-stop shop for all things digital in North Devon.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white" id="web-design-process-barnstaple">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-purple-600 font-medium">OUR METHODOLOGY</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our Web Design in Barnstaple: A Proven Process for Success
            </h2>
            <p className="text-xl text-muted-foreground">
              A streamlined, efficient approach to creating your perfect website
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-200 to-green-200 hidden md:block"
              aria-hidden="true"
            ></div>

            <div className="space-y-12 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right space-y-4 order-2 md:order-1">
                  <h3 className="text-2xl font-bold">1. Discovery & Strategy for Barnstaple Market</h3>
                  <p className="text-muted-foreground">
                    We start by deeply understanding your Barnstaple business, goals, target audience, and local
                    competitors to create a strategic plan for your website. We analyze what works specifically in the
                    North Devon market and identify opportunities to help your Barnstaple business stand out online.
                  </p>
                </div>
                <div className="relative order-1 md:order-2">
                  <div
                    className="absolute -inset-4 bg-purple-100 rounded-full blur-3xl opacity-30 hidden md:block"
                    aria-hidden="true"
                  ></div>
                  <div className="md:pl-12 relative">
                    <div
                      className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center justify-center text-2xl font-bold absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 hidden md:flex"
                      aria-hidden="true"
                    >
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
                  <div
                    className="absolute -inset-4 bg-green-100 rounded-full blur-3xl opacity-30 hidden md:block"
                    aria-hidden="true"
                  ></div>
                  <div className="md:pr-12 relative">
                    <div
                      className="h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-center text-2xl font-bold absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 hidden md:flex"
                      aria-hidden="true"
                    >
                      2
                    </div>
                    <div className="rounded-lg shadow-lg overflow-hidden">
                      <DesignAnimation />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">2. Design Tailored for Barnstaple Audiences</h3>
                  <p className="text-muted-foreground">
                    Our Barnstaple-based designers create wireframes and mockups of your website, focusing on user
                    experience, brand consistency, and conversion optimization. We incorporate design elements that
                    resonate with North Devon customers and reflect the unique character of Barnstaple businesses.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right space-y-4 order-2 md:order-1">
                  <h3 className="text-2xl font-bold">3. Development with Local SEO Focus</h3>
                  <p className="text-muted-foreground">
                    Our developers bring the designs to life, building a responsive, fast-loading website with clean
                    code and SEO best practices. We implement specific optimizations for Barnstaple and North Devon
                    search terms, ensuring your website ranks well for local searches that matter to your business.
                  </p>
                </div>
                <div className="relative order-1 md:order-2">
                  <div
                    className="absolute -inset-4 bg-purple-100 rounded-full blur-3xl opacity-30 hidden md:block"
                    aria-hidden="true"
                  ></div>
                  <div className="md:pl-12 relative">
                    <div
                      className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center justify-center text-2xl font-bold absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 hidden md:flex"
                      aria-hidden="true"
                    >
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
                  <div
                    className="absolute -inset-4 bg-green-100 rounded-full blur-3xl opacity-30 hidden md:block"
                    aria-hidden="true"
                  ></div>
                  <div className="md:pr-12 relative">
                    <div
                      className="h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-center text-2xl font-bold absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 hidden md:flex"
                      aria-hidden="true"
                    >
                      4
                    </div>
                    <div className="rounded-lg shadow-lg overflow-hidden">
                      <LaunchAnimation />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">4. Testing, Launch & Local Marketing</h3>
                  <p className="text-muted-foreground">
                    We thoroughly test your website across different devices and browsers before launching. After
                    launch, we provide Barnstaple businesses with a local marketing plan to drive traffic and generate
                    leads from your target audience in North Devon, ensuring your new website delivers maximum ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barnstaple Web Design Services */}
      <section className="py-16 bg-purple-50" id="barnstaple-web-design-services">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-purple-600 font-medium">COMPREHENSIVE SOLUTIONS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Web Design in Barnstaple: Our Core Services</h2>
            <p className="text-lg text-muted-foreground">
              From simple brochure websites to complex e-commerce platforms, we offer a complete range of web design
              services tailored to Barnstaple businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Business Websites for Barnstaple Companies</h3>
              <p className="text-muted-foreground mb-4">
                Professional, mobile-responsive websites that showcase your Barnstaple business and help you attract
                local customers from across North Devon.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Local Barnstaple SEO optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Mobile-responsive design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Contact forms and maps</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">E-commerce Web Design for Barnstaple Shops</h3>
              <p className="text-muted-foreground mb-4">
                Secure, user-friendly online stores that help Barnstaple retailers sell products and services online,
                with integrated payment gateways and inventory management.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Product catalog management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Secure payment processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Mobile-optimized shopping experience</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0H5m14 0v-1a2 2 0 00-2-2H7a2 2 0 00-2 2v1M3 9h18M3 12h18M3 15h18"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Portfolio Websites for Barnstaple Creatives</h3>
              <p className="text-muted-foreground mb-4">
                Visually stunning portfolio websites that showcase the work of Barnstaple artists, photographers, and
                designers, with easy-to-use content management systems.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Image galleries and slideshows</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Client testimonials and case studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Social media integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-green-500 text-white text-center">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Barnstaple Business with a Stunning Website?
          </h2>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 hover:text-purple-700">
            <Link href="/contact">Get Web Design in Barnstaple</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
