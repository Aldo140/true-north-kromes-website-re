import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#f4f5f6] text-[#1a1a1a]" aria-label="Site footer">
      <div className="h-px bg-border" />

      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link href="/" aria-label="True North Kromes - Home">
              <img
                src="/images/logo.png"
                alt="True North Kromes"
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#6b7280]">
              A dental lab specializing in 3D printing metal partial denture frameworks.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-[#9ca3af] transition-colors hover:text-[#1a1a1a]"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-[#9ca3af] transition-colors hover:text-[#1a1a1a]"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-[#1a1a1a]">
              Quick Links
            </h3>
            <nav className="mt-4 flex flex-col gap-3">
              <Link href="/" className="text-sm text-[#6b7280] transition-colors hover:text-[#1a1a1a]">Home</Link>
              <Link href="/about" className="text-sm text-[#6b7280] transition-colors hover:text-[#1a1a1a]">About</Link>
              <Link href="/services" className="text-sm text-[#6b7280] transition-colors hover:text-[#1a1a1a]">Services</Link>
              <Link href="/gallery" className="text-sm text-[#6b7280] transition-colors hover:text-[#1a1a1a]">Gallery</Link>
              <Link href="/blog" className="text-sm text-[#6b7280] transition-colors hover:text-[#1a1a1a]">Blog</Link>
              <Link href="/contact" className="text-sm text-[#6b7280] transition-colors hover:text-[#1a1a1a]">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-[#1a1a1a]">
              Contact
            </h3>
            <div className="mt-4 flex flex-col gap-4">
              <a href="tel:+18076247222" className="flex items-start gap-3 text-sm text-[#6b7280] transition-colors hover:text-[#1a1a1a]">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#9ca3af]" />
                807.624.7222
              </a>
              <a href="mailto:truenorthkromes@gmail.com" className="flex items-start gap-3 text-sm text-[#6b7280] transition-colors hover:text-[#1a1a1a]">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#9ca3af]" />
                truenorthkromes@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-[#6b7280]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#9ca3af]" />
                <span>107-105 1st Street W,<br />Cochrane, Alberta,<br />Canada, T4C0A4</span>
              </div>
            </div>
          </div>

          {/* Downloads & Portal */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-[#1a1a1a]">
              Resources
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="/downloads/mediloy-rpd-licence.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#6b7280] transition-colors hover:text-[#1a1a1a]"
              >
                Mediloy RPD Licence
              </a>
              <a
                href="/downloads/credit-card-authorization.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#6b7280] transition-colors hover:text-[#1a1a1a]"
              >
                Credit Card Authorization
              </a>
              <a
                href="https://truenorthkromes.seazona.net"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-fit items-center border border-[#1a1a1a] px-6 py-2 text-sm tracking-wider text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a] hover:text-white"
              >
                Client Portal
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-5 sm:flex-row sm:justify-between lg:px-8">
          <p className="text-xs text-[#9ca3af]">
            {"© 2026 True North Kromes. All rights reserved."}
          </p>
          <p className="text-xs text-[#9ca3af]">
            {"Created by "}
            <a
              href="https://promptandpixel.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#1a1a1a]"
            >
              Prompt & Pixel
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
