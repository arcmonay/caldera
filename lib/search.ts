import type { Product } from "@/lib/types";
import { getProducts } from "@/lib/products";

const AUDIENCE: Record<string, string[]> = {
  gym: ["gym", "training room"],
  hotel: ["hotel"],
  spa: ["spa"],
  clinic: ["clinic", "wellness clinic"],
  salon: ["salon", "esthetician"],
  home: ["home sanctuary", "home"],
  athlete: ["athlete", "training room"],
};

function parseBudget(q: string): number | null {
  const under = q.match(/(?:under|below|less than|<)\s*\$?\s*([\d,]+)/i);
  if (under) return Number(under[1].replace(/,/g, ""));
  const dollars = q.match(/\$\s*([\d,]+)/);
  if (dollars && /under|below|less/i.test(q)) return Number(dollars[1].replace(/,/g, ""));
  return null;
}

export function searchProducts(query: string, pool?: Product[]): Product[] {
  const source = pool ?? getProducts();
  const q = query.trim().toLowerCase();
  if (!q) return source;

  const budget = parseBudget(q);
  let results = source;

  if (budget) {
    results = results.filter((p) => p.price <= budget);
  }

  for (const [key, types] of Object.entries(AUDIENCE)) {
    if (q.includes(key)) {
      results = results.filter((p) =>
        p.businessTypes.some(
          (b) => types.includes(b.toLowerCase()) || b.toLowerCase().includes(key),
        ),
      );
    }
  }

  const terms = q
    .replace(/(?:under|below|less than|<)\s*\$?\s*[\d,]+/gi, "")
    .replace(/\$\s*[\d,]+/g, "")
    .replace(
      /\b(equipment|for|a|the|and|commercial|home|wellness|machine|device)\b/gi,
      " ",
    )
    .split(/\s+/)
    .filter((t) => t.length > 2);

  if (!terms.length) return results;

  return results.filter((p) => {
    const hay = [
      p.title,
      p.description,
      p.collection,
      p.equipmentType,
      p.highlight,
      ...p.treatmentTypes,
      ...p.businessTypes,
      ...p.tags,
    ]
      .join(" ")
      .toLowerCase();
    return terms.every((t) => hay.includes(t));
  });
}

export function filterProducts(
  products: Product[],
  opts: {
    collection?: string;
    useCase?: string;
    financing?: boolean;
    inStock?: boolean;
    maxPrice?: number;
    minPrice?: number;
    q?: string;
  },
): Product[] {
  let list = products;
  if (opts.collection && opts.collection !== "all") {
    list = list.filter((p) => p.collection === opts.collection);
  }
  if (opts.useCase && opts.useCase !== "all") {
    list = list.filter((p) => p.useCase === opts.useCase || p.useCase === "both");
  }
  if (opts.financing) list = list.filter((p) => p.financing);
  if (opts.inStock) list = list.filter((p) => p.inStock);
  const max = opts.maxPrice;
  const min = opts.minPrice;
  if (max != null) list = list.filter((p) => p.price <= max);
  if (min != null) list = list.filter((p) => p.price >= min);
  if (opts.q) list = searchProducts(opts.q, list);
  return list;
}
