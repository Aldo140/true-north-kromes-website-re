import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with True North Kromes. Contact us for 3D printed partial denture frameworks.",
}

export default function ContactPage() {
  return (
    <>
      <ContactForm />
      <ContactInfo />
    </>
  )
}
