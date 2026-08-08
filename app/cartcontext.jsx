"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Load cart from localStorage once, when the app first opens
  useEffect(() => {
    const saved = localStorage.getItem("edc-kitchen-cart");
    if (saved) {
      setCart(JSON.parse(saved));
    }
    setLoaded(true);
  }, []);

  // Save cart to localStorage every time it changes
  useEffect(() => {
    if (loaded) {
      localStorage.setItem("edc-kitchen-cart", JSON.stringify(cart));
    }
  }, [cart, loaded]);

  function addToCart(item) {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }

  function updateQuantity(id, amount) {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity + amount } : i))
        .filter((i) => i.quantity > 0)
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}