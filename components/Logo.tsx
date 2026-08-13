import Link from "next/link";

export function Logo({ href = "/", size = "md" }: { href?: string; size?: "md" | "lg" }) {
  const markSize = size === "lg" ? "3.1rem" : "2.55rem";
  return (
    <Link href={href} className="mast-brand" aria-label="Caldera home">
      <span className="mark" style={{ width: markSize, height: markSize }} aria-hidden="true">
        <span>C</span>
      </span>
      <span className="wordmark">
        <strong>Caldera</strong>
        <em>Mineral wellness</em>
      </span>
    </Link>
  );
}
