import Link from "next/link";
import { financeDisclaimer } from "@/lib/finance";

export const metadata = { title: "Financing" };

export default function FinancingPage() {
  return (
    <section className="section max-w-3xl mx-auto">
      <p className="kicker">Payment plans</p>
      <h1 className="display text-4xl mt-2">Flexible payment options available.</h1>
      <p className="lede mt-3">
        Many Caldera pieces sit between a few hundred dollars and $20,000+. Payment plans will be offered through third-party lenders at checkout once a provider is connected. Approval, rates, and terms are theirs — not ours.
      </p>
      <div className="prose-block" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <h2>How it will work</h2>
        <p>
          Choose equipment, then apply with the lender linked at checkout or through a specialist. Monthly figures on product pages assume 36 months and are illustrations, not an offer.
        </p>
        <h2>What we will not say</h2>
        <p>
          We do not advertise approval rates, guaranteed financing, named lender partnerships, or “everyone qualifies.” Credit decisions belong to the lender. If a plan is declined, you can still request a quote and pay by invoice.
        </p>
        <h2>Commercial accounts</h2>
        <p>
          Outfit a gym, hotel, or spa? Ask for trade pricing on packages. Net terms are available for established businesses after review — also a placeholder until accounts are live.
        </p>
      </div>
      <p className="text-sm text-[var(--muted)]">{financeDisclaimer()}</p>
      <div className="cta-row mt-8">
        <Link href="/quote" className="btn btn-metal">
          Talk to a specialist
        </Link>
        <Link href="/shop" className="btn btn-ghost">
          Shop equipment
        </Link>
      </div>
    </section>
  );
}
