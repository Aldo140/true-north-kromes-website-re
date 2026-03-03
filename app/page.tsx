import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"
import { WhyTNK } from "@/components/why-tnk"
import { LatestUpdates } from "@/components/latest-updates"
import { FAQ } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
import { GoogleProfile } from "@/components/google-profile"
import { Footer } from "@/components/footer"

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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <WhyTNK />
        <div id="updates">
          <LatestUpdates />
        </div>
        <FAQ />
        <ContactForm />
        <GoogleProfile />
      </main>
      <Footer />
    </>
  )
}
