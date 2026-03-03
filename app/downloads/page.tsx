import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Downloads } from "@/components/downloads"

export const metadata: Metadata = {
  title: "Customer Downloads - True North Kromes",
  description:
    "Download order forms, instruction sheets, and other documents for dental professionals working with True North Kromes.",
}

export default function DownloadsPage() {
  return (
    <>
      <PageHeader
        title="Customer Downloads"
        subtitle="Download the forms and documents you need to get started or manage your orders with TNK."
      />
      <Downloads />
    </>
  )
}
