"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
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

function SpecimenCard({ specimen, index, onOpen }: { specimen: Specimen; index: number; onOpen: () => void }) {
  const reduced = useReducedMotion()
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${specimen.code} — ${specimen.title}`}
      className="group block w-full text-left focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-dim"
      initial={reduced ? undefined : { opacity: 0, y: 18 }}
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
            className={`${specimen.aspect === "landscape" ? "aspect-[16/10]" : "aspect-[4/5]"} w-full object-cover transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025] group-hover:opacity-90`}
          />
          <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
          <span className="absolute bottom-3 right-3 z-10 flex h-9 w-9 items-center justify-center bg-paper text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <figcaption className="border-b border-line-dark py-4">
          <div className="flex items-baseline justify-between gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold-dim">
              {specimen.code}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/40">
              {String(index + 1).padStart(2, "0")} / 10
            </span>
          </div>
          <p className="mt-2 font-sans text-base font-medium capitalize tracking-[-0.01em] text-ink">
            {specimen.title}
          </p>
          <p className="mt-1 text-sm text-ink/55">{specimen.detail}</p>
        </figcaption>
      </figure>
    </motion.button>
  )
}

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const reduced = useReducedMotion()
  const active = lightbox === null ? null : specimens[lightbox]

  const close = useCallback(() => setLightbox(null), [])
  const step = useCallback((direction: 1 | -1) => {
    setLightbox((current) => {
      if (current === null) return current
      return (current + direction + specimens.length) % specimens.length
    })
  }, [])

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
        <section className="relative overflow-hidden bg-ink pb-16 pt-36 text-paper sm:pb-20 lg:pb-24 lg:pt-44" aria-label="Gallery introduction">
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
                  className="mt-5 max-w-[9ch] text-balance font-sans text-[clamp(3rem,7vw,6.25rem)] font-semibold leading-[0.9] tracking-[-0.05em] text-paper"
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

        <CrossfadeCarousel slides={carouselSlides} />

        <section className="border-t border-line-dark bg-paper pb-24 pt-16 sm:pb-28 lg:pb-36" aria-label="Specimen collection">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
            <div className="flex flex-wrap items-end justify-between gap-5 border-b border-line-dark pb-5">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim">The collection</p>
                <h2 className="mt-3 font-sans text-[clamp(1.8rem,3vw,2.75rem)] font-semibold tracking-[-0.04em] text-ink">Finished work, on record.</h2>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">Click any specimen to inspect</p>
            </div>
            <div className="mt-12 grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-20">
              {specimens.slice(1).map((specimen, index) => (
                <SpecimenCard key={specimen.code} specimen={specimen} index={index + 1} onOpen={() => setLightbox(index + 1)} />
              ))}
            </div>
            <div className="mt-20 border-t border-line-dark pt-6 sm:flex sm:items-center sm:justify-between">
              <p className="max-w-[42ch] text-sm leading-relaxed text-ink/60">Have a case that needs the same level of control?</p>
              <Link href="/contact" className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink underline decoration-line-dark underline-offset-8 transition-colors hover:text-gold-dim sm:mt-0">
                Start a case <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      <AnimatePresence>
        {active && lightbox !== null && (
          <motion.div
            initial={{ opacity: reduced ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: reduced ? 1 : 0 }}
            transition={{ duration: 0.2, ease: EASE_MECH }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 sm:p-8"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.code} — ${active.title}`}
          >
            <button type="button" onClick={close} aria-label="Close specimen" className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-line text-paper/80 transition-colors hover:border-gold hover:text-gold focus:outline-none focus-visible:border-gold focus-visible:text-gold sm:right-6 sm:top-6">
              <X className="h-5 w-5" />
            </button>
            <button type="button" onClick={(event) => { event.stopPropagation(); step(-1) }} aria-label="Previous specimen" className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-line text-paper/80 transition-colors hover:border-gold hover:text-gold sm:left-6">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <figure className="flex max-h-full max-w-[min(72rem,calc(100vw-6rem))] flex-col" onClick={(event) => event.stopPropagation()}>
              <img src={active.fullSrc} alt={active.alt} className="max-h-[78vh] w-full object-contain" />
              <figcaption className="flex items-baseline justify-between gap-5 border-t border-line bg-ink-soft px-4 py-3 text-paper">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/75">{active.code} · {active.title}</span>
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/40">{String(lightbox + 1).padStart(2, "0")} / 10</span>
              </figcaption>
            </figure>
            <button type="button" onClick={(event) => { event.stopPropagation(); step(1) }} aria-label="Next specimen" className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-line text-paper/80 transition-colors hover:border-gold hover:text-gold sm:right-6">
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
