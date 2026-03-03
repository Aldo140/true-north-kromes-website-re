import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Gallery } from "@/components/gallery"

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Browse our portfolio of precision-crafted dental frameworks and partial dentures produced using advanced 3D metal printing technology.",
}

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Our Work"
        subtitle="Precision-crafted dental frameworks produced with advanced SLM 3D metal printing technology."
      />
      <Gallery />
    </>
  )
}
