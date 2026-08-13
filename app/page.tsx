import Image from "next/image";
import Link from "next/link";
import { ProductGrid } from "@/components/ProductCard";
import { packages } from "@/data/content";
import { formatMoney, getCollections, getFeaturedProducts, getHighTicket } from "@/lib/products";
import { monthlyLabel } from "@/lib/finance";

export default function Home() {
  const departments = getCollections();
  const featured = getHighTicket(8);
  const sellers = getFeaturedProducts(8);

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="kicker">Wellness equipment house</p>
          <h1>Build Your Personal Wellness Sanctuary.</h1>
          <p>
            Premium equipment for recovery, relaxation, performance and everyday well-being.
          </p>
          <div className="cta-row">
            <Link href="/shop" className="btn btn-metal">
              Shop Wellness Equipment
            </Link>
            <Link href="/shop?sort=featured" className="btn btn-ghost light">
              Explore Best Sellers
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <Image
            src="/media/catalog/hero.webp"
            alt="Zero-gravity massage chair in a wellness sanctuary"
            width={1400}
            height={1600}
            priority
          />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="kicker">Collections</p>
            <h2 className="display text-4xl">Featured categories</h2>
          </div>
        </div>
        <div className="grid-4">
          {[
            { href: "/departments/cold-heat", title: "Cold Plunges", image: "/media/catalog/plunge.webp" },
            { href: "/departments/saunas", title: "Saunas", image: "/media/catalog/sauna.webp" },
            { href: "/departments/massage-recovery", title: "Massage Chairs", image: "/media/catalog/chair.webp" },
            { href: "/departments/longevity", title: "Red Light Therapy", image: "/media/catalog/panel-desk.webp" },
            { href: "/departments/massage-recovery", title: "Recovery", image: "/media/catalog/boots.webp" },
            { href: "/departments/beauty-body", title: "Beauty & Body", image: "/media/catalog/hydra.webp" },
            { href: "/commercial", title: "Commercial Wellness", image: "/media/catalog/presso.webp" },
            { href: "/shop?sort=featured", title: "Best Sellers", image: "/media/catalog/chiller.webp" },
          ].map((c) => (
            <Link key={c.title} href={c.href} className="card">
              <Image src={c.image} alt={c.title} width={800} height={600} className="visual" />
              <div className="card-body">
                <p className="card-name">{c.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="bays">
        {departments.map((d) => (
          <Link key={d.handle} href={`/departments/${d.handle}`} className="bay">
            <div>
              <em>Collection {d.bay}</em>
              <strong>{d.title}</strong>
            </div>
            <p className="card-desc">{d.description}</p>
          </Link>
        ))}
      </div>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="kicker">Trending</p>
            <h2 className="display text-4xl">Featured equipment</h2>
          </div>
          <Link href="/shop" className="btn btn-ghost">
            All equipment
          </Link>
        </div>
        <ProductGrid products={featured} />
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div>
            <p className="kicker">Sanctuary favorites</p>
            <h2 className="display text-4xl">Best sellers</h2>
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
            <p className="kicker">Rooms</p>
            <h2 className="display text-4xl">Build Your Wellness Room</h2>
          </div>
          <Link href="/business" className="btn btn-ghost">
            All packages
          </Link>
        </div>
        <div className="grid-4">
          {packages.map((pack) => (
            <Link key={pack.slug} href={`/business/${pack.slug}`} className="card">
              <div className="card-body">
                <p className="kicker">{pack.audience}</p>
                <p className="card-name mt-2">{pack.title}</p>
                <p className="card-desc">{pack.summary}</p>
                <div className="ticket">
                  <strong>{monthlyLabel(pack.monthly)}</strong>
                  <span>{formatMoney(pack.price)} equipment invoice</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
