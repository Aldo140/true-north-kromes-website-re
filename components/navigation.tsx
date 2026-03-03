"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navLinks = [
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

  // On the homepage the nav starts transparent over the hero;
  // on subpages it's always solid.
  const isTransparent = isHome && !scrolled && !mobileOpen
  const solidClass = "bg-background/95 shadow-sm backdrop-blur-sm"
  const transparentClass = "bg-transparent"

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isTransparent ? transparentClass : solidClass
      }`}
    >
      {/* Thin metallic accent bar -- only visible when solid */}
      <div
        className={`h-[2px] transition-opacity duration-300 ${
          isTransparent ? "opacity-0" : "opacity-100"
        }`}
        style={{ background: "linear-gradient(90deg, var(--primary) 0%, var(--accent) 50%, var(--primary) 100%)" }}
      />
      <nav aria-label="Main navigation">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          {/* Logo */}
          <Link href="/" className="shrink-0" aria-label="True North Kromes - Home">
            <img
              src="/images/logo.png"
              alt="True North Kromes"
              className={`h-10 w-auto transition-all duration-300 ${
                isTransparent ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-8 lg:flex">
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
                    className={`absolute -bottom-4 left-0 right-0 h-[2px] transition-colors duration-300 ${
                      isTransparent ? "bg-white" : "bg-primary"
                    }`}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden transition-colors ${isTransparent ? "text-white" : "text-foreground"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
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
            </div>
          </div>
        )}
      </nav>
      {/* Bottom separator line -- hidden when transparent so nav doesn't merge with hero */}
      <div
        className={`h-px transition-all duration-300 ${
          isTransparent ? "bg-transparent" : "bg-border"
        }`}
      />
    </header>
  )
}
