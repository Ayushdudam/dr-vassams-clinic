"use client";

import React, { useState } from "react";
import { FAQItem } from "@/content/faqs";
import { ChevronDown } from "lucide-react";

interface FaqAccordionProps {
  items: FAQItem[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  // First item open by default
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-3.5">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const buttonId = `faq-btn-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={`rounded-lg border transition-all duration-200 ${
              isOpen
                ? "bg-[#FBF8F1] border-[#1F3D33]/40 shadow-sm"
                : "bg-[#FBF8F1]/70 border-[#1F3D33]/15 hover:border-[#1F3D33]/30"
            }`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between text-left p-5 sm:p-6 focus:outline-none focus:ring-2 focus:ring-[#1F3D33] rounded-lg transition-colors group"
              >
                <span className="font-serif text-base sm:text-lg font-semibold text-[#1B2421] group-hover:text-[#1F3D33] transition-colors pr-4">
                  {item.question}
                </span>
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                    isOpen
                      ? "bg-[#1F3D33] text-[#FBF8F1] border-[#1F3D33] rotate-180"
                      : "bg-[#F3EEE2] text-[#1F3D33] border-[#1F3D33]/20 group-hover:border-[#1F3D33]"
                  }`}
                  aria-hidden="true"
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={`px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-[#5B6660] leading-relaxed border-t border-[#1F3D33]/10 pt-4 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
