import Navbar from "../navbar";
import Footer from "../footer";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function OrderCompletePage() {
  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto p-6 text-center py-16">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-primary">Order Confirmed!</h1>
        <p className="text-gray-600 mt-2">
          Your order has been received. We'll have it ready in approximately
          20 minutes.
        </p>
        <p className="text-gray-600 mt-2">Thank You for Patronizing NSUK EDC Kitchen.</p>

        <Link href="/">
          <button className="bg-secondary text-primary font-semibold px-6 py-3 rounded-full mt-6">
            Back to Home
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}