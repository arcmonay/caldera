"use client";

import type { Product } from "@/lib/types";
import { useCart } from "@/lib/cart-context";

export function QuickAdd({ product }: { product: Product }) {
  const { addItem } = useCart();
  if (product.quoteOnly) return null;

  return (
    <button
      type="button"
      className="quick-add"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        addItem(product.handle);
      }}
    >
      Quick add
    </button>
  );
}
