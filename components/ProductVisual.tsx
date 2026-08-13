import Image from "next/image";
import type { Product } from "@/lib/types";

export function ProductVisual({
  product,
  priority = false,
  className = "",
}: {
  product: Product;
  priority?: boolean;
  className?: string;
}) {
  const src = product.image || "/media/catalog/plunge.webp";
  return (
    <Image
      src={src}
      alt={product.title}
      width={1200}
      height={900}
      priority={priority}
      className={`visual ${className}`}
    />
  );
}
