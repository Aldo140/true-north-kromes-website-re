"use client"

import { useState } from "react"
import Link from "next/link"
import { trackEvent } from "@/lib/analytics"

const labelClass =
  "mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60"

const inputClass =
  "min-h-12 w-full border-0 border-b border-line-dark bg-transparent px-0 py-3 text-base text-ink placeholder-ink/40 transition-colors focus:border-gold-dim focus:outline-none sm:text-[15px]"

const selectClass =
  "min-h-12 w-full border-0 border-b border-line-dark bg-transparent px-0 py-3 text-base text-ink transition-colors focus:border-gold-dim focus:outline-none sm:text-[15px]"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

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
    const formData = new FormData(e.currentTarget)
    const validationErrors = validate(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
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
      <div aria-label="Contact form submitted">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim">
          Request received
        </p>
        <h2 className="mt-4 text-balance font-sans text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-[-0.02em] text-ink">
          Thank you.
        </h2>
        <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
          {"We'll send your personal upload link shortly."}
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-7"
      aria-label="Contact form"
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input type="text" id="name" name="name" required className={inputClass} />
        {errors.name && (
          <p className="mt-1 text-sm text-destructive">{errors.name}</p>
        )}
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className={labelClass}>
          Address
        </label>
        <input type="text" id="address" name="address" className={inputClass} />
      </div>

      {/* City & Postal */}
      <div className="grid grid-cols-1 gap-7 min-[380px]:grid-cols-2 min-[380px]:gap-6">
        <div>
          <label htmlFor="city" className={labelClass}>
            City
          </label>
          <input type="text" id="city" name="city" className={inputClass} />
        </div>
        <div>
          <label htmlFor="postal" className={labelClass}>
            Postal Code
          </label>
          <input type="text" id="postal" name="postal" className={inputClass} />
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
          className={inputClass}
        />
        {errors.telephone && (
          <p className="mt-1 text-sm text-destructive">{errors.telephone}</p>
        )}
      </div>

      {/* File Type */}
      <div>
        <label htmlFor="fileType" className={labelClass}>
          What kind of files will you send?
        </label>
        <select
          id="fileType"
          name="fileType"
          required
          className={selectClass}
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="models">Models</option>
          <option value="scans">Scans</option>
        </select>
        {errors.fileType && (
          <p className="mt-1 text-sm text-destructive">{errors.fileType}</p>
        )}
      </div>

      {/* Monthly Volume */}
      <div>
        <label htmlFor="monthlyVolume" className={labelClass}>
          Frames per month
        </label>
        <p className="mb-2 text-sm leading-relaxed text-ink/60">
          Approx how many frames per month are you currently providing to your
          clients? Our pricing depends on these factors for your special price
          per unit.
        </p>
        <select
          id="monthlyVolume"
          name="monthlyVolume"
          required
          className={selectClass}
          defaultValue=""
        >
          <option value="" disabled>
            Select volume
          </option>
          <option value="0-10">0 - 10</option>
          <option value="10-20">10 - 20</option>
          <option value="30+">30+</option>
        </select>
        {errors.monthlyVolume && (
          <p className="mt-1 text-sm text-destructive">{errors.monthlyVolume}</p>
        )}
      </div>

      <div className="mt-4">
        <p className="mb-3 text-sm leading-relaxed text-ink/60">
          {"Let's get started with your personal link to upload files."}
        </p>
        {submitError && (
          <p className="mb-3 text-sm text-destructive">{submitError}</p>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="w-full border border-ink bg-ink px-8 py-4 font-mono text-xs uppercase tracking-[0.18em] text-paper transition-colors hover:bg-transparent hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Get my upload link"}
        </button>
        <p className="mt-3 text-xs leading-relaxed text-ink/45">
          By submitting, you agree to our{" "}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-ink/70">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </form>
  )
}
