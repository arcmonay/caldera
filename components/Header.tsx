"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { Logo } from "@/components/Logo";

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <header className="mast">
      <Logo />
      <nav className="mast-aside" aria-label="Retreat desk">
        <Link href="/guides">Guides</Link>
        <Link href="/commercial">Commercial</Link>
        <Link href="/support">Support</Link>
        <Link href="/cart" className={pathname.startsWith("/cart") ? "mast-cart" : "mast-cart"}>
          Cart{count ? ` · ${count}` : ""}
        </Link>
      </nav>
    </header>
  );
}
