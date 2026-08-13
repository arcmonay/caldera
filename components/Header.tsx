"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";

const equipment = [
  { href: "/departments/cold-heat", label: "Cold & heat" },
  { href: "/departments/saunas", label: "Saunas" },
  { href: "/departments/massage-recovery", label: "Massage & recovery" },
  { href: "/departments/longevity", label: "Light & longevity" },
  { href: "/departments/beauty-body", label: "Beauty & body" },
  { href: "/departments/environment", label: "Air & environment" },
];

const shop = [
  { href: "/shop", label: "All equipment" },
  { href: "/shop?sort=featured", label: "Best sellers" },
  { href: "/shop?sort=trending", label: "Trending" },
  { href: "/shop?sort=new", label: "New arrivals" },
  { href: "/business", label: "Wellness packages" },
  { href: "/shop?max=1000", label: "Under $1,000" },
  { href: "/shop?min=1000&max=5000", label: "$1,000–$5,000" },
  { href: "/shop?min=5000&max=10000", label: "$5,000–$10,000" },
  { href: "/shop?min=10000", label: "$10,000+" },
];

const rooms = [
  { href: "/business", label: "Build your wellness room" },
  { href: "/business/recovery-room", label: "Recovery Room" },
  { href: "/business/the-athlete", label: "The Athlete" },
  { href: "/business/spa-at-home", label: "Spa at Home" },
  { href: "/business/longevity-suite", label: "Longevity Suite" },
  { href: "/financing", label: "Financing" },
  { href: "/quote", label: "Request a quote" },
];

const commercial = [
  { href: "/commercial", label: "Outfit your facility" },
  { href: "/commercial", label: "Gyms" },
  { href: "/commercial", label: "Spas" },
  { href: "/commercial", label: "Hotels" },
  { href: "/commercial", label: "Clinics" },
  { href: "/commercial", label: "Wellness centers" },
];

const resources = [
  { href: "/guides", label: "Buying guides" },
  { href: "/warranty", label: "Warranty" },
  { href: "/support", label: "Specialist" },
  { href: "/faq", label: "FAQ" },
  { href: "/compare", label: "Compare" },
  { href: "/contact", label: "Contact" },
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
    <header className="plaque">
      <div className="plaque-top">
        <nav className="plaque-side">
          <Link href="/financing">Financing</Link>
          <Link href="/quote">Quote</Link>
          <Link href="/guides">Guides</Link>
        </nav>
        <Link href="/" className="wordmark">
          <strong>Caldera</strong>
          <span>Wellness equipment</span>
        </Link>
        <nav className="plaque-side right">
          <Link href="/shop">Shop</Link>
          <Link href="/support">Specialist</Link>
          <Link href="/cart">Cart{count ? ` ${count}` : ""}</Link>
        </nav>
      </div>
      <nav className="mega" aria-label="Collections">
        <Menu label="Shop" items={equipment} />
        <Menu label="Explore" items={shop} />
        <Menu label="Rooms" items={rooms} />
        <Menu label="Commercial" items={commercial} />
        <Menu label="Resources" items={resources} />
        <Link href="/shop" className={pathname.startsWith("/shop") ? "is-active" : ""}>
          Shop wellness equipment
        </Link>
      </nav>
    </header>
  );
}
