"use client"

import { useState } from "react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (formData: FormData) => {
    const newErrors: Record<string, string> = {}
    const required = [
      { key: "name", label: "Name" },
      { key: "address", label: "Address" },
      { key: "city", label: "City" },
      { key: "postal", label: "Postal Code" },
      { key: "telephone", label: "Telephone" },
      { key: "email", label: "Email" },
      { key: "fileType", label: "File type" },
      { key: "framesPerMonth", label: "Frames per month" },
    ]

    for (const field of required) {
      const value = formData.get(field.key)
      if (!value || (typeof value === "string" && value.trim() === "")) {
        newErrors[field.key] = `${field.label} is required.`
      }
    }

    const email = formData.get("email") as string
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address."
    }

    return newErrors
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const validationErrors = validate(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="bg-background py-16 lg:py-24" aria-label="Contact">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-tight text-foreground">
            Thank You!
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {"We've received your information and will be in touch shortly with your personal upload link."}
          </p>
        </div>
      </section>
    )
  }

  const inputClass =
    "w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"

  return (
    <section className="bg-background pt-36 pb-16 lg:pt-44 lg:pb-24" aria-label="Contact Form">
      <div className="mx-auto max-w-2xl px-5">
        <div className="mb-10 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-light italic tracking-tight text-foreground">
            Get in Touch
          </h2>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
              Name <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={inputClass}
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-foreground">
              Address <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              className={inputClass}
              placeholder="Street address"
            />
            {errors.address && (
              <p className="mt-1 text-sm text-destructive">{errors.address}</p>
            )}
          </div>

          {/* City + Postal row */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-foreground">
                City <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                className={inputClass}
                placeholder="City"
              />
              {errors.city && (
                <p className="mt-1 text-sm text-destructive">{errors.city}</p>
              )}
            </div>
            <div>
              <label htmlFor="postal" className="mb-1.5 block text-sm font-medium text-foreground">
                Postal Code <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="postal"
                name="postal"
                required
                className={inputClass}
                placeholder="A1A 1A1"
              />
              {errors.postal && (
                <p className="mt-1 text-sm text-destructive">{errors.postal}</p>
              )}
            </div>
          </div>

          {/* Telephone */}
          <div>
            <label htmlFor="telephone" className="mb-1.5 block text-sm font-medium text-foreground">
              Telephone <span className="text-destructive">*</span>
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              required
              className={inputClass}
              placeholder="(555) 123-4567"
            />
            {errors.telephone && (
              <p className="mt-1 text-sm text-destructive">{errors.telephone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
              Email <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={inputClass}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          {/* File Type Dropdown */}
          <div>
            <label htmlFor="fileType" className="mb-1.5 block text-sm font-medium text-foreground">
              What kind of files will you send? <span className="text-destructive">*</span>
            </label>
            <select
              id="fileType"
              name="fileType"
              required
              defaultValue=""
              className={inputClass}
            >
              <option value="" disabled className="text-muted-foreground">
                Select an option...
              </option>
              <option value="models">Models</option>
              <option value="scans">Scans</option>
            </select>
            {errors.fileType && (
              <p className="mt-1 text-sm text-destructive">{errors.fileType}</p>
            )}
          </div>

          {/* Frames Per Month Dropdown */}
          <div>
            <label htmlFor="framesPerMonth" className="mb-1.5 block text-sm font-medium text-foreground">
              Approx. how many frames per month are you currently providing to your clients? <span className="text-destructive">*</span>
            </label>
            <select
              id="framesPerMonth"
              name="framesPerMonth"
              required
              defaultValue=""
              className={inputClass}
            >
              <option value="" disabled className="text-muted-foreground">
                Select an option...
              </option>
              <option value="0-10">0 - 10</option>
              <option value="10-20">10 - 20</option>
              <option value="30+">30+</option>
            </select>
            <p className="mt-1.5 text-xs text-muted-foreground">
              Our pricing depends on these factors for your special price per unit.
            </p>
            {errors.framesPerMonth && (
              <p className="mt-1 text-sm text-destructive">{errors.framesPerMonth}</p>
            )}
          </div>

          {/* Comments (optional) */}
          <div>
            <label htmlFor="comments" className="mb-1.5 block text-sm font-medium text-foreground">
              Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              rows={3}
              className={inputClass}
              placeholder="Anything else you'd like us to know?"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-md bg-primary py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {"Let's Get Started — Send Me My Personal Upload Link!"}
          </button>
        </form>
      </div>
    </section>
  )
}
