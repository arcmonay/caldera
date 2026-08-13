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
  const trending = getTrendingProducts(4);
  const sellers = getFeaturedProducts(8);

  return (
    <>
      <section className="hero">
        <div className="hero-visual">
          <Image
            src="/media/catalog/hero.webp"
            alt="Zero-gravity massage chair in a bright wellness room"
            width={1800}
            height={1200}
            priority
          />
        </div>
        <div className="hero-copy">
          <p className="kicker">Caldera showroom</p>
          <h1>Build Your Personal Wellness Sanctuary.</h1>
          <p>Premium equipment for recovery, relaxation, performance and everyday well-being.</p>
          <div className="cta-row">
            <Link href="/shop" className="btn btn-metal">
              Shop Wellness Equipment
            </Link>
            <Link href="/shop?sort=featured" className="btn btn-ghost light">
              Explore Best Sellers
            </Link>
          </div>
        </div>
      </section>

      <div className="bays">
        {departments.map((d) => (
          <Link key={d.handle} href={`/departments/${d.handle}`} className="bay">
            <Image
              src={categoryVisual[d.handle] || "/media/catalog/plunge.webp"}
              alt={d.title}
              width={640}
              height={480}
            />
            <div className="bay-copy">
              <em>Room {d.bay}</em>
              <strong>{d.title}</strong>
              <p className="card-desc">{d.description}</p>
            </div>
          </Link>
        ))}
        <Link href="/commercial" className="bay">
          <Image src="/media/catalog/chair.webp" alt="Commercial wellness" width={640} height={480} />
          <div className="bay-copy">
            <em>Facilities</em>
            <strong>Commercial Wellness</strong>
            <p className="card-desc">Gyms, hotels, spas, clinics, and recovery studios — outfit a floor.</p>
          </div>
        </Link>
        <Link href="/shop?sort=featured" className="bay">
          <Image src="/media/catalog/boots.webp" alt="Best sellers" width={640} height={480} />
          <div className="bay-copy">
            <em>Showroom</em>
            <strong>Best Sellers</strong>
            <p className="card-desc">The pieces most often specified for home sanctuaries and first rooms.</p>
          </div>
        </Link>
      </div>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="kicker">In rooms now</p>
            <h2 className="display text-4xl">Trending Now</h2>
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
            <p className="kicker">Showroom floor</p>
            <h2 className="display text-4xl">Best Sellers</h2>
          </div>
          <Link href="/financing" className="btn btn-ghost">
            Flexible payment options
          </Link>
        </div>
        <ProductGrid products={sellers} />
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div>
            <p className="kicker">Curated rooms</p>
            <h2 className="display text-4xl">Build Your Wellness Room</h2>
          </div>
          <Link href="/packages" className="btn btn-ghost">
            All packages
          </Link>
        </div>
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
                    <span>{monthlyLabel(pack.monthly)} · illustrative</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <div className="trust-row">
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
          <p>Card data is handled by the processor. High-ticket orders can be invoiced after a specialist confirms freight.</p>
        </div>
      </div>
    </>
  );
}
