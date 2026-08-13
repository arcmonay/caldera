import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductGrid } from "@/components/ProductCard";
import { ProductVisual } from "@/components/ProductVisual";
import { packages } from "@/data/content";
import { financeDisclaimer, monthlyLabel } from "@/lib/finance";
import {
  formatMoney,
  getCollection,
  getProduct,
  getProducts,
  getProductsByCollection,
} from "@/lib/products";

export function generateStaticParams() {
  return getProducts().map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({
  params,
}: PageProps<"/shop/[handle]">) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) return { title: "Equipment" };
  return { title: product.title, description: product.description };
}

export default async function ProductPage({ params }: PageProps<"/shop/[handle]">) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) notFound();
  const collection = getCollection(product.collection);
  const related = getProductsByCollection(product.collection)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);
  const accessories = getProducts()
    .filter((p) => p.id !== product.id && p.price < 1000)
    .slice(0, 4);
  const relatedPackages = packages.filter((pack) =>
    pack.productHandles.includes(product.handle),
  );

  return (
    <>
      <article className="sanctuary-pdp">
        <div className="pdp-stage">
          <ProductVisual product={product} priority />
        </div>

        <div className="pdp-story">
          <div className="pdp-narrative">
            <p className="kicker">
              {collection ? (
                <Link href={`/departments/${collection.handle}`}>{collection.title}</Link>
              ) : (
                "Caldera"
              )}
            </p>
            <h1>{product.title.replace("Caldera ", "")}</h1>
            <p className="lede">{product.description}</p>
            <p className="lede mt-4" style={{ color: "var(--mist)" }}>
              {product.highlight}. Specified for a private wellness sanctuary — heat, cold, and recovery
              routines without medical claims.
            </p>
            <ul className="spec-list">
              {[
                ["SKU", product.sku],
                ["Type", product.equipmentType],
                [
                  "Use",
                  product.useCase === "professional"
                    ? "Commercial"
                    : product.useCase === "home"
                      ? "Home"
                      : "Home & commercial",
                ],
                ["Power", product.power],
                ["Dimensions", product.dimensions],
                ["Weight", `${product.weightLbs} lb`],
                ["Warranty", `${product.warrantyYears} year limited`],
                ["Shipping", product.shipping],
              ].map(([label, value]) => (
                <li key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </li>
              ))}
            </ul>
          </div>

          <div className="pdp-buy">
            {product.quoteOnly ? (
              <p className="price">Quote on request</p>
            ) : (
              <p className="price">{formatMoney(product.price)}</p>
            )}
            {product.financing && !product.quoteOnly ? (
              <p className="quiet-finance">{monthlyLabel(product.monthly)} — illustrative only</p>
            ) : (
              <p className="quiet-finance">Flexible payment options available.</p>
            )}
            <p className="mt-3 text-sm" style={{ color: "var(--stone)" }}>
              {product.inStock ? "In stock" : "Built to order"} · {product.leadTime}
            </p>
            <AddToCartButton product={product} />
            <p className="text-[0.75rem] mt-4" style={{ color: "var(--stone)" }}>
              {financeDisclaimer()}
            </p>
          </div>
        </div>
      </article>

      {relatedPackages.length ? (
        <div className="cross-sell">
          <p className="kicker mb-3">Often packaged with</p>
          <div className="cross-sell-panel">
            {relatedPackages.map((pack) => (
              <Link key={pack.slug} href={`/packages/${pack.slug}`}>
                <p className="kicker">{pack.audience}</p>
                <p className="card-name mt-1">{pack.title}</p>
                <p className="card-desc">{pack.summary}</p>
                <div className="ticket">
                  <strong>{formatMoney(pack.price)}</strong>
                  <span>{monthlyLabel(pack.monthly)} · illustrative</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      <div className="prose-block">
        <h2>Is this right for me?</h2>
        <p>
          This {product.equipmentType.toLowerCase()} is designed for{" "}
          {product.intendedUsers.join(", ").toLowerCase()}. Typical rooms:{" "}
          {product.businessTypes.join(", ")}. It is specified for wellness and recovery routines —
          not as a medical device.
        </p>
        <h2>Overview</h2>
        <p>
          {product.description} {product.highlight}.
        </p>
        <h2>What’s included</h2>
        <ul>
          {product.included.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>Installation</h2>
        <p>{product.installation}</p>
        <h2>Shipping</h2>
        <p>{product.shipping}</p>
        <h2>Replacement parts</h2>
        <p>{product.replacementParts}</p>
        <h2>Customer reviews</h2>
        <p>{product.reviewsPlaceholder}</p>
        <h2>FAQ</h2>
        {product.faqs.map((f) => (
          <p key={f.q}>
            <strong>{f.q}</strong>
            <br />
            {f.a}
          </p>
        ))}
      </div>

      {accessories.length ? (
        <section className="section">
          <div className="section-head">
            <h2 className="display text-3xl">Recommended accessories</h2>
          </div>
          <ProductGrid products={accessories} />
        </section>
      ) : null}

      {related.length ? (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-head">
            <h2 className="display text-3xl">Related equipment</h2>
          </div>
          <ProductGrid products={related} />
        </section>
      ) : null}
    </>
  );
}
