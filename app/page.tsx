import { Hero } from "@/components/hero"
import { TrustStrip } from "@/components/trust-strip"
import { Process } from "@/components/process"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { WhyTNK } from "@/components/why-tnk"
import { CTABanner } from "@/components/cta-banner"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Process />
      <Services />
      <About />
      <WhyTNK />
      <CTABanner />
    </>
  )
}
