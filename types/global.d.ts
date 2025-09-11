declare global {
  interface Window {
    paypal: any
    gtag: (
      command: "config" | "consent" | "event",
      targetId: string | "update" | "default",
      config?: {
        [key: string]: any
        analytics_storage?: "granted" | "denied"
        ad_storage?: "granted" | "denied"
      },
    ) => void
    dataLayer: any[]
  }
}

export {}
