import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { LatestUpdates } from "@/components/latest-updates"

export const metadata: Metadata = {
  title: "Latest Updates",
  description:
    "[Placeholder meta description -- client to supply before launch.]",
}

export default function UpdatesPage() {
  return (
    <>
      <PageHeader
        title="Latest Updates"
        subtitle="[Placeholder subtitle -- client to supply before launch.]"
      />
      <LatestUpdates />
    </>
  )
}
