"use client";

import React from "react";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SourceScrollytelling } from "@/components/SourceScrollytelling";
import { ProductShowcase } from "@/components/ProductShowcase";
import { HealthBenefits } from "@/components/HealthBenefits";
import { OurStory } from "@/components/OurStory";
import { Sustainability } from "@/components/Sustainability";
import { OutletsAndContact } from "@/components/OutletsAndContact";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { OrderDrawer } from "@/components/OrderDrawer";
import { MineralModal } from "@/components/MineralModal";

export default function Home() {
  return (
    <CartProvider>
      <div className="relative min-h-screen bg-[#061a14] text-[#f1f5f9] selection:bg-[#10b981] selection:text-[#061a14]">
        {/* Sticky Glassmorphic Header */}
        <Navbar />

        {/* Hero Section */}
        <main>
          <Hero />

          {/* Sourcing & Geological Filtration */}
          <SourceScrollytelling />

          {/* Product Formats & Mineral Inspector */}
          <ProductShowcase />

          {/* Cellular Health & Bento Grid */}
          <HealthBenefits />

          {/* Heritage Story (1818 to Present) */}
          <OurStory />

          {/* Rainforest Conservation & Eco Commitments */}
          <Sustainability />

          {/* Regional Outlets & Wholesale Inquiries */}
          <OutletsAndContact />

          {/* FAQ Section */}
          <FaqSection />
        </main>

        {/* Rich Footer */}
        <Footer />

        {/* Interactive Modals and Drawers */}
        <OrderDrawer />
        <MineralModal />
      </div>
    </CartProvider>
  );
}
