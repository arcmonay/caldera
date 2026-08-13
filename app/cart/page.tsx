import { CartView } from "@/components/CartView";

export const metadata = { title: "Cart" };

export default function CartPage() {
  return (
    <section className="section max-w-3xl mx-auto">
      <p className="kicker">Cart</p>
      <h1 className="display text-4xl mt-2 mb-8">Your sanctuary bag</h1>
      <CartView />
    </section>
  );
}
