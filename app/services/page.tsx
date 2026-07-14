import type { Metadata } from "next"
import Link from "next/link"
import * as motion from "motion/react-client"
import { VideoSection } from "@/components/video-section"
import { DrawRule, Reveal } from "@/components/motion-primitives"
import { MachinedLines, Magnetic, Ticker } from "@/components/experience"
import { sitePath } from "@/lib/site-path"

// Duplicated from motion-primitives: plain values can't cross the
// "use client" boundary into this server component, only components can.
const EASE_MECH = [0.16, 1, 0.3, 1] as const

export const metadata: Metadata = {
  title: "Services",
  description:
    "3D partial denture design, SLM metal printing, and plasma polishing — True North Kromes' in-house digital production line for dental labs and denturists.",
}

const services = [
  {
    id: "station-01",
    stage: "01",
    label: "STATION 01 — 3D DESIGN",
    title: "3D Design",
    description:
      "Expert digital framework design tailored to each case. Our CAD specialist team is around 250 strong and also combined with an AI program that utilizes the databases to create precise partial denture designs that account for optimal fit, retention, and patient comfort. The process of design will allow the client to view their design before it is printed to obtain predictable results. We work with all major file formats and can accommodate custom specifications.",
    image: sitePath("/images/opt/service-3d-design.jpg"),
    alt: "Digital CAD design of a partial denture framework on screen",
    contain: false,
  },
  {
    id: "station-02",
    stage: "02",
    label: "STATION 02 — 3D PRINTING",
    title: "3D Printing",
    description:
      "High-resolution metal printing using advanced SLM (Selective Laser Melting) technology. Our Chamlion printers produce frameworks with exceptional accuracy and consistency, ensuring reliable results case after case.",
    image: sitePath("/images/opt/service-3d-printing.jpg"),
    alt: "Chamlion SLM metal printer producing Co-Cr partial denture frameworks",
    contain: false,
  },
  {
    id: "station-03",
    stage: "03",
    label: "STATION 03 — POST-PROCESSING",
    title: "Post-Processing",
    description:
      "Professional finishing using our AP10 Plasma Polishing Machine. Plasma polishing is a high-precision, high-efficiency, environmentally-friendly processing method for metal surfaces. The polishing of the workpiece is achieved by forming an envelope gas layer between the workpiece and the polishing liquid and generating plasma discharge to remove impurities. Every framework is polished to a mirror finish and inspected before delivery, ensuring it meets our exacting standards.",
    image: sitePath("/images/opt/service-post-processing.jpg"),
    alt: "AP10 plasma polishing machine used for framework finishing",
    contain: true,
  },
] as const

const stationIndex = [
  { num: "01", label: "DESIGN", href: "#station-01" },
  { num: "02", label: "PRINT", href: "#station-02" },
  { num: "03", label: "POLISH", href: "#station-03" },
] as const

const tickerFacts = [
  "250-STRONG CAD TEAM · AI-ASSISTED",
  "CHAMLION SLM",
  "AP10 PLASMA POLISH",
  "ANY MAJOR FILE FORMAT",
  "MIRROR FINISH · INSPECTED",
] as const

const additionalServices = [
  {
    title: "Custom Partial Frameworks",
    description:
      "Upper and lower partial denture frameworks in CoCr alloy. Includes cast clasps, mesh retention, and precision-fit designs tailored to your case specifications.",
  },
  {
    title: "Duplicate Models",
    description:
      "Additional replica models created from your original case. Perfect for laboratory reference, patient education, and clinical documentation.",
  },
  {
    title: "Special Attachment Models and Frames with Attachments",
    description:
      "Custom frameworks featuring specialized attachments and retention systems. Precisely designed and manufactured for complex clinical requirements.",
  },
  {
    title: "Flexible Clasps (Acetal)",
    description:
      "Advanced acetal resin clasps offering superior flexibility and esthetic properties. An excellent alternative to metal clasps for select clinical applications.",
  },
] as const

/** Gold L-corner brackets locking onto an image frame. Server-safe, static. */
function FrameBrackets() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
      <span className="absolute left-0 top-0 h-5 w-5 border-l border-t border-gold" />
      <span className="absolute right-0 top-0 h-5 w-5 border-r border-t border-gold" />
      <span className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-gold" />
      <span className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-gold" />
    </div>
  )
}

/** Service image revealed with a clip-path machining wipe. Brackets sit
 *  outside the wipe so the frame is "locked" before the image opens. */
