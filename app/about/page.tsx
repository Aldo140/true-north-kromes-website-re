import type { Metadata } from "next"
import { About } from "@/components/about"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "True North Kromes was established to address the need for superior partial denture frames. Built on the combined expertise of a Denturist and a Lab Technologist.",
}

export default function AboutPage() {
  return <About />
}
