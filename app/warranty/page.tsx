import Link from "next/link";

export const metadata = { title: "Warranty" };

export default function WarrantyPage() {
  return (
    <section className="section max-w-3xl mx-auto">
      <p className="kicker">Trust</p>
      <h1 className="display text-4xl mt-2">Warranty</h1>
      <p className="lede mt-3">
        Most Caldera equipment carries a one- to three-year limited warranty on chassis and electronics, as listed on the product page. Wear parts — filters, garments, heads, hoses — are sold separately and stocked for seven years from the purchase date (placeholder until inventory is live).
      </p>
      <p className="mt-6 leading-7">
        Warranty does not cover misuse, water damage, or unlicensed electrical work. Register the serial with support after delivery. For freight damage, photograph the crate before signing.
      </p>
      <Link href="/support" className="btn btn-metal mt-8 inline-flex">
        Contact support
      </Link>
    </section>
  );
}
