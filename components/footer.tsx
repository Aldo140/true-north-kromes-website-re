import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1c1f26] text-white" aria-label="Site footer">
      <div className="mx-auto max-w-6xl px-8 py-16 lg:px-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" aria-label="True North Kromes - Home">
              <img
                src="/images/logo.png"
                alt="True North Kromes"
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/40">
              A dental lab specializing in 3D printing metal partial denture frameworks. Based in Cochrane, Alberta. Serving labs across Canada.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">Pages</p>
            <nav className="mt-4 flex flex-col gap-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Gallery", href: "/gallery" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/40 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">Contact</p>
            <div className="mt-4 flex flex-col gap-3">
              <a href="tel:+18076247222" className="flex items-center gap-3 text-sm text-white/40 transition-colors hover:text-white">
                <Phone className="h-3.5 w-3.5 shrink-0" />
                807.624.7222
              </a>
              <a href="mailto:truenorthkromes@gmail.com" className="flex items-center gap-3 text-sm text-white/40 transition-colors hover:text-white">
                <Mail className="h-3.5 w-3.5 shrink-0" />
                truenorthkromes@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/40">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span>107-105 1st Street W, Cochrane, AB T4C0A4</span>
              </div>
            </div>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.15em] text-white/40 transition-colors hover:border-white/40 hover:text-white"
            >
              Client Portal
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-8 py-5 sm:flex-row sm:justify-between lg:px-16">
          <p className="text-[11px] text-white/20">
            {"© 2026 True North Kromes. All rights reserved."}
          </p>
          <p className="text-[11px] text-white/15">
            {"Site by "}
            <a
              href="https://promptandpixel.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white/30"
            >
              Prompt & Pixel
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
