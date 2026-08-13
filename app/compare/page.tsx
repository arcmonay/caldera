"use client";

import Link from "next/link";
import { useCompare } from "@/lib/compare-context";
import { formatMoney, getProduct } from "@/lib/products-client";

const rows: { key: string; label: string; value: (h: string) => string }[] = [
  {
    key: "price",
    label: "Price",
    value: (h) => {
      const p = getProduct(h);
      return p ? (p.quoteOnly ? "Quote" : formatMoney(p.price)) : "—";
    },
  },
  {
    key: "month",
    label: "From / month",
    value: (h) => {
      const p = getProduct(h);
      return p ? `$${p.monthly}` : "—";
    },
  },
  {
    key: "type",
    label: "Use types",
    value: (h) => getProduct(h)?.treatmentTypes.join(", ") ?? "—",
  },
  { key: "power", label: "Power", value: (h) => getProduct(h)?.power ?? "—" },
  { key: "dim", label: "Dimensions", value: (h) => getProduct(h)?.dimensions ?? "—" },
  {
    key: "weight",
    label: "Weight",
    value: (h) => {
      const p = getProduct(h);
      return p ? `${p.weightLbs} lb` : "—";
    },
  },
  {
    key: "warranty",
    label: "Warranty",
    value: (h) => {
      const p = getProduct(h);
      return p ? `${p.warrantyYears} year` : "—";
    },
  },
  { key: "use", label: "Setting", value: (h) => getProduct(h)?.useCase ?? "—" },
  {
    key: "fin",
    label: "Financing",
    value: (h) => (getProduct(h)?.financing ? "Yes, subject to approval" : "—"),
  },
];

export default function ComparePage() {
  const { handles, clear } = useCompare();

  if (!handles.length) {
    return (
      <section className="section">
        <h1 className="display text-4xl">Compare equipment</h1>
        <p className="lede mt-3">
          Add up to three units from any product page — plunges, saunas, chairs, panels.
        </p>
        <Link href="/shop" className="btn btn-metal mt-6 inline-flex">
          Shop wellness equipment
        </Link>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="section-head">
        <h1 className="display text-4xl">Compare</h1>
        <button type="button" className="btn btn-ghost" onClick={clear}>
          Clear
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="compare-table">
          <thead>
            <tr>
              <th>Feature</th>
              {handles.map((h) => (
                <th key={h}>
                  <Link href={`/shop/${h}`}>{getProduct(h)?.title.replace("Caldera ", "")}</Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key}>
                <td>{row.label}</td>
                {handles.map((h) => (
                  <td key={h}>{row.value(h)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
