import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#f0f3f5] text-[#1a1d21]" aria-label="Site footer">
      {/* Accent line */}
      <div className="h-px bg-border" />

      <div className="mx-auto max-w-6xl px-5 py-14">
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
            <p className="mt-4 text-sm leading-relaxed text-[#5a6875]">
              A dental lab specializing in 3D printing metal partial denture frameworks.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-[#7a8a99] transition-colors hover:text-[#1a1d21]"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-[#7a8a99] transition-colors hover:text-[#1a1d21]"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-[#1a1d21]">
              Quick Links
            </h3>
            <nav className="mt-4 flex flex-col gap-3">
              <Link href="/" className="text-sm text-[#5a6875] transition-colors hover:text-[#1a1d21]">Home</Link>
              <Link href="/about" className="text-sm text-[#5a6875] transition-colors hover:text-[#1a1d21]">About</Link>
              <Link href="/services" className="text-sm text-[#5a6875] transition-colors hover:text-[#1a1d21]">Services</Link>
              <Link href="/gallery" className="text-sm text-[#5a6875] transition-colors hover:text-[#1a1d21]">Gallery</Link>
              <Link href="/blog" className="text-sm text-[#5a6875] transition-colors hover:text-[#1a1d21]">Blog</Link>
              <Link href="/contact" className="text-sm text-[#5a6875] transition-colors hover:text-[#1a1d21]">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-[#1a1d21]">
              Contact
            </h3>
            <div className="mt-4 flex flex-col gap-4">
              <a href="tel:+18076247222" className="flex items-start gap-3 text-sm text-[#5a6875] transition-colors hover:text-[#1a1d21]">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#7a8a99]" />
                807.624.7222
              </a>
              <a href="mailto:truenorthkromes@gmail.com" className="flex items-start gap-3 text-sm text-[#5a6875] transition-colors hover:text-[#1a1d21]">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#7a8a99]" />
                truenorthkromes@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-[#5a6875]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#7a8a99]" />
                <span>107-105 1st Street W,<br />Cochrane, Alberta,<br />Canada, T4C0A4</span>
              </div>
            </div>
          </div>

          {/* Downloads & Portal */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-[#1a1d21]">
              Downloads
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="/downloads/mediloy-rpd-licence.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#5a6875] transition-colors hover:text-[#1a1d21]"
              >
                Mediloy RPD Licence (PDF)
              </a>
              <a
                href="/downloads/credit-card-authorization.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#5a6875] transition-colors hover:text-[#1a1d21]"
              >
                Credit Card Authorization (PDF)
              </a>
              <a
                href="https://truenorthkromes.seazona.net"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-fit items-center border border-[#6b8fa3] px-6 py-2 text-sm tracking-wider text-[#6b8fa3] transition-colors hover:bg-[#6b8fa3] hover:text-white"
              >
                Client Portal
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 py-5 sm:flex-row sm:justify-between">
          <p className="text-xs text-[#7a8a99]">
            {"© 2026 True North Kromes. All rights reserved."}
          </p>
          <p className="text-xs text-[#7a8a99]">
            {"Created by "}
            <a
              href="https://promptandpixel.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#1a1d21]"
            >
              Prompt & Pixel
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
