"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"

interface DirectPayPalButtonProps {
  planId: string
  containerId: string
  buttonColor?: string
}

export default function DirectPayPalButton({ planId, containerId, buttonColor = "black" }: DirectPayPalButtonProps) {
  const initialized = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Function to initialize the button
  const initializeButton = () => {
    if (typeof window !== "undefined" && window.paypal && !initialized.current && containerRef.current) {
      try {
        // Clear any existing content
        containerRef.current.innerHTML = ""

        window.paypal
          .Buttons({
            style: {
              shape: "rect",
              color: buttonColor,
              layout: "vertical",
              label: "subscribe",
            },
            createSubscription: (data: any, actions: any) =>
              actions.subscription.create({
                plan_id: planId,
              }),
            onApprove: (data: any, actions: any) => {
              alert(`Subscription successful! Your subscription ID is: ${data.subscriptionID}`)
            },
            onError: (err: any) => {
              console.error("PayPal button error:", err)
              setError("Payment processing error. Please try again.")
            },
          })
          .render(`#${containerId}`)

        initialized.current = true
        setError(null)
      } catch (error) {
        console.error("PayPal button initialization error:", error)
        setError("Failed to load payment button. Please refresh the page.")
      }
    }
  }

  const handleScriptLoad = () => {
    setScriptLoaded(true)
    // Add a small delay to ensure DOM is ready
    setTimeout(() => {
      initializeButton()
    }, 100)
  }

  const handleScriptError = () => {
    setError("Failed to load PayPal SDK. Please check your internet connection.")
  }

  useEffect(() => {
    // If PayPal is already loaded, initialize the button
    if (typeof window !== "undefined" && window.paypal && scriptLoaded) {
      initializeButton()
    }

    // Clean up function
    return () => {
      initialized.current = false
      if (containerRef.current) {
        containerRef.current.innerHTML = ""
      }
    }
  }, [planId, containerId, buttonColor, scriptLoaded])

  return (
    <>
      <div id={containerId} ref={containerRef} className="paypal-button-container min-h-[50px]" />
      {error && <div className="text-red-500 text-sm mt-2 p-2 bg-red-50 rounded">{error}</div>}
      <Script
        src="https://www.paypal.com/sdk/js?client-id=AQn9jLYImfA8WwnTnwxtVp3bCnoRtY4wmskTxwkLxhQ3k9D-rVL5O4JQxPmYHRyQXXfjsm5JvAWD_v79&vault=true&intent=subscription"
        data-sdk-integration-source="button-factory"
        onLoad={handleScriptLoad}
        onError={handleScriptError}
        strategy="lazyOnload"
      />
    </>
  )
}
