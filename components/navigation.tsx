"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <nav aria-label="Main navigation" className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link href="/" className="shrink-0" aria-label="True North Kromes - Home">
            <img
              src="/images/logo.png"
              alt="True North Kromes"
              className="h-[60px] w-auto lg:h-[70px]"
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
                  className={`text-sm transition-colors ${
                    isActive ? "text-[#1a1a1a]" : "text-[#71717a] hover:text-[#1a1a1a]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <a
              href="https://truenorthkromes.seazona.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#71717a] transition-colors hover:text-[#1a1a1a]"
            >
              Portal
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="text-[#1a1a1a] lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-[#e5e5e5] bg-white px-6 py-6 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm ${
                      isActive ? "text-[#1a1a1a]" : "text-[#71717a]"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <a
                href="https://truenorthkromes.seazona.net"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="text-sm text-[#71717a] pt-4 border-t border-[#e5e5e5]"
              >
                Portal
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
