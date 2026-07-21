import type { Metadata } from "next"
import Link from "next/link"
import { DrawRule, Reveal } from "@/components/motion-primitives"
import { MachinedLines, Ticker } from "@/components/experience"
import { TrackedCta } from "@/components/tracked-cta"
import { sitePath } from "@/lib/site-path"

export const metadata: Metadata = {
  title: "About Our Cochrane Dental Lab",
  description:
    "Visit True North Kromes at 204 A River Avenue in Cochrane, Alberta. Our dental lab designs, SLM-prints, and plasma-polishes Co-Cr partial frameworks.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "True North Kromes Dental Lab in Cochrane, Alberta",
    description: "Meet the Cochrane team and see the in-house CAD, SLM metal printing, plasma polishing, and quality-control operation.",
    url: "/about",
    type: "website",
  },
}

const STAGES = [
  {
    number: "01",
    label: "CAD DESIGN",
    body: "A CAD specialist team around 250 strong, working alongside an AI program that draws on that design database. Every framework is designed digitally and shared for your review before anything is printed — predictable results, in any major file format.",
  },
  {
    number: "02",
    label: "SLM PRINT",
    body: "Chamlion selective laser melting printers fuse Co-Cr powder layer by layer, straight from the approved design. No wax, no investment, no casting — exceptional accuracy, case after case.",
  },
  {
    number: "03",
    label: "PLASMA POLISH",
    body: "Finishing happens in-house on our AP10 plasma polishing and DLyte systems. Plasma discharge strips impurities from the metal surface and brings every framework to a mirror finish.",
  },
  {
    number: "04",
    label: "QC + DELIVERY",
    body: "Every framework is inspected against its design before it leaves the building, then shipped to your lab or clinic with support through the whole production cycle.",
  },
] as const

/** Telemetry strip — every item is a real fact stated elsewhere on this page. */
const TICKER_ITEMS = [
  "CHAMLION SLM",
  "AP10 + DLYTE PLASMA POLISH",
  "MEDILOY S CO-CR · LICENSED",
  "CAD TEAM ~250",
  "DESIGN REVIEW BEFORE PRINT",
  "CANADA",
] as const

const MOBILE_STAGE_MEDIA = [
  {
    src: "/images/opt/cad-design.jpg",
    alt: "A cobalt-chrome partial denture framework being prepared in the digital design workflow",
    note: "Digital case preparation",
  },
  {
    src: "/images/opt/gallery-build-plate-printer.jpg",
    alt: "Cobalt-chrome dental frameworks on a Chamlion SLM printer build plate",
    note: "Chamlion SLM · build plate",
  },
  {
    src: "/images/opt/gallery-dlyte-polishing-action.jpg",
    alt: "DLyte equipment polishing cobalt-chrome dental frameworks in the finishing area",
    note: "DLyte · finishing in progress",
  },
  {
    src: "/images/opt/framework-polished.jpg",
    alt: "A polished cobalt-chrome partial denture framework ready for inspection",
    note: "Finished framework · inspection",
  },
] as const

