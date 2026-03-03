import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { TaglineStrip } from "@/components/tagline-strip"
import { LatestUpdates } from "@/components/latest-updates"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <TaglineStrip />
      <LatestUpdates />
    </>
  )
}
