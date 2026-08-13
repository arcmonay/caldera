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

export default function Home() {
  const departments = getCollections();
  const trending = getTrendingProducts(3);
  const sellers = getFeaturedProducts(6);

  return (
    <>
      <section className="hero">
        <div className="hero-visual">
          <Image
            src="/media/hero.jpg"
            alt="Home wellness setup with heat and recovery equipment"
            fill
            priority
            sizes="100vw"
            quality={90}
          />
        </div>
        <div className="hero-copy">
          <p className="kicker" style={{ color: "var(--cold)" }}>
            Cold plunge & sauna for home
          </p>
          <h1>Premium recovery equipment, ready for everyday use.</h1>
          <p>
            Cold plunges, saunas, massage, and red light — engineered for effortless setup and
            lasting performance.
          </p>
          <div className="cta-row">
            <Link href="/departments/cold-heat" className="btn btn-cta">
              Shop cold plunges
            </Link>
            <Link href="/departments/saunas" className="btn btn-ghost light">
              Shop saunas
            </Link>
          </div>
        </div>
      </section>

      <div className="trust-strip">
        <div>
          Delivery quotes available
          <span>Freight and white-glove options by model</span>
        </div>
        <div>
          Limited warranty included
          <span>Years listed on each product page</span>
        </div>
        <div>
          Flexible payment options
          <span>Illustrative monthly figures — lender TBD</span>
        </div>
      </div>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="kicker">Discover your setup</p>
            <h2 className="display text-4xl">Shop by category</h2>
          </div>
          <Link href="/goals" className="btn btn-ghost">
            Find your setup
          </Link>
        </div>
        <div className="cat-grid">
          {departments.map((d) => (
            <Link key={d.handle} href={`/departments/${d.handle}`} className="cat">
              <Image
                src={categoryVisual[d.handle] || "/media/catalog/plunge.webp"}
                alt={d.title}
                width={640}
                height={480}
              />
              <div>
                <em>{d.title}</em>
                <strong>{d.title}</strong>
                <p>{d.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-wide">
        <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className="section-head">
            <div>
              <p className="kicker">Top sellers</p>
              <h2 className="display text-4xl">Most popular equipment</h2>
            </div>
            <Link href="/shop?sort=featured" className="btn btn-ghost">
              Shop all
            </Link>
          </div>
          <ProductGrid products={sellers} />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="kicker">Trending</p>
            <h2 className="display text-4xl">In demand now</h2>
          </div>
          <Link href="/shop?sort=trending" className="btn btn-ghost">
            Shop trending
          </Link>
        </div>
        <ProductGrid products={trending} />
      </section>

      <section className="section-wide">
        <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className="section-head">
            <div>
              <p className="kicker">Packages</p>
              <h2 className="display text-4xl">Build a full recovery room</h2>
            </div>
            <Link href="/packages" className="btn btn-ghost">
              All packages
            </Link>
          </div>
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
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="kicker">The Caldera difference</p>
            <h2 className="display text-4xl">Built for real rooms</h2>
          </div>
        </div>
        <div className="diff-grid">
          <div className="diff-card">
            <strong>Clear specs</strong>
            <p>Power, dimensions, warranty, and lead times on every listing — no invented awards.</p>
          </div>
          <div className="diff-card">
            <strong>Home & commercial</strong>
            <p>Filter for residential or facility use. Quotes available for multi-unit floors.</p>
          </div>
          <div className="diff-card">
            <strong>Compare before you buy</strong>
            <p>Side-by-side equipment compare, packages, and honest financing placeholders.</p>
          </div>
        </div>
      </section>
    </>
  );
}
