"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const faqItems = [
  {
    question: "[PLACEHOLDER Q] What services does TNK provide?",
    answer: "[PLACEHOLDER A] Client to supply before launch.",
  },
  {
    question: "[PLACEHOLDER Q] How do I submit a case?",
    answer: "[PLACEHOLDER A] Client to supply before launch.",
  },
  {
    question: "[PLACEHOLDER Q] What materials do you use for printing?",
    answer: "[PLACEHOLDER A] Client to supply before launch.",
  },
  {
    question: "[PLACEHOLDER Q] What is SLM technology?",
    answer: "[PLACEHOLDER A] Client to supply before launch.",
  },
  {
    question: "[PLACEHOLDER Q] How long does turnaround take?",
    answer: "[PLACEHOLDER A] Client to supply before launch.",
  },
  {
    question: "[PLACEHOLDER Q] Do you work with clinics directly?",
    answer: "[PLACEHOLDER A] Client to supply before launch.",
  },
  {
    question: "[PLACEHOLDER Q] What file formats do you accept?",
    answer: "[PLACEHOLDER A] Client to supply before launch.",
  },
  {
    question: "[PLACEHOLDER Q] How do I get started?",
    answer: "[PLACEHOLDER A] Client to supply before launch.",
  },
]

export function FAQ() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-background py-20 lg:py-28" aria-label="Frequently Asked Questions">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-4 lg:px-8 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2 className="mb-12 text-center font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-foreground text-balance">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline hover:text-muted-foreground">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
