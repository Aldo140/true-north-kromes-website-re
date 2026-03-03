import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { LatestUpdates } from "@/components/latest-updates"

export const metadata: Metadata = {
  title: "Latest Updates",
  description:
    "Stay informed with the latest news, insights, and developments from True North Kromes.",
}

export default function UpdatesPage() {
  return (
    <>
      <PageHeader
        title="Latest Updates"
        subtitle="News, insights, and developments from the TNK team."
      />
      <LatestUpdates />
    </>
  )
}
