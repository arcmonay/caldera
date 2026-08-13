"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";

const shop = [
  { href: "/departments/cold-heat", label: "Cold Therapy" },
  { href: "/departments/saunas", label: "Saunas" },
  { href: "/departments/massage-recovery", label: "Massage & Recovery" },
  { href: "/departments/longevity", label: "Red Light" },
  { href: "/departments/beauty-body", label: "Beauty & Body" },
  { href: "/shop?q=table", label: "Fitness" },
  { href: "/departments/environment", label: "Water & Air" },
  { href: "/commercial", label: "Commercial" },
];

const explore = [
  { href: "/shop?sort=featured", label: "Best Sellers" },
  { href: "/shop", label: "New Arrivals" },
  { href: "/shop?sort=trending", label: "Trending" },
  { href: "/packages", label: "Wellness Packages" },
  { href: "/shop?max=1000", label: "Under $1,000" },
  { href: "/shop?min=1000&max=5000", label: "$1,000–$5,000" },
  { href: "/shop?min=5000&max=10000", label: "$5,000–$10,000" },
  { href: "/shop?min=10000", label: "$10,000+" },
];

const commercial = [
  { href: "/commercial", label: "Outfit Your Facility" },
  { href: "/commercial#gyms", label: "Gyms" },
  { href: "/commercial#spas", label: "Spas" },
  { href: "/commercial#hotels", label: "Hotels" },
  { href: "/commercial#clinics", label: "Clinics" },
  { href: "/commercial#centers", label: "Wellness Centers" },
  { href: "/quote", label: "Request a quote" },
  { href: "/financing", label: "Financing" },
];

const resources = [
  { href: "/guides", label: "Buying Guides" },
  { href: "/compare", label: "Product Comparisons" },
  { href: "/guides", label: "Wellness Guides" },
  { href: "/faq", label: "FAQs" },
  { href: "/warranty", label: "Warranty" },
  { href: "/shipping", label: "Shipping" },
  { href: "/support", label: "Support" },
];

function Menu({
  label,
  items,
}: {
  label: string;
  items: { href: string; label: string }[];
}) {
  return (
    <details>
      <summary>{label}</summary>
      <div className="mega-panel">
        {items.map((item) => (
          <Link key={item.label} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <header className="mast">
      <div className="mast-top">
        <nav className="mast-side">
          <Link href="/financing">Financing</Link>
          <Link href="/commercial">Commercial</Link>
          <Link href="/guides">Guides</Link>
        </nav>
        <Link href="/" className="wordmark">
          <strong>Caldera</strong>
          <span>Wellness equipment</span>
        </Link>
        <nav className="mast-side right">
          <Link href="/shop">Shop</Link>
          <Link href="/support">Specialist</Link>
          <Link href="/cart">Cart{count ? ` ${count}` : ""}</Link>
        </nav>
      </div>
      <nav className="mega" aria-label="Store">
        <Menu label="Shop" items={shop} />
        <Menu label="Explore" items={explore} />
        <Menu label="Commercial" items={commercial} />
        <Menu label="Resources" items={resources} />
        <Link href="/shop" className={pathname.startsWith("/shop") ? "is-active" : ""}>
          Shop Wellness Equipment
        </Link>
      </nav>
    </header>
  );
}
