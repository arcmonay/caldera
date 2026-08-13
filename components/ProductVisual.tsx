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
  return (
    <Image
      src={product.image}
      alt={product.title}
      width={1200}
      height={900}
      priority={priority}
      className={`visual ${className}`}
    />
  );
}
