"use client"

import { useEffect } from "react"

export function AnalyticsDebugger() {
  useEffect(() => {
    // Only run in development or when explicitly enabled
    if (process.env.NODE_ENV === "development" || window.location.search.includes("debug_analytics")) {
      console.log("Analytics Debugger: Initializing...")

      // Check if gtag is defined
      if (typeof window.gtag === "undefined") {
        console.error("Analytics Debugger: gtag is not defined. Google Analytics may not be loading correctly.")
      } else {
        console.log("Analytics Debugger: gtag is properly defined.")

        // Send a test event
        window.gtag("event", "debugger_initialized", {
          event_category: "debugging",
          event_label: "Analytics Debugger",
        })

        console.log("Analytics Debugger: Test event sent.")
      }

      // Check for common blockers
      const checkForBlockers = () => {
        if (window.ga && window.ga.loaded) {
          console.log("Analytics Debugger: GA loaded successfully.")
        } else {
          console.warn("Analytics Debugger: GA may be blocked by an extension or browser setting.")
        }
      }

      // Run check after a delay to ensure GA has time to load
      setTimeout(checkForBlockers, 2000)
    }
  }, [])

  // This component doesn't render anything
  return null
}

export default AnalyticsDebugger
