"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { EASE_MECH } from "./motion-primitives"
import { ScrambleText } from "./scramble"
import { Wordmark } from "./wordmark"
import { sitePath } from "@/lib/site-path"

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

const PORTAL_URL =
  "https://truenorthkromesclient.seazona.cloud/Login.aspx?ReturnUrl=%2fOrder.aspx"

const monoLabel = "font-mono uppercase text-[11px] tracking-[0.18em]"

/* Giant machined watermark: outlined "TNK", revealed by a left-to-right
   clip-path wipe when scrolled into view. Pure decor — aria-hidden. */
function Watermark() {
  const reduced = useReducedMotion()
  const glyph = (
    <svg
      viewBox="0 0 960 240"
      role="img"
      aria-label="True North Kromes"
      className="block h-auto w-full select-none"
      fill="none"
      stroke="rgba(242,240,236,0.16)"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      {/* T — one shared top registration line and a centered stem */}
      <path d="M20 20H260 M140 20V220" />
      {/* N — equal-height uprights with a single registration diagonal */}
      <path d="M340 220V20L560 220V20" />
      {/* K — shared upright with two exact 45-degree arms */}
      <path d="M640 20V220 M640 120L840 20 M640 120L840 220" />
    </svg>
  )
  // Observer lives on the unclipped wrapper; the clip-path animates on the
  // child. A self-clipped element has zero visible area and never intersects.
  return (
    <motion.div
      aria-hidden="true"
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? undefined : "visible"}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        variants={{
          hidden: { clipPath: "inset(0 100% 0 0)" },
          visible: {
            clipPath: "inset(0 0% 0 0)",
            transition: { duration: 0.9, ease: EASE_MECH },
          },
        }}
      >
        {glyph}
      </motion.div>
    </motion.div>
  )
}

