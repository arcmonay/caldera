import Link from "next/link";

export function Footer() {
  return (
    <footer className="house-foot">
      <div>
        <strong>Caldera</strong>
        Premium equipment for recovery, relaxation, performance, and everyday well-being. Home sanctuaries and commercial recovery floors.
      </div>
      <div>
        <strong>Equipment</strong>
        <Link href="/departments/cold-heat">Cold & heat</Link>
        <Link href="/departments/saunas">Saunas</Link>
        <Link href="/departments/massage-recovery">Massage & recovery</Link>
        <Link href="/departments/longevity">Light & longevity</Link>
        <Link href="/departments/beauty-body">Beauty & body</Link>
        <Link href="/departments/environment">Air & environment</Link>
      </div>
      <div>
        <strong>Rooms</strong>
        <Link href="/business">Wellness rooms</Link>
        <Link href="/commercial">Outfit your facility</Link>
        <Link href="/financing">Financing</Link>
        <Link href="/quote">Request a quote</Link>
        <Link href="/compare">Compare</Link>
      </div>
      <div>
        <strong>House</strong>
        <Link href="/warranty">Warranty</Link>
        <Link href="/support">Support</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/shipping">Shipping</Link>
        <Link href="/returns">Returns</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <p className="legal">
        © 2025 Caldera. All rights reserved. Equipment is sold for wellness and recovery use. Not intended to diagnose, treat, cure, or prevent any disease. Flexible payment options are offered through third-party lenders, subject to approval. Inventory, reviews, and brand partnerships shown as placeholders until live data is connected.
      </p>
    </footer>
  );
}
