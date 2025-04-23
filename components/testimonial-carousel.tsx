"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Richard Summers",
    role: "RCS Tuning",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RCS%20Tuning%20%284%29-YW0Ow8gEfaxLDoBa70hTY1TQEk7E2G.png",
    content:
      "Ash built me my website and still adding bits ect I want now, absolute top guy with lots of talent and has worked all hours for me to get it up and running, thanks Ash 5⭐️",
  },
  {
    id: 2,
    name: "Carole Winter",
    role: "Withymead Cottage",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Withymead%20Cottage-nCui54Ej38UdPMdxYRhKmrhupQihr5.png",
    content:
      "Dream Pixel created a new website for our business, the website has everything we asked for and more, it is professional, user friendly and stands out from the crowd. We have found that any small changes we require are implemented quickly so the site remans current at all times. We highly recommend Dream Pixel and would not hesitate to contact anytime.",
  },
  {
    id: 3,
    name: "Sheila Shepherd",
    role: "The Sheila Shepherd School of Reflexology",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The%20Sheila%20Shepherd%20School%20of%20Reflexology-hgJLidFDzIyZFcZWA6WJUVvhZVhZ2Q.png",
    content:
      "I cannot recommend Dream Pixel enough. They created my website The Sheila Shepherd School of Reflexology within a tight deadline, working very closely with me to get it how I had visualised it. They are continuing to work with me. Their kindness and patience are really appreciated. Thank you so much.",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="bg-white/70 backdrop-blur-sm border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-purple-200 mb-4" />
                  <p className="text-lg mb-6">{testimonial.content}</p>
                  <div className="flex items-center">
                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden bg-gray-100 mr-4 relative">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          className="rounded-full"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>

        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`w-2 h-2 p-0 rounded-full ${index === current ? "bg-primary" : "bg-muted"}`}
            onClick={() => setCurrent(index)}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}

        <Button
          variant="outline"
          size="icon"
          onClick={next}
          className="rounded-full"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}
