import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { About } from "@/components/about"
import { WhyTNK } from "@/components/why-tnk"
import { CTABanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "[Placeholder meta description -- client to supply before launch.]",
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About True North Kromes"
        subtitle="[Placeholder subtitle -- client to supply before launch.]"
      />
      <About />
      <WhyTNK />
      <CTABanner />
    </>
  )
}
