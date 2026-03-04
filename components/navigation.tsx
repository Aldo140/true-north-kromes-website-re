"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav aria-label="Main navigation">
        {/* Logo row */}
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 pt-4 pb-2 lg:justify-center">
          <Link href="/" className="shrink-0" aria-label="True North Kromes - Home">
            <img
              src="/images/logo.png"
              alt="True North Kromes"
              className="h-20 w-auto lg:h-24"
            />
          </Link>
          <button
            className="text-foreground lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop links */}
        <div className="mx-auto hidden max-w-4xl items-center justify-center gap-12 px-5 pb-4 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[17px] tracking-wide transition-colors ${
                pathname === link.href
                  ? "text-accent"
                  : "text-foreground/50 hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[17px] tracking-wide text-foreground/50 transition-colors hover:text-foreground"
          >
            Client Portal
          </a>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-border/50 bg-white px-5 pb-5 pt-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-[17px] tracking-wide transition-colors ${
                    pathname === link.href
                      ? "text-accent"
                      : "text-foreground/50 hover:text-foreground"
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
                className="text-[17px] tracking-wide text-foreground/50 transition-colors hover:text-foreground"
              >
                Client Portal
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
