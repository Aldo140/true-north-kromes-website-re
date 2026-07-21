import type { Metadata } from "next"
import { DrawRule, Reveal } from "@/components/motion-primitives"
import { MachinedLines } from "@/components/experience"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of tnkromes.ca and orders placed with True North Kromes Inc.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
}

const SECTIONS = [
  {
    heading: "Use of this site",
    body: [
      "This website is provided by True North Kromes Inc to give dental labs and denturists information about our services and a way to start a case. By using this site, you agree to use it only for lawful purposes and not to misuse the contact form or upload systems.",
    ],
  },
  {
    heading: "Cases and production",
    body: [
      "Submitting a case through our contact form or client portal is a request to start work, not a binding order until we've confirmed your case details and volume pricing with you directly.",
      "Our standard production line is 4 business days from design approval to shipping, as described on our client timeline page. Courier transit time is separate from that production window and depends on your location.",
      "If a framework doesn't fit or the error is ours, we'll remake it and cover return shipping at no charge. This policy is a courtesy we extend to our clients, not a warranty of fitness for a particular clinical outcome — final fit and clinical suitability remain the responsibility of the submitting denturist or lab.",
    ],
  },
  {
    heading: "Material and specifications",
    body: [
      "Frameworks are printed in Mediloy S Co-Cr, licensed by Health Canada for removable partial dentures. Design work is based on the scan and specifications you provide — the accuracy of the finished framework depends on the accuracy of the submitted scan.",
    ],
  },
  {
    heading: "Pricing",
    body: [
      "Published starting prices are a reference point. Your actual per-unit rate depends on your confirmed monthly volume and is set directly with you — contact us for a quote before relying on any figure shown on the site.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "This website and its content are provided \"as is.\" To the extent permitted by law, True North Kromes Inc is not liable for indirect, incidental, or consequential damages arising from use of this site. This does not limit any liability that cannot be excluded under applicable Canadian law.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms are governed by the laws of the Province of Alberta and the federal laws of Canada applicable within it.",
    ],
  },
] as const

export default function TermsPage() {
  return (
    <section className="bg-paper pb-16 pt-32 md:pt-40 lg:pb-28 lg:pt-48">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <Reveal y={10}>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim">Legal</p>
        </Reveal>
        <MachinedLines
          as="h1"
          lines={["Terms of Service"]}
          delay={0.08}
          className="mt-4 text-balance font-sans text-[clamp(2rem,4vw,3rem)] font-medium tracking-[-0.02em] text-ink"
        />
        <Reveal y={12} delay={0.15}>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">
            Last updated: July 2026
          </p>
        </Reveal>

        <div className="mt-10 mb-10 h-px bg-line-dark" aria-hidden="true" />

        <div className="space-y-10">
          {SECTIONS.map((section, i) => (
            <div key={section.heading}>
              <DrawRule className="h-px bg-line-dark" delay={i * 0.05} />
              <Reveal y={10} delay={i * 0.05 + 0.08} className="pt-6">
                <h2 className="font-sans text-xl font-medium tracking-[-0.02em] text-ink">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3 text-base leading-[1.8] text-ink/75">
                  {section.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-ink p-8 sm:p-10">
          <div className="h-px w-12 bg-gold" aria-hidden="true" />
          <h3 className="mt-6 font-sans text-xl font-medium tracking-[-0.02em] text-paper">
            Questions about these terms?
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-paper/70">
            Email{" "}
            <a href="mailto:truenorthkromes@gmail.com" className="text-gold underline underline-offset-4">
              truenorthkromes@gmail.com
            </a>{" "}
            or call{" "}
            <a href="tel:+18076247222" className="text-gold underline underline-offset-4">
              807.624.7222
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
