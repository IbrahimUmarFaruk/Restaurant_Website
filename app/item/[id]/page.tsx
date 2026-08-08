"use client";

import Navbar from "../../navbar";
import Footer from "../../footer";
import { menuItems } from "../../menuitems";
import { useCart } from "../../cartcontext";
import { useParams, useRouter } from "next/navigation";

export default function ItemPreviewPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  const item = menuItems.find((i) => i.id === Number(id));

  if (!item) {
    return <div className="p-6 text-center">Item not found.</div>;
  }

  function handleOrderNow() {
    addToCart(item);
    router.push("/order");
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto p-6">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h1 className="text-2xl font-bold">{item.name}</h1>
        <p className="text-gray-600 mt-2">{item.description}</p>
        <div className="text-primary font-bold text-xl mt-3">
          ₦{item.price.toLocaleString()}
        </div>
        <button
          onClick={handleOrderNow}
          className="bg-secondary text-primary font-semibold px-6 py-3 rounded-full mt-4"
        >
          Order Now
        </button>
      </div>
      <Footer />
    </div>
  );
}