"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FaqSectionProps {
  faqs: string[][];
}

export default function FaqSection({ faqs }: FaqSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-[40px] bg-white relative overflow-hidden" id="faq">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
        {/* Centered Headline matching reference layout */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="section-heading">
            Everything you need to know about our
            <span className="block text-[#006fc9] mt-1 sm:mt-1.5">Enterprise ERP Solutions</span>
          </h2>
        </div>

        {/* Individual Accordion Cards */}
        <div className="space-y-3.5 sm:space-y-4">
          {faqs.map(([question, answer], index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={question}
                className={`rounded-2xl transition-all duration-200 bg-white border ${
                  isOpen
                    ? "border-[#006fc9] shadow-xs"
                    : "border-slate-200/90 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left p-5 sm:p-6 cursor-pointer select-none rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006fc9] focus-visible:ring-offset-2"
                >
                  <span
                    className={`text-[15px] sm:text-[16px] font-bold tracking-tight pr-4 transition-colors ${
                      isOpen ? "text-[#006fc9]" : "text-[#0F172A]"
                    }`}
                  >
                    {question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#006fc9]/10 text-[#006fc9] rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-btn-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[14px] sm:text-[14.5px] text-[#475569] leading-relaxed px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

