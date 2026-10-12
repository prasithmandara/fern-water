"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Droplets, Sparkles } from "lucide-react";

export const OurStory: React.FC = () => {
  const milestones = [
    {
      year: "1992",
      title: "Establishment of FERN Water",
      description:
        "FERN Bottled Drinking Water is formally founded by Duallink International (Pvt) Ltd to deliver pure, untouched virgin spring water from Southern Sri Lanka to families and businesses.",
    },
    {
      year: "2000s",
      title: "Virgin Aquifer Infrastructure & Certification",
      description:
        "Pioneering sealed 230-foot deep artesian extraction in Narandeniya, Kamburupitiya. Attaining full registration and compliance with the Ministry of Health, Sri Lanka.",
    },
    {
      year: "2015",
      title: "Hospitality & Southern Coastal Expansion",
      description:
        "Expanding dedicated distribution depots across Galle, Matara, Mirissa, Unawatuna, Tangalle, and Kataragama, supplying top boutique resorts and luxury dining tables.",
    },
    {
      year: "Present",
      title: "The Modern Sustainable Sanctuary",
      description:
        "Combining ultra-hygienic automated bottling with closed-loop refillable programs and solar-assisted operations, fulfilling our vision: 'Pure Nature in Every Drop'.",
    },
  ];

  return (
    <section id="story" className="py-28 px-4 sm:px-6 lg:px-8 relative bg-[#050b14] overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-[#00a3e0]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#e4007c]/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden glass-card p-3 border border-[#00a3e0]/30 shadow-2xl">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/assets/fern_rainforest_sanctuary.jpg"
                  alt="Sri Lankan Rainforest Canopy and Pristine Spring Waterfall"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/90 via-transparent to-black/25" />

                {/* Legacy Floating Seal */}
                <div className="absolute bottom-6 inset-x-6 glass-card p-4 rounded-2xl border border-[#00a3e0]/40 text-center shadow-xl">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e4007c] block">
                    Authentic Purity
                  </span>
                  <div className="font-serif text-3xl font-bold text-white my-0.5">
                    Since 1992
                  </div>
                  <p className="text-xs text-slate-300 font-light">
                    Over Three Decades of Bottled Spring Water Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Milestones */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-sky-300 mb-4 border-[#00a3e0]/30 shadow-[0_0_15px_rgba(0,163,224,0.15)]">
              <Clock className="w-3.5 h-3.5 text-[#00a3e0]" />
              <span>A Legacy of Purity and Sustainability</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight mb-6">
              Three Decades Connected to <br />
              <span className="italic font-light text-brand-gradient">
                Sri Lanka’s Deepest Waters.
              </span>
            </h2>

            <p className="text-slate-300 text-base font-light leading-relaxed mb-8">
              Since 1992, FERN bottled drinking water has stood as a beacon of natural
              integrity. Operating under Duallink International (Pvt) Ltd in Kamburupitiya,
              our mission has remained steadfast: bottling pure nature in every drop
              while preserving the ecological balance of our water sources.
            </p>

            {/* Vision & Mission Quote Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="p-5 rounded-2xl glass-card border border-[#00a3e0]/25">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#00a3e0] block mb-2">
                  Our Grand Vision
                </span>
                <p className="font-serif text-lg text-white italic leading-snug">
                  “Making Sri Lanka the drop of water that refreshes the world.”
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-card border border-[#e4007c]/25">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#e4007c] block mb-2">
                  Our Core Mission
                </span>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Harnessing pure Sri Lankan spring resources to provide sustainable,
                  nourishing hydration to families, travelers, and businesses islandwide.
                </p>
              </div>
            </div>

            {/* Timeline Milestones */}
            <div className="space-y-4">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#00a3e0]/40 transition group"
                >
                  <span className="font-serif text-xl font-bold text-[#e4007c] w-20 shrink-0 group-hover:text-sky-300 transition-colors">
                    {m.year}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-0.5">
                      {m.title}
                    </h4>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
