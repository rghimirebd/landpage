"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-white sm:text-lg">{item.question}</span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xl transition ${
                  isOpen
                    ? "border-brand-gold bg-brand-gold text-brand-charcoal"
                    : "border-white/15 bg-white/5 text-white"
                }`}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-70"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-7 text-white/90 sm:px-7 sm:text-base">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
