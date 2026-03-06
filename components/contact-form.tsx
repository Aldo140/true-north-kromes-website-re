"use client"

import { useState } from "react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (formData: FormData) => {
    const newErrors: Record<string, string> = {}
    
    const name = formData.get("name") as string
    const email = formData.get("email") as string

    if (!name || name.trim() === "") {
      newErrors.name = "Name is required."
    }

    if (!email || email.trim() === "") {
      newErrors.email = "Email is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2.25rem)] font-normal italic text-foreground">
            Thank You!
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {"We've received your message and will be in touch shortly."}
          </p>
        </div>
      </section>
    )
  }

  const inputClass =
    "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-[15px] text-foreground placeholder-foreground/40 transition-colors focus:border-foreground focus:outline-none"

  return (
    <section className="bg-white pt-36 pb-16 lg:pt-44 lg:pb-24" aria-label="Contact Form">
      <div className="mx-auto max-w-2xl px-5">
        <div className="mb-14 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2.5rem)] font-normal italic text-foreground">
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
