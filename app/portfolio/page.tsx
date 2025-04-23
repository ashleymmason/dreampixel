import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Portfolio() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/95"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our recent web design and digital marketing projects. Each project represents our commitment to
              creating beautiful, functional websites that drive results.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 sm:grid-cols-5 w-full max-w-2xl">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web-design">Web Design</TabsTrigger>
                <TabsTrigger value="e-commerce">E-Commerce</TabsTrigger>
                <TabsTrigger value="branding">Branding</TabsTrigger>
                <TabsTrigger value="seo" className="hidden sm:block">
                  SEO
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* RCS Tuning */}
                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/portfolio/rcs-tuning.png"
                      alt="RCS Tuning - Custom vehicle remapping and performance tuning"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">RCS Tuning</h3>
                    <p className="text-muted-foreground mb-4">
                      A comprehensive e-commerce website for RCS Tuning, offering performance parts and tuning services
                      for vehicles. The site features a user-friendly shopping experience with detailed product
                      categories and secure checkout.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">E-Commerce</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Web Design</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://rcs-tuning.co.uk/" target="_blank" rel="noopener noreferrer">
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Truck Bracket */}
                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/portfolio/truck-bracket.png"
                      alt="Truck Bracket UK - Truck accessories and brackets"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Truck Bracket</h3>
                    <p className="text-muted-foreground mb-4">
                      An e-commerce website specializing in high-quality truck brackets and accessories. The site
                      features optimized product pages, easy navigation, and SEO-friendly content to improve visibility
                      in search results.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">E-Commerce</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">SEO</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Web Design</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://truckbracket.co.uk/" target="_blank" rel="noopener noreferrer">
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Doggie Discounts */}
                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/doggie%20discounts%20%282%29-L3TavfDC03Y1yYS8J2csYdpNT9Xr2J.png"
                      alt="Doggie Discounts - Pet supplies and accessories"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Doggie Discounts</h3>
                    <p className="text-muted-foreground mb-4">
                      A pet-focused e-commerce website offering discounted dog products and accessories. The site
                      features a clean, user-friendly design with easy product filtering and a streamlined checkout
                      process.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">E-Commerce</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Web Design</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://doggiediscounts.co.uk/" target="_blank" rel="noopener noreferrer">
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Withymead Cottage */}
                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Withymead%20Cottage-Wqepc419lRND4ta7syWnEjDgsvH419.png"
                      alt="Withymead Cottage - Exmoor holiday cottage with private pool"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Withymead Cottage</h3>
                    <p className="text-muted-foreground mb-4">
                      A beautiful website for Withymead Cottage, an Exmoor holiday cottage with a private pool. The site
                      showcases the property's features with stunning imagery, detailed information, and an easy booking
                      inquiry system.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Web Design</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://exmoorcottagewithypool.com/" target="_blank" rel="noopener noreferrer">
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* RJH Construction */}
                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/portfolio/rjh-construction.png"
                      alt="RJH Construction - Professional construction services"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">RJH Construction</h3>
                    <p className="text-muted-foreground mb-4">
                      A professional website for RJH Construction, showcasing their construction services, previous
                      projects, and expertise. The site features a clean design with easy navigation and clear calls to
                      action.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Web Design</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://rjhconstruction.co.uk/" target="_blank" rel="noopener noreferrer">
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Yetland Farm Holiday Cottages */}
                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yetland%20Farm%20Holiday%20Cottages-RjJfjYcdIx0QuueQt4fbeiNbtzwyk4.png"
                      alt="Yetland Farm Holiday Cottages - Devon countryside accommodations"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Yetland Farm Holiday Cottages</h3>
                    <p className="text-muted-foreground mb-4">
                      A welcoming website for Yetland Farm Holiday Cottages, featuring their charming accommodations in
                      the Devon countryside. The site includes detailed cottage descriptions, photo galleries, and
                      booking information.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Web Design</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://yetlandfarmholidaycottages.com/" target="_blank" rel="noopener noreferrer">
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Capstone's Lookout */}
                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/portfolio/capstones-lookout.png"
                      alt="Capstone's Lookout - Coastal property with panoramic views in Ilfracombe"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Capstone's Lookout</h3>
                    <p className="text-muted-foreground mb-4">
                      An elegant website for Capstone's Lookout, showcasing this stunning coastal property with
                      panoramic views. The site features beautiful imagery, detailed information about the
                      accommodation, and easy booking options.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Web Design</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://capstoneslookout.co.uk/" target="_blank" rel="noopener noreferrer">
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Upcoming Bands */}
                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/portfolio/upcoming-bands.png"
                      alt="Upcoming Bands - Discover new music and bands"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Upcoming Bands</h3>
                    <p className="text-muted-foreground mb-4">
                      A dynamic website for discovering new and upcoming bands in the music scene. The site features
                      band profiles, music news, event listings, and is optimized for search engines with strong social
                      media integration.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Web Design</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">SEO</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Branding</span>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Social</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://upcomingbands.co.uk/" target="_blank" rel="noopener noreferrer">
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* The Sheila Shepherd School of Reflexology */}
                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/portfolio/sheila-shepherd.png"
                      alt="The Sheila Shepherd School of Reflexology - Professional reflexology training"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">The Sheila Shepherd School of Reflexology</h3>
                    <p className="text-muted-foreground mb-4">
                      A professional website for The Sheila Shepherd School of Reflexology, offering information about
                      reflexology courses and training. The site features course details, testimonials, and easy contact
                      options.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Web Design</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link
                        href="https://sheilashepherdschoolofreflexology.co.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* BandPress */}
                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/portfolio/bandpress.png"
                      alt="BandPress - Music promotion and artist platform"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">BandPress</h3>
                    <p className="text-muted-foreground mb-4">
                      A comprehensive platform for bands and musicians to promote their music and connect with fans. The
                      site features artist profiles, music releases, and industry news with strong SEO optimization and
                      brand identity.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Web Design</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">SEO</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Branding</span>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Social</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://bandpress.co.uk/" target="_blank" rel="noopener noreferrer">
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="web-design" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Web Design Projects */}
                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/portfolio/rcs-tuning.png"
                      alt="RCS Tuning - Custom vehicle remapping and performance tuning"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">RCS Tuning</h3>
                    <p className="text-muted-foreground mb-4">
                      A comprehensive e-commerce website for RCS Tuning, offering performance parts and tuning services
                      for vehicles. The site features a user-friendly shopping experience with detailed product
                      categories and secure checkout.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Web Design</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">E-Commerce</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://rcs-tuning.co.uk/" target="_blank" rel="noopener noreferrer">
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/portfolio/truck-bracket.png"
                      alt="Truck Bracket UK - Truck accessories and brackets"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Truck Bracket</h3>
                    <p className="text-muted-foreground mb-4">
                      An e-commerce website specializing in high-quality truck brackets and accessories. The site
                      features optimized product pages, easy navigation, and SEO-friendly content to improve visibility
                      in search results.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Web Design</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">E-Commerce</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">SEO</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://truckbracket.co.uk/" target="_blank" rel="noopener noreferrer">
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/doggie%20discounts%20%282%29-L3TavfDC03Y1yYS8J2csYdpNT9Xr2J.png"
                      alt="Doggie Discounts - Pet supplies and accessories"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Doggie Discounts</h3>
                    <p className="text-muted-foreground mb-4">
                      A pet-focused e-commerce website offering discounted dog products and accessories. The site
                      features a clean, user-friendly design with easy product filtering and a streamlined checkout
                      process.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Web Design</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">E-Commerce</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://doggiediscounts.co.uk/" target="_blank" rel="noopener noreferrer">
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Withymead%20Cottage-Wqepc419lRND4ta7syWnEjDgsvH419.png"
                      alt="Withymead Cottage - Exmoor holiday cottage with private pool"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Withymead Cottage</h3>
                    <p className="text-muted-foreground mb-4">
                      A beautiful website for Withymead Cottage, an Exmoor holiday cottage with a private pool. The site
                      showcases the property's features with stunning imagery, detailed information, and an easy booking
                      inquiry system.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Web Design</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://exmoorcottagewithypool.com/" target="_blank" rel="noopener noreferrer">
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/portfolio/rjh-construction.png"
                      alt="RJH Construction"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">RJH Construction</h3>
                    <p className="text-muted-foreground mb-4">
                      A professional website for RJH Construction, showcasing their construction services, previous
                      projects, and expertise. The site features a clean design with easy navigation and clear calls to
                      action.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Web Design</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://rjhconstruction.co.uk/" target="_blank" rel="noopener noreferrer">
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yetland%20Farm%20Holiday%20Cottages-RjJfjYcdIx0QuueQt4fbeiNbtzwyk4.png"
                      alt="Yetland Farm Holiday Cottages - Devon countryside accommodations"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Yetland Farm Holiday Cottages</h3>
                    <p className="text-muted-foreground mb-4">
                      A welcoming website for Yetland Farm Holiday Cottages, featuring their charming accommodations in
                      the Devon countryside. The site includes detailed cottage descriptions, photo galleries, and
                      booking information.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Web Design</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://yetlandfarmholidaycottages.com/" target="_blank" rel="noopener noreferrer">
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/portfolio/capstones-lookout.png"
                      alt="Capstone's Lookout"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Capstone's Lookout</h3>
                    <p className="text-muted-foreground mb-4">
                      An elegant website for Capstone's Lookout, showcasing this stunning coastal property with
                      panoramic views. The site features beautiful imagery, detailed information about the
                      accommodation, and easy booking options.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Web Design</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://capstoneslookout.co.uk/" target="_blank" rel="noopener noreferrer">
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/portfolio/sheila-shepherd.png"
                      alt="The Sheila Shepherd School of Reflexology"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">The Sheila Shepherd School of Reflexology</h3>
                    <p className="text-muted-foreground mb-4">
                      A professional website for The Sheila Shepherd School of Reflexology, offering information about
                      reflexology courses and training. The site features course details, testimonials, and easy contact
                      options.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Web Design</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link
                        href="https://sheilashepherdschoolofreflexology.co.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="e-commerce" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* E-Commerce Projects */}
                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/portfolio/rcs-tuning.png"
                      alt="RCS Tuning - Custom vehicle remapping and performance tuning"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">RCS Tuning</h3>
                    <p className="text-muted-foreground mb-4">
                      A comprehensive e-commerce website for RCS Tuning, offering performance parts and tuning services
                      for vehicles. The site features a user-friendly shopping experience with detailed product
                      categories and secure checkout.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">E-Commerce</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Web Design</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://rcs-tuning.co.uk/" target="_blank" rel="noopener noreferrer">
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/portfolio/truck-bracket.png"
                      alt="Truck Bracket UK - Truck accessories and brackets"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Truck Bracket</h3>
                    <p className="text-muted-foreground mb-4">
                      An e-commerce website specializing in high-quality truck brackets and accessories. The site
                      features optimized product pages, easy navigation, and SEO-friendly content to improve visibility
                      in search results.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">E-Commerce</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">SEO</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Web Design</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://truckbracket.co.uk/" target="_blank" rel="noopener noreferrer">
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/doggie%20discounts%20%282%29-L3TavfDC03Y1yYS8J2csYdpNT9Xr2J.png"
                      alt="Doggie Discounts - Pet supplies and accessories"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Doggie Discounts</h3>
                    <p className="text-muted-foreground mb-4">
                      A pet-focused e-commerce website offering discounted dog products and accessories. The site
                      features a clean, user-friendly design with easy product filtering and a streamlined checkout
                      process.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">E-Commerce</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Web Design</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://doggiediscounts.co.uk/" target="_blank" rel="noopener noreferrer">
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="branding" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Branding Projects */}
                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/portfolio/upcoming-bands.png"
                      alt="Upcoming Bands - Discover new music and bands"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Upcoming Bands</h3>
                    <p className="text-muted-foreground mb-4">
                      A dynamic website for discovering new and upcoming bands in the music scene. The site features
                      band profiles, music news, event listings, and is optimized for search engines with strong social
                      media integration.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Branding</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Web Design</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">SEO</span>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Social</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://upcomingbands.co.uk/" target="_blank" rel="noopener noreferrer">
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/portfolio/bandpress.png"
                      alt="BandPress - Music promotion and artist platform"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">BandPress</h3>
                    <p className="text-muted-foreground mb-4">
                      A comprehensive platform for bands and musicians to promote their music and connect with fans. The
                      site features artist profiles, music releases, and industry news with strong SEO optimization and
                      brand identity.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Branding</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Web Design</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">SEO</span>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Social</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://bandpress.co.uk/" target="_blank" rel="noopener noreferrer">
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="seo" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* SEO Projects */}
                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/portfolio/truck-bracket.png"
                      alt="Truck Bracket UK - Truck accessories and brackets"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Truck Bracket</h3>
                    <p className="text-muted-foreground mb-4">
                      An e-commerce website specializing in high-quality truck brackets and accessories. The site
                      features optimized product pages, easy navigation, and SEO-friendly content to improve visibility
                      in search results.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">SEO</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">E-Commerce</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Web Design</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://truckbracket.co.uk/" target="_blank" rel="noopener noreferrer">
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/portfolio/upcoming-bands.png"
                      alt="Upcoming Bands - Discover new music and bands"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Upcoming Bands</h3>
                    <p className="text-muted-foreground mb-4">
                      A dynamic website for discovering new and upcoming bands in the music scene. The site features
                      band profiles, music news, event listings, and is optimized for search engines with strong social
                      media integration.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">SEO</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Web Design</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Branding</span>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Social</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://upcomingbands.co.uk/" target="_blank" rel="noopener noreferrer">
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/portfolio/bandpress.png"
                      alt="BandPress - Music promotion and artist platform"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">BandPress</h3>
                    <p className="text-muted-foreground mb-4">
                      A comprehensive platform for bands and musicians to promote their music and connect with fans. The
                      site features artist profiles, music releases, and industry news with strong SEO optimization and
                      brand identity.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">SEO</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Web Design</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Branding</span>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Social</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://bandpress.co.uk/" target="_blank" rel="noopener noreferrer">
                        View Website
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">How we bring your vision to life</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Discovery</h3>
                <p className="text-muted-foreground">
                  We start by understanding your business, goals, target audience, and competitors to create a strategic
                  plan.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Design</h3>
                <p className="text-muted-foreground">
                  Our designers create wireframes and mockups focusing on user experience and brand consistency.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Development</h3>
                <p className="text-muted-foreground">
                  Our developers build your website with clean code, responsive design, and SEO best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Launch & Support</h3>
                <p className="text-muted-foreground">
                  After thorough testing, we launch your site and provide ongoing support and maintenance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-50 to-green-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today to discuss your project and see how we can help you achieve your online goals.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600"
            >
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