function MobileAboutPage() {
  return (
    <div className="md:hidden">
      {/* A phone-sized lab arrival, not a compressed desktop masthead. */}
      <section className="relative isolate flex min-h-[100svh] overflow-hidden bg-ink text-paper" aria-label="About True North Kromes">
        <img
          src={sitePath("/images/opt/gallery-lab-wide.jpg")}
          alt="True North Kromes production floor with Chamlion SLM metal printers"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
        />
        <div className="absolute inset-0 bg-ink/65" aria-hidden="true" />
        <div className="absolute inset-x-5 top-28 z-10 flex items-center justify-between border-y border-paper/25 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/75">
          <span>Cochrane · Alberta</span>
          <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-gold" /> Production active</span>
        </div>
        <div className="relative z-10 mt-auto w-full px-5 pb-10 pt-52">
          <Reveal y={12}>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold">The operation</p>
          </Reveal>
          <MachinedLines
            as="h1"
            lines={["One lab.", "The whole line."]}
            delay={0.08}
            className="mt-4 max-w-[9ch] text-balance font-sans text-[clamp(3rem,15vw,4rem)] font-semibold leading-[0.94] tracking-[-0.035em] text-paper"
          />
          <Reveal y={10} delay={0.2} className="mt-7 max-w-[34ch]">
            <p className="text-base leading-[1.65] text-paper/85">
              We design, laser-print, and plasma-polish Co-Cr partial frameworks entirely in-house.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-[1fr_auto] items-end gap-5 border-t border-paper/25 pt-4">
            <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-paper/60">
              CAD → SLM → Finish → QC
            </p>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold">Scroll ↓</span>
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-16" aria-label="The True North Kromes operation">
        <Reveal y={12}>
          <p className="max-w-[30ch] text-balance font-sans text-[1.7rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink">
            A Canadian dental lab built around one continuous digital path.
          </p>
          <p className="mt-6 max-w-[40ch] text-base leading-[1.75] text-ink/70">
            Built on the combined expertise of a denturist and a lab technologist, we keep design, metal printing, finishing, and inspection together. What ships to your lab is exactly what was designed.
          </p>
        </Reveal>
        <div className="mt-10 flex items-center gap-4 border-y border-line-dark py-4 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/55">
          <span className="text-gold-dim">One handoff</span>
          <span className="h-px flex-1 bg-line-dark" />
          <span>End to end</span>
        </div>
      </section>

      {/* The map is the visual anchor; the address and actions sit in the thumb zone. */}
      <section className="bg-ink text-paper" aria-label="Find True North Kromes">
        <div className="px-5 pb-8 pt-16">
          <Reveal y={10}>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold">Find the lab</p>
            <h2 className="mt-4 max-w-[12ch] text-balance text-[2.55rem] font-semibold leading-[0.98] tracking-[-0.035em]">
              Built in Cochrane. Easy to reach.
            </h2>
          </Reveal>
        </div>
        <Reveal y={16} amount={0.15}>
          <div className="relative border-y border-line bg-ink-soft">
            <iframe
              title="Map showing True North Kromes at 204 A River Avenue, Cochrane, Alberta"
              src="https://www.google.com/maps?q=204+A+River+Avenue%2C+Cochrane%2C+AB+T4C+2C1&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-square w-full grayscale contrast-125"
            />
            <div className="pointer-events-none absolute left-4 top-4 border border-gold bg-ink px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-gold">
              TNK · 204 A
            </div>
          </div>
        </Reveal>
        <div className="px-5 pb-16 pt-7">
          <div className="grid grid-cols-[1fr_auto] gap-5 border-b border-line pb-6">
            <address className="not-italic text-base leading-[1.65] text-paper">
              204 A River Avenue<br />
              Cochrane, AB T4C 2C1
            </address>
            <span className="mt-1 h-2 w-2 bg-gold" aria-hidden="true" />
          </div>
          <div className="mt-6 grid gap-3">
            <TrackedCta
              href="https://www.google.com/maps/dir/?api=1&destination=204+A+River+Avenue%2C+Cochrane%2C+AB+T4C+2C1"
              external
              event="cta_click"
              eventParams={{ location: "about_address_mobile", label: "get_directions" }}
              className="inline-flex min-h-12 w-full items-center justify-between border border-gold bg-gold px-5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink active:bg-paper"
            >
              Get directions <span aria-hidden="true">↗</span>
            </TrackedCta>
            <TrackedCta
              href="/contact"
              event="cta_click"
              eventParams={{ location: "about_address_mobile", label: "contact_the_lab" }}
              className="inline-flex min-h-12 w-full items-center justify-between border border-paper/35 px-5 font-mono text-[11px] uppercase tracking-[0.16em] text-paper active:border-gold active:text-gold"
            >
              Contact the lab <span aria-hidden="true">→</span>
            </TrackedCta>
          </div>
        </div>
      </section>

      <Ticker items={TICKER_ITEMS} />

      {/* Each process step is an inspection chapter with real production imagery. */}
      <section className="bg-paper pb-0 pt-16" aria-label="The production line, under one roof">
        <div className="px-5">
          <Reveal y={10}>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold-dim">Production line</p>
            <h2 className="mt-4 max-w-[11ch] text-balance text-[2.5rem] font-semibold leading-[0.98] tracking-[-0.035em] text-ink">
              Four stages. No outside handoff.
            </h2>
            <TrackedCta
              href="/timeline"
              event="cta_click"
              eventParams={{ location: "about_production_mobile", label: "see_client_timeline" }}
              className="mt-7 inline-flex min-h-11 items-center border-b border-ink/40 font-mono text-[10px] uppercase tracking-[0.16em] text-ink"
            >
              Follow a case day by day →
            </TrackedCta>
          </Reveal>

          <ol className="mt-12 border-t border-line-dark">
            {STAGES.map((stage, i) => {
              const media = MOBILE_STAGE_MEDIA[i]
              return (
                <li key={stage.number} className="relative border-b border-line-dark py-10">
                  <div className="grid grid-cols-[3.25rem_1fr] gap-4">
                    <MachinedLines
                      as="p"
                      lines={[stage.number]}
                      delay={i * 0.06}
                      className="font-mono text-[2.15rem] leading-none tracking-[-0.04em] text-gold-dim"
                    />
                    <div>
                      <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink">{stage.label}</h3>
                      <p className="mt-4 text-base leading-[1.7] text-ink/70">{stage.body}</p>
                    </div>
                  </div>
                  <Reveal y={14} amount={0.12} className="mt-7">
                    <div className={i % 2 === 0 ? "mr-8" : "ml-8"}>
                      <img
                        src={sitePath(media.src)}
                        alt={media.alt}
                        width={1200}
                        height={900}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover"
                      />
                      <div className="flex items-center gap-3 border-b border-line-dark py-2">
                        <span className="h-px w-5 bg-gold-dim" />
                        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/55">{media.note}</span>
                      </div>
                    </div>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="mt-16 bg-ink px-5 py-16 text-paper">
          <Reveal y={10}>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold">Finishing floor</p>
            <h2 className="mt-4 max-w-[12ch] text-balance text-[2.45rem] font-semibold leading-[0.98] tracking-[-0.035em]">
              Print marks out. Mirror finish in.
            </h2>
          </Reveal>
          <div className="relative mt-10 pb-24">
            <Reveal y={16} amount={0.12} className="w-[78%]">
              <img
                src={sitePath("/images/opt/gallery-dlyte-sintering.jpg")}
                alt="Co-Cr partial denture frameworks in the finishing area after printing"
                width={1200}
                height={2133}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
              <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-paper/55">01 · Off the build plate</p>
            </Reveal>
            <Reveal y={16} amount={0.12} className="absolute bottom-0 right-0 w-[61%] border-l-[6px] border-ink">
              <img
                src={sitePath("/images/opt/dlyte-polishing.jpg")}
                alt="DLyte polishing system finishing Co-Cr frameworks in-house"
                width={1200}
                height={2133}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
              <p className="mt-2 bg-ink font-mono text-[9px] uppercase tracking-[0.16em] text-paper/55">02 · DLyte finishing</p>
            </Reveal>
          </div>
        </div>

        <div className="bg-paper px-5 py-16">
          <Reveal y={10}>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold-dim">Digital, not analog</p>
            <p className="mt-5 max-w-[13ch] text-balance text-[2.25rem] font-semibold leading-[1] tracking-[-0.035em] text-ink">
              Fewer hands, fewer chances to drift.
            </p>
            <p className="mt-7 text-base leading-[1.75] text-ink/70">
              A traditional partial goes through an impression, a poured model, a hand-built wax pattern, an investment, and a cast — five analog steps, each able to introduce its own small error. We replace that chain with one continuous digital path: scan in, CAD design out, printed directly in Co-Cr.
            </p>
          </Reveal>
          <div className="mt-9 border-y border-line-dark py-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-ink/55">
            What you approve on screen is what gets printed.
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-paper" aria-label="Material and licensing">
        <img
          src={sitePath("/images/opt/g-framework-closeup-2.jpg")}
          alt="Close view of a finished cobalt-chrome partial denture framework"
          width={1200}
          height={900}
          loading="lazy"
          className="aspect-[5/4] w-full object-cover opacity-65"
        />
        <div className="border-t border-gold px-5 pb-16 pt-8">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-paper/55">
            <span>Material record</span><span>Health Canada</span>
          </div>
          <Reveal y={10}>
            <p className="mt-8 font-mono text-[4.6rem] leading-[0.8] tracking-[-0.06em] text-paper">Co-Cr</p>
            <h2 className="mt-7 max-w-[18ch] text-balance text-[1.8rem] font-semibold leading-[1.05] tracking-[-0.03em]">
              Every framework is printed in Mediloy S.
            </h2>
            <p className="mt-6 text-base leading-[1.7] text-paper/70">
              One alloy, licensed by Health Canada for removable partial dentures — not a house blend, not whatever powder is on hand. The licence is public; read it yourself.
            </p>
          </Reveal>
          <a
            href={sitePath("/downloads/mediloy-rpd-licence.pdf")}
            className="mt-8 inline-flex min-h-12 w-full items-center justify-between border border-gold px-5 font-mono text-[10px] uppercase tracking-[0.16em] text-paper active:bg-gold active:text-ink"
          >
            Material licence · PDF <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="overflow-hidden bg-paper px-5 py-16" aria-label="Press coverage">
        <Reveal y={10}>
          <div className="flex items-center justify-between border-b border-line-dark pb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/55">
            <span>Press feature</span><span>Spring 2026</span>
          </div>
        </Reveal>
        <div className="relative mt-10 pb-8">
          <div className="absolute -right-5 top-8 h-[78%] w-[72%] bg-gold" aria-hidden="true" />
          <Reveal x={-16} y={0} amount={0.15} className="relative w-[78%]">
            <img
              src={sitePath("/images/opt/denturism-canada-cover.jpg")}
              alt="Cover of the Denturism Canada magazine, Spring 2026 issue"
              width={540}
              height={704}
              loading="lazy"
              className="aspect-[540/704] w-full object-cover"
            />
          </Reveal>
        </div>
        <Reveal y={10}>
          <h2 className="mt-6 max-w-[11ch] text-balance text-[2.45rem] font-semibold leading-[0.98] tracking-[-0.035em] text-ink">
            Featured in Denturism Canada.
          </h2>
          <p className="mt-6 text-base leading-[1.7] text-ink/70">
            The Spring 2026 issue carries &ldquo;From Analog Frustration to Digital Precision&rdquo; by Luke LaRocque-Walker, DD — a first-hand account of moving partial framework work to our digital line.
          </p>
          <Link
            href="/blog/denturism-canada-feature"
            className="mt-8 inline-flex min-h-12 w-full items-center justify-between border-y border-line-dark font-mono text-[10px] uppercase tracking-[0.16em] text-ink active:text-gold-dim"
          >
            Read the feature <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </section>
    </div>
  )
}

export default function AboutPage() {
  return (
    <main>
      <MobileAboutPage />
      <div className="hidden md:block">
      {/* ============ Header — the operation ============ */}
      <section className="bg-paper pb-14 pt-32 md:pb-16 md:pt-44 lg:pt-52 lg:pb-24" aria-label="About True North Kromes">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
          <Reveal y={10}>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim">The operation</p>
          </Reveal>
          <MachinedLines
            as="h1"
            lines={["One lab.", "The whole production line."]}
            delay={0.08}
            className="mt-5 max-w-[20ch] text-balance font-sans text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-ink"
          />
          <Reveal y={12} delay={0.22} className="mt-8 max-w-[56ch]">
            <p className="text-sm leading-[1.8] text-ink/70 sm:text-base">
            True North Kromes is a Canadian dental lab specializing in 3D
            printing metal partial denture frameworks. Built on the combined
            expertise of a denturist and a lab technologist, we design,
            laser-print, and plasma-polish Co-Cr frameworks entirely in-house.
            What ships to your lab is exactly what was designed.
            </p>
          </Reveal>

          {/* Lab floor — full-width establishing shot */}
          <div className="mt-10 sm:mt-14 lg:mt-20">
            <Reveal y={24} amount={0.2}>
              <img
                src={sitePath("/images/opt/gallery-lab-chamlion.jpg")}
                alt="Row of Chamlion SLM metal printers on the True North Kromes production floor"
                width={1600}
                height={900}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="flex items-center justify-between border-b border-line-dark py-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">
                  Production floor · Chamlion SLM
                </span>
                <span aria-hidden="true" className="h-px w-6 bg-gold-dim" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ Location — make the lab easy to find ============ */}
      <section className="bg-ink py-16 text-paper md:py-20 lg:py-28" aria-label="Find True North Kromes">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
            <div>
              <Reveal y={10}>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
                  Find the lab
                </p>
                <h2 className="mt-5 max-w-[15ch] text-balance font-sans text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-paper">
                  Built in Cochrane. Easy to reach.
                </h2>
                <p className="mt-6 max-w-[34ch] text-sm leading-[1.8] text-paper/70 sm:text-base">
                  True North Kromes is based in Cochrane, Alberta. Drop a pin,
                  get directions, or contact the lab before you send your first case.
                </p>
              </Reveal>

              <div className="mt-8 border-y border-line py-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/45">
                  Address
                </p>
                <address className="mt-3 not-italic text-sm leading-relaxed text-paper sm:text-base">
                  204 A River Avenue<br />
                  Cochrane, AB T4C 2C1
                </address>
                <div className="mt-5 flex flex-wrap gap-3">
                  <TrackedCta
                    href="https://www.google.com/maps/dir/?api=1&destination=204+A+River+Avenue%2C+Cochrane%2C+AB+T4C+2C1"
                    external
                    event="cta_click"
                    eventParams={{ location: "about_address", label: "get_directions" }}
                    className="inline-flex min-h-11 items-center justify-center border border-gold bg-gold px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink transition-colors hover:bg-transparent hover:text-gold"
                  >
                    Get directions ↗
                  </TrackedCta>
                  <TrackedCta
                    href="/contact"
                    event="cta_click"
                    eventParams={{ location: "about_address", label: "contact_the_lab" }}
                    className="inline-flex min-h-11 items-center justify-center border border-paper/40 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-paper transition-colors hover:border-paper"
                  >
                    Contact the lab
                  </TrackedCta>
                </div>
              </div>
            </div>

            <Reveal y={18} amount={0.2}>
              <div className="overflow-hidden border border-line bg-ink-soft">
                <iframe
                  title="Map showing True North Kromes at 204 A River Avenue, Cochrane, Alberta"
                  src="https://www.google.com/maps?q=204+A+River+Avenue%2C+Cochrane%2C+AB+T4C+2C1&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="aspect-[4/3] w-full grayscale contrast-125 sm:aspect-[16/9]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ Telemetry strip — lab facts on an endless readout ============ */}
      <Ticker items={TICKER_ITEMS} />

      {/* ============ Under one roof — production line ============ */}
      <section className="bg-paper pb-16 pt-16 md:pb-32 lg:pb-40 lg:pt-24" aria-label="The production line, under one roof">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
          <Reveal y={12}>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim">Production line</p>
            <h2 className="mt-5 max-w-[22ch] text-balance font-sans text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
              Every stage, under one roof.
            </h2>
            <TrackedCta
              href="/timeline"
              event="cta_click"
              eventParams={{ location: "about_production_line", label: "see_client_timeline" }}
              className="mt-5 inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60 underline decoration-line-dark underline-offset-4 transition-colors hover:text-gold-dim hover:decoration-gold-dim"
            >
              See the day-by-day client timeline →
            </TrackedCta>
          </Reveal>

          <ol className="mt-12 lg:mt-16">
            {STAGES.map((stage, i) => (
              <li key={stage.number}>
                <DrawRule className="h-px bg-line-dark" delay={i * 0.08} />
                <div className="grid gap-3 py-8 sm:py-10 md:grid-cols-12 md:gap-8">
                  {/* items-start (not baseline): the number rises out of an overflow-hidden
                      channel, which has no text baseline — both cells share identical
                      font metrics, so top alignment renders the same. */}
                  <div className="flex items-start gap-4 md:col-span-4">
                    <MachinedLines
                      as="p"
                      lines={[stage.number]}
                      delay={i * 0.08 + 0.12}
                      className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim"
                    />
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink">
                      {stage.label}
                    </h3>
                  </div>
                  <p className="max-w-2xl text-sm leading-[1.8] text-ink/70 sm:text-base md:col-span-8">
                    {stage.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <DrawRule className="h-px bg-line-dark" delay={STAGES.length * 0.08} />

          {/* Finishing floor — offset pair */}
          <div className="-mx-5 mt-14 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 md:mx-0 md:mt-16 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-12 md:overflow-visible md:px-0 lg:mt-24">
            <Reveal y={20} amount={0.2} className="w-[78vw] shrink-0 snap-center md:w-auto">
              <img
                src={sitePath("/images/opt/gallery-dlyte-sintering.jpg")}
                alt="Co-Cr partial denture frameworks in the finishing area after printing"
                width={1200}
                height={2133}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">
                Frameworks off the build plate
              </p>
            </Reveal>
            <Reveal y={20} amount={0.2} className="w-[78vw] shrink-0 snap-center md:mt-12 md:w-auto lg:mt-20">
              <img
                src={sitePath("/images/opt/dlyte-polishing.jpg")}
                alt="DLyte polishing system finishing Co-Cr frameworks in-house"
                width={1200}
                height={2133}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">
                DLyte · in-house finishing
              </p>
            </Reveal>
          </div>
          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/40 md:hidden">Swipe across the finishing floor →</p>

          {/* Digital vs. analog — draft copy, confirm technical framing before publishing */}
          <div className="mt-12 border-t border-line-dark pt-10 md:mt-16 md:pt-14 lg:mt-24 lg:pt-16">
            <div className="grid gap-x-10 gap-y-6 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim">
                  Digital, not analog
                </p>
                <h2 className="mt-5 max-w-[20ch] text-balance font-sans text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
                  Fewer hands, fewer chances to drift.
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="max-w-[56ch] text-sm leading-[1.8] text-ink/70 sm:text-base">
                  A traditional partial goes through an impression, a poured
                  model, a hand-built wax pattern, an investment, and a cast —
                  five analog steps, each one able to introduce its own small
                  error. We replace that chain with one continuous digital
                  path: scan in, CAD design out, printed directly in Co-Cr.
                  What you approve on screen is what gets printed — not a
                  hand-built approximation of it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Material — licensed alloy (ink) ============ */}
      <section className="bg-ink py-16 text-paper md:py-24 lg:py-32" aria-label="Material and licensing">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
          <div className="flex items-baseline justify-between gap-4 pb-4">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper">
              MATERIAL — LICENSED ALLOY
            </h2>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-paper/40 sm:block">
              CO-CR · HEALTH CANADA
            </span>
          </div>
          <DrawRule className="h-px bg-gold" />

          <div className="grid gap-x-8 gap-y-8 pt-10 md:grid-cols-12 lg:pt-14">
            <div className="md:col-span-7">
              <Reveal y={12}>
                <p className="max-w-[26ch] text-balance font-sans text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-paper">
                  Every framework is printed in Mediloy S Co-Cr.
                </p>
              </Reveal>
              <Reveal y={12} delay={0.1}>
                <p className="mt-6 max-w-[52ch] text-sm leading-[1.8] text-paper/70 sm:text-base">
                  One alloy, licensed by Health Canada for removable partial
                  dentures — not a house blend, not whatever powder is on hand.
                  The licence is public; read it yourself.
                </p>
              </Reveal>
            </div>
            <div className="flex items-end md:col-span-5 md:justify-end">
              <Reveal y={12} delay={0.2}>
                <a
                  href={sitePath("/downloads/mediloy-rpd-licence.pdf")}
                  className="border border-line px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors hover:border-gold hover:text-gold focus-visible:border-gold"
                >
                  Material licence (PDF) →
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Press — Denturism Canada ============ */}
      <section className="bg-paper py-16 md:py-32 lg:py-40" aria-label="Press coverage">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal x={-24} y={0} amount={0.25}>
                <img
                  src={sitePath("/images/opt/denturism-canada-cover.jpg")}
                  alt="Cover of the Denturism Canada magazine, Spring 2026 issue"
                  width={540}
                  height={704}
                  loading="lazy"
                  className="aspect-[540/704] w-full max-w-xs object-cover"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-8 lg:pt-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim">
                Press · Spring 2026
              </p>
              <h2 className="mt-5 max-w-[22ch] text-balance font-sans text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
                Featured in Denturism Canada.
              </h2>
              <p className="mt-6 max-w-[52ch] text-sm leading-[1.8] text-ink/70 sm:text-base">
                The Spring 2026 issue of Denturism Canada carries &ldquo;From
                Analog Frustration to Digital Precision&rdquo; by Luke
                LaRocque-Walker, DD — a first-hand account of moving partial
                framework work to our digital line.
              </p>
              <div className="mt-8">
                <Link
                  href="/blog/denturism-canada-feature"
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink underline decoration-line-dark underline-offset-4 transition-colors hover:decoration-gold-dim"
                >
                  Read the feature →
                </Link>
              </div>
              <div className="mt-10 max-w-xl">
                <DrawRule className="h-px bg-line-dark" />
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </main>
  )
}
