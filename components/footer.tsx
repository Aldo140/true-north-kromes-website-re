import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white" aria-label="Site footer">
      {/* Gold accent line */}
      <div className="h-1 bg-[#a0a0a0]" />

      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link href="/" aria-label="True North Kromes - Home">
              <img
                src="/images/logo.png"
                alt="True North Kromes"
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              A dental lab specializing in 3D printing metal partial denture frameworks.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-white/40 transition-colors hover:text-[#a0a0a0]"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-white/40 transition-colors hover:text-[#a0a0a0]"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-[#a0a0a0]">
              Quick Links
            </h3>
            <nav className="mt-4 flex flex-col gap-3">
              <Link href="/" className="text-sm text-white/60 transition-colors hover:text-white">Home</Link>
              <Link href="/about" className="text-sm text-white/60 transition-colors hover:text-white">About</Link>
              <Link href="/services" className="text-sm text-white/60 transition-colors hover:text-white">Services</Link>
              <Link href="/gallery" className="text-sm text-white/60 transition-colors hover:text-white">Gallery</Link>
              <Link href="/blog" className="text-sm text-white/60 transition-colors hover:text-white">Blog</Link>
              <Link href="/contact" className="text-sm text-white/60 transition-colors hover:text-white">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-[#a0a0a0]">
              Contact
            </h3>
            <div className="mt-4 flex flex-col gap-4">
              <a href="tel:+18076247222" className="flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-white">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#a0a0a0]" />
                807.624.7222
              </a>
              <a href="mailto:truenorthkromes@gmail.com" className="flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#a0a0a0]" />
                truenorthkromes@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#a0a0a0]" />
                <span>107-105 1st Street W,<br />Cochrane, Alberta,<br />Canada, T4C0A4</span>
              </div>
            </div>
          </div>

          {/* Downloads & Portal */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-[#a0a0a0]">
              Downloads
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="/downloads/mediloy-rpd-licence.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Mediloy RPD Licence (PDF)
              </a>
              <a
                href="/downloads/credit-card-authorization.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Credit Card Authorization (PDF)
              </a>
              <a
                href="https://truenorthkromes.seazona.net"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-fit items-center border border-[#a0a0a0] px-6 py-2 text-sm tracking-wider text-[#a0a0a0] transition-colors hover:bg-[#a0a0a0] hover:text-white"
              >
                Client Portal
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 py-5 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/30">
            {"© 2026 True North Kromes. All rights reserved."}
          </p>
          <p className="text-xs text-white/20">
            {"Created by "}
            <a
              href="https://promptandpixel.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white/40"
            >
              Prompt & Pixel
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
