"use client";

import React from "react";

export default function SubButton() {
  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url; // redirect to Stripe Checkout
      } else {
        alert("Failed to create checkout session");
      }
    } catch (err) {
      console.error("Error starting checkout:", err);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="fixed bottom-6 right-6 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700"
    >
      Subscribe
    </button>
  );
}
