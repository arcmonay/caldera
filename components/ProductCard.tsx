import Link from "next/link";
import { ProductVisual } from "@/components/ProductVisual";
import { QuickAdd } from "@/components/QuickAdd";
import { formatMoney } from "@/lib/products";
import { monthlyLabel } from "@/lib/finance";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card">
      <Link href={`/shop/${product.handle}`}>
        <ProductVisual product={product} />
        <div className="card-body">
          <p className="kicker">{product.equipmentType}</p>
          <p className="card-name mt-1">{product.title.replace("Caldera ", "")}</p>
          <p className="card-desc">
            {product.highlight}. Reviews: placeholder — none published yet.
          </p>
          <div className="ticket">
            {product.quoteOnly ? (
              <strong>Request a quote</strong>
            ) : (
              <>
                <strong>{product.financing ? monthlyLabel(product.monthly) : formatMoney(product.price)}</strong>
                <span>
                  {formatMoney(product.price)} · Flexible payment options available · {product.warrantyYears} yr warranty
                </span>
              </>
            )}
          </div>
        </div>
      </Link>
      <div className="card-body" style={{ paddingTop: 0 }}>
        {product.quoteOnly ? (
          <Link href={`/quote?machine=${product.handle}`} className="btn btn-metal" style={{ width: "100%" }}>
            Request a quote
          </Link>
        ) : (
          <QuickAdd handle={product.handle} />
        )}
      </div>
    </article>
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
