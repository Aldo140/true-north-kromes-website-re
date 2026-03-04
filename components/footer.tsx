import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-white" aria-label="Site footer">
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
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A dental lab specializing in 3D printing metal partial denture frameworks.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-foreground">
              Quick Links
            </h3>
            <nav className="mt-4 flex flex-col gap-3">
              <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Home</Link>
              <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">About</Link>
              <Link href="/services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Services</Link>
              <Link href="/gallery" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Gallery</Link>
              <Link href="/blog" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Blog</Link>
              <Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-foreground">
              Contact
            </h3>
            <div className="mt-4 flex flex-col gap-4">
              <a href="tel:+18076247222" className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                807.624.7222
              </a>
              <a href="mailto:truenorthkromes@gmail.com" className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                truenorthkromes@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>107-105 1st Street W,<br />Cochrane, Alberta,<br />Canada, T4C0A4</span>
              </div>
            </div>
          </div>

          {/* Hours & Portal */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-foreground">
              Hours & Access
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <p className="text-sm text-muted-foreground">[Placeholder -- business hours]</p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-fit items-center border border-foreground px-6 py-2 text-sm tracking-wider text-foreground transition-colors hover:bg-foreground hover:text-white"
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
          <p className="text-xs text-foreground/40">
            {"© 2026 True North Kromes. All rights reserved."}
          </p>
          <p className="text-xs text-foreground/30">
            {"Created by "}
            <a
              href="https://promptandpixel.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground/50"
            >
              Prompt & Pixel
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
