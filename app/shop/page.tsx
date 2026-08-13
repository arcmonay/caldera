import { Suspense } from "react";
import Link from "next/link";
import { ProductGrid } from "@/components/ProductCard";
import { ShopFilters } from "@/components/ShopFilters";
import { getCollections, getProducts } from "@/lib/products";
import { filterProducts } from "@/lib/search";

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export const metadata = { title: "Shop wellness equipment" };

export default async function ShopPage({ searchParams }: Props) {
  const sp = await searchParams;
  const collection = typeof sp.collection === "string" ? sp.collection : "all";
  const q = typeof sp.q === "string" ? sp.q : "";
  const useCase = typeof sp.use === "string" ? sp.use : "all";
  const max = typeof sp.max === "string" ? Number(sp.max) : undefined;
  const min = typeof sp.min === "string" ? Number(sp.min) : undefined;
  let products = filterProducts(getProducts(), {
    collection,
    q,
    useCase,
    inStock: sp.stock === "1",
    financing: sp.finance === "1",
    maxPrice: max,
    minPrice: min,
  });
  if (sp.sort === "trending") {
    products = [...products].sort((a, b) => Number(b.trending) - Number(a.trending));
  }

  return (
    <div className="shop-layout">
      <Suspense>
        <ShopFilters collections={getCollections()} />
      </Suspense>
      <div className="section" style={{ paddingTop: "1.5rem" }}>
        <p className="kicker">Shop</p>
        <h1 className="display text-4xl mb-2">All equipment</h1>
        <p className="lede mb-8">
          {products.length} pieces. Need help choosing?{" "}
          <Link href="/goals" style={{ color: "var(--cold-deep)", fontWeight: 600 }}>
            Find your setup
          </Link>
          .
        </p>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
