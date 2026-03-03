"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <nav
        className="bg-[#1e1e1e]"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          {/* Logo */}
          <a href="#" className="flex flex-col items-start" aria-label="True North Kromes - Home">
            <span className="font-serif text-2xl font-extrabold tracking-tight text-white">
              TNK
            </span>
            <span className="text-[0.6rem] font-medium uppercase tracking-[0.2em] text-white/70">
              True North Kromes
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium uppercase tracking-[0.1em] text-white/80 transition-colors hover:text-[#c8a84b]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="#contact"
              className="rounded border border-white/40 px-4 py-2 text-sm font-medium uppercase tracking-[0.1em] text-white transition-colors hover:border-white hover:bg-white/10"
            >
              New Client Sign Up
            </a>
            <a
              href="#"
              className="text-sm font-medium uppercase tracking-[0.1em] text-white/50 transition-colors hover:text-white/80"
            >
              Partner Login
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-white/10 bg-[#1e1e1e] px-4 pb-6 pt-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium uppercase tracking-[0.1em] text-white/80 transition-colors hover:text-[#c8a84b]"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="rounded border border-white/40 px-4 py-2 text-center text-sm font-medium uppercase tracking-[0.1em] text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  New Client Sign Up
                </a>
                <a
                  href="#"
                  className="text-center text-sm font-medium uppercase tracking-[0.1em] text-white/50 transition-colors hover:text-white/80"
                >
                  Partner Login
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Chrome gradient band */}
      <div className="chrome-band" />
    </header>
  )
}
