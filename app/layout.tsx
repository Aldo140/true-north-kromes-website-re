import type { Metadata, Viewport } from "next"
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
    default: "True North Kromes | 3D-Printed Dental Frameworks",
    template: "%s | True North Kromes",
  },
  description:
    "Cochrane, Alberta dental lab producing 3D-printed Co-Cr partial denture frameworks with in-house CAD design, SLM metal printing, and plasma polishing.",
  applicationName: "True North Kromes Inc",
  creator: "True North Kromes Inc",
  publisher: "True North Kromes Inc",
  category: "Dental laboratory",
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
    siteName: "True North Kromes",
    title: "True North Kromes | 3D-Printed Dental Frameworks",
    description:
      "Cochrane, Alberta dental lab producing 3D-printed Co-Cr partial denture frameworks with in-house CAD design, SLM metal printing, and plasma polishing.",
    type: "website",
    locale: "en_CA",
    url: "https://www.tnkromes.ca/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "True North Kromes dental metal printing lab in Cochrane, Alberta" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "True North Kromes | 3D-Printed Dental Frameworks",
    description: "3D-printed Co-Cr partial denture frameworks with CAD design, SLM metal printing, and plasma polishing in Cochrane, Alberta.",
    images: ["/opengraph-image"],
  },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  metadataBase: new URL("https://www.tnkromes.ca/"),
}

export const viewport: Viewport = {
  themeColor: "#101113",
  viewportFit: "cover",
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
        <a
          href="#site-content"
          className="fixed left-3 top-3 z-[110] -translate-y-20 bg-gold px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
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
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.tnkromes.ca/#website",
                  url: "https://www.tnkromes.ca/",
                  name: "True North Kromes",
                  alternateName: ["True North Kromes Inc", "TNK"],
                  inLanguage: "en-CA",
                  publisher: { "@id": "https://www.tnkromes.ca/#business" },
                },
                {
                  "@type": ["LocalBusiness", "ProfessionalService"],
                  "@id": "https://www.tnkromes.ca/#business",
                  name: "True North Kromes",
                  legalName: "True North Kromes Inc",
                  alternateName: "TNK",
                  description: "A Cochrane, Alberta dental laboratory producing 3D-printed cobalt-chrome partial denture frameworks with in-house CAD design, selective laser melting, and plasma polishing.",
                  url: "https://www.tnkromes.ca/",
                  telephone: "+1-807-624-7222",
                  email: "truenorthkromes@gmail.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.tnkromes.ca/icon-512.png",
                    width: 512,
                    height: 512,
                  },
                  image: [
                    "https://www.tnkromes.ca/images/opt/gallery-lab-wide.jpg",
                    "https://www.tnkromes.ca/images/opt/framework-hero.jpg",
                  ],
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "204 A River Avenue",
                    addressLocality: "Cochrane",
                    addressRegion: "Alberta",
                    postalCode: "T4C 2C1",
                    addressCountry: "CA",
                  },
                  hasMap: "https://www.google.com/maps/search/?api=1&query=True+North+Kromes+204+A+River+Avenue+Cochrane+AB",
                  areaServed: [
                    { "@type": "Country", name: "Canada" },
                    { "@type": "AdministrativeArea", name: "Alberta" },
                    { "@type": "City", name: "Cochrane" },
                    { "@type": "City", name: "Calgary" },
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+1-807-624-7222",
                    email: "truenorthkromes@gmail.com",
                    contactType: "customer service",
                    areaServed: "CA",
                    availableLanguage: "English",
                  },
                  sameAs: ["https://www.instagram.com/truenorthkromes/"],
                },
              ],
            }),
          }}
        />
        <SmoothScroll />
        <BootScreen />
        <PrecisionCursor />
        <div className="grain" aria-hidden="true" />
        <Navigation />
        <main id="site-content" tabIndex={-1}>{children}</main>
        <Footer />
        <StickyQuote />
      </body>
    </html>
  )
}
