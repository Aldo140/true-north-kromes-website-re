import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Services } from "@/components/services"
import { CTABanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "[Placeholder meta description -- client to supply before launch.]",
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="[Placeholder subtitle -- client to supply before launch.]"
      />
      <Services />
      <CTABanner />
    </>
  )
}
