import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-white" aria-label="Site footer">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <Link href="/" aria-label="True North Kromes - Home">
            <img
              src="/images/logo.png"
              alt="True North Kromes"
              className="h-16 w-auto"
            />
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-8">
            <Link href="/" className="text-sm text-foreground/50 transition-colors hover:text-foreground">
              Home
            </Link>
            <Link href="/about" className="text-sm text-foreground/50 transition-colors hover:text-foreground">
              About
            </Link>
            <Link href="/contact" className="text-sm text-foreground/50 transition-colors hover:text-foreground">
              Contact
            </Link>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/50 transition-colors hover:text-foreground">
              Client Portal
            </a>
          </nav>

          <div className="text-sm text-foreground/40">
            <p>{"© 2026 True North Kromes. All rights reserved."}</p>
          </div>
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
