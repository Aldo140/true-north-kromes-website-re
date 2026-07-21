"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { createPortal } from "react-dom"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react"
import { EASE_MECH, Reveal } from "@/components/motion-primitives"
import { MachinedLines } from "@/components/experience"
import { sitePath } from "@/lib/site-path"
import { CrossfadeCarousel } from "@/components/interactive-patterns"

interface Specimen {
  gridSrc: string
  fullSrc: string
  alt: string
  code: string
  title: string
  detail: string
  aspect: "portrait" | "landscape"
}

const specimens: Specimen[] = [
  {
    gridSrc: sitePath("/images/opt/g-upper-partial-blue-glove.jpg"),
    fullSrc: sitePath("/images/gallery-upper-partial-blue-glove.jpg"),
    alt: "Upper partial framework held with a blue glove",
    code: "SPEC 025",
    title: "Upper / hand inspection",
    detail: "Mirror-polished Co-Cr · final fit check",
    aspect: "portrait",
  },
  {
    gridSrc: sitePath("/images/opt/g-upper-framework-acrylic-1.jpg"),
    fullSrc: sitePath("/images/gallery-upper-framework-acrylic-1.jpg"),
    alt: "Upper framework with acrylic teeth on a model",
    code: "SPEC 022",
    title: "Upper / acrylic teeth set",
    detail: "Framework and acrylic integration",
    aspect: "portrait",
  },
  {
    gridSrc: sitePath("/images/opt/g-denture-articulated-front.jpg"),
    fullSrc: sitePath("/images/gallery-denture-articulated-front.jpg"),
    alt: "Articulated upper and lower denture models",
    code: "SPEC 024",
    title: "Full case / articulated",
    detail: "Occlusion and bilateral fit",
    aspect: "portrait",
  },
  {
    gridSrc: sitePath("/images/opt/g-framework-closeup-2.jpg"),
    fullSrc: sitePath("/images/gallery-framework-closeup-2.jpg"),
    alt: "Close-up of a polished upper partial framework",
    code: "SPEC 026",
    title: "Upper / polished frame",
    detail: "Surface finish · clasp detail",
    aspect: "portrait",
  },
  {
    gridSrc: sitePath("/images/opt/g-lower-partial-model-1.jpg"),
    fullSrc: sitePath("/images/gallery-lower-partial-model-1.jpg"),
    alt: "Lower partial framework on a dental model",
    code: "SPEC 027",
    title: "Lower / front view",
    detail: "Retention and seating review",
    aspect: "portrait",
  },
  {
    gridSrc: sitePath("/images/opt/g-framework-gloved-1.jpg"),
    fullSrc: sitePath("/images/gallery-framework-gloved-1.jpg"),
    alt: "Gloved hand holding a polished partial framework",
    code: "SPEC 029",
    title: "Polished frame / in hand",
    detail: "Final inspection before delivery",
    aspect: "portrait",
  },
  {
    gridSrc: sitePath("/images/opt/g-upper-framework-acrylic-2.jpg"),
    fullSrc: sitePath("/images/gallery-upper-framework-acrylic-2.jpg"),
    alt: "Upper framework with acrylic saddles",
    code: "SPEC 023",
    title: "Upper / acrylic saddles",
    detail: "Acrylic and metal relationship",
    aspect: "portrait",
  },
  {
    gridSrc: sitePath("/images/opt/g-lower-partial-model-5.jpg"),
    fullSrc: sitePath("/images/gallery-lower-partial-model-5.jpg"),
    alt: "Lower partial framework on a dental model from the occlusal view",
    code: "SPEC 028",
    title: "Lower / occlusal view",
    detail: "Mesh geometry · tissue clearance",
    aspect: "portrait",
  },
  {
    gridSrc: sitePath("/images/opt/g-finished-model-3.jpg"),
    fullSrc: sitePath("/images/gallery-finished-model-3.jpg"),
    alt: "Finished framework on a model in detail",
    code: "SPEC 030",
    title: "Finished case / detail",
    detail: "Mirror finish · final record",
    aspect: "portrait",
  },
  {
    gridSrc: sitePath("/images/opt/g-finished-model-4.jpg"),
    fullSrc: sitePath("/images/gallery-finished-model-4.jpg"),
    alt: "Finished framework on a model in overview",
    code: "SPEC 031",
    title: "Finished case / overview",
    detail: "Complete framework presentation",
    aspect: "portrait",
  },
]

