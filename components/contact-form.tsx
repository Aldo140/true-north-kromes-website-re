"use client"

import { useState } from "react"
import Link from "next/link"
import { trackEvent } from "@/lib/analytics"

const labelClass =
  "mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em] text-ink/70 md:mb-2 md:tracking-[0.18em] md:text-ink/60"

const inputClass =
  "min-h-14 w-full border-0 border-b border-ink/35 bg-transparent px-0 py-3 text-base text-ink placeholder-ink/55 transition-[border-color,background-color] duration-200 focus:border-gold-dim focus:bg-white/30 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-dim sm:text-[15px] md:min-h-12 md:border-line-dark md:placeholder-ink/40 md:transition-colors md:focus:bg-transparent md:focus-visible:outline-none motion-reduce:transition-none"

const selectClass =
  "min-h-14 w-full border-0 border-b border-ink/35 bg-transparent px-0 py-3 text-base text-ink transition-[border-color,background-color] duration-200 focus:border-gold-dim focus:bg-white/30 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-dim sm:text-[15px] md:min-h-12 md:border-line-dark md:transition-colors md:focus:bg-transparent md:focus-visible:outline-none motion-reduce:transition-none"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const clearFieldError = (field: string) => {
    setErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
  }

  const validate = (formData: FormData) => {
    const newErrors: Record<string, string> = {}

    const name = formData.get("name") as string
    const telephone = formData.get("telephone") as string
    const fileType = formData.get("fileType") as string
    const monthlyVolume = formData.get("monthlyVolume") as string

    if (!name || name.trim() === "") {
      newErrors.name = "Name is required."
    }

    if (!telephone || telephone.trim() === "") {
      newErrors.telephone = "Telephone is required."
    }

    if (!fileType) {
      newErrors.fileType = "Please select a file type."
    }

    if (!monthlyVolume) {
      newErrors.monthlyVolume = "Please select your monthly volume."
    }

    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const validationErrors = validate(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSubmitError(null)
      const firstInvalidField = Object.keys(validationErrors)[0]
      requestAnimationFrame(() => {
        const firstInvalidControl = form.elements.namedItem(firstInvalidField)
        if (firstInvalidControl instanceof HTMLElement) {
          firstInvalidControl.focus()
        }
      })
      return
    }

    setErrors({})
    setSubmitError(null)
    setSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error || "Failed to send. Please try again.")
      }

      trackEvent("generate_lead", { form: "contact" })
      setSubmitted(true)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Failed to send. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="border-t border-gold bg-ink px-5 py-8 text-paper md:border-0 md:bg-transparent md:p-0 md:text-ink" aria-label="Contact form submitted" role="status">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim">
          Request received
        </p>
        <h2 className="mt-4 text-balance font-sans text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-[-0.02em] text-paper md:text-ink">
          Thank you.
        </h2>
        <p className="mt-4 max-w-md text-base leading-relaxed text-paper/75 md:text-ink/70">
          {"We'll send your personal upload link shortly."}
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-10 md:gap-7"
      aria-label="Contact form"
    >
      {Object.keys(errors).length > 0 && (
        <p className="border-y border-destructive py-3 text-sm font-medium leading-relaxed text-destructive md:hidden" role="alert">
          Review the highlighted fields and try again.
        </p>
      )}

      <fieldset className="flex flex-col gap-6 border-0 border-t border-line-dark p-0 pt-5 md:contents">
        <legend className="mb-1 flex w-full items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-ink md:hidden">
          <span>Contact details</span>
          <span className="text-gold-dim">01</span>
        </legend>

      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input type="text" id="name" name="name" required autoComplete="name" className={`${inputClass} ${errors.name ? "border-destructive md:border-line-dark" : ""}`} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} onInput={() => clearFieldError("name")} />
        {errors.name && (
          <p id="name-error" className="mt-2 text-sm font-medium text-destructive md:mt-1 md:font-normal">{errors.name}</p>
        )}
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className={labelClass}>
          Address
        </label>
        <input type="text" id="address" name="address" autoComplete="street-address" className={inputClass} />
      </div>

      {/* City & Postal */}
      <div className="grid grid-cols-1 gap-7 min-[380px]:grid-cols-2 min-[380px]:gap-6">
        <div>
          <label htmlFor="city" className={labelClass}>
            City
          </label>
          <input type="text" id="city" name="city" autoComplete="address-level2" className={inputClass} />
        </div>
        <div>
          <label htmlFor="postal" className={labelClass}>
            Postal Code
          </label>
          <input type="text" id="postal" name="postal" autoComplete="postal-code" inputMode="text" className={inputClass} />
        </div>
      </div>

      {/* Telephone */}
      <div>
        <label htmlFor="telephone" className={labelClass}>
          Telephone
        </label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          required
          autoComplete="tel"
          inputMode="tel"
          className={`${inputClass} ${errors.telephone ? "border-destructive md:border-line-dark" : ""}`}
          aria-invalid={Boolean(errors.telephone)}
          aria-describedby={errors.telephone ? "telephone-error" : undefined}
          onInput={() => clearFieldError("telephone")}
        />
        {errors.telephone && (
          <p id="telephone-error" className="mt-2 text-sm font-medium text-destructive md:mt-1 md:font-normal">{errors.telephone}</p>
        )}
      </div>
      </fieldset>

      <fieldset className="flex flex-col gap-6 border-0 border-t border-line-dark p-0 pt-5 md:contents">
        <legend className="mb-1 flex w-full items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-ink md:hidden">
          <span>Case profile</span>
          <span className="text-gold-dim">02</span>
        </legend>

      {/* File Type */}
      <div>
        <label htmlFor="fileType" className={labelClass}>
          What kind of files will you send?
        </label>
        <select
          id="fileType"
          name="fileType"
          required
          className={`${selectClass} ${errors.fileType ? "border-destructive md:border-line-dark" : ""}`}
          defaultValue=""
          aria-invalid={Boolean(errors.fileType)}
          aria-describedby={errors.fileType ? "file-type-error" : undefined}
          onChange={() => clearFieldError("fileType")}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="models">Models</option>
          <option value="scans">Scans</option>
        </select>
        {errors.fileType && (
          <p id="file-type-error" className="mt-2 text-sm font-medium text-destructive md:mt-1 md:font-normal">{errors.fileType}</p>
        )}
      </div>

      {/* Monthly Volume */}
      <div>
        <label htmlFor="monthlyVolume" className={labelClass}>
          Frames per month
        </label>
        <p id="monthly-volume-help" className="mb-2 text-sm leading-relaxed text-ink/60">
          Approx how many frames per month are you currently providing to your
          clients? Our pricing depends on these factors for your special price
          per unit.
        </p>
        <select
          id="monthlyVolume"
          name="monthlyVolume"
          required
          className={`${selectClass} ${errors.monthlyVolume ? "border-destructive md:border-line-dark" : ""}`}
          defaultValue=""
          aria-invalid={Boolean(errors.monthlyVolume)}
          aria-describedby={errors.monthlyVolume ? "monthly-volume-error" : "monthly-volume-help"}
          onChange={() => clearFieldError("monthlyVolume")}
        >
          <option value="" disabled>
            Select volume
          </option>
          <option value="0-10">0 - 10</option>
          <option value="10-20">10 - 20</option>
          <option value="30+">30+</option>
        </select>
        {errors.monthlyVolume && (
          <p id="monthly-volume-error" className="mt-2 text-sm font-medium text-destructive md:mt-1 md:font-normal">{errors.monthlyVolume}</p>
        )}
      </div>
      </fieldset>

      <div className="border-t border-line-dark pt-6 md:mt-4 md:border-0 md:pt-0">
        <p className="mb-3 text-sm leading-relaxed text-ink/60">
          {"Let's get started with your personal link to upload files."}
        </p>
        {submitError && (
          <p className="mb-3 border-y border-destructive py-3 text-sm font-medium text-destructive md:border-0 md:p-0 md:font-normal" role="alert">{submitError}</p>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="min-h-14 w-full border border-ink bg-ink px-8 py-4 font-mono text-xs uppercase tracking-[0.18em] text-paper transition-colors max-md:active:bg-paper max-md:active:text-ink hover:bg-transparent hover:text-ink disabled:cursor-not-allowed disabled:opacity-60 md:min-h-0 motion-reduce:transition-none"
        >
          {submitting ? "Sending…" : "Get my upload link"}
        </button>
        <p className="mt-3 text-xs leading-relaxed text-ink/45">
          By submitting, you agree to our{" "}
          <Link href="/privacy" className="inline-flex min-h-11 items-center underline underline-offset-2 hover:text-ink/70 md:inline md:min-h-0">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </form>
  )
}
