import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import { GoogleProfile } from "@/components/google-profile"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with True North Kromes. Send your first case, request a follow-up conversation, or find our location in Cochrane, Alberta.",
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Ready to get started? Fill out the form below or find us on the map."
      />
      <ContactForm />
      <GoogleProfile />
    </>
  )
}