const carouselSlides = specimens.slice(0, 4).map((specimen) => ({
  title: specimen.title,
  description: specimen.detail,
  image: specimen.gridSrc,
  alt: specimen.alt,
  label: specimen.code,
}))

function RegistrationCorners() {
  return (
    <span className="pointer-events-none absolute inset-3 z-10 md:hidden" aria-hidden="true">
      <span className="absolute left-0 top-0 h-px w-5 bg-gold" />
      <span className="absolute left-0 top-0 h-5 w-px bg-gold" />
      <span className="absolute bottom-0 right-0 h-px w-5 bg-gold" />
      <span className="absolute bottom-0 right-0 h-5 w-px bg-gold" />
    </span>
  )
}

function SpecimenCard({ specimen, index, onOpen, mobileWide = false }: { specimen: Specimen; index: number; onOpen: () => void; mobileWide?: boolean }) {
  const reduced = useReducedMotion()
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${specimen.code} — ${specimen.title}`}
      className="group block w-full text-left focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-dim"
      initial={reduced ? false : { opacity: 1, y: 18 }}
      animate={reduced ? { opacity: 1, y: 0 } : undefined}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.06, ease: EASE_MECH }}
    >
      <figure>
        <div className="relative overflow-hidden bg-ink-soft">
          <img
            src={specimen.gridSrc}
            alt={specimen.alt}
            loading={index < 4 ? "eager" : "lazy"}
            className={`${mobileWide ? "aspect-[16/11] md:aspect-[4/5]" : specimen.aspect === "landscape" ? "aspect-[16/10]" : "aspect-[4/5]"} w-full object-cover transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025] group-hover:opacity-90`}
          />
          <RegistrationCorners />
          <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
          <span className="absolute bottom-3 right-3 z-10 flex h-11 w-11 items-center justify-center border border-ink/15 bg-paper text-ink opacity-100 transition-opacity duration-300 md:bottom-3 md:right-3 md:h-9 md:w-9 md:border-0 md:opacity-0 md:group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <figcaption className="border-b border-line-dark py-3 md:py-4">
          <div className="flex items-baseline justify-between gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold-dim">
              {specimen.code}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/40">
              {String(index + 1).padStart(2, "0")} / 10
            </span>
          </div>
          <p className="mt-2 font-sans text-sm font-medium leading-5 tracking-[-0.01em] text-ink md:text-base md:capitalize">
            {specimen.title}
          </p>
          <p className={`${mobileWide ? "block" : "hidden"} mt-1 text-[13px] leading-5 text-ink/60 md:block md:text-sm`}>{specimen.detail}</p>
        </figcaption>
      </figure>
    </motion.button>
  )
}

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const touchStart = useRef<number | null>(null)
  const reduced = useReducedMotion()
  const active = lightbox === null ? null : specimens[lightbox]

  const close = useCallback(() => setLightbox(null), [])
  const step = useCallback((direction: 1 | -1) => {
    setLightbox((current) => {
      if (current === null) return current
      return (current + direction + specimens.length) % specimens.length
    })
  }, [])

  const onTouchStart = useCallback((event: React.TouchEvent) => {
    touchStart.current = event.changedTouches[0]?.clientX ?? null
  }, [])

  const onTouchEnd = useCallback((event: React.TouchEvent) => {
    if (touchStart.current === null) return
    const distance = (event.changedTouches[0]?.clientX ?? touchStart.current) - touchStart.current
    touchStart.current = null
    if (Math.abs(distance) < 48) return
    step(distance < 0 ? 1 : -1)
  }, [step])

  useEffect(() => {
    if (lightbox === null) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
      if (event.key === "ArrowRight") step(1)
      if (event.key === "ArrowLeft") step(-1)
    }
    document.addEventListener("keydown", onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [lightbox, close, step])

  return (
    <>
      <div>
        <section className="relative overflow-hidden bg-ink pb-14 pt-32 text-paper md:pb-20 md:pt-36 lg:pb-24 lg:pt-44" aria-label="Gallery introduction">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,1fr)] lg:items-end lg:gap-20">
              <div>
                <Reveal y={10}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
                    The specimen archive / 2026
                  </p>
                </Reveal>
                <MachinedLines
                  as="h1"
                  lines={["Built to be", "looked at."]}
                  delay={0.08}
                  className="mt-5 max-w-[9ch] text-balance font-sans text-[clamp(3rem,7vw,6.25rem)] font-semibold leading-[0.9] tracking-[-0.035em] text-paper md:tracking-[-0.05em]"
                />
              </div>
              <Reveal y={12} delay={0.18}>
                <p className="max-w-[42ch] text-base leading-relaxed text-paper/70 sm:text-lg">
                  A working record of Co-Cr frameworks after design, printing, polishing, and inspection.
                </p>
                <div className="mt-8 grid grid-cols-3 border-y border-line py-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/45">10 cases</span>
                  <span className="text-center font-mono text-[10px] uppercase tracking-[0.16em] text-paper/45">Co-Cr</span>
                  <span className="text-right font-mono text-[10px] uppercase tracking-[0.16em] text-paper/45">SLM / AP10</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <div className="hidden md:block">
          <CrossfadeCarousel slides={carouselSlides} />
        </div>

        <section className="bg-paper px-5 pb-12 pt-10 md:hidden" aria-label="Featured specimen">
          <div className="mb-5 flex items-end justify-between gap-6 border-b border-line-dark pb-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold-dim">Inspection field</p>
              <h2 className="mt-2 max-w-[10ch] text-[2rem] font-semibold leading-[0.95] tracking-[-0.035em] text-ink">Reference case.</h2>
            </div>
            <span className="pb-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">01 / 10</span>
          </div>
          <button
            type="button"
            onClick={() => setLightbox(0)}
            aria-label={`Inspect ${specimens[0].code} — ${specimens[0].title}`}
            className="group block w-full text-left focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-dim"
          >
            <figure>
              <div className="relative overflow-hidden bg-ink-soft">
                <img src={specimens[0].gridSrc} alt={specimens[0].alt} className="aspect-[4/5] w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-active:scale-[0.985]" />
                <RegistrationCorners />
                <span className="absolute bottom-3 right-3 flex h-12 items-center gap-2 bg-paper px-4 font-mono text-[10px] uppercase tracking-[0.16em] text-ink">
                  Inspect <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <figcaption className="border-b border-line-dark">
                <div className="grid grid-cols-3 border-b border-line-dark py-3 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/55">
                  <span><b className="block font-normal text-ink/35">Material</b> Co-Cr</span>
                  <span className="text-center"><b className="block font-normal text-ink/35">State</b> Final</span>
                  <span className="text-right"><b className="block font-normal text-ink/35">Finish</b> Mirror</span>
                </div>
                <div className="py-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold-dim">{specimens[0].code}</span>
                  <p className="mt-1 text-lg font-medium tracking-[-0.02em] text-ink">{specimens[0].title}</p>
                  <p className="mt-1 text-sm leading-6 text-ink/60">{specimens[0].detail}</p>
                </div>
              </figcaption>
            </figure>
          </button>
        </section>

        <section className="border-t border-line-dark bg-paper pb-16 pt-14 md:pb-28 md:pt-16 lg:pb-36" aria-label="Specimen collection">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
            <div className="flex flex-wrap items-end justify-between gap-5 border-b border-line-dark pb-5">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim">The collection</p>
                <h2 className="mt-3 font-sans text-[clamp(1.8rem,3vw,2.75rem)] font-semibold tracking-[-0.04em] text-ink">Finished work, on record.</h2>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45"><span className="md:hidden">Tap a frame to enter inspection mode</span><span className="hidden md:inline">Click any specimen to inspect</span></p>
            </div>
            <div className="mt-9 grid grid-cols-2 gap-x-3 gap-y-8 md:mt-12 md:gap-x-5 md:gap-y-14 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-20">
              {specimens.slice(1).map((specimen, index) => {
                const mobileWide = index % 4 === 0
                return (
                  <div key={specimen.code} className={mobileWide ? "col-span-2 md:col-span-1" : "col-span-1"}>
                    <SpecimenCard specimen={specimen} index={index + 1} mobileWide={mobileWide} onOpen={() => setLightbox(index + 1)} />
                  </div>
                )
              })}
            </div>
            <div className="mt-14 border-t border-line-dark pt-6 md:mt-20 sm:flex sm:items-center sm:justify-between">
              <p className="max-w-[42ch] text-sm leading-relaxed text-ink/60">Have a case that needs the same level of control?</p>
              <Link href="/contact" className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink underline decoration-line-dark underline-offset-8 transition-colors hover:text-gold-dim sm:mt-0">
                Start a case <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {typeof document !== "undefined" && createPortal(<AnimatePresence>
        {active && lightbox !== null && (
          <motion.div
            initial={{ opacity: reduced ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: reduced ? 1 : 0 }}
            transition={{ duration: 0.2, ease: EASE_MECH }}
            className="fixed inset-0 z-[100] flex flex-col bg-ink p-0 md:flex-row md:items-center md:justify-center md:bg-ink/95 md:p-8"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.code} — ${active.title}`}
          >
            <div className="flex w-full shrink-0 items-center justify-between border-b border-line px-5 pb-3 pt-[max(1rem,env(safe-area-inset-top))] md:contents">
              <div className="md:hidden">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-paper/35">Inspection mode</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/75">{active.code}</p>
              </div>
            <button type="button" onClick={close} aria-label="Close specimen" className="flex h-11 w-11 items-center justify-center border border-line text-paper/80 transition-colors hover:border-gold hover:text-gold focus:outline-none focus-visible:border-gold focus-visible:text-gold md:absolute md:right-6 md:top-6">
              <X className="h-5 w-5" />
            </button>
            </div>
            <button type="button" onClick={(event) => { event.stopPropagation(); step(-1) }} aria-label="Previous specimen" className="absolute left-6 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-line text-paper/80 transition-colors hover:border-gold hover:text-gold md:flex">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <motion.figure
              key={active.code}
              initial={reduced ? false : { opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: reduced ? 0 : 0.24, ease: EASE_MECH }}
              className="flex min-h-0 w-full flex-1 flex-col md:max-h-full md:w-auto md:max-w-[min(72rem,calc(100vw-6rem))] md:flex-none"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-black/20 px-3 py-4 md:block md:bg-transparent md:p-0">
                <img src={active.fullSrc} alt={active.alt} className="max-h-full w-full object-contain md:max-h-[78vh]" />
                <RegistrationCorners />
              </div>
              <figcaption className="border-t border-line bg-ink-soft px-5 py-4 text-paper md:flex md:items-baseline md:justify-between md:gap-5 md:px-4 md:py-3">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold md:text-paper/75">{active.code}</span>
                  <p className="mt-1 text-base font-medium tracking-[-0.02em] md:mt-0 md:inline md:font-mono md:text-[10px] md:font-normal md:uppercase md:tracking-[0.16em]"> <span className="hidden md:inline">· </span>{active.title}</p>
                  <p className="mt-1 text-[13px] leading-5 text-paper/55 md:hidden">{active.detail}</p>
                </div>
                <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/40 md:inline">{String(lightbox + 1).padStart(2, "0")} / 10</span>
              </figcaption>
            </motion.figure>
            <div className="grid w-full shrink-0 grid-cols-[3.5rem_1fr_3.5rem] items-center gap-3 border-t border-line px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 md:contents">
              <button type="button" onClick={(event) => { event.stopPropagation(); step(-1) }} aria-label="Previous specimen" className="flex h-12 w-12 items-center justify-center border border-line text-paper/80 transition-colors active:border-gold active:text-gold md:hidden">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="text-center md:hidden">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/70">{String(lightbox + 1).padStart(2, "0")} / {specimens.length}</p>
                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-paper/35">Swipe to inspect</p>
              </div>
            <button type="button" onClick={(event) => { event.stopPropagation(); step(1) }} aria-label="Next specimen" className="flex h-12 w-12 items-center justify-center border border-line text-paper/80 transition-colors active:border-gold active:text-gold md:absolute md:right-6 md:top-1/2 md:h-11 md:w-11 md:-translate-y-1/2 hover:border-gold hover:text-gold">
              <ChevronRight className="h-5 w-5" />
            </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>, document.body)}
    </>
  )
}
