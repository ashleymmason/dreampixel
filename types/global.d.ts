declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "consent",
      targetId: string | "default" | "update",
      config?: {
        page_path?: string
        transport_type?: string
        send_page_view?: boolean
        cookie_domain?: string
        analytics_storage?: "granted" | "denied"
        ad_storage?: "granted" | "denied"
        wait_for_update?: number
        [key: string]: any
      },
    ) => void
    dataLayer: any[]
    paypal?: {
      Buttons: (options: any) => {
        render: (selector: string) => Promise<void>
      }
    }
  }
}

export {}
