"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { ScrambleText } from "./scramble"
import { sitePath } from "@/lib/site-path"

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

const getStartedLink = { label: "Get Started", href: "/contact" }

const PORTAL_URL =
  "https://truenorthkromesclient.seazona.cloud/Login.aspx?ReturnUrl=%2fOrder.aspx"

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"
  // These routes open on the ink surface, so the logo and navigation need
  // the light treatment before the user reaches any later paper sections.
  const isDarkSurface = isHome || pathname === "/services" || pathname === "/gallery"

  const desktopLinkBase =
    "font-mono uppercase text-[11px] tracking-[0.18em] transition-colors"

  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <nav aria-label="Main navigation" className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between py-4 sm:py-6">
          {/* Logo */}
          <Link href="/" className="shrink-0" aria-label="True North Kromes - Home">
            <img
              src={sitePath("/images/logo.png")}
              alt="True North Kromes"
              className={`h-10 w-auto sm:h-[60px] lg:h-[70px] transition-[filter] duration-300 ${
                isDarkSurface ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`${desktopLinkBase} ${
                    isActive
                      ? `border-b pb-0.5 ${
                          isDarkSurface ? "border-gold text-paper" : "border-gold-dim text-ink"
                        }`
                      : isDarkSurface
                        ? "text-paper/70 hover:text-paper"
                        : "text-ink/60 hover:text-ink"
                  }`}
                >
                  <ScrambleText text={link.label} trigger="hover" />
                </Link>
              )
            })}
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${desktopLinkBase} ${
                isDarkSurface ? "text-paper/70 hover:text-paper" : "text-ink/60 hover:text-ink"
              }`}
            >
              <ScrambleText text="Portal" trigger="hover" />
            </a>
            <Link
              href={getStartedLink.href}
              className={`border px-4 py-2 ${desktopLinkBase} ${
                isDarkSurface
                  ? "border-gold text-gold hover:bg-gold hover:text-ink"
                  : "border-ink text-ink hover:bg-ink hover:text-paper"
              }`}
            >
              <ScrambleText text={getStartedLink.label} trigger="hover" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`flex min-h-11 min-w-11 items-center justify-center p-2 transition-colors lg:hidden ${
              isDarkSurface ? "text-paper hover:text-paper/70" : "text-ink hover:text-ink/60"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-line bg-ink px-5 py-2 text-paper lg:hidden">
            <div className="flex flex-col divide-y divide-line">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`py-3.5 font-mono uppercase text-[11px] tracking-[0.18em] transition-colors ${
                      isActive ? "text-paper" : "text-paper/60 hover:text-paper"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <a
                href={PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="py-3.5 font-mono uppercase text-[11px] tracking-[0.18em] text-paper/60 transition-colors hover:text-paper"
              >
                Portal
              </a>
              <Link
                href={getStartedLink.href}
                onClick={() => setMobileOpen(false)}
                className="py-3.5 font-mono uppercase text-[11px] tracking-[0.18em] text-gold transition-colors hover:text-paper"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
