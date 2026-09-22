import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export const metadata: Metadata = {
  title: {
    default: "Dream Pixel — Better online. More you.",
    template: "%s | Dream Pixel",
  },
  description:
    "Dream Pixel is an independent digital studio in Devon making distinctive websites and digital growth strategies for ambitious businesses.",
  keywords: ["web design", "SEO", "digital marketing", "Devon", "Barnstaple", "website development"],
  authors: [{ name: "Dream Pixel" }],
  creator: "Dream Pixel",
  publisher: "Dream Pixel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dreampixel.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://dreampixel.co.uk",
    siteName: "Dream Pixel",
    title: "Dream Pixel | Web Design & Digital Marketing in Devon",
    description:
      "Dream Pixel is an independent digital studio in Devon making distinctive websites and digital growth strategies for ambitious businesses.",
    images: [
      {
        url: "/images/dream-pixel-logo-white.png",
        width: 1200,
        height: 630,
        alt: "Dream Pixel - Web Design & Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Pixel | Web Design & Digital Marketing in Devon",
    description:
      "Dream Pixel is an independent digital studio in Devon making distinctive websites and digital growth strategies for ambitious businesses.",
    images: ["/images/dream-pixel-logo-white.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "JIrLMp8Z3RLYR8_yQRbZLtNRK2j3YWo_jCppOhwepkA",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: [{ url: "/favicon.ico" }],
  },
  manifest: "/site.webmanifest",
  themeColor: "#0a0a0a",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-background`} suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="JIrLMp8Z3RLYR8_yQRbZLtNRK2j3YWo_jCppOhwepkA" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0a0a0a" />

        {/* Google Analytics with Consent Mode */}
        <Script
          id="gtag-consent"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              // Set default consent mode
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'wait_for_update': 500
              });
              
              // Check for existing consent
              const consent = localStorage.getItem('cookie-consent');
              if (consent === 'accepted') {
                gtag('consent', 'update', {
                  'analytics_storage': 'granted'
                });
              }
            `,
          }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-D91WT2D7JC" strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D91WT2D7JC', {
                page_path: window.location.pathname,
                transport_type: 'beacon',
                send_page_view: true,
                cookie_domain: 'auto'
              });
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col bg-background">
            <a href="#main-content" className="skip-link">Skip to content</a>
            <Header />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
            <CookieConsent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
