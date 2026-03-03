import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

const aboutLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/gallery" },
  { label: "Latest Updates", href: "/updates" },
  { label: "FAQ", href: "/faq" },
]

const productLinks = [
  { label: "3D Design", href: "/services" },
  { label: "3D Printing", href: "/services" },
  { label: "Post-Processing", href: "/services" },
  { label: "Downloads", href: "/downloads" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary" aria-label="Site footer">
      <div className="h-[3px] bg-primary" />
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Logo + badge */}
          <div>
            <Link href="/" className="inline-block" aria-label="True North Kromes - Home">
              <img
                src="/images/logo.png"
                alt="True North Kromes"
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              One-Stop Metal Printing Service
            </p>
            {/* Social links */}
            <div className="mt-4 flex items-center gap-3">
              <span className="text-xs text-muted-foreground/50">
                [Placeholder -- social media links]
              </span>
            </div>
          </div>

          {/* Col 2: About Us */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">
              About Us
            </h4>
            <ul className="flex flex-col gap-2">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Products */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">
              Products
            </h4>
            <ul className="flex flex-col gap-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                105 1st Street West, #107, Cochrane, AB T4C 0A4
              </li>
              <li>
                <a
                  href="mailto:truenorthkromes@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  truenorthkromes@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+18076247222"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  (807) 624-7222
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground/50">
            {"© 2026 True North Kromes Inc. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
