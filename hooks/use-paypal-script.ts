"use client"

// Track if the script has been loaded
let paypalScriptLoaded = false

export function usePaypalScript() {
  // Function to load the PayPal script if it hasn't been loaded yet
  const loadPayPalScript = () => {
    if (paypalScriptLoaded || typeof window === "undefined") return

    // Check if the script is already in the document
    const existingScript = document.querySelector(
      'script[src*="https://www.paypal.com/sdk/js"][data-sdk-integration-source="button-factory"]',
    )

    if (!existingScript) {
      const script = document.createElement("script")
      script.src =
        "https://www.paypal.com/sdk/js?client-id=AQn9jLYImfA8WwnTnwxtVp3bCnoRtY4wmskTxwkLxhQ3k9D-rVL5O4JQxPmYHRyQXXfjsm5JvAWD_v79&vault=true&intent=subscription"
      script.setAttribute("data-sdk-integration-source", "button-factory")
      script.async = true
      document.body.appendChild(script)
    }

    paypalScriptLoaded = true
  }

  return { loadPayPalScript }
}
