import Image from "next/image";
import Link from "next/link";
import { ProductGrid } from "@/components/ProductCard";
import { packages } from "@/data/content";
import { formatMoney, getCollections, getFeaturedProducts, getProduct, getTrendingProducts } from "@/lib/products";
import { monthlyLabel } from "@/lib/finance";

const categoryVisual: Record<string, string> = {
  "cold-heat": "/media/catalog/plunge.webp",
  saunas: "/media/catalog/sauna.webp",
  "massage-recovery": "/media/catalog/chair.webp",
  longevity: "/media/catalog/panel.webp",
  "beauty-body": "/media/catalog/hydra.webp",
  environment: "/media/catalog/purifier.webp",
};

const journey = [
  { href: "/shop", n: "01", title: "Shop", blurb: "Browse the mineral catalog." },
  { href: "/goals", n: "02", title: "Goals", blurb: "Heat, cold, recover, restore." },
  { href: "/departments/cold-heat", n: "03", title: "Equipment", blurb: "Spec the right machine." },
  { href: "/compare", n: "04", title: "Compare", blurb: "Side-by-side before you buy." },
  { href: "/packages", n: "05", title: "Packages", blurb: "Whole-room compositions." },
];

export default function Home() {
  const departments = getCollections();
  const trending = getTrendingProducts(4);
  const sellers = getFeaturedProducts(6);

  return (
    <>
      <section className="magazine-mast">
        <div className="hero-visual">
          <Image
            src="/media/hero.jpg"
            alt="Cedar sauna in a forest retreat — mineral wellness sanctuary"
            fill
            priority
            sizes="100vw"
            quality={90}
          />
        </div>
        <div className="mast-copy reveal">
          <p className="brand-signal">Caldera</p>
          <p className="headline">A volcanic spa retreat for the private home.</p>
          <p className="support">
            Heat, cold, and recovery equipment specified like an exclusive retreat brochure —
            not a gadget aisle.
          </p>
        </div>
        <aside className="purchase-chip" aria-label="Start shopping">
          <p>Enter the spring</p>
          <strong>Build your mineral room</strong>
          <div className="chip-actions">
            <Link href="/shop" className="btn btn-ember">
              Shop equipment
            </Link>
            <Link href="/goals" className="btn btn-ghost">
              Start with a goal
            </Link>
          </div>
        </aside>
      </section>

      <section className="section" style={{ paddingBottom: "1.5rem" }}>
        <div className="journey">
          {journey.map((step) => (
            <Link key={step.href} href={step.href}>
              <em>{step.n}</em>
              <strong>{step.title}</strong>
              <span>{step.blurb}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div>
            <p className="kicker">Springs</p>
            <h2 className="display text-4xl">Equipment by room</h2>
          </div>
          <Link href="/shop" className="btn btn-ghost">
            Full catalog
          </Link>
        </div>
        <div className="springs">
          {departments.map((d) => (
            <Link key={d.handle} href={`/departments/${d.handle}`} className="spring">
              <Image
                src={categoryVisual[d.handle] || "/media/catalog/plunge.webp"}
                alt={d.title}
                width={640}
                height={480}
              />
              <div>
                <em>Spring {d.bay}</em>
                <strong>{d.title}</strong>
                <p>{d.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div>
            <p className="kicker">In the chamber</p>
            <h2 className="display text-4xl">Trending now</h2>
          </div>
          <Link href="/shop?sort=trending" className="btn btn-ghost">
            Shop trending
          </Link>
        </div>
        <ProductGrid products={trending} />
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div>
            <p className="kicker">Most specified</p>
            <h2 className="display text-4xl">Best sellers</h2>
          </div>
          <Link href="/financing" className="btn btn-ghost">
            Payment options
          </Link>
        </div>
        <ProductGrid products={sellers} />
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div>
            <p className="kicker">Whole rooms</p>
            <h2 className="display text-4xl">Packages</h2>
          </div>
          <Link href="/packages" className="btn btn-ghost">
            All packages
          </Link>
        </div>
        <div className="ledges">
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
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="trust-strata">
          <div>
            <strong>Warranties</strong>
            <p>Limited years listed on each product. Wear parts sold separately. Placeholder until serials are registered.</p>
          </div>
          <div>
            <strong>Financing</strong>
            <p>Flexible payment options available. Rates and approvals belong to a future lender — not invented here.</p>
          </div>
          <div>
            <strong>Installation</strong>
            <p>White-glove quoted on large pieces. Electrical and plumbing are the buyer’s licensed trades.</p>
          </div>
          <div>
            <strong>Secure checkout</strong>
            <p>Card data is handled by the processor. High-ticket orders can be invoiced after freight is confirmed.</p>
          </div>
        </div>
      </section>
    </>
  );
}
