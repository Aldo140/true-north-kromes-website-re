import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Services } from "@/components/services"
import { CTABanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Expert 3D design, high-resolution metal printing using SLM technology, and professional post-processing for dental frameworks and partial dentures.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Complete support throughout the entire production cycle — from digital design to finished framework."
      />
      <Services />
      <CTABanner />
    </>
  )
}
