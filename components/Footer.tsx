import Link from "next/link";
import { Logo } from "@/components/Logo";

const shopLinks = [
  { href: "/departments/cold-heat", label: "Cold plunges" },
  { href: "/departments/saunas", label: "Saunas" },
  { href: "/departments/massage-recovery", label: "Massage & recovery" },
  { href: "/departments/longevity", label: "Red light" },
  { href: "/departments/beauty-body", label: "Beauty & body" },
  { href: "/departments/environment", label: "Water & air" },
  { href: "/packages", label: "Packages" },
];

const helpLinks = [
  { href: "/goals", label: "Find your setup" },
  { href: "/compare", label: "Compare" },
  { href: "/financing", label: "Financing" },
  { href: "/guides", label: "Guides" },
  { href: "/quote", label: "Request a quote" },
  { href: "/commercial", label: "Commercial" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/warranty", label: "Warranty" },
  { href: "/shipping", label: "Shipping" },
  { href: "/returns", label: "Returns" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="site-foot">
      <div className="foot-inner">
        <div className="foot-brand">
          <div>
            <Logo />
            <p style={{ marginTop: "0.85rem" }}>
              Premium cold plunges, saunas, and recovery equipment for home and business —
              engineered for everyday use.
            </p>
          </div>
          <Link href="/shop" className="btn btn-cta">
            Shop equipment
          </Link>
        </div>
        <div className="foot-cols">
          <div>
            <h3>Shop</h3>
            <nav aria-label="Shop">
              {shopLinks.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3>Help</h3>
            <nav aria-label="Help">
              {helpLinks.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3>Company</h3>
            <nav aria-label="Company">
              {companyLinks.map((item) => (
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
      </div>
    </footer>
  );
}
