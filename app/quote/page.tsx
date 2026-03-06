import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Get pricing for your dental framework cases from True North Kromes.",
}

const caseTypes = [
  "Upper Partial Framework",
  "Lower Partial Framework",
  "Full Upper Framework",
  "Full Lower Framework",
  "Implant Bar",
  "Custom/Other",
]

export default function QuotePage() {
  return (
    <main>
      <section className="bg-white pt-44 pb-16 lg:pt-52 lg:pb-24">
        <div className="mx-auto max-w-3xl px-8 lg:px-16">
          <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground">
            PRICING
          </p>
          <h1 className="mt-2 text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight text-foreground">
            Request a Quote
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Tell us about your case and we'll provide pricing within one business day.
          </p>

          <form className="mt-12 space-y-8">
            {/* Practice Info */}
            <div>
              <h2 className="text-sm font-semibold text-foreground">Practice Information</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="practice" className="block text-sm text-muted-foreground">
                    Practice / Lab Name
                  </label>
                  <input
                    type="text"
                    id="practice"
                    name="practice"
                    className="mt-1.5 w-full border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none"
                    placeholder="Your practice name"
                  />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-sm text-muted-foreground">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    className="mt-1.5 w-full border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1.5 w-full border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none"
                    placeholder="email@practice.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-muted-foreground">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1.5 w-full border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none"
                    placeholder="(555) 555-5555"
                  />
                </div>
              </div>
            </div>

            {/* Case Details */}
            <div className="border-t border-border pt-8">
              <h2 className="text-sm font-semibold text-foreground">Case Details</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <label htmlFor="caseType" className="block text-sm text-muted-foreground">
                    Type of Framework
                  </label>
                  <select
                    id="caseType"
                    name="caseType"
                    className="mt-1.5 w-full border border-border bg-white px-4 py-2.5 text-sm text-foreground focus:border-foreground focus:outline-none"
                  >
                    <option value="">Select case type</option>
                    {caseTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="quantity" className="block text-sm text-muted-foreground">
                      Estimated Quantity (per month)
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      className="mt-1.5 w-full border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none"
                      placeholder="e.g., 10"
                    />
                  </div>
                  <div>
                    <label htmlFor="turnaround" className="block text-sm text-muted-foreground">
                      Preferred Turnaround
                    </label>
                    <select
                      id="turnaround"
                      name="turnaround"
                      className="mt-1.5 w-full border border-border bg-white px-4 py-2.5 text-sm text-foreground focus:border-foreground focus:outline-none"
                    >
                      <option value="">Select turnaround</option>
                      <option value="standard">Standard (5-7 days)</option>
                      <option value="rush">Rush (2-3 days)</option>
                      <option value="same-day">Same Day (if available)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="notes" className="block text-sm text-muted-foreground">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    className="mt-1.5 w-full resize-none border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none"
                    placeholder="Special requirements, design preferences, or questions..."
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <button
                type="submit"
                className="inline-flex items-center bg-foreground px-8 py-3 text-sm font-medium tracking-wider text-white transition-opacity hover:opacity-90"
              >
                Request Quote
              </button>
              <p className="mt-4 text-xs text-muted-foreground">
                We typically respond within one business day.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
