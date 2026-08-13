"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";

export function QuickAdd({ handle }: { handle: string }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      className="btn btn-ink"
      style={{ width: "100%", marginTop: "0.6rem" }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        addItem(handle);
        setAdded(true);
        setTimeout(() => setAdded(false), 1400);
      }}
    >
      {added ? "Added" : "Quick add"}
    </button>
  );
}
