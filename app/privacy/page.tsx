import type { Metadata } from "next"
import { DrawRule, Reveal } from "@/components/motion-primitives"
import { MachinedLines } from "@/components/experience"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How True North Kromes Inc collects, uses, and protects information submitted through tnkromes.ca.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
}

const SECTIONS = [
  {
    heading: "Information we collect",
    body: [
      "When you submit our contact form, we collect the information you provide directly: your name, telephone number, and — if you enter them — your address, city, and postal code, along with the file type and monthly case volume you tell us.",
      "When you browse the site, we (or the analytics tools we use) may automatically collect standard technical information such as your approximate location, device and browser type, and which pages you view or buttons you click. This helps us understand how the site is used and whether our advertising is reaching the right people.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      "Contact form information is used to respond to your inquiry, set up your case, and provide your personal upload link — nothing else. We don't sell or rent your information to third parties.",
      "Aggregate analytics information is used to understand site performance and to measure whether our advertising is working, not to identify you personally.",
    ],
  },
  {
    heading: "Where it goes",
    body: [
      "Contact form submissions are sent by email through Resend, a transactional email provider, directly to True North Kromes' inbox. We don't store form submissions in a separate database beyond that email record.",
      "This site is hosted on Vercel, and may embed third-party services — Google Maps for directions and a YouTube video on our client portal page. Those services may set their own cookies or collect data under their own privacy policies when you interact with them.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      "You can always reach us the traditional way — by phone or email — instead of using the contact form, if you'd rather not submit your details online.",
      "To ask what information we hold about you, or to have it corrected or deleted, contact us using the details below. We'll respond within a reasonable time.",
    ],
  },
  {
    heading: "Compliance",
    body: [
      "True North Kromes Inc is a Canadian business and handles personal information in accordance with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA) and Canada's Anti-Spam Legislation (CASL). We do not send unsolicited commercial email.",
    ],
  },
] as const

export default function PrivacyPage() {
  return (
    <section className="bg-paper pb-[max(4rem,calc(2rem+env(safe-area-inset-bottom)))] pt-[calc(7.5rem+env(safe-area-inset-top))] md:pb-16 md:pt-40 lg:pb-28 lg:pt-48">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <Reveal y={10}>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim">Legal</p>
        </Reveal>
        <MachinedLines
          as="h1"
          lines={["Privacy Policy"]}
          delay={0.08}
          className="mt-4 text-balance font-sans text-[clamp(2rem,4vw,3rem)] font-medium tracking-[-0.02em] text-ink"
        />
        <Reveal y={12} delay={0.15}>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">
            Last updated: July 2026
          </p>
        </Reveal>

        <div className="mt-8 h-px bg-line-dark md:mt-10 md:mb-10" aria-hidden="true" />

        <nav className="sticky top-[calc(4.5rem+env(safe-area-inset-top))] z-10 -mx-5 border-b border-line-dark bg-paper/95 px-5 md:hidden" aria-label="Privacy policy sections">
          <div className="flex min-h-14 items-center gap-5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-gold-dim">On this page</span>
            {SECTIONS.map((section) => (
              <a
                key={section.heading}
                href={`#privacy-${section.heading.toLowerCase().replaceAll(" ", "-")}`}
                className="inline-flex min-h-11 shrink-0 items-center font-mono text-[11px] text-ink/75 underline decoration-line-dark underline-offset-4 active:text-gold-dim"
              >
                {section.heading}
              </a>
            ))}
          </div>
        </nav>

        <div className="mt-9 space-y-12 md:mt-0 md:space-y-10">
          {SECTIONS.map((section, i) => (
            <div id={`privacy-${section.heading.toLowerCase().replaceAll(" ", "-")}`} className="scroll-mt-36" key={section.heading}>
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
            Questions about your information?
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
