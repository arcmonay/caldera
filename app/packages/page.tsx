import Link from "next/link";
import Image from "next/image";
import { formatMoney, getProduct } from "@/lib/products";
import { packages } from "@/data/content";
import { monthlyLabel } from "@/lib/finance";

export const metadata = { title: "Wellness packages" };

export default function PackagesPage() {
  return (
    <section className="section">
      <p className="kicker">Build your wellness room</p>
      <h1 className="display text-4xl mt-2">Curated packages</h1>
      <p className="lede mt-3 mb-10">
        Four rooms we actually stock: recovery, athlete, spa-at-home, and longevity. Prices are the sum of the listed machines. Freight and installation are quoted.
      </p>
      <div className="grid-4">
        {packages.map((pack) => {
          const first = getProduct(pack.productHandles[0]);
          return (
            <Link key={pack.slug} href={`/packages/${pack.slug}`} className="card">
              {first ? (
                <Image src={first.image} alt={pack.title} width={800} height={600} className="visual" />
              ) : null}
              <div className="card-body">
                <p className="kicker">{pack.audience}</p>
                <p className="card-name mt-2">{pack.title}</p>
                <p className="card-desc">{pack.summary}</p>
                <div className="ticket">
                  <strong>{formatMoney(pack.price)}</strong>
                  <span>{monthlyLabel(pack.monthly)}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
