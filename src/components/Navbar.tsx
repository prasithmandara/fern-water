"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { AmbientSoundToggle } from "@/components/AmbientSoundToggle";
import { ShoppingBag, Menu, X, PhoneCall, Sparkles, Droplets } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsDrawerOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Our Story", href: "#story" },
    { label: "The Source", href: "#source" },
    { label: "Products", href: "#products" },
    { label: "Cellular Health", href: "#health" },
    { label: "Sustainability", href: "#sustainability" },
    { label: "Outlets & Contact", href: "#outlets" },
  ];

  return (
    <>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled
          ? "glass-nav py-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.65)] border-[#00a3e0]/20"
          : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-1 bg-gradient-to-tr from-[#00a3e0]/30 to-[#e4007c]/20 border border-[#00a3e0]/40 backdrop-blur-md flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-[0_0_20px_rgba(0,163,224,0.3)]">
              <Image
                src="/assets/logo-transparent.png"
                alt="Fern Bottled Water Logo"
                width={42}
                height={42}
                className="w-full h-full object-contain filter drop-shadow"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.18em] font-bold text-white uppercase leading-none group-hover:text-sky-300 transition-colors">
                FERN
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#00a3e0] font-semibold mt-1">
                Natural Mineral Water
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-sky-300 transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00a3e0] to-[#e4007c] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Ambient Sound Controller */}
            <div className="hidden sm:block">
              <AmbientSoundToggle />
            </div>

            {/* Cart Button */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              aria-label="View Order Basket"
              className="relative p-2.5 rounded-full bg-white/5 hover:bg-[#00a3e0]/20 text-slate-200 hover:text-sky-300 border border-white/10 hover:border-[#00a3e0]/40 transition-all duration-300"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#e4007c] text-white font-bold text-[11px] rounded-full flex items-center justify-center animate-bounce shadow-md">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Order Fresh CTA */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-brand-gradient hover:brightness-110 active:scale-95 shadow-[0_0_25px_rgba(0,163,224,0.4)] transition-all duration-300 border border-white/20"
            >
              <Droplets className="w-3.5 h-3.5 fill-white" />
              <span>Order Fresh</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-sky-300 transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#050b14]/98 backdrop-blur-2xl transition-all duration-300 p-6 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <Image
                src="/assets/logo-transparent.png"
                alt="Fern Logo"
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
              <span className="font-serif text-2xl tracking-widest font-bold text-white uppercase">
                FERN WATER
              </span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-white/10 text-slate-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="py-4">
            <AmbientSoundToggle />
          </div>

          <nav className="flex flex-col gap-4 my-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-serif text-slate-100 hover:text-sky-300 py-2 border-b border-white/5 transition flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#00a3e0]/60 text-sm">→</span>
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsDrawerOpen(true);
              }}
              className="w-full py-3.5 rounded-full text-center font-bold text-sm tracking-wider uppercase text-white bg-brand-gradient shadow-lg"
            >
              Order Fresh Water
            </button>

            <a
              href="tel:+94715165165"
              className="w-full py-3 rounded-full text-center text-xs font-semibold tracking-wider uppercase text-sky-200 border border-[#00a3e0]/40 bg-[#00a3e0]/10 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#00a3e0]" />
              <span>Call Hotline: +94 715 165 165</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
