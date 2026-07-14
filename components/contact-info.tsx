export function ContactInfo() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  const linkClass =
    "font-mono text-xs tracking-[0.02em] text-ink underline decoration-line-dark underline-offset-4 transition-colors hover:decoration-gold-dim hover:text-gold-dim"

  return (
    <dl className="mt-14 border-b border-line-dark" aria-label="Contact information">
      {/* Phone */}
      <div className="grid grid-cols-[7rem_1fr] items-baseline gap-4 border-t border-line-dark py-4">
        <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">
          Phone
        </dt>
        <dd>
          <a href="tel:+18076247222" className={linkClass}>
            807.624.7222
          </a>
        </dd>
      </div>

      {/* Email */}
      <div className="grid grid-cols-[7rem_1fr] items-baseline gap-4 border-t border-line-dark py-4">
        <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">
          Email
        </dt>
        <dd className="min-w-0">
          <a href="mailto:truenorthkromes@gmail.com" className={`${linkClass} break-all`}>
            truenorthkromes@gmail.com
          </a>
        </dd>
      </div>

      {/* Address */}
      <div className="grid grid-cols-[7rem_1fr] items-baseline gap-4 border-t border-line-dark py-4">
        <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">
          Address
        </dt>
        <dd className="font-mono text-xs leading-relaxed tracking-[0.02em] text-ink">
          107-105 1st Street W, Cochrane, Alberta, Canada, T4C 0A4
        </dd>
      </div>

      {/* Instagram */}
      <div className="grid grid-cols-[7rem_1fr] items-baseline gap-4 border-t border-line-dark py-4">
        <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">
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
      <div className="grid grid-cols-[7rem_1fr] items-baseline gap-4 border-t border-line-dark py-4">
        <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">
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
