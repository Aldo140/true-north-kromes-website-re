import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
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
  themeColor: "#1e5a8a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
