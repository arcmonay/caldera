import Link from "next/link";
import { guides } from "@/data/content";

export const metadata = { title: "Guides" };

export default function GuidesPage() {
  return (
    <section className="section">
      <p className="kicker">Resources</p>
      <h1 className="display text-4xl mt-2">Buying and wellness guides</h1>
      <p className="lede mt-3 mb-10">
        Spec a plunge, a sauna, or a first recovery room before you finance. Written without medical claims.
      </p>
      <div className="grid-4">
        {guides.map((g) => (
          <Link key={g.slug} href={`/guides/${g.slug}`} className="card">
            <div className="card-body">
              <p className="kicker">
                {g.category} · {g.readMinutes} min
              </p>
              <p className="card-name mt-2">{g.title}</p>
              <p className="card-desc">{g.dek}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
