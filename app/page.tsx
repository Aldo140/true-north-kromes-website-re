import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { WhyTNK } from "@/components/why-tnk"
import { VideoShowcase } from "@/components/video-showcase"
import { GalleryPreview } from "@/components/gallery-preview"
import { CTABanner } from "@/components/cta-banner"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyTNK />
      <VideoShowcase />
      <GalleryPreview />
      <CTABanner />
    </>
  )
}
