import { Hero } from "@/components/hero"
import { TrustSignals } from "@/components/trust-signals"
import { WhyTNK } from "@/components/why-tnk"
import { GalleryPreview } from "@/components/gallery-preview"
import { CTABanner } from "@/components/cta-banner"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <WhyTNK />
      <GalleryPreview />
      <CTABanner />
    </>
  )
}
