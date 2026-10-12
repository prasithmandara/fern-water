"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Activity, Sparkles, Shield, Zap, Droplet } from "lucide-react";

export const HealthBenefits: React.FC = () => {
  return (
    <section id="health" className="py-28 px-4 sm:px-6 lg:px-8 relative bg-[#040a14] overflow-hidden border-t border-sky-950/50">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#00a3e0]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#e4007c]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-sky-300 mb-4 border-[#00a3e0]/30 shadow-[0_0_15px_rgba(0,163,224,0.15)]">
            <Activity className="w-3.5 h-3.5 text-[#00a3e0]" />
            <span>Cellular Hydration Science</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-6">
            Nourishment for Life, <br />
            <span className="italic font-light text-brand-gradient">
              Drop by Vital Drop.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Every sip of Fern water provides pristine cellular hydration. Natural micro-cluster
            mineralization nourishes trillions of cells and supports essential everyday vitality.
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
            className="md:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-[#00a3e0]/25 relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#00a3e0]/15 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00a3e0]/20 border border-[#00a3e0]/30 flex items-center justify-center text-sky-200 mb-6 shadow-inner">
                <Droplet className="w-6 h-6 fill-current" />
              </div>

              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00a3e0] mb-2 block">
                Cellular Hydration Mechanism
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white mb-4 leading-tight">
                Maintaining the Freshness of <br />
                <span className="italic text-[#e4007c]">Trillions of Cells</span>
              </h3>

              <p className="text-sm text-slate-300 font-light leading-relaxed mb-6 max-w-xl">
                Unlike heavily processed distilled water that lacks natural electrolytes,
                Fern’s natural ionic mineral arrangement allows effortless absorption
                through cellular aquaporin channels. It hydrates depleted cells rapidly,
                flushing metabolic residues and sustaining natural energy balance.
              </p>
            </div>

            {/* Micro stats inside Tile 1 */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div>
                <span className="font-serif text-2xl font-bold text-white">3×</span>
                <p className="text-[11px] text-slate-400 mt-0.5">Rapid Cellular Intake</p>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#00a3e0]">100%</span>
                <p className="text-[11px] text-slate-400 mt-0.5">Ionic Bioavailability</p>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#e4007c]">Zero</span>
                <p className="text-[11px] text-slate-400 mt-0.5">Chemical Aftertaste</p>
              </div>
            </div>
          </motion.div>

          {/* Bento Tile 2 (Spans 5 cols): Anti-Aging & Bioactive Silica */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 glass-card p-8 sm:p-10 rounded-3xl border border-[#00a3e0]/25 relative overflow-hidden group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#e4007c]/20 border border-[#e4007c]/30 flex items-center justify-center text-[#e4007c] mb-6">
                <Sparkles className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#e4007c] mb-2 block">
                Skin & Joint Radiance
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-3">
                Bioavailable Silica & <br />
                <span className="italic text-sky-300">Collagen Support</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
                Rich in 38.4 mg/L soluble orthosilicic acid (Natural Silica), which helps
                support natural collagen synthesis, skin elasticity, hair vitality, and
                joint lubrication naturally.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 font-light">
              <span className="text-[#00a3e0] font-semibold">Natural Mineral Fact:</span> Silica-rich
              spring water is nature's secret to glowing hydration and everyday rejuvenation.
            </div>
          </motion.div>

          {/* Bento Tile 3 (Spans 4 cols): Heart & Kidney Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 glass-card p-6 sm:p-8 rounded-3xl border border-[#00a3e0]/25 relative overflow-hidden group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#e4007c]/20 border border-[#e4007c]/30 flex items-center justify-center text-[#e4007c] mb-5">
              <Heart className="w-5 h-5 fill-current" />
            </div>

            <h4 className="font-serif text-xl sm:text-2xl font-normal text-white mb-2">
              Gentle Renal Balance
            </h4>

            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Gentle, balanced mineralization protects renal filtration.
              The harmonious calcium-magnesium matrix sustains normal electrolyte
              balance without excessive sodium.
            </p>
          </motion.div>

          {/* Bento Tile 4 (Spans 4 cols): Natural 7.6 pH Equilibrium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-4 glass-card p-6 sm:p-8 rounded-3xl border border-[#00a3e0]/25 relative overflow-hidden group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#00a3e0]/20 border border-[#00a3e0]/30 flex items-center justify-center text-sky-200 mb-5">
              <Shield className="w-5 h-5" />
            </div>

            <h4 className="font-serif text-xl sm:text-2xl font-normal text-white mb-2">
              Naturally Alkaline 7.6 pH
            </h4>

            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Unlike water artificially adjusted by electric ionization plates,
              Fern’s alkalinity comes from subterranean natural bicarbonates,
              smoothly balancing acidity with stable biological harmony.
            </p>
          </motion.div>

          {/* Bento Tile 5 (Spans 4 cols): Circulatory Vitality */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-4 glass-card p-6 sm:p-8 rounded-3xl border border-[#00a3e0]/25 relative overflow-hidden group"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-300 mb-5">
              <Zap className="w-5 h-5" />
            </div>

            <h4 className="font-serif text-xl sm:text-2xl font-normal text-white mb-2">
              All-Day Energy Vitality
            </h4>

            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Optimal hydration supports clear cognitive performance and physical
              endurance. Experience refreshing crispness that recharges your body through every hour.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
