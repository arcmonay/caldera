import Link from "next/link";
import { CartView } from "@/components/CartView";

export const metadata = { title: "Checkout" };

export default function CheckoutPage() {
  return (
    <section className="section max-w-3xl mx-auto">
      <p className="kicker">Secure checkout</p>
      <h1 className="display text-4xl mt-2">Checkout</h1>
      <p className="lede mt-3 mb-8">
        Until Shopify checkout is connected, this page holds your local cart. High-ticket orders can be invoiced. Financing providers are placeholders — we do not fabricate approvals or rates.
      </p>
      <CartView />
      <p className="mt-8 text-sm text-[var(--muted)]">
        Prefer a specialist? <Link href="/quote">Request a quote</Link> or <Link href="/financing">read how payment options will work</Link>.
      </p>
    </section>
  );
}
