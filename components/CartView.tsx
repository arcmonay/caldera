"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatMoney } from "@/lib/products-client";

export function CartView() {
  const { items, subtotal, setQuantity, removeItem } = useCart();

  if (!items.length) {
    return (
      <p className="lede">
        Your cart is empty. <Link href="/shop">Shop wellness equipment</Link>
      </p>
    );
  }

  return (
    <div>
      <ul className="spec-list">
        {items.map(({ product, quantity }) => (
          <li key={product.handle}>
            <span>
              <Link href={`/shop/${product.handle}`}>{product.title.replace("Caldera ", "")}</Link>
            </span>
            <strong>
              {formatMoney(product.price * quantity)}
              <span className="block font-normal text-[var(--muted)]">
                Qty {quantity}{" "}
                <button type="button" onClick={() => setQuantity(product.handle, quantity + 1)}>
                  +
                </button>{" "}
                <button type="button" onClick={() => setQuantity(product.handle, quantity - 1)}>
                  −
                </button>{" "}
                <button type="button" onClick={() => removeItem(product.handle)}>
                  Remove
                </button>
              </span>
            </strong>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xl">Subtotal {formatMoney(subtotal)}</p>
      <p className="text-sm text-[var(--muted)] mt-2">
        Secure checkout. Freight calculated after address. High-ticket items may be invoiced. Flexible payment options available — lender terms are placeholders until a provider is connected.
      </p>
      <div className="cta-row">
        <Link href="/checkout" className="btn btn-dark">
          Continue to checkout
        </Link>
        <Link href="/quote" className="btn btn-cta">
          Request an invoice
        </Link>
        <Link href="/financing" className="btn btn-ghost">
          See payment options
        </Link>
      </div>
    </div>
  );
}
