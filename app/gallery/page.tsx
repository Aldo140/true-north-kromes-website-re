import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Gallery } from "@/components/gallery"
import { CTABanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "[Placeholder meta description -- client to supply before launch.]",
}

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Our Work"
        subtitle="[Placeholder subtitle -- client to supply before launch.]"
      />
      <Gallery />
      <CTABanner />
    </>
  )
}
