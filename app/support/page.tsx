import Link from "next/link";

export const metadata = { title: "Support" };

export default function SupportPage() {
  return (
    <section className="section max-w-3xl mx-auto">
      <p className="kicker">Wellness equipment specialists</p>
      <h1 className="display text-4xl mt-2">Support</h1>
      <p className="lede mt-3">
        Spec a room, confirm voltage, or order a filter that failed on a Saturday. Specialists know the machines. Contact details below are placeholders until the desk is staffed.
      </p>
      <ul className="leading-8 mt-6">
        <li>Installation and freight questions</li>
        <li>Commercial consultations</li>
        <li>Replacement parts</li>
        <li>Warranty registration (serial after delivery)</li>
      </ul>
      <p className="mt-6">
        Email: support@caldera.example
        <br />
        Phone: (placeholder) 1-800-000-0000
      </p>
      <div className="cta-row mt-8">
        <Link href="/quote" className="btn btn-metal">
          Talk to a specialist
        </Link>
        <Link href="/faq" className="btn btn-ghost">
          FAQ
        </Link>
      </div>
    </section>
  );
}
