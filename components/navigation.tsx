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
      <nav aria-label="Main navigation" className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between py-4 sm:py-6">
          {/* Logo */}
          <Link href="/" className="shrink-0" aria-label="True North Kromes - Home">
            <img
              src="/images/logo.png"
              alt="True North Kromes"
              className="h-[50px] w-auto sm:h-[60px] lg:h-[70px]"
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
                    isHome
                      ? isActive ? "text-white" : "text-white/80 hover:text-white"
                      : isActive ? "text-[#1a1a1a]" : "text-[#71717a] hover:text-[#1a1a1a]"
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
              className={`text-sm transition-colors ${
                isHome ? "text-white/80 hover:text-white" : "text-[#71717a] hover:text-[#1a1a1a]"
              }`}
            >
              Portal
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 transition-colors ${isHome ? "text-white hover:text-white/80" : "text-[#1a1a1a] hover:text-[#71717a]"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-[#1a1a1a] bg-black px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm ${
                      isActive ? "text-white" : "text-white/70"
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
                className="text-sm text-white/70 pt-4 border-t border-[#333]"
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
