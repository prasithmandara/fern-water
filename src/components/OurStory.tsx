"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Globe, Compass, Feather, CheckCircle } from "lucide-react";

export const OurStory: React.FC = () => {
  const milestones = [
    {
      year: "1818",
      title: "Generational Water Guardianship",
      description:
        "Over two centuries ago, our ancestral family began safeguarding pristine virgin catchment valleys in Southern Sri Lanka, cultivating a sacred respect for natural aquifers.",
    },
    {
      year: "1992",
      title: "Establishment of FERN Water",
      description:
        "FERN Bottled Drinking Water is formally founded to share untouched virgin spring water while strictly adhering to sustainable zero-depletion harvesting.",
    },
    {
      year: "Present",
      title: "Duallink Modern Science Sanctuary",
      description:
        "Operating our state-of-the-art clean bottling sanctuary in Kamburupitiya, combining 230-foot deep artesian extraction with Ministry of Health certification.",
    },
    {
      year: "The Vision",
      title: "Refreshing The World",
      description:
        "“Making Sri Lanka the drop of water that refreshes the world” — bringing sustainable, organic luxury hydration to homes, wellness sanctuaries, and dining tables globally.",
    },
  ];

  return (
    <section id="story" className="py-28 px-4 sm:px-6 lg:px-8 relative bg-[#061a14] overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden glass-card p-3 border border-emerald-500/30 shadow-2xl">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/assets/fern_rainforest_sanctuary.jpg"
                  alt="Sri Lankan Miocene Rainforest Canopy and Pristine Spring Waterfall"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061a14]/90 via-transparent to-black/20" />

                {/* Legacy Floating Seal */}
                <div className="absolute bottom-6 inset-x-6 glass-card p-4 rounded-2xl border border-emerald-500/40 text-center shadow-xl">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e6c875] block">
                    Custody & Heritage
                  </span>
                  <div className="font-serif text-3xl font-bold text-white my-0.5">
                    Over 200 Years
                  </div>
                  <p className="text-xs text-slate-300 font-light">
                    Six Generations of Water & Environmental Preservation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Milestones */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-4 border-emerald-500/20">
              <Clock className="w-3.5 h-3.5 text-[#e6c875]" />
              <span>A Legacy of Purity and Sustainability</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight mb-6">
              Six Generations Connected to <br />
              <span className="italic font-light text-emerald-gradient">
                Earth’s Deepest Waters.
              </span>
            </h2>

            <p className="text-slate-300 text-base font-light leading-relaxed mb-8">
              Though FERN bottled drinking water was formally established in 1992,
              our roots trace back over six generations to 1818. This rich heritage,
              spanning more than two centuries, reflects an unwavering pledge to
              protect the sanctity of virgin spring aquifers in Sri Lanka.
            </p>

            {/* Vision & Mission Quote Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="p-5 rounded-2xl glass-card border border-emerald-500/20">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-emerald-400 block mb-2">
                  Our Grand Vision
                </span>
                <p className="font-serif text-lg text-white italic leading-snug">
                  “Making Sri Lanka the drop of water that refreshes the world.”
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-card border border-emerald-500/20">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#e6c875] block mb-2">
                  Our Core Mission
                </span>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Harnessing pure Sri Lankan water resources to provide sustainable,
                  nourishing hydration to the world responsibly and efficiently.
                </p>
              </div>
            </div>

            {/* Timeline Milestones */}
            <div className="space-y-4">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition group"
                >
                  <span className="font-serif text-xl font-bold text-[#e6c875] w-20 shrink-0 group-hover:text-emerald-400 transition-colors">
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
