"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { Logo } from "@/components/Logo";

const main = [
  { href: "/shop", label: "Shop" },
  { href: "/departments/cold-heat", label: "Cold plunges" },
  { href: "/departments/saunas", label: "Saunas" },
  { href: "/packages", label: "Packages" },
  { href: "/compare", label: "Compare" },
  { href: "/financing", label: "Financing" },
];

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();

  const active = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href)) ? "is-active" : "";

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Logo />
        <nav className="nav-main" aria-label="Primary">
          {main.map((item) => (
            <Link key={item.href} href={item.href} className={active(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="nav-tools">
          <Link href="/support">Support</Link>
          <Link href="/cart" className="nav-cart">
            Cart{count ? ` (${count})` : ""}
          </Link>
        </div>
      </div>
    </header>
  );
}
