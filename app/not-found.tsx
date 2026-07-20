import type { Metadata } from "next"
import Link from "next/link"
import { DrawRule, Reveal } from "@/components/motion-primitives"
import { MachinedLines } from "@/components/experience"

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section className="flex min-h-[100dvh] items-center bg-ink text-paper" aria-label="Page not found">
      <div className="mx-auto w-full max-w-6xl px-5 py-32 sm:px-6 lg:px-12">
        <Reveal y={10}>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
            404 / off the build plate
          </p>
        </Reveal>
        <MachinedLines
          as="h1"
          lines={["This case", "wasn't found."]}
          delay={0.08}
          className="mt-5 max-w-[16ch] text-balance font-sans text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-paper"
        />
        <Reveal y={12} delay={0.2} className="mt-7 max-w-[52ch]">
          <p className="text-sm leading-[1.8] text-paper/70 sm:text-base">
            The page you&apos;re looking for doesn&apos;t exist — it may have moved,
            or the link was mistyped. Here&apos;s how to get back on the line.
          </p>
        </Reveal>

        <div className="mt-10 max-w-md">
          <DrawRule className="h-px bg-line" />
          <nav aria-label="Suggested pages" className="divide-y divide-line">
            {[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Gallery", href: "/gallery" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/70 transition-colors hover:text-gold"
              >
                {link.label}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  )
}
