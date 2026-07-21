"use client"

import { trackEvent } from "@/lib/analytics"

export function ContactInfo() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  const linkClass =
    "inline-flex min-h-11 items-center font-mono text-xs tracking-[0.02em] text-paper underline decoration-paper/40 underline-offset-4 transition-colors max-md:active:text-gold hover:decoration-gold-dim hover:text-gold md:inline md:min-h-0 md:text-ink md:decoration-line-dark md:hover:text-gold-dim motion-reduce:transition-none"
  const rowClass =
    "grid min-h-16 grid-cols-[4.5rem_1fr] items-center gap-3 border-t border-line py-3 min-[380px]:grid-cols-[7rem_1fr] min-[380px]:gap-4 md:min-h-0 md:items-baseline md:border-line-dark md:py-4"
  const termClass =
    "font-mono text-[11px] uppercase tracking-[0.16em] text-paper/55 md:tracking-[0.18em] md:text-ink/50"

  return (
    <dl className="mt-10 border-b border-line bg-ink px-4 text-paper md:mt-14 md:border-line-dark md:bg-transparent md:px-0 md:text-ink" aria-label="Contact information">
      {/* Phone */}
      <div className={rowClass}>
        <dt className={termClass}>
          Phone
        </dt>
        <dd>
          <a
            href="tel:+18076247222"
            onClick={() => trackEvent("contact_click", { method: "phone" })}
            className={linkClass}
          >
            807.624.7222
          </a>
        </dd>
      </div>

      {/* Email */}
      <div className={rowClass}>
        <dt className={termClass}>
          Email
        </dt>
        <dd className="min-w-0">
          <a
            href="mailto:truenorthkromes@gmail.com"
            onClick={() => trackEvent("contact_click", { method: "email" })}
            className={`${linkClass} break-all`}
          >
            truenorthkromes@gmail.com
          </a>
        </dd>
      </div>

      {/* Address */}
      <div className={rowClass}>
        <dt className={termClass}>
          Address
        </dt>
        <dd className="font-mono text-xs leading-relaxed tracking-[0.02em] text-paper md:text-ink">
          204 A River Avenue<br />
          Cochrane, AB T4C 2C1
        </dd>
      </div>

      {/* Instagram */}
      <div className={rowClass}>
        <dt className={termClass}>
          Instagram
        </dt>
        <dd>
          <a
            href="https://www.instagram.com/truenorthkromes/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Follow True North Kromes ↗
          </a>
        </dd>
      </div>

      {/* Downloads */}
      <div className={rowClass}>
        <dt className={termClass}>
          Downloads
        </dt>
        <dd>
          <a
            href={`${basePath}/downloads/credit-card-authorization.pdf`}
            className={linkClass}
            download
          >
            Credit card authorization (PDF)
          </a>
        </dd>
      </div>
    </dl>
  )
}
