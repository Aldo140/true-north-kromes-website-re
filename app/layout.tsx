import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StickyQuote } from "@/components/sticky-quote"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
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
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
        <StickyQuote />
      </body>
    </html>
  )
}
