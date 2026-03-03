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
    question: "[Placeholder question 1]",
    answer: "[Placeholder answer]",
  },
  {
    question: "[Placeholder question 2]",
    answer: "[Placeholder answer]",
  },
  {
    question: "[Placeholder question 3]",
    answer: "[Placeholder answer]",
  },
  {
    question: "[Placeholder question 4]",
    answer: "[Placeholder answer]",
  },
  {
    question: "[Placeholder question 5]",
    answer: "[Placeholder answer]",
  },
  {
    question: "[Placeholder question 6]",
    answer: "[Placeholder answer]",
  },
]

export function FAQ() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-background py-16 lg:py-24" aria-label="Frequently Asked Questions">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-5 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="text-left text-base font-bold text-foreground hover:no-underline hover:text-accent">
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
