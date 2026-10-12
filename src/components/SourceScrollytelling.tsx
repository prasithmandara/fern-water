"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, ShieldCheck, Activity } from "lucide-react";

interface LayerDetail {
  id: number;
  depth: string;
  name: string;
  geology: string;
  filtrationEffect: string;
  mineralContribution: string;
  timeEstimate: string;
}

const LAYERS: LayerDetail[] = [
  {
    id: 1,
    depth: "0 - 30 Feet",
    name: "Tropical Rainforest Canopy & Living Fern Biome",
    geology: "Pristine biological humus, undisturbed rainforest root biome, and indigenous Sri Lankan ferns.",
    filtrationEffect: "Natural rainwater begins its journey, protected from airborne particulates through dense tropical greenery.",
    mineralContribution: "Infuses delicate botanical clarity and natural oxygenation.",
    timeEstimate: "Days 1 to 14",
  },
  {
    id: 2,
    depth: "30 - 90 Feet",
    name: "Ancient Quartz & Crystalline Granitic Bedrock",
    geology: "Dense metamorphic rock strata dating back millions of years to the Miocene geological epoch.",
    filtrationEffect: "Microscopic physical filtration under escalating gravitational pressure, filtering sediments.",
    mineralContribution: "Dissolves bioavailable Silica (SiO₂) and traces of vital macro-nutrients.",
    timeEstimate: "Months 1 to 12",
  },
  {
    id: 3,
    depth: "90 - 180 Feet",
    name: "Porous Volcanic Basalt & Calcite Matrix",
    geology: "Deep volcanic basalt layers rich with calcium carbonate, magnesium silicates, and natural zeolite.",
    filtrationEffect: "Electrochemical ionic exchange conditions the water naturally without chemical additives.",
    mineralContribution: "Balances Calcium (Ca²⁺) and Magnesium (Mg²⁺) in a biological golden ratio.",
    timeEstimate: "Years 2 to 5",
  },
  {
    id: 4,
    depth: "180 - 230 Feet",
    name: "The Subterranean Virgin Spring Aquifer",
    geology: "Hermetically sealed subterranean reservoir trapped beneath impermeable granitic bedrock in Kamburupitiya.",
    filtrationEffect: "Under natural artesian hydrostatic pressure, shielded from modern environmental contaminants.",
    mineralContribution: "Natural alkaline bicarbonate buffering reaching a balanced 7.6 pH equilibrium.",
    timeEstimate: "Decades of Natural Filtration",
  },
];

