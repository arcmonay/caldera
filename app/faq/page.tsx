export const metadata = { title: "FAQ" };

const faqs = [
  {
    q: "Do you sell to homes and businesses?",
    a: "Yes. Listings are marked home, facility, or both. Plunges, saunas, and chairs often live in both. Hydrodermabrasion is specified for professional rooms.",
  },
  {
    q: "Is this medical equipment?",
    a: "No. Caldera sells wellness and recovery equipment. It is not intended to diagnose, treat, cure, or prevent any disease. We do not claim detox, weight loss, or reversed aging.",
  },
  {
    q: "Can I finance a plunge or massage chair?",
    a: "You can apply. Monthly figures on the site are illustrations. Lenders decide. We do not guarantee approval or advertise rates.",
  },
  {
    q: "Do you install?",
    a: "White-glove is available on packages and heavy pieces. Smaller units ship with a setup guide. Dedicated circuits for plunges, saunas, and chillers are your electrician’s work.",
  },
  {
    q: "Are the photos of the actual units?",
    a: "Yes. Each listing uses a manufacturer catalog shot of that machine. We reduced the assortment rather than rotate unrelated lifestyle photos.",
  },
  {
    q: "Is checkout live?",
    a: "The cart is live in the browser. Card checkout connects when Shopify credentials are set. Until then, high-ticket orders go through a quote.",
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
