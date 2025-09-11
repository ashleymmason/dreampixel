import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Dream Pixel - Professional Web Design & Digital Marketing in Devon",
    template: "%s | Dream Pixel",
  },
  description:
    "Professional web design, SEO, and digital marketing services in Devon. We create stunning websites that drive results for businesses across Barnstaple, Exeter, Plymouth, and Torquay.",
  keywords: ["web design", "SEO", "digital marketing", "Devon", "Barnstaple", "Exeter", "Plymouth", "Torquay"],
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
    title: "Dream Pixel - Professional Web Design & Digital Marketing in Devon",
    description:
      "Professional web design, SEO, and digital marketing services in Devon. We create stunning websites that drive results for businesses.",
    images: [
      {
        url: "/images/dream-pixel-logo.png",
        width: 1200,
        height: 630,
        alt: "Dream Pixel - Web Design & Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Pixel - Professional Web Design & Digital Marketing in Devon",
    description:
      "Professional web design, SEO, and digital marketing services in Devon. We create stunning websites that drive results for businesses.",
    images: ["/images/dream-pixel-logo.png"],
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
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="gtag-consent"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied'
              });
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
