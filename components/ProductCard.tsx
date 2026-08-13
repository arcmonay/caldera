import Link from "next/link";
import { ProductVisual } from "@/components/ProductVisual";
import { QuickAdd } from "@/components/QuickAdd";
import { formatMoney } from "@/lib/products";
import { monthlyLabel } from "@/lib/finance";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.handle}`} className="card">
      <QuickAdd product={product} />
      <ProductVisual product={product} />
      <div className="card-body">
        <p className="kicker">{product.equipmentType}</p>
        <p className="card-name mt-1">{product.title.replace("Caldera ", "")}</p>
        <p className="card-desc">{product.highlight}</p>
        <div className="ticket">
          {product.quoteOnly ? (
            <strong>Request a quote</strong>
          ) : (
            <>
              <strong>{formatMoney(product.price)}</strong>
              <span>
                {product.financing ? `${monthlyLabel(product.monthly)} · ` : ""}
                {product.inStock ? "In stock" : "Built to order"} · {product.warrantyYears} yr limited warranty
              </span>
              <span className="block mt-1">Reviews: placeholder — none published yet</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
