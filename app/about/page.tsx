import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { About } from "@/components/about"
import { WhyTNK } from "@/components/why-tnk"
import { CTABanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "True North Kromes (TNK) is your digital partner in partial denture manufacturing. Proudly Canadian-made, lab-direct, with flexible submission options.",
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About True North Kromes"
        subtitle="Your digital partner in partial denture manufacturing — proudly designed and manufactured in Canada."
      />
      <About />
      <WhyTNK />
      <CTABanner />
    </>
  )
}
