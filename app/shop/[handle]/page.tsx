import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductGrid } from "@/components/ProductCard";
import { ProductVisual } from "@/components/ProductVisual";
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

  return (
    <>
      <article className="pdp">
        <div className="pdp-gallery">
          <ProductVisual product={product} priority />
        </div>
        <div className="spec-rail">
          <p className="kicker">
            {collection ? (
              <Link href={`/departments/${collection.handle}`}>{collection.title}</Link>
            ) : (
              "Caldera"
            )}
          </p>
          <h1>{product.title.replace("Caldera ", "")}</h1>
          <p className="lede mt-3">{product.description}</p>
          {product.quoteOnly ? (
            <p className="mt-4 text-xl font-medium">Quote on request</p>
          ) : (
            <p className="mt-4">
              <span className="text-2xl">{formatMoney(product.price)}</span>
              {product.financing ? (
                <span className="block mt-1 text-[var(--wood)]">{monthlyLabel(product.monthly)}</span>
              ) : null}
            </p>
          )}
          <p className="mt-2 text-sm text-[var(--muted)]">
            {product.inStock ? "Availability confirmed at checkout" : "Built to order"} · {product.leadTime}
          </p>
          <AddToCartButton product={product} />
          <ul className="spec-list">
            {[
              ["SKU", product.sku],
              ["Type", product.equipmentType],
              ["Use", product.useCase === "both" ? "Home & facility" : product.useCase],
              ["Power", product.power],
              ["Dimensions", product.dimensions],
              ["Weight", `${product.weightLbs} lb`],
              ["Warranty", product.warrantyYears ? `${product.warrantyYears} year limited` : "Wear part"],
              ["Financing", product.financing ? "Available, subject to approval" : "—"],
            ].map(([label, value]) => (
              <li key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </li>
            ))}
          </ul>
          <p className="text-[0.75rem] text-[var(--muted)] mt-4">{financeDisclaimer()}</p>
        </div>
      </article>

      <div className="prose-block">
        <h2>Overview</h2>
        <p>{product.description} {product.highlight}.</p>
        <h2>Is this right for me?</h2>
        <p>
          This piece is specified for {product.useCase === "professional" ? "facility floors" : product.useCase === "home" ? "home sanctuaries" : "home sanctuaries and commercial rooms"}.
          It is designed for recovery and relaxation. It is not a medical device and is not intended to diagnose, treat, cure, or prevent any disease.
        </p>
        <h2>Applications</h2>
        <ul>
          {product.applications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>Intended users</h2>
        <ul>
          {product.intendedUsers.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>Why people choose it</h2>
        <ul>
          {product.benefits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>What’s included</h2>
        <ul>
          {product.included.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>Installation</h2>
        <p>{product.installation}</p>
        <h2>Training</h2>
        <p>{product.training}</p>
        <h2>Shipping</h2>
        <p>{product.shipping}</p>
        <h2>Replacement parts</h2>
        <p>{product.replacementParts}</p>
        <h2>Reviews</h2>
        <p className="note">
          Reviews will appear here once customers can leave them. Caldera does not publish invented testimonials, star ratings, or awards.
        </p>
        <h2>FAQ</h2>
        {product.faqs.map((f) => (
          <p key={f.q}>
            <strong>{f.q}</strong>
            <br />
            {f.a}
          </p>
        ))}
      </div>

      {related.length ? (
        <section className="section">
          <div className="section-head">
            <h2 className="display text-3xl">Also in this collection</h2>
          </div>
          <ProductGrid products={related} />
        </section>
      ) : null}
    </>
  );
}
