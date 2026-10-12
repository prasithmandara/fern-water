"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Send,
  Droplets,
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 4000);
  };

  return (
    <footer className="bg-[#020710] text-slate-300 pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-sky-950/60 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00a3e0]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#e4007c]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Newsletter Ribbon */}
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-[#00a3e0]/25 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#e4007c] mb-2 block flex items-center justify-center lg:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> The Fern Botanical Circle
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-2">
              Receive Hydration Insights & Bottling Releases
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              Join wellness devotees, boutique hoteliers, and culinary leaders receiving
              quarterly guides to optimal natural hydration.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="px-6 py-3 rounded-2xl bg-[#00a3e0]/20 border border-[#00a3e0]/40 text-sky-200 text-xs font-semibold flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00a3e0]" />
                <span>Welcome to the Fern Botanical Circle!</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-md"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your personal or business email..."
                  className="w-full px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00a3e0] transition"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-brand-gradient hover:brightness-110 active:scale-95 shadow transition flex items-center justify-center gap-1.5 shrink-0 border border-white/20"
                >
                  <Send className="w-3.5 h-3.5 fill-white" />
                  <span>Subscribe</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4-Column Footer Main Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Headquarters (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full p-1 bg-gradient-to-tr from-[#00a3e0]/30 to-[#e4007c]/20 border border-[#00a3e0]/40 flex items-center justify-center">
                <Image
                  src="/assets/logo-transparent.png"
                  alt="Fern Logo"
                  width={38}
                  height={38}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-widest text-white uppercase block">
                  FERN WATER
                </span>
                <span className="text-[10px] tracking-widest text-[#00a3e0] uppercase font-semibold">
                  Pure Nature in Every Drop • Since 1992
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              Sourced from a 230-foot virgin subterranean spring in Sri Lanka.
              Bottled by Duallink International (Pvt) Ltd with scientific precision
              and deep respect for nature’s purest resources.
            </p>

            <div className="text-xs text-slate-400 space-y-1 font-light pt-2">
              <p className="font-medium text-slate-300">
                Water Plant & Corporate Headquarters:
              </p>
              <p>No 104, Narandeniya, Kamburupitiya, Southern Province, Sri Lanka</p>
              <p>
                Hotline:{" "}
                <a href="tel:+94715165165" className="text-sky-300 hover:text-white transition font-mono font-bold">
                  +94 715 165 165
                </a>{" "}
                | Plant Phone: +94 41 229 2567
              </p>
              <p>WhatsApp: +94 71 477 2661</p>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00a3e0]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <a href="#story" className="hover:text-white transition">
                  Our Story (1992)
                </a>
              </li>
              <li>
                <a href="#source" className="hover:text-white transition">
                  230ft Virgin Spring
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition">
                  Product Formats
                </a>
              </li>
              <li>
                <a href="#health" className="hover:text-white transition">
                  Cellular Hydration
                </a>
              </li>
              <li>
                <a href="#sustainability" className="hover:text-white transition">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#outlets" className="hover:text-white transition">
                  Outlets & Depots
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Formats (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#e4007c]">
              Formats
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <a href="#products" className="hover:text-white transition">
                  500ml Glass Reserve
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition">
                  500ml Everyday Vitality
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition">
                  1000ml Signature Bottle
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition">
                  1500ml Active Splash
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition">
                  5L Culinary Canisters
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition">
                  18.5L Corporate Carboys
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition">
                  Hot & Cold Dispensers
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Certifications & Outlets (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-300">
              Certifications & Standards
            </h4>
            <div className="space-y-2 text-xs font-light text-slate-400">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#00a3e0] shrink-0" />
                <span>Registered with Ministry of Health, Sri Lanka</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[#e4007c] shrink-0" />
                <span>SLS & Microbiological Certified</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2.5">
                <Droplets className="w-4 h-4 text-[#00a3e0] shrink-0" />
                <span>100% Natural 7.6 pH Alkaline Balance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Developed By & Rights */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <p>© 2026 Fern Bottled Water | Duallink International (Pvt) Ltd. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-600">•</span>
            <p className="text-slate-400">
              Developed by{" "}
              <span className="font-semibold text-white tracking-wide hover:text-[#00a3e0] transition-colors">
                MLabs
              </span>
            </p>
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <a href="#" className="hover:text-slate-300 transition">Privacy Sanctuary</a>
            <a href="#" className="hover:text-slate-300 transition">Terms of Purity</a>
            <a href="#" className="hover:text-slate-300 transition">Laboratory Analysis</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
