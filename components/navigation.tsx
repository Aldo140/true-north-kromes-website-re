"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { Menu, X } from "lucide-react"
import { Wordmark } from "./wordmark"
import { sitePath } from "@/lib/site-path"
import { trackEvent } from "@/lib/analytics"

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Timeline", href: "/timeline" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const

const menuImages = [
  { src: "/images/opt/framework-hero.jpg", alt: "Polished cobalt-chrome dental frameworks" },
  { src: "/images/opt/gallery-build-plate-printer.jpg", alt: "Frameworks on an SLM printer build plate" },
  { src: "/images/opt/gallery-dlyte-polishing-action.jpg", alt: "Plasma polishing a dental framework" },
] as const

const PORTAL_URL = "https://truenorthkromesclient.seazona.cloud/Login.aspx?ReturnUrl=%2fOrder.aspx"

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [keyboardMode, setKeyboardMode] = useState(false)
  const pathname = usePathname()
  const reduced = useReducedMotion()
  const closeRef = useRef<HTMLButtonElement>(null)
  const openRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const isDarkSurface = pathname === "/" || pathname === "/services" || pathname === "/gallery"
  const disableMotion = reduced || keyboardMode

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const root = document.documentElement
    root.classList.add("lenis-stopped")
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setKeyboardMode(true)
        setOpen(false)
      }
      if (event.key !== "Tab") return
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => {
      root.classList.remove("lenis-stopped")
      window.removeEventListener("keydown", onKeyDown)
      openRef.current?.focus()
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-[90] lg:absolute">
      <nav aria-label="Main navigation" className={`mx-auto max-w-6xl border-b px-4 backdrop-blur-md md:px-6 lg:border-b-0 lg:bg-transparent lg:px-12 lg:backdrop-blur-none ${isDarkSurface ? "border-line bg-ink/92" : "border-line-dark bg-paper/92"}`}>
        <div className="flex items-center justify-between pb-3 pt-[calc(0.75rem+env(safe-area-inset-top))] md:py-6">
          <Link href="/" className="relative z-10 flex shrink-0 flex-col items-center gap-1" aria-label="True North Kromes home">
            <img src={sitePath("/images/logo.png")} alt="True North Kromes" className="h-9 w-auto md:h-[52px] lg:h-[60px]" />
            <Wordmark className="text-[7px] tracking-[0.32em] md:text-[9px] md:tracking-[0.36em] lg:text-[10px]" />
          </Link>

          <button
            ref={openRef}
            type="button"
            onPointerDown={() => setKeyboardMode(false)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") setKeyboardMode(true)
            }}
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="site-menu-overlay"
            className={`relative z-10 flex min-h-11 min-w-11 items-center justify-center gap-3 px-2 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors active:scale-[0.97] ${isDarkSurface ? "text-paper hover:text-gold" : "text-ink hover:text-gold-dim"}`}
          >
            <span className="hidden md:inline">Menu</span>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={dialogRef}
            id="site-menu-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={disableMotion ? false : { opacity: 0, transform: "translateY(-100%)" }}
            animate={{ opacity: 1, transform: "translateY(0%)" }}
            exit={disableMotion ? undefined : { opacity: 0, transform: "translateY(-100%)" }}
            transition={{ duration: disableMotion ? 0 : 0.28, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-20 overflow-y-auto bg-ink text-paper"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              className="fixed right-4 top-[calc(1rem+env(safe-area-inset-top))] z-30 flex h-12 w-12 items-center justify-center border border-line bg-ink/75 text-paper backdrop-blur-md transition-colors hover:border-gold hover:text-gold active:scale-[0.97] md:right-8 md:top-7"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid min-h-[100dvh] grid-rows-[28dvh_1fr] lg:grid-cols-[1.1fr_0.9fr] lg:grid-rows-1">
              <div className="grid grid-cols-3 gap-px overflow-hidden border-b border-line bg-line lg:hidden" aria-hidden="true">
                {menuImages.map((image, index) => (
                  <motion.figure
                    key={`mobile-${image.src}`}
                    initial={disableMotion ? false : { opacity: 0, transform: "scale(1.06)" }}
                    animate={{ opacity: 1, transform: "scale(1)" }}
                    transition={{ duration: disableMotion ? 0 : 0.45, delay: disableMotion ? 0 : index * 0.045, ease: [0.16, 1, 0.3, 1] }}
                    className="relative min-w-0 overflow-hidden bg-ink-soft"
                  >
                    <img src={sitePath(image.src)} alt="" className="h-full w-full object-cover opacity-70" />
                    <span className="absolute inset-0 bg-ink/20" />
                  </motion.figure>
                ))}
              </div>
              <div className="relative hidden overflow-hidden border-r border-line lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-px lg:bg-line">
                {menuImages.map((image, index) => (
                  <motion.figure
                    key={image.src}
                    initial={disableMotion ? false : { opacity: 0, transform: "scale(1.04)" }}
                    animate={{ opacity: 1, transform: "scale(1)" }}
                    transition={{ duration: disableMotion ? 0 : 0.5, delay: disableMotion ? 0 : 0.06 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative overflow-hidden bg-ink-soft ${index === 0 ? "row-span-2" : ""}`}
                  >
                    <img src={sitePath(image.src)} alt={image.alt} className="h-full w-full object-cover opacity-75" />
                    <span className="absolute inset-0 bg-ink/20" aria-hidden="true" />
                  </motion.figure>
                ))}
              </div>

              <div className="relative flex min-h-0 items-start px-5 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-7 md:min-h-[100dvh] md:items-center md:px-12 md:py-24 lg:px-16 lg:pr-24">
                <div className="w-full max-w-xl">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold">True North Kromes</p>
                  <div className="mt-5 md:mt-8">
                    {navLinks.map((link, index) => {
                      const active = pathname === link.href
                      return (
                        <motion.div
                          key={link.href}
                          initial={disableMotion ? false : { opacity: 0, transform: "translateY(12px)" }}
                          animate={{ opacity: 1, transform: "translateY(0px)" }}
                          transition={{ duration: disableMotion ? 0 : 0.35, delay: disableMotion ? 0 : 0.06 + index * 0.035, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <Link
                            href={link.href}
                            aria-current={active ? "page" : undefined}
                            onClick={() => setOpen(false)}
                            className={`group flex min-h-12 items-center justify-between border-b border-line py-2 text-[clamp(1.65rem,8vw,2.2rem)] font-medium leading-none tracking-[-0.035em] transition-colors md:py-3 md:text-[clamp(1.8rem,5vw,3.8rem)] ${active ? "text-gold" : "text-paper hover:text-gold"}`}
                          >
                            <span>{link.label}</span>
                            <span className="font-mono text-[10px] tracking-[0.16em] text-paper/30 group-hover:text-gold">{String(index + 1).padStart(2, "0")}</span>
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] md:mt-8 md:gap-y-4">
                    <a
                      href={PORTAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("portal_click", { location: "nav_overlay" })}
                      className="inline-flex min-h-11 items-center text-paper/55 transition-colors hover:text-gold"
                    >
                      Client portal ↗
                    </a>
                    <Link href="/contact" onClick={() => setOpen(false)} className="inline-flex min-h-11 items-center text-gold transition-colors hover:text-paper">
                      Start a case
                    </Link>
                  </div>
                </div>

                <div className="absolute right-0 top-0 hidden h-full w-14 overflow-hidden border-l border-line md:block" aria-hidden="true">
                  <div className="nav-edge-marquee">
                    <span>DESIGN  PRINT  POLISH  DELIVER&nbsp;&nbsp;&nbsp;</span>
                    <span>DESIGN  PRINT  POLISH  DELIVER&nbsp;&nbsp;&nbsp;</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
