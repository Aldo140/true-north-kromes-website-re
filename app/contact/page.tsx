import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import { GoogleProfile } from "@/components/google-profile"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "[Placeholder meta description -- client to supply before launch.]",
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="[Placeholder subtitle -- client to supply before launch.]"
      />
      <ContactForm />
      <GoogleProfile />
    </>
  )
}
