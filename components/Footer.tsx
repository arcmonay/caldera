import Link from "next/link";

export function Footer() {
  return (
    <footer className="sanctuary-foot">
      <div>
        <strong>Caldera</strong>
        Premium equipment for recovery, relaxation, performance and everyday well-being. Direct-to-consumer and commercial sales.
      </div>
      <div>
        <strong>Shop</strong>
        <Link href="/departments/cold-heat">Cold therapy</Link>
        <Link href="/departments/saunas">Saunas</Link>
        <Link href="/departments/massage-recovery">Massage & recovery</Link>
        <Link href="/departments/longevity">Red light</Link>
        <Link href="/departments/beauty-body">Beauty & body</Link>
      </div>
      <div>
        <strong>Rooms</strong>
        <Link href="/packages">Wellness packages</Link>
        <Link href="/commercial">Commercial</Link>
        <Link href="/quote">Request a quote</Link>
        <Link href="/financing">Financing</Link>
        <Link href="/compare">Compare</Link>
      </div>
      <div>
        <strong>House</strong>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/support">Support</Link>
        <Link href="/warranty">Warranty</Link>
        <Link href="/shipping">Shipping</Link>
        <Link href="/returns">Returns</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </div>
      <p className="legal">
        © 2025 Caldera. All rights reserved. Equipment is sold for wellness, recovery, and relaxation. It is not intended to diagnose, treat, cure, or prevent any disease. Financing messaging is illustrative until a lender is connected. Reviews, certifications, and awards are not invented on this site.
      </p>
    </footer>
  );
}
