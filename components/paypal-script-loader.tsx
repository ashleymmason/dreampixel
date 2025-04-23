"use client"

import Script from "next/script"
import { useState } from "react"

export default function PayPalScriptLoader() {
  const [loaded, setLoaded] = useState(false)

  const handleLoad = () => {
    setLoaded(true)
    console.log("PayPal script loaded successfully")
  }

  return (
    <Script
      id="paypal-js"
      src="https://www.paypal.com/sdk/js?client-id=AQn9jLYImfA8WwnTnwxtVp3bCnoRtY4wmskTxwkLxhQ3k9D-rVL5O4JQxPmYHRyQXXfjsm5JvAWD_v79&vault=true&intent=subscription"
      data-sdk-integration-source="button-factory"
      strategy="lazyOnload"
      onLoad={handleLoad}
    />
  )
}
