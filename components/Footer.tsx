import Link from "next/link";
import { Logo } from "@/components/Logo";

const shopLinks = [
  { href: "/departments/cold-heat", label: "Cold & heat" },
  { href: "/departments/saunas", label: "Saunas" },
  { href: "/departments/massage-recovery", label: "Massage & recovery" },
  { href: "/departments/longevity", label: "Red light" },
  { href: "/departments/beauty-body", label: "Beauty & body" },
  { href: "/departments/environment", label: "Water & air" },
  { href: "/packages", label: "Packages" },
];

const journeyLinks = [
  { href: "/goals", label: "Goals" },
  { href: "/compare", label: "Compare" },
  { href: "/financing", label: "Financing" },
  { href: "/quote", label: "Request a quote" },
  { href: "/commercial", label: "Commercial" },
  { href: "/guides", label: "Guides" },
];

const houseLinks = [
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/warranty", label: "Warranty" },
  { href: "/shipping", label: "Shipping" },
  { href: "/returns", label: "Returns" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mineral-foot">
      <div className="mineral-brand">
        <Logo size="lg" />
        <p>
          Premium home wellness equipment for heat, cold, recovery, and quiet rooms.
          Sold as a volcanic spa retreat catalog — not a clinic.
        </p>
      </div>
      <div className="mineral-cols">
        <div>
          <h3>Equipment</h3>
          <nav aria-label="Equipment">
            {shopLinks.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h3>Journey</h3>
          <nav aria-label="Journey">
            {journeyLinks.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h3>House</h3>
          <nav aria-label="House">
            {houseLinks.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <p className="legal">
        © 2025 Caldera. All rights reserved. Equipment is sold for wellness, recovery, and
        relaxation. It is not intended to diagnose, treat, cure, or prevent any disease.
        Financing messaging is illustrative until a lender is connected. Reviews,
        certifications, and awards are not invented on this site.
      </p>
    </footer>
  );
}
