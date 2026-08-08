"use client";

import Navbar from "../navbar";
import Footer from "../footer";
import { useCart } from "../cartcontext";
import { Plus, Minus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OrderPage() {
  const { cart, updateQuantity, clearCart } = useCart();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function handlePlaceOrder() {
    if (cart.length === 0) return;
    clearCart();
    router.push("/order-complete");
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-primary mb-4">Your Order</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-3">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-3"
              >
                <span className="font-medium">{item.name}</span>
                <div className="flex items-center gap-2 border rounded px-2 py-1">
                  <button onClick={() => updateQuantity(item.id, -1)}>
                    <Minus className="w-4 h-4" />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="font-semibold text-primary">
                  ₦{(item.price * item.quantity).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <>
            <div className="flex justify-between font-bold text-lg mt-6 pt-4 border-t-2 border-primary">
              <span>Total</span>
              <span>₦{total.toLocaleString()}</span>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={clearCart}
                className="flex-1 border-2 border-red-400 text-red-500 py-2 rounded"
              >
                Clear Order
              </button>
              <button
                onClick={handlePlaceOrder}
                className="flex-1 bg-secondary text-primary font-semibold py-2 rounded"
              >
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}