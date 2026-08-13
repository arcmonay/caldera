import Link from "next/link";

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="brand" aria-label="Caldera home">
      <span className="brand-mark" aria-hidden="true">
        C
      </span>
      Caldera
    </Link>
  );
}
