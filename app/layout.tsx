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
    url: "https://tnkromes.ca",
  },
  metadataBase: new URL("https://tnkromes.ca"),
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
