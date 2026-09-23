"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cookie, X } from "lucide-react"
import Link from "next/link"

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    } else if (consent === "accepted") {
      // Enable analytics if previously accepted
      enableAnalytics()
    }
    setIsLoaded(true)
  }, [])

  const enableAnalytics = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      })
    }
  }

  const disableAnalytics = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
      })
    }
  }

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    enableAnalytics()
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    disableAnalytics()
    setShowBanner(false)
  }

  if (!isLoaded || !showBanner) {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-4" role="dialog" aria-label="Cookie preferences" aria-describedby="cookie-consent-description">
      <Card className="mx-auto max-w-4xl border border-primary/60 bg-background shadow-2xl">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Cookie className="h-6 w-6 shrink-0 mt-1 text-primary" aria-hidden="true" />
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">We use cookies</h3>
              <p id="cookie-consent-description" className="mb-4 text-muted-foreground">
                We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized
                content. By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or
                learn more in our{" "}
                <Link href="/privacy-policy" className="text-primary hover:text-accent hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={acceptCookies} className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground">
                  Accept All
                </Button>
                <Button onClick={declineCookies} variant="outline">
                  Decline
                </Button>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={declineCookies} className="shrink-0" aria-label="Close cookie preferences">
              <X className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
