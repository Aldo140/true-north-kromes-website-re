import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700", "800"],
})

export const metadata: Metadata = {
  title: {
    default: "True North Kromes Inc | One-Stop Metal Printing Service",
    template: "%s | True North Kromes Inc",
  },
  description:
    "A fully integrated digital 3D-printing solution for dental professionals. Expert 3D design, high-resolution metal printing, and professional post-processing in Cochrane, Alberta, Canada.",
  keywords: [
    "dental laboratory",
    "3D metal printing",
    "partial dentures",
    "dental frameworks",
    "SLM technology",
    "Cochrane Alberta",
    "dental lab Canada",
  ],
  openGraph: {
    title: "True North Kromes Inc | One-Stop Metal Printing Service",
    description:
      "A fully integrated digital 3D-printing solution that transforms the way dental professionals design and manufacture partial dentures.",
    type: "website",
  },
}

export const viewport = {
  themeColor: "#18181b",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
