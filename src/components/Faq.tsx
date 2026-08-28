"use client";

import { useState } from "react";
import { faq } from "@/content/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="border-t border-line">
      {faq.items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-center justify-between gap-6 py-7 text-left"
            >
              <span className="font-display text-lg sm:text-xl">{item.q}</span>
              <span
                className={`relative flex h-6 w-6 flex-shrink-0 items-center justify-center transition-transform duration-500 ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
                aria-hidden
              >
                <span className="absolute h-[1.5px] w-4 bg-foreground" />
                <span className="absolute h-4 w-[1.5px] bg-foreground" />
              </span>
            </button>
            <div className="accordion__panel" data-open={isOpen}>
              <div>
                <p className="max-w-2xl pb-7 text-muted-strong leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
