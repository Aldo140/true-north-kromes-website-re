"use client"

import Link from "next/link"
import { trackEvent } from "@/lib/analytics"

/** Wraps a single CTA link with a click-tracking call, so static server
 *  pages (About, Services) don't need to become client components just
 *  to fire an analytics event. */
export function TrackedCta({
  href,
  external = false,
  event,
  eventParams,
  className,
  children,
}: {
  href: string
  external?: boolean
  event: string
  eventParams?: Record<string, unknown>
  className?: string
  children: React.ReactNode
}) {
  const onClick = () => trackEvent(event, eventParams)

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} onClick={onClick} className={className}>
      {children}
    </Link>
  )
}
