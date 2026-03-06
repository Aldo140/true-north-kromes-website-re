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
    <header className={`absolute left-0 right-0 top-0 z-50 ${isHome ? "bg-transparent" : "bg-white"}`}>
      <nav aria-label="Main navigation">
        {/* Logo */}
        <div className="flex items-center justify-between px-6 pt-3 pb-1 lg:justify-center">
          <Link href="/" className="shrink-0" aria-label="True North Kromes - Home">
            <img
              src="/images/logo.png"
              alt="True North Kromes"
              className="h-[90px] w-auto lg:h-[110px]"
            />
          </Link>

          {/* Mobile hamburger only */}
          <button
            className={`lg:hidden ${isHome ? "text-white" : "text-foreground"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop links + portal icon */}
        <div className="relative hidden items-center justify-center gap-14 pb-3 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-[15px] font-normal tracking-[0.08em] transition-colors ${
                  isHome
                    ? isActive
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                    : isActive
                      ? "text-[#1a1a1a]"
                      : "text-[#999] hover:text-foreground"
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
            className={`absolute right-6 transition-colors ${isHome ? "text-white/70 hover:text-white" : "text-[#999] hover:text-foreground"}`}
          >
            <UserCircle className="h-6 w-6" />
          </a>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-border/30 bg-white px-6 pb-5 pt-4 lg:hidden">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-sans text-[15px] font-normal tracking-[0.08em] transition-colors ${
                      isActive
                        ? "text-[#1a1a1a]"
                        : "text-[#999] hover:text-foreground"
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
                className="flex items-center gap-2 border-t border-border/30 pt-5 font-sans text-[15px] font-normal tracking-[0.08em] text-[#999] transition-colors hover:text-foreground"
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
