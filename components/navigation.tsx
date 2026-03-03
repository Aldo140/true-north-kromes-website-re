"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Downloads", href: "/downloads" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Thin accent bar */}
      <div className="h-[3px] bg-primary" />
      <nav aria-label="Main navigation">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          {/* Logo */}
          <Link href="/" className="shrink-0" aria-label="True North Kromes - Home">
            <img
              src="/images/logo.png"
              alt="True North Kromes"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[13px] font-semibold uppercase tracking-wider transition-colors hover:text-primary ${
                  pathname === link.href ? "text-primary" : "text-foreground/70"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-4 left-0 right-0 h-[2px] bg-primary" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 rounded-md bg-primary px-5 py-2 text-[13px] font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-[#2e6aa3]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="text-foreground lg:hidden"
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
                  className={`text-[13px] font-semibold uppercase tracking-wider transition-colors hover:text-primary ${
                    pathname === link.href ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-1 rounded-md bg-primary px-5 py-2.5 text-center text-[13px] font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-[#2e6aa3]"
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
