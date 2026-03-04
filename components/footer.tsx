import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="dark-chrome text-chrome-light" aria-label="Site footer">
      <div className="h-px bg-chrome-dark/40" />
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Col 1: Logo */}
          <div>
            <Link href="/" className="inline-block" aria-label="True North Kromes - Home">
              <img
                src="/images/logo.png"
                alt="True North Kromes"
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-chrome-mid">
              A Dental Lab Specializing in 3D Printing Metal Partial Denture Frameworks
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/" className="text-sm text-chrome-mid transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-chrome-mid transition-colors hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-chrome-mid transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-chrome-mid transition-colors hover:text-white">
                  Client Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Us */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-chrome-mid">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                107-105 1st Street W, Cochrane, Alberta, T4C0A4
              </li>
              <li>
                <a
                  href="mailto:truenorthkromes@gmail.com"
                  className="flex items-center gap-2 text-sm text-chrome-mid transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  truenorthkromes@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+18076247222"
                  className="flex items-center gap-2 text-sm text-chrome-mid transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  807.624.7222
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-chrome-dark/30 pt-8 text-center">
          <p className="text-sm text-chrome-dark">
            {"© 2026 True North Kromes. All rights reserved."}
          </p>
          <p className="mt-2 text-xs text-chrome-dark/60">
            {"Created by "}
            <a
              href="https://promptandpixel.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-chrome-mid"
            >
              Prompt & Pixel
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
