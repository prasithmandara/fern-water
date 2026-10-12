"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Activity, Sparkles, Shield, Zap, Droplet } from "lucide-react";

export const HealthBenefits: React.FC = () => {
  return (
    <section id="health" className="py-28 px-4 sm:px-6 lg:px-8 relative bg-[#04130e] overflow-hidden border-t border-emerald-950/50">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-4 border-emerald-500/20">
            <Activity className="w-3.5 h-3.5" />
            <span>Cellular Hydration Science</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-6">
            Nourishment for Life, <br />
            <span className="italic font-light text-emerald-gradient">
              Drop by Vital Drop.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Every sip of Fern water is as vital as a drop of blood. Natural micro-cluster
            mineralization nourishes trillions of cells and supports essential organ vitality.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Tile 1 (Large - Spans 7 cols): Trillions of Cells */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-emerald-500/25 relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 mb-6 shadow-inner">
                <Droplet className="w-6 h-6 fill-current" />
              </div>

              <span className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-400 mb-2 block">
                Cellular Hydration Mechanism
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white mb-4 leading-tight">
                Maintaining the Freshness of <br />
                <span className="italic text-[#e6c875]">Trillions of Cells</span>
              </h3>

              <p className="text-sm text-slate-300 font-light leading-relaxed mb-6 max-w-xl">
                Unlike industrially distilled water that sits heavy in the stomach,
                Fern’s natural ionic mineral arrangement allows effortless passage
                through cellular aquaporin channels. It saturates depleted cells instantly,
                flushing metabolic residues and maintaining vital cytoplasmic turgor.
              </p>
            </div>

            {/* Micro stats inside Tile 1 */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div>
                <span className="font-serif text-2xl font-bold text-white">3×</span>
                <p className="text-[11px] text-slate-400 mt-0.5">Faster Cellular Intake</p>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-emerald-400">100%</span>
                <p className="text-[11px] text-slate-400 mt-0.5">Ionic Bioavailability</p>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#e6c875]">Zero</span>
                <p className="text-[11px] text-slate-400 mt-0.5">Cellular Bloat</p>
              </div>
            </div>
          </motion.div>

          {/* Bento Tile 2 (Spans 5 cols): Anti-Aging & Bioactive Silica */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 glass-card p-8 sm:p-10 rounded-3xl border border-emerald-500/25 relative overflow-hidden group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#e6c875]/20 border border-[#e6c875]/30 flex items-center justify-center text-[#e6c875] mb-6">
                <Sparkles className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#e6c875] mb-2 block">
                Dermal & Joint Radiance
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-3">
                Bioavailable Silica & <br />
                <span className="italic text-emerald-300">Collagen Synthesis</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
                Rich in 38.4 mg/L soluble orthosilicic acid (Silica), which directly triggers
                fibroblast cells to produce new collagen and elastin, restoring dermal
                hydration, hair luster, and lubricating joint cartilage.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 font-light">
              <span className="text-emerald-400 font-semibold">Clinical Note:</span> Daily
              silica-rich spring water promotes natural anti-aging at the chromosomal telomere level.
            </div>
          </motion.div>

          {/* Bento Tile 3 (Spans 4 cols): Heart & Kidney Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 glass-card p-6 sm:p-8 rounded-3xl border border-emerald-500/25 relative overflow-hidden group"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-300 mb-5">
              <Heart className="w-5 h-5 fill-current" />
            </div>

            <h4 className="font-serif text-xl sm:text-2xl font-normal text-white mb-2">
              Heart & Kidney Harmony
            </h4>

            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Gentle, balanced mineralization protects renal filtration membranes.
              The harmonious calcium-magnesium matrix sustains normal cardiac rhythm
              and vascular wall flexibility without sodium spikes.
            </p>
          </motion.div>

          {/* Bento Tile 4 (Spans 4 cols): Natural 7.6 pH Equilibrium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-4 glass-card p-6 sm:p-8 rounded-3xl border border-emerald-500/25 relative overflow-hidden group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-300 mb-5">
              <Shield className="w-5 h-5" />
            </div>

            <h4 className="font-serif text-xl sm:text-2xl font-normal text-white mb-2">
              Naturally Alkaline 7.6 pH
            </h4>

            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Unlike artificially ionized water made in electric electrolysis machines,
              Fern’s alkalinity stems from millennia of natural underground rock bicarbonates,
              smoothly neutralizing dietary acidity with sustained biological stability.
            </p>
          </motion.div>

          {/* Bento Tile 5 (Spans 4 cols): Circulatory Vitality */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-4 glass-card p-6 sm:p-8 rounded-3xl border border-emerald-500/25 relative overflow-hidden group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-5">
              <Zap className="w-5 h-5" />
            </div>

            <h4 className="font-serif text-xl sm:text-2xl font-normal text-white mb-2">
              Full Circulatory Vitality
            </h4>

            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Optimal plasma viscosity supports uninterrupted oxygen delivery to brain
              neurons and peripheral tissues. Say farewell to afternoon mental fatigue
              and welcome sustained clarity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