function StationImage({
  service,
  initialClip,
}: {
  service: (typeof services)[number]
  initialClip: string
}) {
  // The viewport observer sits on the unclipped frame; the clip-path animates
  // on the child. A self-clipped element has zero visible area and never
  // reports as intersecting, so it would deadlock hidden.
  return (
    <motion.div
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <FrameBrackets />
      <motion.div
        variants={{
          hidden: { clipPath: initialClip },
          visible: {
            clipPath: "inset(0% 0% 0% 0%)",
            transition: { duration: 0.65, ease: EASE_MECH },
          },
        }}
        className="motion-reduce:[clip-path:none]!"
      >
        {service.contain ? (
          <div className="flex aspect-[4/3] w-full items-center justify-center border border-line-dark bg-white p-8">
            <img
              src={service.image}
              alt={service.alt}
              loading="lazy"
              className="h-full w-auto max-w-full object-contain"
            />
          </div>
        ) : (
          <img
            src={service.image}
            alt={service.alt}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        )}
      </motion.div>
    </motion.div>
  )
}

/** Local process video used as the Station 03 finishing reference. */
function PostProcessingVideo() {
  return (
    <figure className="relative">
      <div className="relative">
        <FrameBrackets />
        <div className="overflow-hidden border border-line-dark bg-ink p-2 sm:p-3">
          <div className="flex items-center justify-between gap-4 border-b border-line px-3 py-2 sm:px-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.17em] text-gold">
              Process feed · 03
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.17em] text-paper/40">
              AP10 / PLASMA
            </span>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden bg-black">
            <video
              autoPlay
              controls
              loop
              muted
              playsInline
              preload="auto"
              poster={sitePath("/images/opt/post-processing-video-poster.jpg")}
              className="absolute inset-0 block h-full w-full bg-black object-cover"
              aria-label="Plasma polishing process at True North Kromes"
            >
              <source
                src={sitePath("/videos/SaveClip.App_AQO8NWpNr0HO2vODn8IC3qAcVWb-jNqqib32IalnbVx3Pe8JSRpIe_1YjTUEcjW9TBHJT-1emMAEnE7kDbzmZRsrZG-LxvcbwA6gviM.mp4")}
                type="video/mp4"
              />
              Your browser does not support the video element.
            </video>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 flex items-baseline justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">
        <span>Co-Cr framework · finishing pass</span>
        <span className="text-right">Live reference</span>
      </figcaption>
    </figure>
  )
}

