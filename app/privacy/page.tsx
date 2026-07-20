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
    <section className="bg-paper pt-40 pb-20 lg:pt-48 lg:pb-28">
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
            Questions about your information?
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
