"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react"
import { DUR, EASE_MECH, Reveal } from "@/components/motion-primitives"
import { sitePath } from "@/lib/site-path"

/** True only on devices with a real hover-capable fine pointer (no touch). */
function useFinePointer() {
  const [fine, setFine] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)")
    const update = () => setFine(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])
  return fine
}

interface SpecimenProps {
  src: string
  alt: string
  label: string
  /** Aspect-ratio utility class, e.g. "aspect-[4/5]" — prevents CLS */
  aspectClass: string
  className?: string
}

function Specimen({ src, alt, label, aspectClass, className }: SpecimenProps) {
  const reduced = useReducedMotion()
  const finePointer = useFinePointer()
  // Viewfinder is desktop-hover only: off for touch and reduced motion.
  const enabled = finePointer && !reduced

  const frameRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  // Cursor position within the frame, driven off-render via motion values.
  const cx = useMotionValue(0)
  const cy = useMotionValue(0)
  const readoutX = useTransform(cx, (v) => v + 14)
  const readoutY = useTransform(cy, (v) => v + 18)

  // "SPEC 019 — UPPER · CLASP DETAIL" -> "SPEC 019"
  const specId = label.split("—")[0].trim()

  return (
    <figure className={className}>
      <div
        ref={frameRef}
        className="relative overflow-hidden"
        onMouseEnter={enabled ? () => setActive(true) : undefined}
        onMouseLeave={enabled ? () => setActive(false) : undefined}
        onMouseMove={
          enabled
            ? (e) => {
                const r = frameRef.current?.getBoundingClientRect()
                if (!r) return
                cx.set(e.clientX - r.left)
                cy.set(e.clientY - r.top)
              }
            : undefined
        }
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`${aspectClass} w-full object-cover`}
        />
        {enabled && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10"
            initial={false}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: DUR.fast, ease: EASE_MECH }}
          >
            {/* Crosshair through the cursor, clipped to the frame */}
            <motion.span
              className="absolute inset-x-0 top-0 h-px bg-gold/40"
              style={{ y: cy }}
            />
            <motion.span
              className="absolute inset-y-0 left-0 w-px bg-gold/40"
              style={{ x: cx }}
            />
            {/* Gold L-corner brackets locking onto the specimen (hero motif) */}
            <motion.span
              className="absolute inset-0 block"
              initial={false}
              animate={{ scale: active ? 1 : 1.04 }}
              transition={{ duration: DUR.fast, ease: EASE_MECH }}
            >
              <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-gold" />
              <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-gold" />
              <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-gold" />
              <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-gold" />
            </motion.span>
            {/* Mono readout riding the cursor */}
            <motion.span
              className="absolute left-0 top-0 whitespace-nowrap bg-ink/90 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-gold"
              style={{ x: readoutX, y: readoutY }}
            >
              {specId}
            </motion.span>
          </motion.div>
        )}
      </div>
      <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
        {label}
      </figcaption>
    </figure>
  )
}

export function GalleryPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  // The two columns translate at slightly different rates while the section
  // scrolls through the viewport — a subtle parallax shear between columns,
  // like plates sliding past each other in registration.
  const yLeft = useTransform(scrollYProgress, [0, 1], [24, -24])
  const yRight = useTransform(scrollYProgress, [0, 1], [-32, 32])

  return (
    <section
      ref={sectionRef}
      className="bg-paper py-20 sm:py-24 lg:py-32"
      aria-label="Recent work"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim">
            RECENT WORK
          </p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
            <h2 className="text-balance font-sans text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium tracking-[-0.02em] text-ink">
              Off the build plate.
            </h2>
            <Link
              href="/gallery"
              className="text-sm font-medium text-ink transition-colors hover:text-gold-dim"
            >
              View gallery &rarr;
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-y-14 lg:mt-20 lg:grid-cols-12 lg:gap-x-8">
          {/* Column A — wide anchor image plus two staggered satellites */}
          <motion.div style={{ y: reduced ? 0 : yLeft }} className="lg:col-span-7">
            <Specimen
              src={sitePath("/images/opt/framework-tweezers.jpg")}
              alt="Raw laser-printed cobalt-chrome partial framework standing in the metal powder bed, straight off the printer"
              label="SPEC 019 — AS PRINTED · CO-CR POWDER BED"
              aspectClass="aspect-[16/10]"
            />
            <div className="mt-12 grid grid-cols-2 gap-5 sm:gap-8 lg:mt-16">
              <Specimen
                src={sitePath("/images/opt/chrome-crowns.jpg")}
                alt="Polished upper partial framework with clasp arms seated over crowns on the master model"
                label="SPEC 021 — CLASPS ON CROWNS · FIT CHECK"
                aspectClass="aspect-[4/5]"
              />
              <Specimen
                src={sitePath("/images/opt/framework-upper-side.jpg")}
                alt="Side profile of a plasma-polished upper partial framework with circumferential clasps, seated on its model"
                label="SPEC 014 — UPPER · CLASP DETAIL"
                aspectClass="aspect-[4/5]"
                className="mt-10 sm:mt-14"
              />
            </div>
          </motion.div>

          {/* Column B — asymmetric start (col 9), counter-translating on scroll */}
          <motion.div
            style={{ y: reduced ? 0 : yRight }}
            className="lg:col-span-4 lg:col-start-9 lg:pt-24"
          >
            <Specimen
              src={sitePath("/images/opt/framework-clasps.jpg")}
              alt="Build plate of raw SLM-printed frameworks still on their lattice supports, before removal"
              label="SPEC 007 — BUILD PLATE · SUPPORTS ON"
              aspectClass="aspect-[3/4]"
            />
            <Specimen
              src={sitePath("/images/opt/framework-full.jpg")}
              alt="Plasma-polished upper partial framework with mesh retention, seated on its stone model"
              label="SPEC 011 — UPPER · MESH RETENTION · POLISHED"
              aspectClass="aspect-[4/5]"
              className="mt-12 lg:ml-auto lg:mt-16 lg:w-[85%]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
