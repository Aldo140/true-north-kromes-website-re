"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react"
import { DUR, EASE_MECH } from "./motion-primitives"
import { sitePath } from "@/lib/site-path"

const STAGES = [
  {
    num: "01",
    label: "SCAN / DESIGN",
    src: sitePath("/images/opt/cad-design.jpg"),
    alt: "CAD design of a partial denture framework on screen",
    bg: null, // stage 01 opens on the live printer video (runs fast-forwarded)
    bgAlt: "",
    duration: 6000, // opening video stage holds a little longer
  },
  {
    num: "02",
    label: "LASER PRINT",
    src: sitePath("/images/opt/gallery-build-plate-printer.jpg"),
    alt: "Co-Cr frameworks on the build plate inside the SLM printer",
    bg: sitePath("/images/opt/bg-laser-print.jpg"),
    bgAlt: "Raw laser-printed Co-Cr frameworks on the build plate with True North Kromes printed in metal",
    duration: 4000,
  },
  {
    num: "03",
    label: "PLASMA POLISH",
    src: sitePath("/images/opt/gallery-dlyte-polishing-action.jpg"),
    alt: "Framework being plasma-polished in the DLyte machine",
    bg: sitePath("/images/opt/bg-plasma-polish.jpg"),
    bgAlt: "Mirror-polished framework held over the plasma polishing machine",
    duration: 4000,
  },
  {
    num: "04",
    label: "FINISHED FRAME",
    src: sitePath("/images/opt/framework-polished.jpg"),
    alt: "Finished polished metal partial denture framework",
    bg: sitePath("/images/opt/bg-finished-frame.jpg"),
    bgAlt: "Two mirror-finished Co-Cr partial frameworks standing in metal powder",
    duration: 4000,
  },
] as const

const VIDEO_RATE = 2 // fast-forward the printer footage

// Crossfade for the stage-synced background slideshow: mechanical settle, no bounce.
const XFADE =
  "transition-opacity duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"

/** Gold L-shaped viewfinder corner brackets that lock onto the active thumb. */
function ViewfinderBrackets({ animate }: { animate: boolean }) {
  const corners = (
    <>
      <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-gold" />
      <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-gold" />
      <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-gold" />
      <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-gold" />
    </>
  )
  if (!animate) {
    return <div className="pointer-events-none absolute inset-0 z-10">{corners}</div>
  }
  return (
    <motion.div
      layoutId="hero-viewfinder"
      className="pointer-events-none absolute inset-0 z-10"
      transition={{ duration: DUR.base, ease: EASE_MECH }}
    >
      {corners}
    </motion.div>
  )
}

