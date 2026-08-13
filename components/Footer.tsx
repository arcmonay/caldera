import Link from "next/link";

const shopRow = [
  { href: "/departments/cold-heat", label: "Cold therapy" },
  { href: "/departments/saunas", label: "Saunas" },
  { href: "/departments/massage-recovery", label: "Massage & recovery" },
  { href: "/departments/longevity", label: "Red light" },
  { href: "/departments/beauty-body", label: "Beauty & body" },
  { href: "/departments/environment", label: "Water & air" },
  { href: "/packages", label: "Wellness packages" },
];

const servicesRow = [
  { href: "/commercial", label: "Commercial" },
  { href: "/quote", label: "Request a quote" },
  { href: "/financing", label: "Financing" },
  { href: "/compare", label: "Compare" },
  { href: "/support", label: "Support" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const houseRow = [
  { href: "/warranty", label: "Warranty" },
  { href: "/shipping", label: "Shipping" },
  { href: "/returns", label: "Returns" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

function PlaqueRow({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="plaque-row">
      <span className="plaque-row-title">{title}</span>
      <nav aria-label={title}>
        {links.map((item, i) => (
          <span key={item.label} className="plaque-item">
            {i > 0 && <span aria-hidden="true">·</span>}
            <Link href={item.href}>{item.label}</Link>
          </span>
        ))}
      </nav>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="plaque-foot">
      <div className="plaque-rule" aria-hidden="true" />
      <Link href="/" className="plaque-wordmark">
        <strong>Caldera</strong>
        <span>Premium equipment for recovery, relaxation, performance and everyday well-being. Direct-to-consumer and commercial sales.</span>
      </Link>
      <PlaqueRow title="Shop" links={shopRow} />
      <PlaqueRow title="Services" links={servicesRow} />
      <PlaqueRow title="House" links={houseRow} />
      <p className="legal">
        © 2025 Caldera. All rights reserved. Equipment is sold for wellness, recovery, and relaxation. It is not intended to diagnose, treat, cure, or prevent any disease. Financing messaging is illustrative until a lender is connected. Reviews, certifications, and awards are not invented on this site.
      </p>
    </footer>
  );
}
