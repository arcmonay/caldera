export const metadata = { title: "FAQ" };

const faqs = [
  {
    q: "Do you sell to homes and businesses?",
    a: "Yes. Each product lists home, commercial, or both. Commercial floors should use the quote form for freight and installation.",
  },
  {
    q: "Can I finance a massage chair or plunge?",
    a: "You can apply once a lender is connected. Monthly figures are 36-month illustrations. We do not guarantee approval.",
  },
  {
    q: "Do you install?",
    a: "White-glove is quoted on large pieces and packages. Smaller units ship with a setup guide. Electrical and plumbing are licensed trades you hire.",
  },
  {
    q: "Is checkout secure?",
    a: "Yes. Card data is handled by the payment processor. High-ticket orders are often invoiced after a specialist confirms freight.",
  },
  {
    q: "Are these medical devices?",
    a: "No. Caldera equipment is sold for wellness, recovery, and relaxation. It is not intended to diagnose, treat, cure, or prevent any disease.",
  },
  {
    q: "Can I get trade or bulk pricing?",
    a: "Ask on the commercial form if you operate more than one room or are opening a chain. Discounts are quoted, not listed as invented percentages.",
  },
];

export default function FaqPage() {
  return (
    <section className="section max-w-3xl mx-auto">
      <p className="kicker">Resources</p>
      <h1 className="display text-4xl mt-2 mb-8">FAQ</h1>
      {faqs.map((f) => (
        <div key={f.q} className="border-t border-[var(--line)] py-5">
          <h2 className="font-medium">{f.q}</h2>
          <p className="lede mt-2">{f.a}</p>
        </div>
      ))}
    </section>
  );
}
