import Link from "next/link";
import Image from "next/image";
import { getCollection, getProductsByCollection } from "@/lib/products";

export const metadata = {
  title: "Find your setup",
  description: "Answer what you want from the room — then shop matching Caldera equipment.",
};

const goals = [
  {
    slug: "recover",
    title: "Recover",
    dek: "Cold, compression, and percussion for post-training routines.",
    collections: ["cold-heat", "massage-recovery"],
    href: "/departments/cold-heat",
    image: "/media/catalog/plunge.webp",
  },
  {
    slug: "heat",
    title: "Heat",
    dek: "Infrared cabinets and portable heat for a private sauna ritual.",
    collections: ["saunas"],
    href: "/departments/saunas",
    image: "/media/catalog/sauna.webp",
  },
  {
    slug: "cold",
    title: "Cold",
    dek: "Acrylic plunges, barrels, and chillers for contrast rooms.",
    collections: ["cold-heat"],
    href: "/shop?collection=cold-heat",
    image: "/media/catalog/chiller.webp",
  },
  {
    slug: "restore",
    title: "Restore",
    dek: "Massage chairs and tables for quiet, seated recovery.",
    collections: ["massage-recovery"],
    href: "/departments/massage-recovery",
    image: "/media/catalog/chair.webp",
  },
  {
    slug: "light",
    title: "Light",
    dek: "Red and near-infrared panels for a longevity-minded corner.",
    collections: ["longevity"],
    href: "/departments/longevity",
    image: "/media/catalog/panel.webp",
  },
  {
    slug: "air-water",
    title: "Air & water",
    dek: "Purifiers and hydration pieces that finish the room.",
    collections: ["environment", "beauty-body"],
    href: "/departments/environment",
    image: "/media/catalog/purifier.webp",
  },
];

export default function GoalsPage() {
  return (
    <section className="section">
      <p className="kicker">Which setup is right for you?</p>
      <h1 className="display text-5xl mt-2">Find your Caldera setup</h1>
      <p className="lede mt-4 mb-10">
        Pick a goal — then move to equipment, compare models, and package a room. No medical claims;
        just clear product matching.
      </p>

      <div className="goals">
        {goals.map((goal) => {
          const count = goal.collections.reduce(
            (sum, handle) => sum + getProductsByCollection(handle).length,
            0,
          );
          const title = goal.collections
            .map((h) => getCollection(h)?.title)
            .filter(Boolean)
            .join(" · ");
          return (
            <Link key={goal.slug} href={goal.href} className="goal">
              <Image
                src={goal.image}
                alt=""
                width={320}
                height={200}
                style={{
                  width: "100%",
                  height: "5.5rem",
                  objectFit: "contain",
                  marginBottom: "0.8rem",
                  background: "var(--bg-soft)",
                  borderRadius: 10,
                }}
              />
              <em className="kicker" style={{ fontStyle: "normal" }}>
                {title || "Equipment"}
              </em>
              <strong>{goal.title}</strong>
              <p>{goal.dek}</p>
              <p className="mt-3 text-sm" style={{ color: "var(--cold-deep)", fontWeight: 600 }}>
                {count} pieces →
              </p>
            </Link>
          );
        })}
      </div>

      <div className="cta-row mt-12">
        <Link href="/shop" className="btn btn-cta">
          Browse all equipment
        </Link>
        <Link href="/compare" className="btn btn-ghost">
          Compare models
        </Link>
      </div>
    </section>
  );
}
