"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"

interface DirectPayPalButtonProps {
  planId: string
  containerId: string
  buttonColor?: string
}

export default function DirectPayPalButton({ planId, containerId, buttonColor = "black" }: DirectPayPalButtonProps) {
  const initialized = useRef(false)

  // Function to initialize the button
  const initializeButton = () => {
    if (typeof window !== "undefined" && window.paypal && !initialized.current) {
      try {
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
              alert(data.subscriptionID) // Success message
            },
          })
          .render(`#${containerId}`)

        initialized.current = true
      } catch (error) {
        console.error("PayPal button initialization error:", error)
      }
    }
  }

  useEffect(() => {
    // If PayPal is already loaded, initialize the button
    if (typeof window !== "undefined" && window.paypal) {
      initializeButton()
    }

    // Clean up function
    return () => {
      initialized.current = false
    }
  }, [planId, containerId, buttonColor])

  return (
    <>
      <div id={containerId} className="paypal-button-container"></div>
      <Script
        src="https://www.paypal.com/sdk/js?client-id=AQn9jLYImfA8WwnTnwxtVp3bCnoRtY4wmskTxwkLxhQ3k9D-rVL5O4JQxPmYHRyQXXfjsm5JvAWD_v79&vault=true&intent=subscription"
        data-sdk-integration-source="button-factory"
        onLoad={initializeButton}
        strategy="lazyOnload"
      />
    </>
  )
}
