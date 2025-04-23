import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, MessageSquare } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-[70vh] container mx-auto px-4 py-16 flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative mb-8">
          {/* Animated 404 with brand styling */}
          <h1 className="text-9xl font-bold text-primary opacity-10 select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-2">
              <p className="text-2xl font-semibold text-gray-600">Oops!</p>
              <h2 className="text-4xl font-bold text-primary">Page Not Found</h2>
            </div>
          </div>
        </div>

        {/* Animated elements */}
        <div className="relative h-48 mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-32 h-32">
              {/* Pixel elements that animate */}
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-primary/80 rounded-md animate-pulse"
                  style={{
                    width: `${Math.random() * 20 + 10}px`,
                    height: `${Math.random() * 20 + 10}px`,
                    top: `${Math.random() * 100}px`,
                    left: `${Math.random() * 100}px`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                />
              ))}
              {/* Central pixel */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary rounded-md" />
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild className="flex items-center gap-2">
            <Link href="/">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>

          <Button asChild variant="outline" className="flex items-center gap-2">
            <Link href="/services">
              <Search className="w-4 h-4" />
              Browse Services
            </Link>
          </Button>

          <Button asChild variant="outline" className="flex items-center gap-2">
            <Link href="/contact">
              <MessageSquare className="w-4 h-4" />
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
