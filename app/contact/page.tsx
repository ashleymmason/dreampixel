import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/95"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Get in{" "}
              <span className="bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We'd love to hear from you. Contact us today to discuss your project or request a free quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Information</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Reach out to us through any of the following methods or fill out the contact form. We aim to respond
                  to all inquiries within 24 hours.
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Our Location</h3>
                      <p className="text-muted-foreground">Barnstaple, Devon, UK</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-purple-100">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Email</h3>
                      <p className="text-muted-foreground">info@dreampixel.co.uk</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-green-100">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20520.927672199!2d-4.0631948!3d51.0813636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486c22a2f45c8ddd%3A0x7cc9b381fceb8d14!2sBarnstaple!5e0!3m2!1sen!2suk!4v1648123456789!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Common questions about working with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How do I get started with Dream Pixel?</h3>
                <p className="text-muted-foreground">
                  Simply contact us through the form on this page, by email, or by phone. We'll schedule an initial
                  consultation to discuss your project requirements and goals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Do you offer free consultations?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer free initial consultations to understand your project needs and provide you with a
                  detailed quote.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How long does it take to complete a project?</h3>
                <p className="text-muted-foreground">
                  Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while more
                  complex projects can take 8-12 weeks or more. We'll provide a detailed timeline during our
                  consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Do you work with clients outside of Devon?</h3>
                <p className="text-muted-foreground">
                  Yes, while we're based in Barnstaple, Devon, we work with clients throughout the UK and
                  internationally. Most of our communication can be handled remotely.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your online presence?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's work together to create a website that truly represents your brand and helps you achieve your
              business goals.
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
