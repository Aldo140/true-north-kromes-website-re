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
