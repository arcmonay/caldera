"use client";

import Link from "next/link";
import { useCompare } from "@/lib/compare-context";
import { getProduct } from "@/lib/products-client";

export function CompareBar() {
  const { handles, clear } = useCompare();
  if (handles.length < 1) return null;
  const names = handles.map((h) => getProduct(h)?.title.replace("Caldera ", "") ?? h);

  return (
    <div className="compare-bar">
      <span>
        Compare ({handles.length}/3): {names.join(" · ")}
      </span>
      <span className="cta-row" style={{ margin: 0 }}>
        <Link href="/compare" className="btn btn-ember">
          Open
        </Link>
        <button type="button" className="btn btn-ghost" onClick={clear}>
          Clear
        </button>
      </span>
    </div>
  );
}
