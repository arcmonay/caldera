"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { useCompare } from "@/lib/compare-context";
import type { Product } from "@/lib/types";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { toggle, has } = useCompare();

  if (product.quoteOnly) {
    return (
      <div className="cta-row">
        <Link href={`/quote?machine=${product.handle}`} className="btn btn-ember">
          Request a quote
        </Link>
        <Link href="/support" className="btn btn-ghost">
          Talk to a specialist
        </Link>
        <Link href="/financing" className="btn btn-ghost">
          Payment options
        </Link>
        <button type="button" className="btn btn-ghost" onClick={() => toggle(product.handle)}>
          {has(product.handle) ? "Added to compare" : "Compare"}
        </button>
      </div>
    );
  }

  return (
    <div className="cta-row">
      <button type="button" className="btn btn-obsidian" onClick={() => addItem(product.handle)}>
        Add to cart
      </button>
      {product.price >= 1500 ? (
        <>
          <Link href={`/quote?machine=${product.handle}`} className="btn btn-ember">
            Request a quote
          </Link>
          <Link href="/support" className="btn btn-ghost">
            Talk to a specialist
          </Link>
          <Link href="/financing" className="btn btn-ghost">
            Payment options
          </Link>
        </>
      ) : (
        <Link href="/financing" className="btn btn-ghost">
          Flexible payment options
        </Link>
      )}
      <button type="button" className="btn btn-ghost" onClick={() => toggle(product.handle)}>
        {has(product.handle) ? "Added to compare" : "Compare"}
      </button>
    </div>
  );
}
