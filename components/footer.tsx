import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#f5f5f0]" aria-label="Site footer">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
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
            <p className="mt-4 text-sm leading-relaxed text-[#999999]">
              A dental lab specializing in 3D printing metal partial denture frameworks.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-[#666666] transition-colors hover:text-[#f5f5f0]"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-[#666666] transition-colors hover:text-[#f5f5f0]"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] text-[#f5f5f0] uppercase">
              Quick Links
            </h3>
            <nav className="mt-5 flex flex-col gap-3">
              <Link href="/" className="text-sm text-[#999999] transition-colors hover:text-[#f5f5f0]">Home</Link>
              <Link href="/about" className="text-sm text-[#999999] transition-colors hover:text-[#f5f5f0]">About</Link>
              <Link href="/services" className="text-sm text-[#999999] transition-colors hover:text-[#f5f5f0]">Services</Link>
              <Link href="/gallery" className="text-sm text-[#999999] transition-colors hover:text-[#f5f5f0]">Gallery</Link>
              <Link href="/blog" className="text-sm text-[#999999] transition-colors hover:text-[#f5f5f0]">Blog</Link>
              <Link href="/contact" className="text-sm text-[#999999] transition-colors hover:text-[#f5f5f0]">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] text-[#f5f5f0] uppercase">
              Contact
            </h3>
            <div className="mt-5 flex flex-col gap-4">
              <a href="tel:+18076247222" className="flex items-start gap-3 text-sm text-[#999999] transition-colors hover:text-[#f5f5f0]">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#666666]" />
                807.624.7222
              </a>
              <a href="mailto:truenorthkromes@gmail.com" className="flex items-start gap-3 text-sm text-[#999999] transition-colors hover:text-[#f5f5f0]">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#666666]" />
                truenorthkromes@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-[#999999]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#666666]" />
                <span>107-105 1st Street W,<br />Cochrane, Alberta,<br />Canada, T4C0A4</span>
              </div>
            </div>
          </div>

          {/* Downloads & Portal */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] text-[#f5f5f0] uppercase">
              Resources
            </h3>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="/downloads/mediloy-rpd-licence.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#999999] transition-colors hover:text-[#f5f5f0]"
              >
                Mediloy RPD Licence
              </a>
              <a
                href="/downloads/credit-card-authorization.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#999999] transition-colors hover:text-[#f5f5f0]"
              >
                Credit Card Authorization
              </a>
              <a
                href="https://truenorthkromes.seazona.net"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-fit items-center border border-[#f5f5f0] px-6 py-2.5 text-sm tracking-wider text-[#f5f5f0] transition-colors hover:bg-[#f5f5f0] hover:text-[#1a1a1a]"
              >
                Client Portal
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#333333]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-6 sm:flex-row sm:justify-between lg:px-8">
          <p className="text-xs text-[#666666]">
            {"© 2026 True North Kromes. All rights reserved."}
          </p>
          <p className="text-xs text-[#666666]">
            {"Created by "}
            <a
              href="https://promptandpixel.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#f5f5f0]"
            >
              Prompt & Pixel
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
