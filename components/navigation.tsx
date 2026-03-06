"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, UserCircle } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
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
    <header className="absolute left-0 right-0 top-0 z-50 bg-transparent">
      <nav aria-label="Main navigation">
        {/* Logo */}
        <div className="flex items-center justify-between px-6 pt-6 pb-2 lg:justify-center lg:pt-8">
          <Link href="/" className="shrink-0" aria-label="True North Kromes - Home">
            <img
              src="/images/logo.png"
              alt="True North Kromes"
              className="h-[80px] w-auto lg:h-[100px]"
            />
          </Link>

          {/* Mobile hamburger only */}
          <button
            className="text-[#1a1a1a] lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop links + portal icon */}
        <div className="relative hidden items-center justify-center gap-12 pb-4 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium tracking-[0.15em] uppercase transition-colors ${
                  isActive
                    ? "text-[#1a1a1a]"
                    : "text-[#6b6b6b] hover:text-[#1a1a1a]"
                }`}
              >
                {link.label}
              </Link>
            )
          })}

          {/* Client Portal icon - right aligned */}
          <a
            href="https://truenorthkromes.seazona.net"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Client Portal Login"
            className="absolute right-8 text-[#6b6b6b] transition-colors hover:text-[#1a1a1a]"
          >
            <UserCircle className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-[#d4d4cc] bg-[#f5f5f0] px-6 pb-6 pt-5 lg:hidden">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-[13px] font-medium tracking-[0.15em] uppercase transition-colors ${
                      isActive
                        ? "text-[#1a1a1a]"
                        : "text-[#6b6b6b] hover:text-[#1a1a1a]"
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
                className="flex items-center gap-2 border-t border-[#d4d4cc] pt-5 text-[13px] font-medium tracking-[0.15em] uppercase text-[#6b6b6b] transition-colors hover:text-[#1a1a1a]"
              >
                <UserCircle className="h-5 w-5" />
                Client Portal
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
