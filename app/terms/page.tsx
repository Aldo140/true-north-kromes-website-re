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
    <section className="bg-paper pb-[max(4rem,calc(2rem+env(safe-area-inset-bottom)))] pt-[calc(7.5rem+env(safe-area-inset-top))] md:pb-16 md:pt-40 lg:pb-28 lg:pt-48">
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

        <div className="mt-8 h-px bg-line-dark md:mt-10 md:mb-10" aria-hidden="true" />

        <nav className="sticky top-[calc(4.5rem+env(safe-area-inset-top))] z-10 -mx-5 border-b border-line-dark bg-paper/95 px-5 md:hidden" aria-label="Terms of service sections">
          <div className="flex min-h-14 items-center gap-5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-gold-dim">On this page</span>
            {SECTIONS.map((section) => (
              <a
                key={section.heading}
                href={`#terms-${section.heading.toLowerCase().replaceAll(" ", "-")}`}
                className="inline-flex min-h-11 shrink-0 items-center font-mono text-[11px] text-ink/75 underline decoration-line-dark underline-offset-4 active:text-gold-dim"
              >
                {section.heading}
              </a>
            ))}
          </div>
        </nav>

        <div className="mt-9 space-y-12 md:mt-0 md:space-y-10">
          {SECTIONS.map((section, i) => (
            <div id={`terms-${section.heading.toLowerCase().replaceAll(" ", "-")}`} className="scroll-mt-36" key={section.heading}>
              <DrawRule className="h-px bg-line-dark" delay={i * 0.05} />
              <Reveal y={10} delay={i * 0.05 + 0.08} className="pt-5 md:pt-6">
                <h2 className="font-sans text-[1.375rem] font-medium leading-tight tracking-[-0.02em] text-ink md:text-xl md:leading-[1.75rem]">
                  {section.heading}
                </h2>
                <div className="mt-4 max-w-[68ch] space-y-4 text-[1.0625rem] leading-[1.75] text-ink/80 md:mt-3 md:max-w-none md:space-y-3 md:text-base md:leading-[1.8] md:text-ink/75">
                  {section.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-ink p-5 py-7 sm:p-10 md:mt-16">
          <div className="h-px w-12 bg-gold" aria-hidden="true" />
          <h3 className="mt-6 font-sans text-xl font-medium tracking-[-0.02em] text-paper">
            Questions about these terms?
          </h3>
          <p className="mt-3 text-base leading-relaxed text-paper/75 md:text-sm md:text-paper/70">
            Email{" "}
            <a href="mailto:truenorthkromes@gmail.com" className="inline-flex min-h-11 items-center text-gold underline underline-offset-4 md:inline md:min-h-0">
              truenorthkromes@gmail.com
            </a>{" "}
            or call{" "}
            <a href="tel:+18076247222" className="inline-flex min-h-11 items-center text-gold underline underline-offset-4 md:inline md:min-h-0">
              807.624.7222
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