export function Footer() {
  return (
    <footer className="bg-ink text-paper" aria-label="Site footer">
      <div className="border-y border-line">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
          <div className="grid min-h-18 grid-cols-2 items-center gap-6 md:min-h-24 md:grid-cols-3">
            <span className={`${monoLabel} text-paper/40`}>TNK / EST. CANADA</span>
            <span className="hidden h-px bg-line sm:block" aria-hidden="true" />
            <span className="text-right font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
              Digital production line
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-10 md:hidden">
        <Link href="/" className="inline-flex min-h-11 flex-col items-start justify-center gap-1" aria-label="True North Kromes - Home">
          <img src={sitePath("/images/logo.png")} alt="True North Kromes" className="h-11 w-auto" />
          <Wordmark align="start" className="text-[8px] tracking-[0.32em]" />
        </Link>
        <p className="mt-5 max-w-[34ch] text-[15px] leading-7 text-paper/65">
          Cochrane&apos;s in-house line for CAD-designed, SLM-printed, and plasma-polished Co-Cr frameworks.
        </p>

        <div className="mt-8 grid grid-cols-2 border border-line">
          <a href="tel:+18076247222" className="flex min-h-12 items-center justify-between border-b border-r border-line px-4 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/75">
            Call <span className="text-gold">↗</span>
          </a>
          <a href="mailto:truenorthkromes@gmail.com" className="flex min-h-12 items-center justify-between border-b border-line px-4 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/75">
            Email <span className="text-gold">↗</span>
          </a>
          <a href="https://www.google.com/maps/dir/?api=1&destination=204+A+River+Avenue%2C+Cochrane%2C+AB+T4C+2C1" className="flex min-h-12 items-center justify-between border-r border-line px-4 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/75">
            Directions <span className="text-gold">↗</span>
          </a>
          <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-between px-4 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/75">
            Portal <span className="text-gold">↗</span>
          </a>
        </div>

        <nav aria-label="Mobile footer navigation" className="mt-8 grid grid-cols-2 border-y border-line">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="flex min-h-11 items-center border-b border-line font-mono text-[10px] uppercase tracking-[0.16em] text-paper/55 odd:border-r">
              {link.label}
            </Link>
          ))}
          <Link href="/timeline" className="flex min-h-11 items-center border-b border-line pl-4 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/55">
            Timeline
          </Link>
        </nav>

        <div className="mt-8 flex items-end justify-between gap-6">
          <address className="font-mono text-[10px] not-italic uppercase leading-5 tracking-[0.13em] text-paper/48">
            204 A River Avenue<br />Cochrane, AB T4C 2C1
          </address>
          <Link href="/contact" className="inline-flex min-h-11 items-center border-b border-gold font-mono text-[10px] uppercase tracking-[0.16em] text-gold">
            Start a case →
          </Link>
        </div>
      </div>

      <div className="mx-auto hidden max-w-6xl px-5 pt-14 md:block md:px-6 md:pt-16 lg:px-12">
        {/* Machined watermark */}
        <div className="overflow-hidden border-b border-line pb-8 sm:pb-10">
          <Watermark />
        </div>

        <div className="grid grid-cols-1 gap-12 py-12 sm:grid-cols-2 sm:py-14 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-12">
          {/* Column 1: logo + description */}
          <div className="max-w-xs">
            <Link href="/" className="flex min-h-11 flex-col items-start justify-center gap-1.5 md:min-h-0" aria-label="True North Kromes - Home">
              <img src={sitePath("/images/logo.png")} alt="True North Kromes" className="h-11 w-auto" />
              <Wordmark align="start" className="text-[9px] tracking-[0.34em]" />
            </Link>
            <p className="mt-5 max-w-[28ch] text-sm leading-relaxed text-paper/60">
              A Cochrane, Alberta dental lab specializing in 3D-printed metal
              partial denture frameworks. Designed, printed, and polished in-house.
            </p>
          </div>

          {/* Column 2: nav links */}
          <nav aria-label="Footer navigation" className="flex flex-col items-start gap-3.5 border-l border-line pl-5 sm:pl-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${monoLabel} inline-flex min-h-11 items-center text-paper/60 transition-colors hover:text-paper md:min-h-0`}
              >
                <ScrambleText text={link.label} trigger="hover" />
              </Link>
            ))}
          </nav>

          {/* Column 3: contact */}
          <div className="flex flex-col items-start gap-3.5 border-l border-line pl-5 sm:pl-6">
            <a
              href="tel:+18076247222"
              className={`${monoLabel} inline-flex min-h-11 items-center text-paper/60 transition-colors hover:text-gold md:min-h-0`}
            >
              <ScrambleText text="807.624.7222" trigger="hover" />
            </a>
            <a
              href="mailto:truenorthkromes@gmail.com"
              className={`${monoLabel} inline-flex min-h-11 items-center break-all text-paper/60 transition-colors hover:text-gold md:min-h-0`}
            >
              <ScrambleText text="truenorthkromes@gmail.com" trigger="hover" />
            </a>
            <address className={`${monoLabel} max-w-[24ch] not-italic leading-relaxed text-paper/60`}>
              True North Kromes Inc<br />
              204 A River Avenue<br />
              Cochrane, AB T4C 2C1
            </address>
            <a
              href="https://www.instagram.com/truenorthkromes/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${monoLabel} inline-flex min-h-11 items-center text-paper/60 transition-colors hover:text-gold md:min-h-0`}
            >
              <ScrambleText text="Instagram" trigger="hover" />
            </a>
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${monoLabel} inline-flex min-h-11 items-center text-paper/60 transition-colors hover:text-paper md:min-h-0`}
            >
              <ScrambleText text="Portal" trigger="hover" />
            </a>
            <Link
              href="/contact"
              className={`${monoLabel} inline-flex min-h-11 items-center text-gold transition-colors hover:text-paper md:min-h-0`}
            >
              <ScrambleText text="Get Started" trigger="hover" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-line max-md:hidden">
        <div className="mx-auto max-w-6xl px-5 py-5 sm:px-6 lg:px-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className={`${monoLabel} text-paper/40`}>
              © 2026 TRUE NORTH KROMES INC · CANADA
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/privacy" className={`${monoLabel} text-paper/40 transition-colors hover:text-paper`}>
                Privacy
              </Link>
              <Link href="/terms" className={`${monoLabel} text-paper/40 transition-colors hover:text-paper`}>
                Terms
              </Link>
              <p className={`${monoLabel} text-paper/40`}>
                Website by Prompt &amp; Pixel
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-line px-5 py-5 md:hidden">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-paper/35">© 2026 TNK · Canada</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="font-mono text-[9px] uppercase tracking-[0.14em] text-paper/45">Privacy</Link>
            <Link href="/terms" className="font-mono text-[9px] uppercase tracking-[0.14em] text-paper/45">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
