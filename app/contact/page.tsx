import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { DrawRule, Reveal } from "@/components/motion-primitives"
import { MachinedLines } from "@/components/experience"
import { SwapFaq } from "@/components/interactive-patterns"

const FAQS = [
  {
    question: "What files can I send?",
    answer: "We accept the major dental scan and design formats. Send the file through your scanner portal or contact us and we will create a personal upload link for your lab.",
  },
  {
    question: "Can I approve the design before printing?",
    answer: "Yes. We send the digital framework for review before production. Nothing enters the SLM printer until you approve the design.",
  },
  {
    question: "How long does production take?",
    answer: "The production clock is four business days from design approval. The completed framework then ships by Purolator, with next-day delivery available for most Canadian destinations.",
  },
  {
    question: "What happens if there is a fit issue?",
    answer: "If the issue is caused by our production or design work, the remake and return shipping are covered at no charge. Contact the lab and we will review the case with you.",
  },
] as const

export const metadata: Metadata = {
  title: "Contact Our Cochrane Dental Lab",
  description:
    "Contact True North Kromes at 204 A River Avenue, Cochrane, AB. Start a 3D-printed Co-Cr framework case or request your personal upload link.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact True North Kromes in Cochrane, Alberta",
    description: "Call, email, or visit our Cochrane dental metal printing lab to start a Co-Cr partial framework case.",
    url: "/contact",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <main>
      <section className="bg-paper text-ink" aria-label="Contact">
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-36 sm:px-6 sm:pt-40 lg:px-12 lg:pb-28 lg:pt-44">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Left: intro, headline, and contact facts */}
            <div>
              <Reveal y={10}>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim">
                  Start a case
                </p>
              </Reveal>
              <MachinedLines
                as="h1"
                lines={["Send us your", "first framework."]}
                delay={0.08}
                className="mt-4 max-w-md text-balance font-sans text-[clamp(2rem,4vw,3rem)] font-medium tracking-[-0.02em]"
              />
              <Reveal y={12} delay={0.2}>
                <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70">
                  Tell us how you work and we&apos;ll set up your personal upload
                  link and volume pricing.
                </p>
                <ContactInfo />
              </Reveal>
            </div>

            {/* Right: the form */}
            <Reveal delay={0.12}>
              <DrawRule className="h-px bg-gold-dim" />
              <div className="mt-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <SwapFaq items={FAQS} />
    </main>
  )
}
