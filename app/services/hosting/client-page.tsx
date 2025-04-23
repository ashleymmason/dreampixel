"use client"

import Link from "next/link"
import { Check, Server, Shield, Clock, HardDrive, Globe, HeartPulse } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useRef } from "react"

export default function HostingPageClient() {
  const animationContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only import and initialize lottie on the client side
    const initLottie = async () => {
      if (animationContainer.current) {
        const lottieWeb = (await import("lottie-web")).default
        const animation = lottieWeb.loadAnimation({
          container: animationContainer.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: "https://assets5.lottiefiles.com/packages/lf20_dews3j6m.json", // Cloud hosting animation
        })

        return () => animation.destroy()
      }
    }

    initLottie()
  }, [])

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Dream Pixel{" "}
          <span className="bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">Hosting</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
          Keep your website fast, secure, and always online with our professional hosting services
        </p>
        <div className="w-full h-64 md:h-80 lg:h-96" ref={animationContainer} aria-hidden="true"></div>
      </section>

      {/* Features Overview */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Server className="text-purple-600 w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-2">High-Performance Websites</h3>
            <p className="text-gray-600">
              Our websites perform at a high level in terms of all round performance, ensuring a smooth experience for
              your visitors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Shield className="text-blue-600 w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-2">Enhanced Security</h3>
            <p className="text-gray-600">
              Advanced security measures including SSL certificates, malware scanning, and DDoS protection.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Clock className="text-green-600 w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-2">99.9% Uptime</h3>
            <p className="text-gray-600">
              We guarantee your website stays online with our reliable infrastructure and constant monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Hosting Plan</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the hosting package that best suits your business needs and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Hosting Package */}
          <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Basic Hosting</CardTitle>
              <CardDescription className="text-lg">Perfect for small business websites</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">£20</span>
                <span className="text-gray-500">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Professional website hosting</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Small changes at no extra cost</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Standard security features</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Email support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" className="w-full">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Premium Hosting Package */}
          <Card className="border-2 border-blue-300 hover:border-blue-500 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
              RECOMMENDED
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Premium Hosting</CardTitle>
              <CardDescription className="text-lg">Enhanced features for growing businesses</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">£30</span>
                <span className="text-gray-500">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Professional website hosting</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Small-mid sized changes at no extra cost</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Full security suite</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Complete website backups</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>24/7 priority support</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Free domain name renewal</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" className="w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Hosting</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide more than just server space - we offer a complete hosting solution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <HardDrive className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Regular Backups</h3>
            <p className="text-gray-600">
              We automatically back up your website to ensure your data is never lost and can be quickly restored if
              needed.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <Globe className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
            <p className="text-gray-600">
              We provide continuous assistance and support to ensure your website remains up-to-date and functioning
              optimally.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <HeartPulse className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Proactive Monitoring</h3>
            <p className="text-gray-600">
              We continuously monitor your website's health and performance to prevent issues before they affect your
              visitors.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl p-8 md:p-12 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your hosting needs and find the perfect solution for your business.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Contact Us
          </Button>
        </Link>
      </section>
    </div>
  )
}
