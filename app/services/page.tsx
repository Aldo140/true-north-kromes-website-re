import type { Metadata } from "next"
import { VideoSection } from "@/components/video-section"
import { DrawRule, Reveal } from "@/components/motion-primitives"
import { MachinedLines, Magnetic } from "@/components/experience"
import { TrackedCta } from "@/components/tracked-cta"
import { sitePath } from "@/lib/site-path"
import { ProcessTicker, StickyMediaStory } from "@/components/scroll-patterns"

export const metadata: Metadata = {
  title: "3D Dental Metal Printing Services",
  description:
    "CAD partial framework design, SLM cobalt-chrome 3D printing, and plasma polishing from True North Kromes in Cochrane, Alberta, serving labs across Canada.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "3D Dental Metal Printing Services | True North Kromes",
    description: "Explore CAD design, Chamlion SLM printing, and AP10/DLyte plasma polishing for Co-Cr partial denture frameworks.",
    url: "/services",
    type: "website",
  },
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
      "Professional finishing using our AP10 Plasma Polishing Machine — as far as we know, the only one in Canada. Plasma polishing is a high-precision, high-efficiency, environmentally-friendly processing method for metal surfaces. The polishing of the workpiece is achieved by forming an envelope gas layer between the workpiece and the polishing liquid and generating plasma discharge to remove impurities. Every framework is polished to a mirror finish and inspected before delivery, ensuring it meets our exacting standards.",
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

const processTickerItems = [
  { number: "01", title: "Design", body: "Case-specific CAD design prepared for your approval." },
  { number: "02", title: "Approve", body: "Review the digital framework before production begins." },
  { number: "03", title: "SLM print", body: "Co-Cr powder is fused layer by layer on Chamlion printers." },
  { number: "04", title: "Finish", body: "AP10 plasma polishing and DLyte finishing create the final surface." },
  { number: "05", title: "Inspect", body: "Every framework is checked against the approved design." },
] as const

const designStory = [
  { label: "Case intake", title: "Start with the scan.", body: "Send files through your scanner portal or personal upload link. We work with the major dental file formats and organize the case for digital design." },
  { label: "CAD design", title: "Geometry built for the mouth.", body: "The design team develops retention, clasping, mesh, and support around the requirements of the individual case." },
  { label: "Client review", title: "Approve before metal.", body: "You see the complete digital framework before printing. Production begins only after the design is approved." },
] as const

