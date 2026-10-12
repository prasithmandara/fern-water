"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, CartItem } from "@/types";
import confetti from "canvas-confetti";

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  deleteItem: (productId: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalAmountLKR: number;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  selectedMineralProduct: Product | null;
  setSelectedMineralProduct: (product: Product | null) => void;
  triggerCelebration: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedMineralProduct, setSelectedMineralProduct] =
    useState<Product | null>(null);

  // Load from localStorage if present
  useEffect(() => {
    try {
      const saved = localStorage.getItem("fern_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("fern_cart", JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const triggerCelebration = () => {
    confetti({
      particleCount: 65,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#10b981", "#34d399", "#d4af37", "#f8fafc"],
    });
  };

  const addItem = (product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    triggerCelebration();
  };

  const removeItem = (productId: string) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === productId);
      if (!existing) return prev;
      if (existing.quantity <= 1) {
        return prev.filter((item) => item.product.id !== productId);
      }
      return prev.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const deleteItem = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalAmountLKR = items.reduce(
    (acc, curr) => acc + curr.product.priceLKR * curr.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        deleteItem,
        clearCart,
        totalItems,
        totalAmountLKR,
        isDrawerOpen,
        setIsDrawerOpen,
        selectedMineralProduct,
        setSelectedMineralProduct,
        triggerCelebration,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
