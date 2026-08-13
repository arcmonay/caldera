import Link from "next/link";
import Image from "next/image";
import { formatMoney, getProduct } from "@/lib/products";
import { packages } from "@/data/content";
import { monthlyLabel } from "@/lib/finance";

export const metadata = { title: "Wellness packages" };

export default function PackagesPage() {
  return (
    <section className="section">
      <p className="kicker">Packages</p>
      <h1 className="display text-4xl mt-2">Recovery room packages</h1>
      <p className="lede mt-3 mb-10">
        Four compositions we stock. Prices are the sum of the listed machines. Freight and
        installation are quoted separately.
      </p>
      <div className="ledges" style={{ gridTemplateColumns: "1fr 1fr" }}>
        {packages.map((pack) => {
          const first = getProduct(pack.productHandles[0]);
          return (
            <Link key={pack.slug} href={`/packages/${pack.slug}`} className="ledge">
              {first ? (
                <Image src={first.image} alt={pack.title} width={400} height={300} />
              ) : null}
              <div>
                <p className="kicker">{pack.audience}</p>
                <p className="card-name">{pack.title}</p>
                <p className="card-desc">{pack.summary}</p>
                <div className="ticket">
                  <strong>{formatMoney(pack.price)}</strong>
                  <span>{monthlyLabel(pack.monthly)} · illustrative</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="cta-row mt-10">
        <Link href="/shop" className="btn btn-cta">
          Shop à la carte
        </Link>
        <Link href="/compare" className="btn btn-ghost">
          Compare models
        </Link>
      </div>
    </section>
  );
}
