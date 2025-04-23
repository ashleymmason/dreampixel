"use client"

import { useEffect, useRef } from "react"

interface PayPalSubscriptionButtonProps {
  planId: string
  buttonContainerId: string
}

export default function PayPalSubscriptionButton({ planId, buttonContainerId }: PayPalSubscriptionButtonProps) {
  const paypalButtonRef = useRef<HTMLDivElement>(null)
  const scriptLoaded = useRef(false)

  useEffect(() => {
    // Only load the script once
    if (scriptLoaded.current) return

    // Create and load the PayPal SDK script
    const script = document.createElement("script")
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AQn9jLYImfA8WwnTnwxtVp3bCnoRtY4wmskTxwkLxhQ3k9D-rVL5O4JQxPmYHRyQXXfjsm5JvAWD_v79&vault=true&intent=subscription"
    script.setAttribute("data-sdk-integration-source", "button-factory")
    script.async = true

    script.onload = () => {
      if (window.paypal && paypalButtonRef.current) {
        window.paypal
          .Buttons({
            style: {
              shape: "rect",
              color: "black",
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
          })
          .render(`#${buttonContainerId}`)
      }
    }

    document.body.appendChild(script)
    scriptLoaded.current = true

    return () => {
      // Clean up if component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [planId, buttonContainerId])

  return <div id={buttonContainerId} ref={paypalButtonRef}></div>
}

// Add TypeScript declaration for the PayPal global object
declare global {
  interface Window {
    paypal: any
  }
}
