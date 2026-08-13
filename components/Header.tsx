"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";

const navLeft = [
  { href: "/shop", label: "Shop" },
  { href: "/packages", label: "Packages" },
  { href: "/commercial", label: "Commercial" },
];

const navRight = [
  { href: "/guides", label: "Guides" },
  { href: "/financing", label: "Financing" },
];

const departments = [
  { href: "/departments/cold-heat", label: "Cold & Heat" },
  { href: "/departments/saunas", label: "Saunas" },
  { href: "/departments/massage-recovery", label: "Massage & Recovery" },
  { href: "/departments/longevity", label: "Red Light" },
  { href: "/departments/beauty-body", label: "Beauty & Body" },
  { href: "/departments/environment", label: "Water & Air" },
];

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();

  const linkClass = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href)) ? "is-active" : "";

  return (
    <header className="concierge">
      <div className="concierge-strip">
        <p className="concierge-tagline">Build your personal wellness sanctuary</p>
        <nav className="concierge-utility" aria-label="Utility">
          <Link href="/financing">Financing</Link>
          <Link href="/commercial">Commercial</Link>
          <Link href="/support">Support</Link>
          <Link href="/cart">Cart{count ? ` (${count})` : ""}</Link>
        </nav>
      </div>
      <div className="concierge-bar">
        <nav className="concierge-wing" aria-label="Primary left">
          {navLeft.map((item) => (
            <Link key={item.label} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/" className="concierge-wordmark">
          <strong>Caldera</strong>
          <span>Wellness equipment</span>
        </Link>
        <nav className="concierge-wing right" aria-label="Primary right">
          {navRight.map((item) => (
            <Link key={item.label} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
          <Link href="/cart" className={linkClass("/cart")}>
            Cart{count ? ` (${count})` : ""}
          </Link>
        </nav>
      </div>
      <nav className="concierge-tray" aria-label="Departments">
        {departments.map((item, i) => (
          <span key={item.label} className="tray-item">
            {i > 0 && <span aria-hidden="true">·</span>}
            <Link href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          </span>
        ))}
      </nav>
    </header>
  );
}