const printStory = [
  { label: "Selective laser melting", title: "Metal, fused layer by layer.", body: "Chamlion SLM printers build the approved framework directly in cobalt-chrome powder without wax patterns, investment, or casting." },
  { label: "Repeatable production", title: "The file controls the result.", body: "A digital manufacturing path keeps the geometry tied to the approved design and makes repeat cases more predictable." },
  { label: "Build plate", title: "Several cases. One controlled cycle.", body: "Frameworks are nested on the build plate, printed under monitored conditions, then separated for finishing and inspection." },
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

/** Local process video used as the Station 03 finishing reference. */
function PostProcessingVideo({ autoPlay = true }: { autoPlay?: boolean }) {
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
              autoPlay={autoPlay}
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

function MobileLineTracker() {
  return (
    <nav
      aria-label="Production line progress"
      className="sticky top-[72px] z-30 border-y border-line bg-ink/95 text-paper backdrop-blur-md md:hidden"
    >
      <div className="grid grid-cols-3 px-5">
        {stationIndex.map((station) => (
          <a
            key={`tracker-${station.num}`}
            href={station.href}
            className="flex min-h-12 items-center justify-center gap-2 border-r border-line font-mono text-[9px] uppercase tracking-[0.15em] first:justify-start last:border-r-0 last:justify-end active:bg-paper/5"
          >
            <span className="text-gold">{station.num}</span>
            <span>{station.label}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}

function MobileStation({
  service,
  items,
  dark = false,
  feed,
}: {
  service: (typeof services)[number]
  items: readonly { label: string; title: string; body: string }[]
  dark?: boolean
  feed: string
}) {
  const surface = dark ? "bg-ink text-paper" : "bg-paper text-ink"
  const line = dark ? "border-line" : "border-line-dark"
  const muted = dark ? "text-paper/68" : "text-ink/68"

  return (
    <section className={`relative overflow-hidden px-5 py-14 ${surface}`} aria-label={service.label}>
      <div className="flex items-center justify-between gap-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-gold">
          Bay {service.stage} / {feed}
        </p>
        <span className={`h-px flex-1 ${dark ? "bg-line" : "bg-line-dark"}`} aria-hidden="true" />
        <span className={`font-mono text-[9px] uppercase tracking-[0.14em] ${muted}`}>
          In sequence
        </span>
      </div>

      <div className="relative -mx-5 mt-7 border-y border-gold/60 bg-ink">
        <img
          src={service.image}
          alt={service.alt}
          loading="lazy"
          className={`aspect-[5/4] w-full ${service.contain ? "object-contain p-8" : "object-cover"}`}
        />
        <span className="pointer-events-none absolute inset-4 border border-paper/25" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-ink/90 px-5 py-3 font-mono text-[9px] uppercase tracking-[0.14em] text-paper/70">
          <span>TNK / production feed</span>
          <span className="text-gold">Station {service.stage}</span>
        </div>
      </div>

      <div className="mt-9 flex items-end justify-between gap-6">
        <h2 className="max-w-[10ch] text-balance text-[clamp(2.25rem,11vw,3.15rem)] font-semibold leading-[0.94] tracking-[-0.04em]">
          {service.title}
        </h2>
        <span className={`select-none text-[4.5rem] font-semibold leading-none tracking-[-0.04em] ${dark ? "text-paper/8" : "text-ink/8"}`} aria-hidden="true">
          {service.stage}
        </span>
      </div>

      <div className={`relative mt-10 border-t ${line}`}>
        <span className="absolute bottom-6 left-[5px] top-0 w-px bg-gold/45" aria-hidden="true" />
        {items.map((item, index) => (
          <Reveal key={`${service.stage}-${item.title}`} y={10} delay={index * 0.07} amount={0.2}>
            <article className={`relative grid grid-cols-[12px_1fr] gap-5 border-b py-8 ${line}`}>
              <span className={`relative z-10 mt-1 block h-3 w-3 border border-gold ${index === 0 ? "bg-gold" : dark ? "bg-ink" : "bg-paper"}`} aria-hidden="true" />
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <p className={`font-mono text-[9px] uppercase tracking-[0.16em] ${dark ? "text-gold" : "text-gold-dim"}`}>
                    {item.label}
                  </p>
                  <span className={`font-mono text-[9px] ${muted}`}>{service.stage}.{index + 1}</span>
                </div>
                <h3 className="mt-3 max-w-[18ch] text-balance text-[1.55rem] font-semibold leading-[1.02] tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className={`mt-4 text-[15px] leading-[1.72] ${muted}`}>{item.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <details className={`group mt-8 border-y ${line}`}>
        <summary className="flex min-h-14 cursor-pointer list-none items-center gap-4 py-3 font-mono text-[10px] uppercase tracking-[0.15em] [&::-webkit-details-marker]:hidden">
          <span className="text-gold">Technical record</span>
          <span className={`ml-auto text-lg font-light transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none ${muted}`} aria-hidden="true">+</span>
        </summary>
        <p className={`pb-6 text-[15px] leading-[1.75] ${muted}`}>{service.description}</p>
      </details>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <main>
      {/* ---------------------------------------------------------------- */}
      {/* OPENING — the head of the line (ink)                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-ink pt-28 md:pt-36 lg:pt-44">
        <img
          src={services[1].image}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity md:hidden"
        />
        <div className="pointer-events-none absolute inset-0 bg-ink/80 md:hidden" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-10 sm:px-6 sm:pb-20 lg:px-12 lg:pb-24">
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
            <nav aria-label="Stations" className="hidden border-y border-line md:block">
              {stationIndex.map((s, i) => (
                <div key={s.num}>
                  <a
                    href={s.href}
                    className="group flex min-h-14 items-center gap-5 py-3 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-1.5 motion-reduce:transition-none motion-reduce:hover:translate-x-0 md:min-h-0 md:items-baseline md:py-4"
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
            <TrackedCta
              href="/timeline"
              event="cta_click"
              eventParams={{ location: "services_station_index", label: "see_client_timeline" }}
              className="mt-5 inline-flex min-h-12 items-center font-mono text-[10px] uppercase tracking-[0.16em] text-paper/65 underline decoration-line underline-offset-4 transition-colors hover:text-gold hover:decoration-gold md:mt-4 md:inline-block md:min-h-0 md:text-[11px] md:tracking-[0.18em] md:text-paper/50"
            >
              See the day-by-day client timeline →
            </TrackedCta>
          </div>
        </div>

        {/* Telemetry strip — service-derived facts */}
        <div className="relative border-t border-line px-5 py-5 md:hidden">
          <div className="mb-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.15em] text-paper/65">
            <span>Case traveler / five handoffs</span>
            <span className="text-gold">Swipe →</span>
          </div>
          <ol className="-mx-5 flex snap-x snap-mandatory overflow-x-auto border-y border-line pl-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {processTickerItems.map((item) => (
              <li key={`mobile-${item.number}`} className="w-[72vw] shrink-0 snap-start border-r border-line bg-ink-soft px-5 py-6 first:border-l first:border-l-gold/60">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[10px] text-gold">{item.number}</span>
                  <span className="h-px w-10 bg-line" aria-hidden="true" />
                </div>
                <h2 className="mt-7 text-xl font-semibold tracking-[-0.02em] text-paper">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-paper/62">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="hidden md:block">
          <ProcessTicker items={processTickerItems} title="Case movement / automatic cycle" className="mt-16" />
        </div>
      </section>

      <div className="relative">
      <MobileLineTracker />

      {/* ---------------------------------------------------------------- */}
      {/* STATION 01 — 3D DESIGN (paper · image right · numeral above copy) */}
      {/* ---------------------------------------------------------------- */}
      <div id="station-01" className="scroll-mt-[124px] md:scroll-mt-20">
        <div className="md:hidden">
          <MobileStation service={services[0]} items={designStory} feed="CAD control" />
        </div>
        <div className="hidden md:block">
          <StickyMediaStory image={services[0].image} alt={services[0].alt} imageSide="right" caption="Station 01 / digital design" items={designStory} />
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* STATION 02 — 3D PRINTING (ink · image left · numeral off right)   */}
      {/* ---------------------------------------------------------------- */}
      <div id="station-02" className="scroll-mt-[124px] md:scroll-mt-20">
        <div className="md:hidden">
          <MobileStation service={services[1]} items={printStory} feed="Chamlion SLM" dark />
        </div>
        <div className="hidden md:block">
          <StickyMediaStory image={services[1].image} alt={services[1].alt} imageSide="left" caption="Station 02 / Chamlion SLM" items={printStory} dark />
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* STATION 03 — POST-PROCESSING (paper · Instagram Reel right ·      */}
      {/* numeral clipped at the bottom edge)                               */}
      {/* ---------------------------------------------------------------- */}
      <div id="station-03" className="scroll-mt-[124px] md:scroll-mt-20">
        <section className="relative overflow-hidden bg-paper px-5 py-14 md:hidden" aria-label="Station 03 — Post-Processing">
          <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.17em] text-gold-dim">
            <span>Bay 03 / finishing cell</span>
            <span className="h-px flex-1 bg-line-dark" aria-hidden="true" />
          </div>
          <h2 className="mt-7 max-w-[9ch] text-balance text-[clamp(2.25rem,11vw,3.15rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-ink">
            Post-Processing
          </h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-ink/70">{services[2].description}</p>
          <div className="-mx-5 mt-9 border-y border-gold/60 px-5 py-5">
            <PostProcessingVideo autoPlay={false} />
          </div>
          <div className="mt-8 grid grid-cols-3 border-y border-line-dark py-4 text-center font-mono text-[9px] uppercase tracking-[0.13em] text-ink/55">
            <span className="border-r border-line-dark">Plasma</span>
            <span className="border-r border-line-dark">DLyte</span>
            <span>Inspect</span>
          </div>
        </section>
        <section
        aria-label="Station 03 — Post-Processing"
        className="relative hidden overflow-hidden bg-paper py-16 md:block md:py-24 lg:flex lg:min-h-screen lg:items-center lg:py-28"
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
      </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* MONITORING STATION — process videos (ink)                         */}
      {/* ---------------------------------------------------------------- */}
      <VideoSection />

      {/* ---------------------------------------------------------------- */}
      {/* ADDITIONAL SERVICES — ruled rows off the main line (ink)          */}
      {/* ---------------------------------------------------------------- */}
      <section
        className="border-t border-line bg-ink py-14 text-paper md:py-24 lg:py-28"
        aria-label="Additional services"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
          <div className="flex items-center gap-4 md:block">
            <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-gold md:text-[11px] md:tracking-[0.18em]">
              Also available
            </p>
            <span className="h-px flex-1 bg-line md:hidden" aria-hidden="true" />
          </div>
          <h2 className="mt-4 text-balance font-sans text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-[-0.02em] text-paper">
            <span className="md:hidden">Capability manifest</span>
            <span className="hidden md:inline">Additional Services</span>
          </h2>
          <p className="mt-4 max-w-[34ch] text-sm leading-6 text-paper/60 md:hidden">
            Secondary workflows available alongside the primary Co-Cr production line.
          </p>

          <div className="mt-8 divide-y divide-line border-y border-line md:hidden">
            {additionalServices.map((service, index) => (
              <details key={`mobile-${service.title}`} className="group">
                <summary className="grid min-h-16 cursor-pointer list-none grid-cols-[28px_1fr_28px] items-center gap-3 py-3 [&::-webkit-details-marker]:hidden">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-gold">A{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-[15px] font-medium leading-5 text-paper">{service.title}</span>
                  <span className="ml-auto font-mono text-lg font-light text-gold transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="pb-6 pl-10 text-sm leading-7 text-paper/68">{service.description}</p>
              </details>
            ))}
          </div>

          <dl className="mt-12 hidden md:block">
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
      {/* PRICING & PROMISE — draft copy, confirm before treating as final */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-t border-line-dark bg-paper py-16 md:py-24 lg:py-28" aria-label="Pricing and policy">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
          <div className="md:hidden">
            <div className="border-y border-line-dark py-5 font-mono text-[9px] uppercase tracking-[0.15em] text-ink/50">
              <div className="flex justify-between gap-4">
                <span>Commercial terms</span>
                <span className="text-gold-dim">Quote by volume</span>
              </div>
            </div>
            <div className="py-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-gold-dim">Starting rate</p>
              <div className="mt-3 flex items-end justify-between gap-4">
                <p className="text-[clamp(4.5rem,23vw,6rem)] font-semibold leading-[0.82] tracking-[-0.04em] text-ink">$200</p>
                <p className="pb-1 text-right font-mono text-[9px] uppercase tracking-[0.14em] text-ink/50">per unit<br />before volume rate</p>
              </div>
              <h2 className="mt-8 max-w-[14ch] text-balance text-[1.7rem] font-semibold leading-[1.02] tracking-[-0.03em] text-ink">Pricing that rewards volume.</h2>
              <p className="mt-5 text-[15px] leading-[1.75] text-ink/70">
                Frameworks start at $200 per unit, and the per-unit price drops as your monthly volume grows — the more you send, the less you pay per frame. Tell us your monthly volume and we&apos;ll quote your rate.
              </p>
              <TrackedCta
                href="/contact"
                event="cta_click"
                eventParams={{ location: "services_pricing_mobile", label: "get_volume_pricing" }}
                className="mt-7 flex min-h-14 items-center justify-between border-y border-ink px-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink"
              >
                <span>Request volume rate</span><span aria-hidden="true">→</span>
              </TrackedCta>
            </div>

            <div className="-mx-5 bg-ink px-5 py-11 text-paper">
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.15em] text-paper/50">
                <span>Remake policy</span>
                <span className="text-gold">TNK guarantee</span>
              </div>
              <h2 className="mt-7 max-w-[13ch] text-balance text-[2.15rem] font-semibold leading-[0.98] tracking-[-0.04em]">
                If we get it wrong, we fix it. No charge.
              </h2>
              <p className="mt-6 text-[15px] leading-[1.75] text-paper/68">
                If a case doesn&apos;t fit or the error is ours, the remake and the return shipping are on us. And every case runs on the same strict 4-day production line — no exceptions, no jumping the queue.
              </p>
              <TrackedCta
                href="/timeline"
                event="cta_click"
                eventParams={{ location: "services_guarantee_mobile", label: "see_client_timeline" }}
                className="mt-7 flex min-h-14 items-center justify-between border-y border-line px-1 font-mono text-[10px] uppercase tracking-[0.15em] text-paper"
              >
                <span>Inspect the 4-day timeline</span><span className="text-gold" aria-hidden="true">→</span>
              </TrackedCta>
            </div>
          </div>

          <div className="hidden gap-12 md:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim">
                Volume pricing
              </p>
              <h2 className="mt-4 text-balance font-sans text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-[-0.02em] text-ink">
                Pricing that rewards volume.
              </h2>
              <p className="mt-5 max-w-[48ch] text-sm leading-[1.8] text-ink/70 sm:text-base">
                Frameworks start at $200 per unit, and the per-unit price drops
                as your monthly volume grows — the more you send, the less you
                pay per frame. Tell us your monthly volume and we&apos;ll quote
                your rate.
              </p>
              <div className="mt-6">
                <TrackedCta
                  href="/contact"
                  event="cta_click"
                  eventParams={{ location: "services_pricing", label: "get_volume_pricing" }}
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink underline decoration-line-dark underline-offset-4 transition-colors hover:decoration-gold-dim"
                >
                  Get your volume rate →
                </TrackedCta>
              </div>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim">
                Our promise
              </p>
              <h2 className="mt-4 text-balance font-sans text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-[-0.02em] text-ink">
                If we get it wrong, we fix it. No charge.
              </h2>
              <p className="mt-5 max-w-[48ch] text-sm leading-[1.8] text-ink/70 sm:text-base">
                If a case doesn&apos;t fit or the error is ours, the remake and
                the return shipping are on us. And every case runs on the same
                strict 4-day production line — no exceptions, no jumping the
                queue.
              </p>
              <div className="mt-6">
                <TrackedCta
                  href="/timeline"
                  event="cta_click"
                  eventParams={{ location: "services_pricing", label: "see_client_timeline" }}
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink underline decoration-line-dark underline-offset-4 transition-colors hover:decoration-gold-dim"
                >
                  See the day-by-day timeline →
                </TrackedCta>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CTA — end of the line (paper)                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-paper py-14 md:py-16 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
          <DrawRule className="h-px w-16 bg-gold" />
          <MachinedLines
            as="h2"
            lines={["Ready to Get Started?"]}
            delay={0.1}
            className="mt-8 max-w-[11ch] text-balance font-sans text-[clamp(2.1rem,9vw,2.5rem)] font-semibold leading-[1] tracking-[-0.03em] text-ink md:max-w-none md:text-[clamp(1.5rem,3vw,2.25rem)] md:leading-normal md:tracking-[-0.02em]"
          />
          <Reveal y={12} delay={0.18}>
            <p className="mt-4 max-w-[52ch] text-sm leading-[1.8] text-ink/70 sm:text-base">
              Email or call us today to discuss your case requirements. We
              provide complete support throughout the entire production cycle.
            </p>
            <div className="mt-8 md:hidden">
              <Magnetic>
                <TrackedCta
                  href="/contact"
                  event="cta_click"
                  eventParams={{ location: "services_end", label: "get_in_touch" }}
                  className="flex min-h-14 w-full items-center justify-between border-y border-ink px-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink transition-colors hover:border-gold-dim"
                >
                  <span>Route a case to TNK</span>
                  <span aria-hidden="true">→</span>
                </TrackedCta>
              </Magnetic>
            </div>
            <div className="mt-8 hidden md:block">
              <Magnetic>
                <TrackedCta
                  href="/contact"
                  event="cta_click"
                  eventParams={{ location: "services_end", label: "get_in_touch" }}
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink underline decoration-line-dark underline-offset-8 transition-colors hover:decoration-gold-dim"
                >
                  Get in touch →
                </TrackedCta>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
