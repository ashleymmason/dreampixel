"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

// Static placeholder for loading state
function HostingPagePlaceholder() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Dream Pixel{" "}
          <span className="bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">Hosting</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
          Keep your website fast, secure, and always online with our professional hosting services
        </p>
        <div className="w-full h-64 md:h-80 lg:h-96 bg-gray-50 rounded-lg"></div>
      </div>
      <div className="text-center">Loading...</div>
    </div>
  )
}

// Dynamically import the client component with SSR disabled
const HostingPageClient = dynamic(() => import("./client-page"), {
  ssr: false,
  loading: () => <HostingPagePlaceholder />,
})

export default function ClientWrapper() {
  // Use state to ensure component only renders on client
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <HostingPagePlaceholder />
  }

  return <HostingPageClient />
}
