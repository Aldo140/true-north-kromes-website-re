import type { Metadata } from "next"
import { Inter, IBM_Plex_Mono } from "next/font/google"
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
  keywords: [
    "dental frameworks",
    "3D metal printing",
    "partial dentures",
    "chrome frameworks",
    "dental lab",
    "TNK",
  ],
  openGraph: {
    title: "True North Kromes Inc | One-Stop Metal Printing Service",
    description:
      "A fully integrated digital 3D-printing solution that transforms the way dental professionals design and manufacture partial dentures.",
    type: "website",
    url: "https://aldo140.github.io/true-north-kromes-website-re/",
  },
  metadataBase: new URL("https://aldo140.github.io/true-north-kromes-website-re/"),
}

export const viewport = {
  themeColor: "#101113",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${plexMono.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "True North Kromes Inc",
              description: "A dental lab specializing in 3D printing metal partial denture frameworks.",
              url: "https://aldo140.github.io/true-north-kromes-website-re/",
              telephone: "+1-807-624-7222",
              email: "truenorthkromes@gmail.com",
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
