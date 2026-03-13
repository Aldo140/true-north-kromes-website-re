import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { WhyTNK } from "@/components/why-tnk"
import { GalleryPreview } from "@/components/gallery-preview"
import { CTABanner } from "@/components/cta-banner"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyTNK />
      <GalleryPreview />
      <CTABanner />
    </>
  )
}
