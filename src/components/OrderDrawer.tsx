"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  MessageCircle,
  Truck,
  CheckCircle,
} from "lucide-react";

export const OrderDrawer: React.FC = () => {
  const {
    items,
    addItem,
    removeItem,
    deleteItem,
    clearCart,
    totalItems,
    totalAmountLKR,
    isDrawerOpen,
    setIsDrawerOpen,
    triggerCelebration,
  } = useCart();

  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [orderCompleted, setOrderCompleted] = useState(false);

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    let text = `*New Order - FERN Bottled Water*\n`;
    text += `Customer: ${customerName || "Customer"}\n`;
    text += `Phone: ${customerPhone || "Not specified"}\n`;
    text += `Delivery Address: ${deliveryAddress || "Standard delivery"}\n\n`;
    text += `*Ordered Items:*\n`;

    items.forEach((item, index) => {
      text += `${index + 1}. ${item.product.name} (${item.product.volume}) x ${
        item.quantity
      } = LKR ${(item.product.priceLKR * item.quantity).toLocaleString()}\n`;
    });

    text += `\n*Total Estimated Amount: LKR ${totalAmountLKR.toLocaleString()}*\n`;
    text += `Please confirm dispatch schedule and availability. Thank you!`;

    const encoded = encodeURIComponent(text);
    triggerCelebration();
    window.open(`https://wa.me/94714772661?text=${encoded}`, "_blank");
  };

  const handleWebCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    triggerCelebration();
    setOrderCompleted(true);
    setTimeout(() => {
      clearCart();
      setOrderCompleted(false);
      setIsDrawerOpen(false);
    }, 4500);
  };

  if (!isDrawerOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsDrawerOpen(false)}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
        />

        {/* Drawer Window */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 28, stiffness: 240 }}
          className="relative w-full max-w-md bg-[#050b14] border-l border-[#00a3e0]/30 h-full flex flex-col justify-between shadow-2xl z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#00a3e0]/20 border border-[#00a3e0]/40 flex items-center justify-center text-sky-200">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-normal text-white">
                  Fresh Spring Order Basket
                </h3>
                <span className="text-xs text-slate-400">
                  {totalItems} item{totalItems === 1 ? "" : "s"} selected
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Contents */}
          <div className="p-6 overflow-y-auto flex-1 space-y-4">
            {orderCompleted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle className="w-16 h-16 text-[#00a3e0] mx-auto animate-bounce" />
                <h4 className="font-serif text-2xl font-normal text-white">
                  Order Successfully Registered!
                </h4>
                <p className="text-xs text-slate-300 font-light max-w-xs mx-auto">
                  Our dispatch logistics department in Narandeniya, Kamburupitiya has received
                  your delivery schedule. We will contact your phone number to coordinate arrival.
                </p>
              </div>
            ) : items.length === 0 ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-slate-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-xl font-normal text-white">
                  Your Basket is Empty
                </h4>
                <p className="text-xs text-slate-400 font-light max-w-xs mx-auto">
                  Select your desired hydration formats from our natural spring water collection.
                </p>

                {/* Quick Add Recommendations */}
                <div className="pt-4 text-left">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#e4007c] block mb-3">
                    Recommended Formats:
                  </span>
                  <div className="space-y-2">
                    {PRODUCTS.slice(0, 3).map((p) => (
                      <div
                        key={p.id}
                        className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between hover:border-[#00a3e0]/30 transition"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0">
                            <Image
                              src={p.image}
                              alt={p.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="text-xs font-medium text-white line-clamp-1">
                              {p.name}
                            </div>
                            <div className="text-[10px] text-slate-400">
                              LKR {p.priceLKR}
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => addItem(p)}
                          className="px-3 py-1 rounded-lg text-xs font-bold text-white bg-brand-gradient hover:brightness-110 transition"
                        >
                          Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3"
                  >
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-white/10">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-semibold text-white truncate">
                        {item.product.name}
                      </h4>
                      <div className="text-[11px] text-[#00a3e0] font-mono">
                        LKR {item.product.priceLKR.toLocaleString()} each
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="p-1 rounded-md bg-white/10 hover:bg-white/20 text-slate-200 transition"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-mono font-bold text-white px-2">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => addItem(item.product)}
                          className="p-1 rounded-md bg-white/10 hover:bg-white/20 text-slate-200 transition"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-serif text-sm font-bold text-white">
                        LKR {(item.product.priceLKR * item.quantity).toLocaleString()}
                      </div>
                      <button
                        onClick={() => deleteItem(item.product.id)}
                        className="p-1.5 text-slate-500 hover:text-rose-400 transition mt-2"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Delivery Form inputs */}
                <form onSubmit={handleWebCheckout} className="pt-4 space-y-3 border-t border-white/10">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                    Delivery Details:
                  </span>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Recipient Full Name"
                    className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00a3e0]"
                  />
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Delivery Contact Phone Number"
                    className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00a3e0]"
                  />
                  <input
                    type="text"
                    required
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Delivery Address / City (e.g. Galle, Matara, Colombo)"
                    className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#00a3e0]"
                  />
                </form>
              </div>
            )}
          </div>

          {/* Footer Checkout Bar */}
          {items.length > 0 && !orderCompleted && (
            <div className="p-6 border-t border-white/10 bg-black/40 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Total Spring Estimate:</span>
                <span className="font-serif text-2xl font-bold text-white">
                  LKR {totalAmountLKR.toLocaleString()}
                </span>
              </div>

              {/* Direct WhatsApp Instant Checkout Button */}
              <button
                type="button"
                onClick={handleWhatsAppCheckout}
                className="w-full py-3 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] transition flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Order via WhatsApp (+94 71 477 2661)</span>
              </button>

              {/* Submit Web Order Button */}
              <button
                type="button"
                onClick={handleWebCheckout}
                className="w-full py-3 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-brand-gradient hover:brightness-110 active:scale-95 transition flex items-center justify-center gap-2 shadow border border-white/20"
              >
                <Truck className="w-4 h-4" />
                <span>Confirm Direct Delivery</span>
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
