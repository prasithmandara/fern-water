"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CheckCircle2, ShieldAlert, Award, Droplets } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const MineralModal: React.FC = () => {
  const { selectedMineralProduct, setSelectedMineralProduct, addItem, setIsDrawerOpen } =
    useCart();

  if (!selectedMineralProduct) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedMineralProduct(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#061a14] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.9)] z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedMineralProduct(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            <Sparkles className="w-4 h-4 text-[#e6c875]" />
            <span>Certified Laboratory Mineral Analysis</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-2">
            {selectedMineralProduct.name}
          </h3>
          <p className="text-sm text-slate-300 font-light mb-6">
            Drawn from the 230-foot virgin spring in Kamburupitiya. Certified by
            the Ministry of Health, Sri Lanka.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/20">
            <div className="text-center">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                Alkaline pH
              </span>
              <span className="font-serif text-2xl font-bold text-emerald-300">
                7.6
              </span>
              <span className="text-[10px] text-emerald-400/80 block mt-0.5">
                Optimal Body Match
              </span>
            </div>
            <div className="text-center border-x border-white/10">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                Total Dissolved Solids
              </span>
              <span className="font-serif text-2xl font-bold text-[#e6c875]">
                198 <span className="text-xs font-sans">mg/L</span>
              </span>
              <span className="text-[10px] text-[#e6c875]/80 block mt-0.5">
                Velvety Crisp Taste
              </span>
            </div>
            <div className="text-center">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                Chemical Additives
              </span>
              <span className="font-serif text-2xl font-bold text-white">
                0.0%
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                100% Raw Nature
              </span>
            </div>
          </div>

          {/* Mineral Progress Bars */}
          <div className="space-y-4 mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Essential Mineral Matrix Breakdown
            </h4>

            {selectedMineralProduct.minerals.map((mineral) => (
              <div
                key={mineral.name}
                className="p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition"
              >
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <span className="font-medium text-white flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
                      {mineral.symbol}
                    </span>
                    {mineral.name}
                  </span>
                  <span className="font-mono text-emerald-300 font-bold">
                    {mineral.amount} {mineral.unit}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden mb-1.5">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 to-[#e6c875] rounded-full"
                    style={{ width: `${mineral.percentage}%` }}
                  />
                </div>

                <p className="text-[11px] text-slate-300 font-light leading-relaxed">
                  {mineral.description}
                </p>
              </div>
            ))}
          </div>

          {/* Comparative Notice: Reverse Osmosis vs Fern Spring Water */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 text-xs space-y-2">
            <div className="font-semibold text-white flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#e6c875]" />
              <span>Why Natural Spring Water Trumps Industrial RO Water</span>
            </div>
            <p className="text-slate-300 font-light leading-relaxed">
              Industrial reverse-osmosis filtration strips away beneficial ions,
              leaving "dead" acidic water that robs minerals from human bones.
              Fern is living, organic water enriched over centuries by volcanic basalt
              and quartz, providing natural electrolytes that hydrate your trillions of cells instantly.
            </p>
          </div>

          {/* Bottom Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div>
              <span className="text-xs text-slate-400 block">Unit Price:</span>
              <span className="font-serif text-2xl font-bold text-white">
                LKR {selectedMineralProduct.priceLKR.toLocaleString()}{" "}
                <span className="text-xs font-sans font-normal text-slate-400">
                  (~${selectedMineralProduct.priceUSD.toFixed(2)})
                </span>
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => setSelectedMineralProduct(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-medium text-slate-300 hover:text-white border border-white/10 hover:bg-white/5 transition"
              >
                Close
              </button>
              <button
                onClick={() => {
                  addItem(selectedMineralProduct);
                  setSelectedMineralProduct(null);
                  setIsDrawerOpen(true);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#061a14] bg-gradient-to-r from-emerald-400 to-[#e6c875] hover:brightness-110 active:scale-95 shadow-lg flex items-center justify-center gap-2"
              >
                <Droplets className="w-3.5 h-3.5 fill-[#061a14]" />
                <span>Add To Order</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