/** Station copy block: mono label, title, full description — verbatim. */
function StationText({
  service,
  dark = false,
}: {
  service: (typeof services)[number]
  dark?: boolean
}) {
  return (
    <Reveal y={12} delay={0.1} amount={0.25}>
      <p
        className={`font-mono text-[11px] uppercase tracking-[0.18em] ${
          dark ? "text-gold" : "text-gold-dim"
        }`}
      >
        {service.label}
      </p>
      <h2
        className={`mt-4 text-balance font-sans text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold tracking-[-0.02em] ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {service.title}
      </h2>
      <p
        className={`mt-5 max-w-[56ch] text-sm leading-[1.8] ${
          dark ? "text-paper/70" : "text-ink/70"
        }`}
      >
        {service.description}
      </p>
    </Reveal>
  )
}

/** Giant low-contrast station numeral. Decorative only. */
const NUMERAL =
  "select-none font-sans text-[clamp(5rem,12vw,9rem)] font-semibold leading-[0.9] tracking-[-0.04em]"

export default function ServicesPage() {
  return (
    <main>
      {/* ---------------------------------------------------------------- */}
      {/* OPENING — the head of the line (ink)                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-ink pt-36 lg:pt-44">
        <div className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-6 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.8fr)] lg:items-end lg:gap-20">
            <div>
              <Reveal y={10}>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
                  What we do / 01—03
                </p>
              </Reveal>
              <MachinedLines
                as="h1"
                lines={["The production", "line."]}
                delay={0.08}
                className="mt-5 max-w-[12ch] text-balance font-sans text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-paper"
              />
              <Reveal y={12} delay={0.2} className="mt-7 max-w-[52ch]">
                <p className="text-sm leading-[1.8] text-paper/70 sm:text-base">
                  A fully integrated digital 3D-printing solution that transforms the
                  way dental professionals design and manufacture partial dentures.
                </p>
              </Reveal>
            </div>

            {/* Station index — a compact route map, aligned to the header baseline */}
            <nav aria-label="Stations" className="border-y border-line">
              {stationIndex.map((s, i) => (
                <div key={s.num}>
                  <a
                    href={s.href}
                    className="group flex items-baseline gap-5 py-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-1.5 motion-reduce:transition-none motion-reduce:hover:translate-x-0"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
                      {s.num}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors group-hover:text-gold">
                      {s.label}
                    </span>
                    <span aria-hidden="true" className="ml-auto font-mono text-[11px] text-paper/40 transition-colors group-hover:text-gold">
                      ↓
                    </span>
                  </a>
                  {i < stationIndex.length - 1 && <DrawRule className="h-px bg-line" delay={(i + 1) * 0.08} />}
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Telemetry strip — service-derived facts */}
        <Ticker items={tickerFacts} className="mt-16" />
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* STATION 01 — 3D DESIGN (paper · image right · numeral above copy) */}
      {/* ---------------------------------------------------------------- */}
      <section
        id="station-01"
        aria-label="Station 01 — 3D Design"
        className="relative scroll-mt-20 overflow-hidden bg-paper py-24 lg:flex lg:min-h-screen lg:items-center lg:py-28"
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="relative lg:col-span-5">
              <span aria-hidden="true" className={`block text-ink/10 ${NUMERAL}`}>
                01
              </span>
              <div className="relative -mt-8 lg:-mt-12">
                <StationText service={services[0]} />
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <StationImage service={services[0]} initialClip="inset(0% 100% 0% 0%)" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* STATION 02 — 3D PRINTING (ink · image left · numeral off right)   */}
      {/* ---------------------------------------------------------------- */}
      <section
        id="station-02"
        aria-label="Station 02 — 3D Printing"
        className="relative scroll-mt-20 overflow-hidden bg-ink py-24 lg:flex lg:min-h-screen lg:items-center lg:py-28"
      >
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute right-0 top-16 translate-x-[15%] text-paper/10 lg:top-1/2 lg:-translate-y-1/2 ${NUMERAL}`}
        >
          02
        </span>
        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-6">
              <StationImage service={services[1]} initialClip="inset(0% 0% 100% 0%)" />
            </div>
            <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
              <StationText service={services[1]} dark />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* STATION 03 — POST-PROCESSING (paper · Instagram Reel right ·      */}
      {/* numeral clipped at the bottom edge)                               */}
      {/* ---------------------------------------------------------------- */}
      <section
        id="station-03"
        aria-label="Station 03 — Post-Processing"
        className="relative scroll-mt-20 overflow-hidden bg-paper py-24 lg:flex lg:min-h-screen lg:items-center lg:py-28"
      >
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute -bottom-8 left-4 text-ink/10 lg:left-12 ${NUMERAL}`}
        >
          03
        </span>
        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="lg:col-span-5 lg:mt-20">
              <StationText service={services[2]} />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <PostProcessingVideo />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* MONITORING STATION — process videos (ink)                         */}
      {/* ---------------------------------------------------------------- */}
      <VideoSection />

      {/* ---------------------------------------------------------------- */}
      {/* ADDITIONAL SERVICES — ruled rows off the main line (ink)          */}
      {/* ---------------------------------------------------------------- */}
      <section
        className="border-t border-line bg-ink py-20 text-paper sm:py-24 lg:py-28"
        aria-label="Additional services"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
            Also available
          </p>
          <h2 className="mt-4 text-balance font-sans text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-[-0.02em] text-paper">
            Additional Services
          </h2>

          <dl className="mt-12">
            {additionalServices.map((s, i) => (
              <div key={s.title}>
                <DrawRule className="h-px bg-line" delay={i * 0.1} />
                <Reveal y={10} delay={i * 0.1 + 0.12} amount={0.4}>
                  <div className="grid gap-2 py-7 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-1.5 motion-reduce:transition-none motion-reduce:hover:translate-x-0 md:grid-cols-12 md:gap-8">
                    <dt className="contents">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/40 md:col-span-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-sans text-lg text-paper md:col-span-4">
                        {s.title}
                      </span>
                    </dt>
                    <dd className="text-sm leading-relaxed text-paper/70 md:col-span-7">
                      {s.description}
                    </dd>
                  </div>
                </Reveal>
              </div>
            ))}
            <DrawRule className="h-px bg-line" delay={additionalServices.length * 0.1} />
          </dl>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CTA — end of the line (paper)                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
          <DrawRule className="h-px w-16 bg-gold" />
          <MachinedLines
            as="h2"
            lines={["Ready to Get Started?"]}
            delay={0.1}
            className="mt-8 text-balance font-sans text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-[-0.02em] text-ink"
          />
          <Reveal y={12} delay={0.18}>
            <p className="mt-4 max-w-[52ch] text-sm leading-[1.8] text-ink/70 sm:text-base">
              Email or call us today to discuss your case requirements. We
              provide complete support throughout the entire production cycle.
            </p>
            <div className="mt-8">
              <Magnetic>
                <Link
                  href="/contact"
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink underline decoration-line-dark underline-offset-8 transition-colors hover:decoration-gold-dim"
                >
                  Get in touch →
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
