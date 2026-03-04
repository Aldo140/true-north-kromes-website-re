"use client"

import { useState, useEffect } from "react"
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

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white">
      <nav aria-label="Main navigation">
        {/* Logo */}
        <div className="relative flex items-center justify-between px-6 pt-3 pb-1 lg:justify-center">
          <Link href="/" className="shrink-0" aria-label="True North Kromes - Home">
            <img
              src="/images/logo.png"
              alt="True North Kromes"
              className="h-[90px] w-auto lg:h-[110px]"
            />
          </Link>

          {/* Client Portal icon - top right */}
          <div className="flex items-center gap-3 lg:absolute lg:right-6 lg:top-1/2 lg:-translate-y-1/2">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Client Portal Login"
              className="text-[#999] transition-colors hover:text-foreground"
            >
              <UserCircle className="h-7 w-7" />
            </a>
            <button
              className="text-foreground lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden items-center justify-center gap-14 pb-3 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            const Tag = link.external ? "a" : Link
            const extraProps = link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {}

            return (
              <Tag
                key={link.href + link.label}
                href={link.href}
                {...extraProps}
                className={`font-sans text-[15px] font-normal tracking-[0.08em] transition-colors ${
                  isActive
                    ? "text-[#8b7d3c]"
                    : "text-[#999] hover:text-foreground"
                }`}
              >
                {link.label}
              </Tag>
            )
          })}
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-border/30 bg-white px-6 pb-5 pt-4 lg:hidden">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                const Tag = link.external ? "a" : Link
                const extraProps = link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {}

                return (
                  <Tag
                    key={link.href + link.label}
                    href={link.href}
                    {...extraProps}
                    onClick={() => setMobileOpen(false)}
                    className={`font-sans text-[15px] font-normal tracking-[0.08em] transition-colors ${
                      isActive
                        ? "text-[#8b7d3c]"
                        : "text-[#999] hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Tag>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
