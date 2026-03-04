"use client"

import { useState } from "react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (formData: FormData) => {
    const newErrors: Record<string, string> = {}
    const required = [
      { key: "name", label: "Name" },
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
      <section className="bg-white py-16 lg:py-24" aria-label="Contact">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-light italic text-foreground">
            Thank You!
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {"We've received your information and will be in touch shortly with your personal upload link."}
          </p>
        </div>
      </section>
    )
  }

  /* Underline-only input matching client's Wix style */
  const inputClass =
    "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-[15px] text-foreground placeholder-foreground/40 transition-colors focus:border-foreground focus:outline-none"
  const selectClass =
    "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-[15px] text-foreground transition-colors focus:border-foreground focus:outline-none"

  return (
    <section className="bg-white pt-36 pb-16 lg:pt-44 lg:pb-24" aria-label="Contact Form">
      <div className="mx-auto max-w-2xl px-5">
        <div className="mb-14 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-light italic text-foreground">
            Get in Touch
          </h2>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
          {/* Name */}
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={inputClass}
              placeholder="Name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={inputClass}
              placeholder="Email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="sr-only">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              className={inputClass}
              placeholder="Address"
            />
          </div>

          {/* City + Postal row */}
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <label htmlFor="city" className="sr-only">City</label>
              <input
                type="text"
                id="city"
                name="city"
                className={inputClass}
                placeholder="City"
              />
            </div>
            <div>
              <label htmlFor="postal" className="sr-only">Postal Code</label>
              <input
                type="text"
                id="postal"
                name="postal"
                className={inputClass}
                placeholder="Postal Code"
              />
            </div>
          </div>

          {/* Telephone */}
          <div>
            <label htmlFor="telephone" className="sr-only">Telephone</label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              className={inputClass}
              placeholder="Telephone"
            />
          </div>

          {/* File Type */}
          <div>
            <label htmlFor="fileType" className="mb-2 block text-[13px] tracking-wider text-foreground/50">
              What kind of files will you send?
            </label>
            <select
              id="fileType"
              name="fileType"
              required
              defaultValue=""
              className={selectClass}
            >
              <option value="" disabled>Select an option...</option>
              <option value="models">Models</option>
              <option value="scans">Scans</option>
            </select>
            {errors.fileType && (
              <p className="mt-1 text-sm text-destructive">{errors.fileType}</p>
            )}
          </div>

          {/* Frames Per Month */}
          <div>
            <label htmlFor="framesPerMonth" className="mb-2 block text-[13px] tracking-wider text-foreground/50">
              Approx. how many frames per month?
            </label>
            <select
              id="framesPerMonth"
              name="framesPerMonth"
              required
              defaultValue=""
              className={selectClass}
            >
              <option value="" disabled>Select an option...</option>
              <option value="0-10">0 - 10</option>
              <option value="10-20">10 - 20</option>
              <option value="30+">30+</option>
            </select>
            <p className="mt-2 text-xs text-foreground/40">
              Our pricing depends on these factors for your special price per unit.
            </p>
            {errors.framesPerMonth && (
              <p className="mt-1 text-sm text-destructive">{errors.framesPerMonth}</p>
            )}
          </div>

          {/* Comments */}
          <div>
            <label htmlFor="comments" className="sr-only">Comments</label>
            <textarea
              id="comments"
              name="comments"
              rows={1}
              className={inputClass}
              placeholder="Comments"
            />
          </div>

          <div className="mt-4 text-center">
            <button
              type="submit"
              className="text-[15px] tracking-wider text-foreground transition-colors hover:text-accent"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