export function Hero() {
  const reduced = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)

  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const selectStage = (index: number) => {
    elapsedRef.current = 0
    progress.set(0)
    setActive(index)
  }

  // Timer: linear fill 0 -> 1 over the active stage's duration, then advance.
  // Pauses on hover, resets cleanly on stage change.
  const progress = useMotionValue(0)
  const elapsedRef = useRef(0)
  useAnimationFrame((_, delta) => {
    if (reduced || paused) return
    elapsedRef.current += delta
    const duration = STAGES[active].duration
    if (elapsedRef.current >= duration) {
      elapsedRef.current = 0
      progress.set(0)
      setActive((a) => (a + 1) % STAGES.length)
      return
    }
    progress.set(elapsedRef.current / duration)
  })

  // Fast-forward the printer footage.
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.playbackRate = VIDEO_RATE

    const attemptPlay = () => {
      video.play().catch(() => {
        // The poster remains visible if a browser still requires activation.
      })
    }

    video.addEventListener("canplay", attemptPlay)
    video.addEventListener("loadeddata", attemptPlay)
    document.addEventListener("visibilitychange", attemptPlay)
    attemptPlay()

    return () => {
      video.removeEventListener("canplay", attemptPlay)
      video.removeEventListener("loadeddata", attemptPlay)
      document.removeEventListener("visibilitychange", attemptPlay)
    }
  }, [])

  // Subtle parallax: video scales 1 -> 1.06 as the hero scrolls out. Text static.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.06])

  return (
    <section
      ref={sectionRef}
      className="mobile-viewport-hero relative flex min-h-[100dvh] w-full flex-col justify-end overflow-hidden bg-ink"
      aria-label="True North Kromes — printed metal partial frameworks"
    >
      {/* Stage-synced background slideshow with scroll parallax.
          Stage 01 is server-rendered visible; the rest crossfade in as the
          rail cycles. Stage 02's slide is the live printer video. */}
      <motion.div
        className="absolute inset-0"
        style={reduced ? undefined : { scale: videoScale }}
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={sitePath("/images/opt/video-poster.jpg")}
          onLoadedMetadata={(e) => {
            e.currentTarget.playbackRate = VIDEO_RATE
          }}
          className={`absolute inset-0 h-full w-full object-cover ${XFADE} ${
            active === 0 && !reduced ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={sitePath("/videos/printer-demo.mp4")} type="video/mp4" />
        </video>
        {STAGES.map((stage, i) =>
          stage.bg ? (
            <img
              key={stage.num}
              src={stage.bg}
              alt={stage.bgAlt}
              className={`absolute inset-0 h-full w-full object-cover ${XFADE} ${
                (active === i && !reduced) || (reduced && i === 1)
                  ? "opacity-100"
                  : "opacity-0"
              } ${reduced && i !== 1 ? "hidden" : ""}`}
            />
          ) : null,
        )}
      </motion.div>

      {/* Contrast overlays: base wash, left text-protection, bottom rail bed */}
      <div className="absolute inset-0 bg-ink/45" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/30 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-ink via-ink/60 to-transparent"
        aria-hidden="true"
      />

      {/* Lower-third copy — visible immediately, no entrance animation */}
      <div className="relative z-10 w-full px-5 pb-5 sm:px-6 sm:pb-12 md:pb-16 lg:px-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
          CO-CR · SLM · IN-HOUSE
        </p>
        <h1 className="mt-4 max-w-[14ch] text-balance font-sans text-[clamp(2.45rem,10.6vw,3rem)] font-medium leading-[0.96] tracking-[-0.03em] text-paper md:text-[clamp(2.25rem,10vw,4.5rem)] md:leading-[0.98]">
          <span className="block">3D-printed dental frameworks.</span>
          <span className="block">Designed, not cast.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/80 md:text-lg">
          CAD design, SLM metal printing, and plasma polishing for dental labs
          and denturists across Canada — all from our Cochrane, Alberta facility.
        </p>
        <Link
          href="#process"
          className="mt-5 inline-flex min-h-11 items-center border-b border-gold text-sm text-paper transition-colors active:text-gold md:mt-7 md:min-h-0 md:pb-1 md:hover:text-gold"
        >
          See the process →
        </Link>
      </div>

      {/* Process rail — auto-cycling production stages.
          Deliberately NOT entrance-animated: it must be visible in the
          server-rendered HTML before JS hydrates (slow connections). */}
      <nav
        aria-label="Production stage control"
        className="relative z-10 border-t border-line bg-ink/90 pb-[env(safe-area-inset-bottom)] md:hidden"
      >
        <div className="flex items-center justify-between gap-1 px-5 py-2">
          <div className="flex gap-1" role="group" aria-label="Select production stage">
            {STAGES.map((stage, i) => (
              <button
                key={stage.num}
                type="button"
                aria-pressed={i === active}
                aria-label={`${stage.num}: ${stage.label}`}
                onClick={() => selectStage(i)}
                className={`relative grid min-h-11 min-w-11 place-items-center border font-mono text-[10px] tracking-[0.16em] transition-[background-color,color,transform] duration-200 active:scale-95 ${
                  i === active
                    ? "border-gold bg-gold text-ink"
                    : "border-line text-paper/65 active:bg-paper/10"
                }`}
              >
                {stage.num}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            aria-pressed={paused}
            aria-label={paused ? "Resume production sequence" : "Pause production sequence"}
            className="grid min-h-11 min-w-11 place-items-center border border-line font-mono text-[10px] text-paper transition-colors active:bg-paper/10"
          >
            {paused ? "▶" : "Ⅱ"}
          </button>
        </div>

        <Link
          href="/services"
          aria-label={`${STAGES[active].label} — view services`}
          className="group relative grid min-h-[5.25rem] grid-cols-[5.5rem_1fr_auto] items-center gap-4 border-t border-line px-5 py-3 active:bg-paper/[0.04]"
        >
          <div className="relative h-14 overflow-hidden bg-ink-soft">
            <motion.img
              key={STAGES[active].num}
              src={STAGES[active].src}
              alt=""
              initial={reduced ? false : { opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: DUR.fast, ease: EASE_MECH }}
              className="h-full w-full object-cover"
            />
            <ViewfinderBrackets animate={!reduced} />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-gold">
              ACTIVE STAGE · {STAGES[active].num}/04
            </p>
            <p className="mt-1 truncate font-mono text-[11px] uppercase tracking-[0.16em] text-paper">
              {STAGES[active].label}
            </p>
          </div>
          <span aria-hidden="true" className="text-xl text-paper transition-transform duration-200 group-active:translate-x-1">
            →
          </span>
          {!reduced && !paused && (
            <motion.span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-px origin-left bg-gold"
              style={{ scaleX: progress }}
            />
          )}
        </Link>
      </nav>

      <nav
        aria-label="Production process"
        className="relative z-10 hidden border-t border-line pb-[env(safe-area-inset-bottom)] md:block"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain md:grid md:grid-cols-4 md:overflow-visible [&>*+*]:border-l [&>*+*]:border-line">
          {STAGES.map((stage, i) => {
            const isActive = i === active
            return (
              <Link
                key={stage.num}
                href="/services"
                aria-label={`Stage ${stage.num}: ${stage.label} — view services`}
                aria-current={!reduced && isActive ? "step" : undefined}
                className="group relative block min-w-[72%] flex-shrink-0 snap-start px-5 py-4 sm:min-w-[48%] sm:px-5 md:min-w-0"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em]">
                  <span
                    className={
                      isActive && !reduced ? "text-gold" : "text-paper/50"
                    }
                  >
                    {stage.num}
                  </span>{" "}
                  <span
                    className={
                      isActive || reduced ? "text-paper" : "text-paper/50"
                    }
                  >
                    {stage.label}
                  </span>
                </p>
                <div className="relative mt-3 w-24 md:w-28">
                  <img
                    src={stage.src}
                    alt={stage.alt}
                    className={`aspect-[4/3] w-full object-cover transition-[opacity,filter] duration-300 ${
                      isActive || reduced
                        ? "opacity-100"
                        : "opacity-50 grayscale group-hover:opacity-75"
                    }`}
                  />
                  {isActive && <ViewfinderBrackets animate={!reduced} />}
                </div>
                {/* 1px gold progress line — linear, it's a timer */}
                {isActive && (
                  <motion.div
                    className="motion-only absolute inset-x-0 bottom-0 h-px origin-left bg-gold"
                    style={{ scaleX: progress }}
                    aria-hidden="true"
                  />
                )}
              </Link>
            )
          })}
        </div>
      </nav>
    </section>
  )
}
