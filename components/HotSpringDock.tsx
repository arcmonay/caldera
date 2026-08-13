"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const steps = [
  { href: "/shop", label: "Shop", step: "01" },
  { href: "/goals", label: "Goals", step: "02" },
  { href: "/departments/cold-heat", label: "Equipment", step: "03", match: "/departments" },
  { href: "/compare", label: "Compare", step: "04" },
  { href: "/packages", label: "Packages", step: "05" },
];

export function HotSpringDock() {
  const pathname = usePathname();

  return (
    <div className="spring-dock" role="navigation" aria-label="Wellness journey">
      <nav>
        {steps.map((item) => {
          const matchRoot = item.match ?? item.href;
          const active =
            pathname === item.href ||
            (matchRoot !== "/" && pathname.startsWith(matchRoot));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`dock-link${active ? " is-active" : ""}`}
            >
              <small>{item.step}</small>
              <b>{item.label}</b>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
