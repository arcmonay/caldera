import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/ProductCard";
import { getPackage, packages } from "@/data/content";
import { financeDisclaimer, monthlyLabel } from "@/lib/finance";
import { formatMoney, getProduct } from "@/lib/products";

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/packages/[slug]">) {
  const { slug } = await params;
  const pack = getPackage(slug);
  return { title: pack?.title ?? "Package" };
}

export default async function PackagePage({ params }: PageProps<"/packages/[slug]">) {
  const { slug } = await params;
  const pack = getPackage(slug);
  if (!pack) notFound();
  const items = pack.productHandles.map((h) => getProduct(h)).filter(Boolean);

  return (
    <section className="section">
      <div className="max-w-3xl">
        <p className="kicker">{pack.audience}</p>
        <h1 className="display text-4xl mt-2">{pack.title}</h1>
        <p className="lede mt-3">{pack.summary}</p>
        <p className="mt-6 text-2xl">{formatMoney(pack.price)}</p>
        <p className="text-[var(--wood)]">{monthlyLabel(pack.monthly)}</p>
        <h2 className="display text-2xl mt-10 mb-3">On the invoice</h2>
        <ul className="leading-8">
          {pack.includes.map((item) => (
            <li key={item}>— {item}</li>
          ))}
        </ul>
        <div className="cta-row mt-8">
          <Link href={`/quote?machine=${pack.slug}`} className="btn btn-metal">
            Request a quote
          </Link>
          <Link href="/financing" className="btn btn-ghost">
            Apply for financing
          </Link>
          <Link href="/shop" className="btn btn-ghost">
            Shop individually
          </Link>
        </div>
        <p className="mt-6 text-sm text-[var(--muted)]">{financeDisclaimer()}</p>
      </div>
      {items.length ? (
        <div className="mt-12">
          <h2 className="display text-3xl mb-6">Equipment in this room</h2>
          <ProductGrid products={items as NonNullable<(typeof items)[number]>[]} />
        </div>
      ) : null}
    </section>
  );
}
