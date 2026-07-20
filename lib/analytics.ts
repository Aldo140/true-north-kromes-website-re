/* Thin wrapper around gtag. No-ops until NEXT_PUBLIC_GA_MEASUREMENT_ID is set
   and the GA script has loaded, so CTAs can wire up tracking calls now and
   it starts working the moment the measurement ID is added. */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("event", name, params)
}
