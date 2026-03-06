import { Hero } from "@/components/hero"
import { WhyTNK } from "@/components/why-tnk"
import { GalleryPreview } from "@/components/gallery-preview"
import { CTABanner } from "@/components/cta-banner"

export default function Home() {
  return (
    <>
      <Hero />
      <WhyTNK />
      <GalleryPreview />
      <CTABanner />
    </>
  )
}
