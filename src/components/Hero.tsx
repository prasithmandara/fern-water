"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Droplets, Sparkles, Compass, ShieldCheck, ArrowRight, Play } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const Hero: React.FC = () => {
  const { setIsDrawerOpen } = useCart();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-6 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background Liquid Flow & Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-600/15 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-[#0b3b2d]/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 -right-20 w-[600px] h-[600px] bg-[#e6c875]/8 rounded-full blur-[150px]" />
        
        {/* Subtle SVG Wave / Liquid Contour Mesh */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typography & Story Hook */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          {/* Spring Origin Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill mb-6 border-emerald-500/30 text-emerald-300 text-xs tracking-wider uppercase font-medium shadow-[0_0_20px_rgba(16,185,129,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <Droplets className="w-3.5 h-3.5 text-emerald-400" />
            <span>230-Foot Virgin Spring • Sri Lanka</span>
          </motion.div>

          {/* Master Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-normal tracking-tight text-white leading-[1.08] mb-6">
            Pure Nature in <br />
            <span className="italic font-light text-emerald-gradient">
              Every Living Drop.
            </span>
          </h1>

          {/* Subheadline with Ancient Rainforest Sourcing Details */}
          <p className="text-base sm:text-lg text-slate-300 max-w-xl font-light leading-relaxed mb-8">
            Drawn from a subterranean virgin spring nestled 230 feet beneath Sri
            Lanka’s primordial Miocene-era rainforests. Filtered through centuries
            of untouched volcanic bedrock, capturing essential organic minerals, natural
            silica, and a serene 7.6 pH balance.
          </p>

          {/* Dual CTAs & Action Ribbon */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase text-[#061a14] bg-gradient-to-r from-emerald-400 via-emerald-300 to-[#e6c875] hover:brightness-110 active:scale-95 shadow-[0_10px_35px_rgba(16,185,129,0.35)] transition-all duration-300 group"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#source"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-medium text-sm text-slate-200 glass-card-hover border border-white/15 hover:border-emerald-400/40 hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-400 group-hover:text-[#061a14] transition-colors">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span>Experience The Source</span>
            </a>
          </div>

          {/* Micro Proof Points */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 w-full max-w-lg text-left">
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                230<span className="text-emerald-400 text-lg">ft</span>
              </div>
              <p className="text-xs text-slate-400 font-light mt-0.5">
                Subterranean Virgin Aquifer
              </p>
            </div>
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#e6c875]">
                7.6 <span className="text-sm font-sans font-normal text-slate-300">pH</span>
              </div>
              <p className="text-xs text-slate-400 font-light mt-0.5">
                Naturally Balanced Alkalinity
              </p>
            </div>
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-semibold text-emerald-400">
                0%
              </div>
              <p className="text-xs text-slate-400 font-light mt-0.5">
                Chemicals & Chlorine
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D-Style Bottle Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative flex items-center justify-center"
        >
          {/* Animated Water Ripples Radiating Around the Showcase */}
          <div className="absolute w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full border border-emerald-500/20 animate-ripple pointer-events-none" />
          <div className="absolute w-[260px] sm:w-[380px] h-[260px] sm:h-[380px] rounded-full border border-emerald-400/25 animate-ripple [animation-delay:1.5s] pointer-events-none" />

          {/* Central Bottle Container with Floating Physics */}
          <div className="relative z-10 w-full max-w-[460px] group">
            {/* Ambient Backlight Behind Bottle */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 via-emerald-400/10 to-transparent blur-2xl rounded-3xl -z-10 group-hover:scale-105 transition-transform duration-700" />

            <div className="relative rounded-3xl overflow-hidden glass-card p-4 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-emerald-500/25">
              <div className="relative aspect-[4/3] sm:aspect-[4/3.2] w-full rounded-2xl overflow-hidden shadow-inner">
                <Image
                  src="/assets/fern_luxury_hero.jpg"
                  alt="Fern Bottled Water Luxury 750ml Bottle in Rainforest Spring"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  priority
                />
                
                {/* Wet Sheen & Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061a14]/90 via-[#061a14]/20 to-transparent" />

                {/* Floating Interactive Micro-Pills */}
                <div className="absolute top-4 left-4">
                  <span className="glass-pill px-3 py-1 rounded-full text-[11px] font-medium text-emerald-300 border-emerald-500/30 flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3 h-3 text-[#e6c875]" /> Hand-Bottled at Spring
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="glass-pill px-3 py-1 rounded-full text-[11px] font-medium text-slate-200 border-white/20 flex items-center gap-1.5 shadow-lg">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Ministry of Health Registered
                  </span>
                </div>

                {/* Floating Bottom Card: Composition Highlight */}
                <div className="absolute bottom-4 inset-x-4 glass-card p-3.5 rounded-xl border border-emerald-500/30 flex items-center justify-between shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 font-serif font-bold text-lg">
                      7.6
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white tracking-wide">
                        Optimal pH Equilibrium
                      </div>
                      <div className="text-[11px] text-slate-300">
                        Rich in Bioavailable Silica (SiO₂)
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsDrawerOpen(true)}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#061a14] bg-emerald-400 hover:bg-emerald-300 transition shadow"
                  >
                    Order
                  </button>
                </div>
              </div>

              {/* Caption Banner */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-300 px-2">
                <span className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-emerald-400" /> Kamburupitiya, Southern Province
                </span>
                <span className="text-emerald-400 font-medium">
                  Zero Human Touch Before Capping
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
