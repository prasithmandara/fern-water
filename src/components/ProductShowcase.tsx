"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/data/products";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { Droplet, Sparkles, Eye, Plus, ShoppingBag, Check } from "lucide-react";

export const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const { addItem, setSelectedMineralProduct, setIsDrawerOpen } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  const filterCategories = [
    { id: "all", label: "Complete Collection" },
    { id: "luxury-dining", label: "Glass Edition (Fine Dining)" },
    { id: "everyday", label: "Everyday Vitality (500ml - 1.5L)" },
    { id: "bulk-office", label: "Canisters & Bulk (5L - 18.5L)" },
    { id: "dispensers", label: "Dispensers & Hardware" },
  ];

  const filteredProducts =
    activeTab === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeTab);

  const handleQuickAdd = (product: Product) => {
    addItem(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section id="products" className="py-28 px-4 sm:px-6 lg:px-8 relative bg-[#061a14] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#0b3b2d]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-4 border-emerald-500/20">
              <Sparkles className="w-3.5 h-3.5 text-[#e6c875]" />
              <span>Pure Natural Formats</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight">
              Crafted for Every Ritual, <br />
              <span className="italic font-light text-emerald-gradient">
                From Table to Trek.
              </span>
            </h2>
          </div>

          <p className="text-slate-300 text-sm sm:text-base font-light max-w-md leading-relaxed">
            Every bottle is filled under sealed atmospheric conditions at our
            Kamburupitiya virgin spring, preserving biological purity and minerals.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {filterCategories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-300 border ${
                activeTab === tab.id
                  ? "bg-emerald-400 text-[#061a14] border-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.35)]"
                  : "bg-white/5 text-slate-300 border-white/10 hover:border-emerald-500/30 hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isAdded = addedId === product.id;

            return (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl glass-card overflow-hidden flex flex-col justify-between border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 shadow-xl"
              >
                {/* Image Showcase Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle glass gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061a14] via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    {product.badge && (
                      <span className="glass-pill px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-[#e6c875] border-[#e6c875]/30">
                        {product.badge}
                      </span>
                    )}
                    <span className="glass-pill px-3 py-1 rounded-full text-[11px] font-semibold text-emerald-300 border-emerald-500/30 ml-auto">
                      pH {product.ph}
                    </span>
                  </div>

                  {/* Hover Quick Action: Mineral Inspector */}
                  <button
                    onClick={() => setSelectedMineralProduct(product)}
                    className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full text-xs font-medium text-white glass-pill hover:bg-emerald-500/20 hover:border-emerald-400 transition-all duration-300 flex items-center gap-1.5 shadow-lg backdrop-blur-md"
                  >
                    <Eye className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Mineral Analysis</span>
                  </button>
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-xs font-mono font-medium text-emerald-400 tracking-wider uppercase">
                        {product.volume}
                      </span>
                      <span className="text-xs text-slate-400">
                        {product.packaging}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-normal text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-xs text-slate-300 font-light leading-relaxed mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Feature Bullets */}
                    <ul className="space-y-1.5 mb-6 text-xs text-slate-300 font-light">
                      {product.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & Add to Order Bar */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                        Price
                      </div>
                      <div className="font-serif text-xl sm:text-2xl font-bold text-white">
                        LKR {product.priceLKR.toLocaleString()}{" "}
                        <span className="text-xs font-sans font-normal text-slate-400">
                          (~${product.priceUSD.toFixed(2)})
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedMineralProduct(product)}
                        title="View Minerals"
                        className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:border-emerald-500/30 transition"
                      >
                        <Eye className="w-4 h-4 text-emerald-400" />
                      </button>

                      <button
                        onClick={() => handleQuickAdd(product)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                          isAdded
                            ? "bg-emerald-500 text-[#061a14] shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                            : "bg-emerald-400 hover:bg-emerald-300 text-[#061a14] hover:shadow-lg active:scale-95"
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Added!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            <span>Add</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bulk & Hospitality Special Notice Banner */}
        <div className="mt-16 p-8 rounded-3xl glass-card border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#e6c875] mb-2 block">
              Luxury Hospitality & Corporate Supply
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-2">
              Bespoke Dining Editions & Recurring Estate Delivery
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              We supply luxury boutique resorts in Galle Fort, Mirissa, and Colombo,
              as well as embassies and corporate headquarters with scheduled refills,
              returnable carboys, and bespoke branded glass editions.
            </p>
          </div>

          <button
            onClick={() => setIsDrawerOpen(true)}
            className="shrink-0 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#061a14] bg-gradient-to-r from-emerald-400 to-[#e6c875] hover:brightness-110 active:scale-95 shadow-lg transition"
          >
            Request Corporate / Dining Supply
          </button>
        </div>
      </div>
    </section>
  );
};
