import { Hero } from "@/components/hero"
import { WhyTNK } from "@/components/why-tnk"
import { Process } from "@/components/process"
import { GalleryPreview } from "@/components/gallery-preview"
import { Testimonials } from "@/components/testimonials"
import { CTABanner } from "@/components/cta-banner"

export default function Home() {
  return (
    <>
      <Hero />
      <WhyTNK />
      <Process />
      <GalleryPreview />
      <Testimonials />
      <CTABanner />
    </>
  )
}
