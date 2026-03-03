import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { FAQ } from "@/components/faq"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about True North Kromes services, processes, materials, and SLM 3D metal printing technology.",
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "[PLACEHOLDER Q] What services does TNK provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "[PLACEHOLDER A] Client to supply before launch.",
      },
    },
    {
      "@type": "Question",
      name: "[PLACEHOLDER Q] How do I submit a case?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "[PLACEHOLDER A] Client to supply before launch.",
      },
    },
    {
      "@type": "Question",
      name: "[PLACEHOLDER Q] What materials do you use for printing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "[PLACEHOLDER A] Client to supply before launch.",
      },
    },
    {
      "@type": "Question",
      name: "[PLACEHOLDER Q] What is SLM technology?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "[PLACEHOLDER A] Client to supply before launch.",
      },
    },
    {
      "@type": "Question",
      name: "[PLACEHOLDER Q] How long does turnaround take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "[PLACEHOLDER A] Client to supply before launch.",
      },
    },
    {
      "@type": "Question",
      name: "[PLACEHOLDER Q] Do you work with clinics directly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "[PLACEHOLDER A] Client to supply before launch.",
      },
    },
    {
      "@type": "Question",
      name: "[PLACEHOLDER Q] What file formats do you accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "[PLACEHOLDER A] Client to supply before launch.",
      },
    },
    {
      "@type": "Question",
      name: "[PLACEHOLDER Q] How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "[PLACEHOLDER A] Client to supply before launch.",
      },
    },
  ],
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about our services, processes, and technology."
      />
      <FAQ />
    </>
  )
}
