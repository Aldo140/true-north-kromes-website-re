import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Downloads } from "@/components/downloads"

export const metadata: Metadata = {
  title: "Customer Downloads - True North Kromes",
  description:
    "[Placeholder meta description -- client to supply before launch.]",
}

export default function DownloadsPage() {
  return (
    <>
      <PageHeader
        title="Customer Downloads"
        subtitle="[Placeholder subtitle -- client to supply before launch.]"
      />
      <Downloads />
    </>
  )
}
