import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { WhyTNK } from "@/components/why-tnk"
import { Process } from "@/components/process"
import { GalleryPreview } from "@/components/gallery-preview"
import { CTABanner } from "@/components/cta-banner"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyTNK />
      <Process />
      <GalleryPreview />
      <CTABanner />
    </>
  )
}
