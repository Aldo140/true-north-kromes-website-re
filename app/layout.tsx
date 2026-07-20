import type { Metadata } from "next"
import { Inter, IBM_Plex_Mono } from "next/font/google"
import Script from "next/script"
import "./globals.css"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StickyQuote } from "@/components/sticky-quote"
import { SmoothScroll } from "@/components/experience"
import { BootScreen } from "@/components/boot-screen"
import { PrecisionCursor } from "@/components/precision-cursor"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "True North Kromes Inc | One-Stop Metal Printing Service",
    template: "%s | True North Kromes Inc",
  },
  description:
    "A fully integrated digital 3D-printing solution that transforms the way dental professionals design and manufacture partial dentures.",
  applicationName: "True North Kromes Inc",
  appleWebApp: {
    title: "True North Kromes",
  },
  keywords: [
    // Core / consumer-facing
    "3D printed dental frameworks",
    "SLM metal dental frameworks",
    "chrome cobalt dental frameworks Canada",
    "digital metal partials",
    "3D printed RPD frameworks",
    "dental lab 3D metal printing",
    "metal printing dental lab Alberta",
    "Cochrane dental lab metal printing",
    "CAD/CAM metal frameworks Canada",
    "digital partial denture frameworks",
    // Technical / professional
    "selective laser melting dental",
    "SLM dental frameworks Canada",
    "CAD/CAM metal printing dentistry",
    "laser-sintered dental frameworks",
    "porosity-free dental frameworks",
    "micron-accuracy dental metal printing",
    // Brand
    "True North Kromes dental lab",
    "True North Kromes 3D printing",
    "TNK metal frameworks",
    "True North Kromes Cochrane",
    // Local SEO
    "Cochrane dental lab",
    "Calgary dental metal printing",
    "Alberta 3D printed dental frameworks",
    "dental lab near me metal printing",
  ],
  openGraph: {
    siteName: "True North Kromes Inc",
    title: "True North Kromes Inc | One-Stop Metal Printing Service",
    description:
      "A fully integrated digital 3D-printing solution that transforms the way dental professionals design and manufacture partial dentures.",
    type: "website",
    locale: "en_CA",
    url: "https://www.tnkromes.ca/",
  },
  metadataBase: new URL("https://www.tnkromes.ca/"),
}

export const viewport = {
  themeColor: "#101113",
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${plexMono.variable} font-sans antialiased`}>
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "True North Kromes Inc",
              description: "A dental lab specializing in 3D printing metal partial denture frameworks.",
              url: "https://www.tnkromes.ca/",
              telephone: "+1-807-624-7222",
              email: "truenorthkromes@gmail.com",
              logo: "https://www.tnkromes.ca/icon-512.png",
              image: "https://www.tnkromes.ca/images/og-logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "204 A River Avenue",
                addressLocality: "Cochrane",
                addressRegion: "AB",
                postalCode: "T4C 2C1",
                addressCountry: "CA",
              },
              sameAs: ["https://www.instagram.com/truenorthkromes/"],
            }),
          }}
        />
        <SmoothScroll />
        <BootScreen />
        <PrecisionCursor />
        <div className="grain" aria-hidden="true" />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <StickyQuote />
      </body>
    </html>
  )
}
