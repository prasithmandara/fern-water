"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Where exactly is the Fern Virgin Spring located?",
    answer:
      "Our virgin spring is drawn from an untouched subterranean aquifer situated 230 feet below the surface in Kamburupitiya, within Sri Lanka’s lush Southern rainforest ecosystem. It has been naturally shielded by geological bedrock dating back to the Miocene epoch.",
  },
  {
    question: "Is Fern water chemically treated or chlorinated?",
    answer:
      "Never. Fern water is 100% natural mineral water. It is never exposed to chlorine, synthetic chemicals, or artificial mineral re-infusion. Our water is filtered physically through layers of ancient quartz, basalt, and volcanic bedrock, followed by modern hygienic micro-filtration and ozone-sanitized capping registered with the Ministry of Health, Sri Lanka.",
  },
  {
    question: "What creates Fern's balanced 7.6 pH level?",
    answer:
      "Unlike machines that artificially ionize water through electrolysis, Fern’s natural 7.6 pH is created purely by dissolved natural bicarbonates (115 mg/L) and alkaline earth minerals absorbed slowly as water trickles over decades through subterranean limestone and basalt strata.",
  },
  {
    question: "How does the Refillable Glass Dining bottle program work?",
    answer:
      "For luxury hotels, boutique resorts, and conscious homes, our 500ml Heavyweight Glass bottles operate on a closed-loop exchange. We collect empty glass crates upon fresh deliveries, sterilize them with high-temperature ozonated spring water, and refill them, reducing single-use plastic waste to zero.",
  },
  {
    question: "How can I set up regular deliveries for my home or corporate office?",
    answer:
      "You can place an order directly through our Order Fresh basket above, message our dedicated concierge WhatsApp at +94 71 477 2661, or contact any of our regional depots in Galle, Matara, Mirissa, Unawatuna, Tangalle, or Kamburupitiya.",
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative bg-[#04130e] overflow-hidden border-t border-emerald-950/40">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-4 border-emerald-500/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clarity & Answers</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Everything you need to know about our sourcing, natural mineral matrix, and deliveries.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl glass-card border border-emerald-500/20 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-white hover:text-emerald-300 transition"
                >
                  <span className="font-serif text-lg sm:text-xl font-normal">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-full bg-white/5 text-emerald-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-emerald-500/20" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-300 font-light leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
