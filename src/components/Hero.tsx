"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Droplets,
  Sparkles,
  Compass,
  ShieldCheck,
  ArrowRight,
  Play,
  PhoneCall,
  Check,
  Plus,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";

const HERO_VARIANTS = [
  {
    id: "splash",
    title: "1.5L Active Splash",
    volume: "1500ml",
    image: "/assets/fern_water_bottle_with-water.png",
    subtitle: "Endurance & Whole-Day Pure Hydration",
    tag: "Signature Splash",
    ph: "7.6",
    price: "LKR 260",
    isTransparentCutout: true,
  },
  {
    id: "1000ml",
    title: "1L Signature Bottle",
    volume: "1000ml",
    image: "/assets/fern_1000ml_water_bottle.jpeg",
    subtitle: "Sri Lanka's Trusted Daily Balance",
    tag: "Most Popular 1L",
    ph: "7.6",
    price: "LKR 200",
    isTransparentCutout: false,
  },
  {
    id: "500ml",
    title: "500ml Everyday Vitality",
    volume: "500ml",
    image: "/assets/fern_500ml_bottled_water.jpeg",
    subtitle: "Pocket & Commuter Spring Hydration",
    tag: "On-The-Go",
    ph: "7.6",
    price: "LKR 120",
    isTransparentCutout: false,
  },
  {
    id: "glass",
    title: "500ml Glass Dining Reserve",
    volume: "500ml",
    image: "/assets/fern_glass_dining.jpg",
    subtitle: "Eco Fine Dining Heavyweight Glass",
    tag: "Refillable Glass",
    ph: "7.6",
    price: "LKR 350",
    isTransparentCutout: false,
  },
];

export const Hero: React.FC = () => {
  const { setIsDrawerOpen, addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(HERO_VARIANTS[0]);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAddHeroProduct = () => {
    const matched = PRODUCTS.find((p) => p.volume.includes(selectedVariant.volume.split(" ")[0]));
    if (matched) {
      addItem(matched);
    } else {
      addItem(PRODUCTS[0]);
    }
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

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

        {/* Right Column: Flawless Interactive Bottle Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative flex flex-col items-center justify-center"
        >
          {/* Animated Water Ripples Radiating Around the Showcase */}
          <div className="absolute w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] rounded-full border border-[#00a3e0]/20 animate-ripple pointer-events-none" />
          <div className="absolute w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] rounded-full border border-[#e4007c]/25 animate-ripple [animation-delay:1.5s] pointer-events-none" />

          {/* Central Bottle Container */}
          <div className="relative z-10 w-full max-w-[480px]">
            {/* Ambient Backlight Behind Bottle */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#00a3e0]/25 via-[#e4007c]/15 to-transparent blur-3xl rounded-3xl -z-10" />

            {/* Showcase Main Glass Container */}
            <div className="relative rounded-3xl overflow-hidden glass-card p-4 sm:p-6 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)] border border-[#00a3e0]/30">
              {/* Product Visual Area */}
              <div className="relative aspect-[4/3.4] w-full rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-b from-sky-950/20 via-black/40 to-[#050b14]/90 border border-white/5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedVariant.id}
                    initial={{ opacity: 0, scale: 0.92, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: -10 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full h-full flex items-center justify-center p-2"
                  >
                    {selectedVariant.isTransparentCutout ? (
                      /* Dynamic Cutout Bottle with Water Splash */
                      <div className="relative w-full h-full flex items-center justify-center animate-float-slow">
                        <Image
                          src={selectedVariant.image}
                          alt="Fern Bottled Water Active Splash"
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-contain object-center drop-shadow-[0_20px_35px_rgba(0,163,224,0.4)]"
                          priority
                        />
                      </div>
                    ) : (
                      /* Real Bottle Photographic Presentation */
                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <Image
                          src={selectedVariant.image}
                          alt={selectedVariant.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/85 via-transparent to-black/20" />
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Floating Bottom Card: Composition & Quick Add */}
                <div className="absolute bottom-3 inset-x-3 glass-card p-3 rounded-xl border border-[#00a3e0]/30 flex items-center justify-between shadow-2xl z-20 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00a3e0]/20 to-[#e4007c]/20 border border-[#00a3e0]/40 flex items-center justify-center text-sky-200 font-serif font-bold text-base">
                      {selectedVariant.ph}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white tracking-wide">
                        {selectedVariant.title}
                      </div>
                      <div className="text-[11px] text-sky-300 flex items-center gap-1">
                        <span>{selectedVariant.price}</span>
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-300">{selectedVariant.volume}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleAddHeroProduct}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 shadow ${addedAnimation
                      ? "bg-[#00a3e0] text-white shadow-[0_0_15px_rgba(0,163,224,0.6)]"
                      : "bg-brand-gradient text-white hover:brightness-110 active:scale-95"
                      }`}
                  >
                    {addedAnimation ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Interactive Variant Selector Strip */}
              <div className="mt-4">
                <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-2 px-1 flex items-center justify-between">
                  <span>Select Bottle Format:</span>
                  <span className="text-[#00a3e0] font-mono">{selectedVariant.tag}</span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {HERO_VARIANTS.map((v) => {
                    const isSelected = selectedVariant.id === v.id;
                    return (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVariant(v)}
                        className={`p-2 rounded-xl text-center transition-all duration-300 border ${isSelected
                          ? "bg-gradient-to-b from-[#00a3e0]/25 to-[#e4007c]/15 border-[#00a3e0] text-white shadow-[0_0_15px_rgba(0,163,224,0.3)]"
                          : "bg-white/5 border-white/10 text-slate-400 hover:border-[#00a3e0]/40 hover:text-white"
                          }`}
                      >
                        <div className="text-[11px] font-semibold truncate">{v.volume}</div>
                        <div className="text-[9px] text-slate-400 truncate">{v.price}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Caption Banner */}
              <div className="mt-3.5 flex items-center justify-between text-xs text-slate-300 px-1 border-t border-white/10 pt-3">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Compass className="w-3.5 h-3.5 text-[#00a3e0]" /> Kamburupitiya, Southern Province
                </span>
                <span className="text-[#00a3e0] font-medium text-[11px]">
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
