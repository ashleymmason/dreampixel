"use client"

import { useEffect, useRef, useState } from "react"
import { usePaypalScript } from "@/hooks/use-paypal-script"

interface PayPalSubscriptionButtonProps {
  planId: string
  buttonContainerId: string
  buttonColor?: "black" | "gold" | "blue" | "silver" | "white"
  buttonShape?: "rect" | "pill"
  buttonLayout?: "vertical" | "horizontal"
}

export default function PayPalSubscriptionButton({
  planId,
  buttonContainerId,
  buttonColor = "black",
  buttonShape = "rect",
  buttonLayout = "vertical",
}: PayPalSubscriptionButtonProps) {
  const paypalButtonRef = useRef<HTMLDivElement>(null)
  const buttonRendered = useRef(false)
  const { scriptLoaded, scriptError } = usePaypalScript()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Only proceed if the script is loaded and the button hasn't been rendered yet
    if (scriptLoaded && paypalButtonRef.current && !buttonRendered.current && window.paypal) {
      try {
        // Clear any existing content in the container
        if (paypalButtonRef.current.firstChild) {
          paypalButtonRef.current.innerHTML = ""
        }

        const button = window.paypal.Buttons({
          style: {
            shape: buttonShape,
            color: buttonColor,
            layout: buttonLayout,
            label: "subscribe",
          },
          createSubscription: (data: any, actions: any) => {
            return actions.subscription.create({
              plan_id: planId,
            })
          },
          onApprove: (data: any, actions: any) => {
            alert(`Subscription successful! Your subscription ID is: ${data.subscriptionID}`)
          },
        })

        if (button.isEligible()) {
          button.render(`#${buttonContainerId}`)
          buttonRendered.current = true
        } else {
          setError("PayPal button is not eligible for rendering")
        }
      } catch (err) {
        setError(`Error rendering PayPal button: ${err instanceof Error ? err.message : String(err)}`)
        console.error("PayPal button render error:", err)
      }
    }

    if (scriptError) {
      setError(`Failed to load PayPal SDK: ${scriptError.message}`)
    }

    // Cleanup function
    return () => {
      buttonRendered.current = false
    }
  }, [scriptLoaded, scriptError, planId, buttonContainerId, buttonColor, buttonShape, buttonLayout])

  return (
    <>
      <div id={buttonContainerId} ref={paypalButtonRef} className="paypal-button-container"></div>
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
    </>
  )
}

// Add TypeScript declaration for the PayPal global object
declare global {
  interface Window {
    paypal: any
  }
}
