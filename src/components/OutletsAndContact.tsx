"use client";

import React, { useState } from "react";
import { OUTLETS } from "@/data/products";
import { OutletInfo } from "@/types";
import {
  MapPin,
  Phone,
  MessageCircle,
  Send,
  Building,
  CheckCircle2,
} from "lucide-react";

export const OutletsAndContact: React.FC = () => {
  const [selectedOutlet, setSelectedOutlet] = useState<OutletInfo>(OUTLETS[0]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    purpose: "Home & Villa Delivery",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        purpose: "Home & Villa Delivery",
        message: "",
      });
    }, 4000);
  };

  return (
    <section id="outlets" className="py-28 px-4 sm:px-6 lg:px-8 relative bg-[#050b14] overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-[#00a3e0]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#e4007c]/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-sky-300 mb-4 border-[#00a3e0]/30 shadow-[0_0_15px_rgba(0,163,224,0.15)]">
            <MapPin className="w-3.5 h-3.5 text-[#00a3e0]" />
            <span>Distribution Network & Direct Touchpoints</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-6">
            Purity Delivered to Your Table, <br />
            <span className="italic font-light text-brand-gradient">
              Across Sri Lanka.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            From our virgin spring bottling facility in Narandeniya, Kamburupitiya to premium
            boutique resorts, dining venues, and residences along the Southern coastline and beyond.
          </p>
        </div>

        {/* Outlets Grid & Interactive Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Outlets List (Left 6 Cols) */}
          <div className="lg:col-span-6 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center justify-between">
              <span>Regional Outlets & Distribution Depots</span>
              <span className="text-[#00a3e0] text-xs font-mono font-normal">
                7 Active Centers
              </span>
            </h3>

            {OUTLETS.map((outlet, idx) => {
              const isSelected = selectedOutlet.city === outlet.city;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedOutlet(outlet)}
                  className={`w-full p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border flex items-center justify-between ${isSelected
                      ? "bg-gradient-to-r from-[#00a3e0]/25 to-[#e4007c]/15 border-[#00a3e0] text-white shadow-[0_0_25px_rgba(0,163,224,0.25)]"
                      : "bg-white/5 border-white/10 text-slate-300 hover:border-[#00a3e0]/30 hover:bg-white/10"
                    }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`p-2.5 rounded-xl ${isSelected
                          ? "bg-brand-gradient text-white"
                          : "bg-white/10 text-slate-300"
                        }`}
                    >
                      {outlet.isHeadquarters ? (
                        <Building className="w-4 h-4" />
                      ) : (
                        <MapPin className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <div className="font-medium text-sm text-white flex items-center gap-2">
                        {outlet.city}
                        {outlet.isHeadquarters && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#e4007c]/20 text-[#e4007c] border border-[#e4007c]/30 font-semibold">
                            HQ & Plant
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-300 font-light mt-0.5 line-clamp-1">
                        {outlet.address}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-[#00a3e0] font-medium shrink-0 ml-2">
                    {outlet.phone}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Contact / Inquiry Card (Right 6 Cols) */}
          <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-[#00a3e0]/30 shadow-2xl relative">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-[#e4007c] uppercase block">
                  Quick Communication
                </span>
                <h4 className="font-serif text-2xl font-normal text-white mt-1">
                  Connect with Fern Bottled Water
                </h4>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block">Direct Hotline:</span>
                <a
                  href="tel:+94715165165"
                  className="font-mono text-[#00a3e0] font-bold hover:underline"
                >
                  +94 715 165 165
                </a>
              </div>
            </div>

            {/* Quick Action Ribbon */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <a
                href={`https://wa.me/94714772661?text=Hello%20Fern%20Water,%20I%20would%20like%20to%20inquire%20about%20ordering%20natural%20mineral%20water%20for%20${encodeURIComponent(
                  selectedOutlet.city
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:${selectedOutlet.phone.replace(/[^0-9+]/g, "")}`}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider transition hover:border-[#00a3e0]/40"
              >
                <Phone className="w-4 h-4 text-[#00a3e0]" />
                <span>Call {selectedOutlet.city.split(" ")[0]}</span>
              </a>
            </div>

            {/* Contact Form */}
            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-[#00a3e0]/20 border border-[#00a3e0]/40 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#00a3e0] mx-auto animate-bounce" />
                <h5 className="font-serif text-2xl font-normal text-white">
                  Inquiry Dispatched Successfully!
                </h5>
                <p className="text-xs text-slate-200 font-light max-w-md mx-auto">
                  Thank you for connecting with Fern Bottled Water. Our customer concierge
                  team at Duallink International will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priyantha Silva"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00a3e0] transition"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                      Phone / Mobile
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +94 77 123 4567"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00a3e0] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00a3e0] transition"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                      Inquiry Purpose
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#09172c] border border-white/10 text-white text-xs focus:outline-none focus:border-[#00a3e0] transition"
                    >
                      <option>Home & Villa Delivery</option>
                      <option>Hotel / Dining Supply</option>
                      <option>Corporate Office Subscription</option>
                      <option>Wholesale & Export Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                    Requirements & Delivery Address
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify bottle types (e.g., 500ml Vitality, 1000ml Signature, 18.5L Carboys), quantities, and preferred city..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00a3e0] transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-brand-gradient hover:brightness-110 active:scale-95 shadow-lg transition flex items-center justify-center gap-2 border border-white/20"
                >
                  <Send className="w-3.5 h-3.5 fill-white" />
                  <span>Send Direct Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
