import type React from "react"
import type { Metadata, Viewport } from "next"
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
    default: "Dream Pixel | Web Design & SEO Agency in Barnstaple, Devon",
    template: "%s | Dream Pixel",
  },
  description:
    "Dream Pixel is a Barnstaple web design studio building fast, search-ready websites, e-commerce and local SEO for businesses across North Devon and beyond.",
  keywords: ["web design Barnstaple", "web designer Barnstaple", "web design North Devon", "web design Bideford", "SEO Barnstaple", "website development Devon"],
  authors: [{ name: "Dream Pixel" }],
  creator: "Dream Pixel",
  publisher: "Dream Pixel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.dreampixel.co.uk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Dream Pixel",
    title: "Dream Pixel | Web Design & SEO Agency in Barnstaple, Devon",
    description:
      "Dream Pixel is a Barnstaple web design studio building fast, search-ready websites, e-commerce and local SEO for businesses across North Devon and beyond.",
    images: [
      {
        url: "/images/dream-pixel-social-default.jpeg",
        width: 1600,
        height: 900,
        alt: "Dream Pixel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Pixel | Web Design & SEO Agency in Barnstaple, Devon",
    description:
      "Dream Pixel is a Barnstaple web design studio building fast, search-ready websites, e-commerce and local SEO for businesses across North Devon and beyond.",
    images: ["/images/dream-pixel-social-default.jpeg"],
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
      { url: "/favicon.png", sizes: "any" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: [{ url: "/favicon.png" }],
  },
  manifest: "/site.webmanifest",
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
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
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0a0a0a" />

        {/* Google Analytics with Consent Mode */}
        <Script
          id="gtag-consent"
          strategy="afterInteractive"
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
