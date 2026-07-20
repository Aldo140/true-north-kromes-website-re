import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { WhyTNK } from "@/components/why-tnk"
import { GalleryPreview } from "@/components/gallery-preview"
import { CTABanner } from "@/components/cta-banner"
import { ProcessCinema } from "@/components/process-cinema"
import { Ticker } from "@/components/experience"

const TELEMETRY = [
  "CO-CR · MEDILOY S · HEALTH CANADA LICENSED",
  "SLM · SELECTIVE LASER MELTING",
  "REPEATABLE TO ±0.02 MM",
  "PLASMA POLISH · MIRROR FINISH",
  "DESIGNED · PRINTED · POLISHED IN-HOUSE",
  "CANADA",
] as const

export const metadata: Metadata = {
  title: { absolute: "True North Kromes | 3D Dental Metal Printing in Cochrane, AB" },
  description: "True North Kromes is a Cochrane, Alberta dental lab producing CAD-designed, SLM-printed, plasma-polished Co-Cr partial denture frameworks.",
  alternates: { canonical: "/" },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker items={TELEMETRY} />
      <About />
      <ProcessCinema />
      <WhyTNK />
      <GalleryPreview />
      <CTABanner />
    </>
  )
}
