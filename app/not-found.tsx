import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section max-w-3xl mx-auto">
      <p className="kicker">404</p>
      <h1 className="display text-4xl mt-2">This room is empty.</h1>
      <p className="lede mt-3">The page is not on the floor.</p>
      <Link href="/shop" className="btn btn-metal mt-8 inline-flex">
        Shop equipment
      </Link>
    </section>
  );
}
