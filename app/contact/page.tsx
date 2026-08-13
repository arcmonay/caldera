import Link from "next/link";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="section max-w-3xl mx-auto">
      <p className="kicker">House</p>
      <h1 className="display text-4xl mt-2">Contact</h1>
      <p className="lede mt-3">
        Addresses and phone numbers below are placeholders until the showroom and desk are live.
      </p>
      <ul className="leading-8 mt-6">
        <li>Showroom: 100 Sanctuary Way, Suite 1 — placeholder</li>
        <li>Customer support: specialists@caldera.example</li>
        <li>Commercial sales: facilities@caldera.example</li>
        <li>Hours: Monday–Friday, 9–6 local — placeholder</li>
      </ul>
      <div className="cta-row mt-8">
        <Link href="/quote" className="btn btn-metal">
          Request a quote
        </Link>
        <Link href="/commercial" className="btn btn-ghost">
          Outfit a facility
        </Link>
      </div>
    </section>
  );
}
