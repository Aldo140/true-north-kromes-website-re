"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Updates", href: "/updates" },
  { label: "Downloads", href: "/downloads" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isTransparent = isHome && !scrolled && !mobileOpen
  const solidClass = "bg-background/95 shadow-sm backdrop-blur-sm"
  const transparentClass = "bg-transparent"

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isTransparent ? transparentClass : solidClass
      }`}
    >
      {/* Thin metallic accent bar */}
      <div
        className={`h-[2px] transition-opacity duration-300 ${
          isTransparent ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background:
            "linear-gradient(90deg, var(--primary) 0%, var(--accent) 50%, var(--primary) 100%)",
        }}
      />

      <nav aria-label="Main navigation">
        {/* Top row: centered logo + mobile hamburger */}
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 pt-4 pb-2 lg:justify-center">
          <Link href="/" className="shrink-0" aria-label="True North Kromes - Home">
            <img
              src="/images/logo.png"
              alt="True North Kromes"
              className={`h-16 w-auto transition-all duration-300 lg:h-20 ${
                isTransparent ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          {/* Mobile hamburger */}
          <button
            className={`transition-colors lg:hidden ${
              isTransparent ? "text-white" : "text-foreground"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop nav links row: centered below logo */}
        <div className="mx-auto hidden max-w-6xl items-center justify-center gap-8 px-5 pb-3 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative font-[family-name:var(--font-heading)] text-[13px] font-semibold uppercase tracking-wider transition-colors ${
                isTransparent
                  ? pathname === link.href
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                  : pathname === link.href
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span
                  className={`absolute -bottom-2 left-0 right-0 h-[2px] transition-colors duration-300 ${
                    isTransparent ? "bg-white" : "bg-primary"
                  }`}
                />
              )}
            </Link>
          ))}

          {/* Client Portal button */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-2 rounded border px-4 py-1.5 font-[family-name:var(--font-heading)] text-[13px] font-semibold uppercase tracking-wider transition-colors ${
              isTransparent
                ? "border-white/40 text-white hover:bg-white/10"
                : "border-primary/40 text-primary hover:bg-primary/5"
            }`}
          >
            Client Portal
          </a>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-border bg-background px-5 pb-5 pt-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-[family-name:var(--font-heading)] text-[13px] font-semibold uppercase tracking-wider transition-colors hover:text-primary ${
                    pathname === link.href ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded border border-primary/40 px-4 py-2 text-center font-[family-name:var(--font-heading)] text-[13px] font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-primary/5"
              >
                Client Portal
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Bottom separator line */}
      <div
        className={`h-px transition-all duration-300 ${
          isTransparent ? "bg-transparent" : "bg-border"
        }`}
      />
    </header>
  )
}
