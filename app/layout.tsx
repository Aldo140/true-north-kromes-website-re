import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
  title: "True North Kromes Inc | One-Stop Metal Printing Service",
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
  themeColor: "#1e1e1e",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
