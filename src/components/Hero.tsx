"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Droplets,
  ArrowRight,
  PhoneCall,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export const Hero: React.FC = () => {
  const { setIsDrawerOpen } = useCart();

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-8 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background Liquid Flow & Brand Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Fern Sky Cyan Ambient Radiant Glow */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#00a3e0]/15 rounded-full blur-[150px] animate-pulse-glow" />

        {/* Fern Signature Magenta Highlight Glow */}
        <div className="absolute bottom-1/4 right-1/4 w-[650px] h-[650px] bg-[#e4007c]/12 rounded-full blur-[160px] animate-pulse" />

        {/* Royal Blue Deep Aquifer Glow */}
        <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-[#1d4ed8]/18 rounded-full blur-[140px]" />

        {/* Liquid Contour Dots Mesh */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#00a3e0_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typography, Story, Proof Points, CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start"
        >

          {/* Master Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-normal tracking-tight text-white leading-[1.08] mb-6">
            Pure Nature in <br />
            <span className="italic font-light text-brand-gradient">
              Every Living Drop.
            </span>
          </h1>

          {/* Subheadline with Sourcing & Brand Integrity */}
          <p className="text-base sm:text-lg text-slate-300 max-w-xl font-light leading-relaxed mb-8">
            Sri Lanka’s trusted bottled drinking water, drawn 230 feet beneath the earth
            from a subterranean virgin aquifer in Kamburupitiya. Naturally filtered through
            ancient mineral-rich bedrock, delivering bioavailable silica, a serene 7.6 pH balance,
            and 100% untouched crystal refreshment.
          </p>

          {/* Dual CTAs & Action Ribbon */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase text-white bg-brand-gradient hover:brightness-110 active:scale-95 shadow-[0_10px_35px_rgba(0,163,224,0.4)] transition-all duration-300 group border border-white/20"
            >
              <Droplets className="w-4 h-4 fill-white" />
              <span>Order Fresh Water</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Direct Delivery Hotline Bar */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-8 glass-pill px-4 py-2 rounded-full border-white/10">
            <PhoneCall className="w-3.5 h-3.5 text-[#00a3e0]" />
            <span>Delivery Hotline:</span>
            <a
              href="tel:+94715165165"
              className="text-sky-300 font-bold hover:text-white transition font-mono"
            >
              +94 715 165 165
            </a>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Galle, Matara, Mirissa & Islandwide</span>
          </div>

          {/* Micro Proof Points Grid */}
          <div className="grid grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-white/10 w-full max-w-xl text-left">
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                230<span className="text-[#00a3e0] text-lg font-sans">ft</span>
              </div>
              <p className="text-[11px] text-slate-400 font-light mt-0.5">
                Virgin Aquifer
              </p>
            </div>
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#00a3e0]">
                7.6 <span className="text-xs font-sans font-normal text-slate-300">pH</span>
              </div>
              <p className="text-[11px] text-slate-400 font-light mt-0.5">
                Alkaline Balance
              </p>
            </div>
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#e4007c]">
                1992
              </div>
              <p className="text-[11px] text-slate-400 font-light mt-0.5">
                Heritage Year
              </p>
            </div>
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-semibold text-sky-300">
                0%
              </div>
              <p className="text-[11px] text-slate-400 font-light mt-0.5">
                Chemicals
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Clean Bottle PNG Visual (No frames or overlay boxes) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative flex items-center justify-center w-full"
        >
          {/* Subtle liquid depth glow behind the PNG image */}
          <div className="absolute w-[360px] sm:w-[520px] h-[360px] sm:h-[520px] bg-gradient-to-tr from-[#00a3e0]/20 via-[#e4007c]/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

          {/* Bottle PNG */}
          <div className="relative w-full max-w-[560px] flex items-center justify-center animate-float-slow">
            <Image
              src="/assets/fern_hero.png"
              alt="Fern Bottled Drinking Water Pure Spring Splash"
              width={800}
              height={533}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
              className="w-full h-auto object-contain drop-shadow-[0_20px_45px_rgba(0,163,224,0.35)] select-none"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
