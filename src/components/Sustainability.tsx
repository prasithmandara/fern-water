"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, RefreshCw, Sun, ShieldCheck, TreePine, Droplets } from "lucide-react";

export const Sustainability: React.FC = () => {
  const commitments = [
    {
      icon: RefreshCw,
      title: "Closed-Loop Refillable Glass",
      description:
        "Our heavy-base glass dining bottles are collected, sterilized through ozonated pure spring water washes, and refilled, significantly cutting single-use waste.",
    },
    {
      icon: Droplets,
      title: "Zero Aquifer Depletion",
      description:
        "We harvest strictly within the natural replenishment cycle of our 230-foot virgin subterranean spring, guaranteeing perpetual aquifer integrity for future generations.",
    },
    {
      icon: Sun,
      title: "Solar-Augmented Bottling Plant",
      description:
        "Our facility in Kamburupitiya harnesses solar energy to power precision bottling lines, clean-room HEPA air filtration, and laboratory testing equipment.",
    },
    {
      icon: TreePine,
      title: "Rainforest Watershed Protection",
      description:
        "We actively sponsor indigenous Sri Lankan tree and giant fern replanting programs across Southern rainforest borders to nurture natural rainfall capture.",
    },
  ];

  return (
    <section id="sustainability" className="py-28 px-4 sm:px-6 lg:px-8 relative bg-[#040a14] overflow-hidden border-t border-sky-950/40">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#00a3e0]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#e4007c]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-sky-300 mb-4 border-[#00a3e0]/30 shadow-[0_0_15px_rgba(0,163,224,0.15)]">
            <Leaf className="w-3.5 h-3.5 text-[#00a3e0]" />
            <span>Ecological Stewardship</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-6">
            Guarding the Rainforest, <br />
            <span className="italic font-light text-brand-gradient">
              One Refill at a Time.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            True quality honors its origin. At Fern, every drop bottled is matched
            by a commitment to protect the ancient Sri Lankan environment that gives it life.
          </p>
        </div>

        {/* 4-Column Eco Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 sm:p-7 rounded-3xl border border-[#00a3e0]/20 hover:border-[#00a3e0]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#00a3e0]/15 border border-[#00a3e0]/30 flex items-center justify-center text-sky-200 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-normal text-white mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Big Eco Pledge Banner with Panoramic Rainforest Imagery */}
        <div className="relative rounded-3xl overflow-hidden glass-card border border-[#00a3e0]/30 p-8 sm:p-12 shadow-2xl">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#e4007c] mb-2 block">
              100% Recyclable Packaging & Pure Bottling
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white mb-4 leading-tight">
              A Pact with Nature’s Future
            </h3>

            <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
              Our packaging is crafted from either infinitely recyclable glass or
              certified BPA-free food grade PET that conforms to environmental recycling standards.
              We invite hospitality partners to participate in our closed-loop bottle return program.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs text-sky-200 font-medium">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00a3e0]" /> BPA-Free Certified
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#e4007c]" /> Closed Loop Glass Program
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00a3e0]" /> Ministry of Health Registered
              </span>
            </div>
          </div>

          {/* Background image overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-25 lg:opacity-35 pointer-events-none">
            <Image
              src="/assets/fern_rainforest_sanctuary.jpg"
              alt="Rainforest Background"
              fill
              className="object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#040a14] via-[#040a14]/85 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
