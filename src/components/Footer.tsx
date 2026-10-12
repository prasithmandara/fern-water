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
    <footer className="bg-[#030f0b] text-slate-300 pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-emerald-950/60 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Newsletter & Botanical Circle Ribbon */}
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-emerald-500/25 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#e6c875] mb-2 block flex items-center justify-center lg:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> The Fern Botanical Circle
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-2">
              Receive Cellular Hydration Insights & Private Harvest Releases
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              Join wellness devotees, luxury hoteliers, and culinary artists receiving
              quarterly guides to optimal biological hydration.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="px-6 py-3 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
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
                  className="w-full px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-400 transition"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#061a14] bg-gradient-to-r from-emerald-400 to-[#e6c875] hover:brightness-110 active:scale-95 shadow transition flex items-center justify-center gap-1.5 shrink-0"
                >
                  <Send className="w-3.5 h-3.5 fill-[#061a14]" />
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
              <div className="w-10 h-10 rounded-full p-1 bg-gradient-to-tr from-emerald-500/30 to-white/10 border border-emerald-500/30 flex items-center justify-center">
                <Image
                  src="/assets/logo-transparent.png"
                  alt="Fern Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-widest text-white uppercase block">
                  FERN WATER
                </span>
                <span className="text-[10px] tracking-widest text-emerald-400 uppercase font-semibold">
                  Pure Nature in Every Drop
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              Sourced from a 230-foot virgin subterranean spring in Sri Lanka’s
              Miocene rainforests. Bottled by Duallink International Pvt Ltd with
              pure scientific integrity and generational respect for nature.
            </p>

            <div className="text-xs text-slate-400 space-y-1 font-light pt-2">
              <p className="font-medium text-slate-300">
                Water Plant & Corporate Headquarters:
              </p>
              <p>No 104, Narandeniya, Kamburupitiya, Southern Province, Sri Lanka</p>
              <p>Hotline: +94 715 165 165 | Phone: +94 41 229 2567</p>
              <p>WhatsApp: +94 71 477 2661</p>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <a href="#story" className="hover:text-white transition">
                  Our 1818 Heritage
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
                  Rainforest Sanctuary
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
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#e6c875]">
              Formats
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <a href="#products" className="hover:text-white transition">
                  500ml Glass Dining Edition
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
                  1500ml Endurance Bottle
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition">
                  5L & 9.5L Canisters
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
              Certifications & Purity
            </h4>
            <div className="space-y-2 text-xs font-light text-slate-400">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Registered by Ministry of Health, Sri Lanka</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[#e6c875] shrink-0" />
                <span>Strict SLS & Microbiological Compliance</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2.5">
                <Droplets className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Natural 7.6 pH Alkaline Balance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Fern Bottled Water | Duallink International Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[11px]">
            <a href="#" className="hover:text-slate-300 transition">Privacy Sanctuary</a>
            <a href="#" className="hover:text-slate-300 transition">Terms of Purity</a>
            <a href="#" className="hover:text-slate-300 transition">Laboratory Reports</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
