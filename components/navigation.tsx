"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-[#18181b]" aria-label="Main navigation">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          {/* Logo */}
          <Link href="/" aria-label="True North Kromes - Home">
            <img
              src="/images/logo.png"
              alt="True North Kromes"
              className="h-10 w-auto brightness-[2] invert sm:h-12"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-white ${
                  pathname === link.href
                    ? "text-white"
                    : "text-white/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
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
          <div className="border-t border-white/10 bg-[#18181b] px-4 pb-6 pt-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-white ${
                    pathname === link.href
                      ? "text-white"
                      : "text-white/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      <div className="chrome-band" />
    </header>
  )
}
