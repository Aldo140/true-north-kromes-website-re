import type { Metadata } from "next"
import { Barlow, Barlow_Semi_Condensed } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import "./globals.css"

const _barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const _barlowSC = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
  },
}

export const viewport = {
  themeColor: "#222d3a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