export const SourceScrollytelling: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(4);
  const current = LAYERS.find((l) => l.id === activeLayer) || LAYERS[3];

  return (
    <section id="source" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#040a14] overflow-hidden border-t border-sky-950/40">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00a3e0]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#e4007c]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-sky-300 mb-4 border-[#00a3e0]/30 shadow-[0_0_15px_rgba(0,163,224,0.2)]">
            <Layers className="w-3.5 h-3.5 text-[#00a3e0]" />
            <span>Geological Filtration Journey</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-6">
            Filtered by Ancient Rock. <br />
            <span className="italic font-light text-brand-gradient">
              Bottled with Scientific Care.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Fern water is drawn from a virgin spring located 230 feet below
            the surface in Kamburupitiya. Explore each geological stratum that transforms
            rainforest precipitation into living, mineral-rich bottled drinking water.
          </p>
        </div>

        {/* Split Screen Scrollytelling Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Aquifer Visual & Layer Hotspots */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden glass-card p-3 border border-[#00a3e0]/30 shadow-2xl">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/assets/fern_source_aquifer.jpg"
                  alt="Sri Lankan Miocene Aquifer Subterranean Cross-Section"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040a14]/85 via-transparent to-black/25" />

                {/* Depth Badge Overlay */}
                <div className="absolute top-4 left-4 glass-card px-4 py-2 rounded-xl border border-white/20">
                  <div className="text-[10px] tracking-widest uppercase text-[#00a3e0] font-bold">
                    Target Depth Strata
                  </div>
                  <div className="font-serif text-2xl font-bold text-white">
                    {current.depth}
                  </div>
                </div>

                {/* Artesian Pressure Badge */}
                <div className="absolute bottom-4 right-4 glass-card px-4 py-2 rounded-xl border border-[#00a3e0]/40 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00a3e0] animate-ping" />
                  <span className="text-xs font-semibold text-sky-200">
                    Naturally Pressurized Aquifer
                  </span>
                </div>
              </div>
            </div>

            {/* Geological Layer Selectors */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4">
              {LAYERS.map((layer) => (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`p-3 rounded-xl text-left transition-all duration-300 border ${activeLayer === layer.id
                      ? "bg-gradient-to-b from-[#00a3e0]/25 to-[#e4007c]/15 border-[#00a3e0] text-white shadow-[0_0_20px_rgba(0,163,224,0.3)]"
                      : "bg-white/5 border-white/10 text-slate-300 hover:border-[#00a3e0]/30 hover:bg-white/10"
                    }`}
                >
                  <div className="text-[10px] uppercase font-bold tracking-wider text-[#00a3e0]">
                    {layer.depth}
                  </div>
                  <div className="text-xs font-semibold line-clamp-1 mt-0.5">
                    {layer.name}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Layer Narrative & Geological Impact */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-[#00a3e0]/30 shadow-2xl relative"
              >
                {/* Stratum Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#e4007c] uppercase px-2.5 py-1 rounded bg-[#e4007c]/10 border border-[#e4007c]/25">
                    Strata Level 0{current.id} • {current.depth}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                    <Activity className="w-3.5 h-3.5 text-[#00a3e0]" />
                    {current.timeEstimate}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-4 leading-snug">
                  {current.name}
                </h3>

                <div className="space-y-4 text-sm text-slate-300 font-light mb-6">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-[#00a3e0] block mb-1">
                      Geological Matrix:
                    </span>
                    <p className="leading-relaxed">{current.geology}</p>
                  </div>

                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-[#00a3e0] block mb-1">
                      Natural Filtration:
                    </span>
                    <p className="leading-relaxed">{current.filtrationEffect}</p>
                  </div>

                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-[#e4007c] block mb-1">
                      Mineral Endowment:
                    </span>
                    <p className="leading-relaxed text-slate-200">
                      {current.mineralContribution}
                    </p>
                  </div>
                </div>

                {/* Certified Safety Banner */}
                <div className="p-3.5 rounded-xl bg-sky-950/50 border border-[#00a3e0]/30 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#00a3e0] shrink-0" />
                  <div className="text-xs text-sky-200">
                    <span className="font-semibold text-white">
                      Strict Quality Standards:
                    </span>{" "}
                    Registered & certified by Ministry of Health, Sri Lanka.
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Section Key Stats Counter Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10">
          <div className="text-center p-6 rounded-2xl glass-card border border-[#00a3e0]/20">
            <div className="font-serif text-4xl sm:text-5xl font-bold text-white mb-2">
              230<span className="text-[#00a3e0] text-2xl font-sans">ft</span>
            </div>
            <div className="text-xs uppercase font-bold tracking-wider text-slate-400">
              Subterranean Depth
            </div>
            <p className="text-[11px] text-slate-400 font-light mt-1">
              Protected beneath dense bedrock
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl glass-card border border-[#00a3e0]/20">
            <div className="font-serif text-4xl sm:text-5xl font-bold text-[#00a3e0] mb-2">
              100<span className="text-xl font-sans">%</span>
            </div>
            <div className="text-xs uppercase font-bold tracking-wider text-slate-400">
              Natural Minerals
            </div>
            <p className="text-[11px] text-slate-400 font-light mt-1">
              Zero synthetic re-mineralization
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl glass-card border border-[#00a3e0]/20">
            <div className="font-serif text-4xl sm:text-5xl font-bold text-[#e4007c] mb-2">
              0<span className="text-xl font-sans">%</span>
            </div>
            <div className="text-xs uppercase font-bold tracking-wider text-slate-400">
              Chemical Additives
            </div>
            <p className="text-[11px] text-slate-400 font-light mt-1">
              Untouched by chlorine or chemicals
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl glass-card border border-[#00a3e0]/20">
            <div className="font-serif text-4xl sm:text-5xl font-bold text-sky-300 mb-2">
              1992
            </div>
            <div className="text-xs uppercase font-bold tracking-wider text-slate-400">
              Brand Heritage
            </div>
            <p className="text-[11px] text-slate-400 font-light mt-1">
              Over 30 years of pure water quality
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
