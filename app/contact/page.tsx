import Link from "next/link";
import { Suspense } from "react";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="section max-w-3xl mx-auto">
      <p className="kicker">Desk</p>
      <h1 className="display text-4xl mt-2">Contact</h1>
      <p className="lede mt-3 mb-8">
        Commercial sales, quotes, and support. Addresses and hours below are placeholders until the showroom is staffed.
      </p>
      <p className="mb-8 leading-7">
        Email: hello@caldera.example
        <br />
        Commercial: commercial@caldera.example
        <br />
        Phone: (placeholder) 1-800-000-0000
      </p>
      <Suspense>
        <QuoteForm />
      </Suspense>
      <p className="mt-8 text-sm text-[var(--muted)]">
        Prefer a dedicated commercial form? <Link href="/commercial">Outfit your facility</Link>.
      </p>
    </section>
  );
}
