import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section max-w-3xl mx-auto">
      <h1 className="display text-4xl">Page not found</h1>
      <p className="lede mt-3">That spring is not on the map.</p>
      <Link href="/shop" className="btn btn-ember mt-6 inline-flex">
        Shop equipment
      </Link>
    </section>
  );
}
