import { Suspense } from "react";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata = { title: "Commercial wellness equipment" };

const audiences = [
  { id: "gyms", title: "Gyms", body: "Plunges, chillers, compression, and chairs for a recovery bay that members will actually use." },
  { id: "spas", title: "Spas", body: "Heat, facial towers, pressotherapy, and LED — specified for chair time, not a brochure." },
  { id: "hotels", title: "Hotels", body: "Quiet chairs, air, and a plunge or sauna for a wellness floor guests can book." },
  { id: "clinics", title: "Clinics", body: "Chiropractic and physiotherapy lobbies: chairs, tables, and compression. Not medical devices." },
  { id: "centers", title: "Wellness centers", body: "Apartment amenities, corporate floors, and recovery studios — packages quoted as a room." },
];

export default function CommercialPage() {
  return (
    <section className="section">
      <p className="kicker">Commercial wellness equipment</p>
      <h1 className="display text-4xl mt-2">Outfit Your Facility</h1>
      <p className="lede mt-3 mb-10">
        Gyms, hotels, spas, recovery centers, clinics, salons, wellness studios, apartment buildings, and corporate floors. Bulk pricing, commercial warranties, installation, delivery, packages, financing, and trade inquiries — all quoted. We do not invent volume discounts on this page.
      </p>
      <div className="grid-4 mb-12">
        {audiences.map((a) => (
          <div key={a.id} id={a.id} className="card">
            <div className="card-body">
              <p className="card-name">{a.title}</p>
              <p className="card-desc">{a.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-3xl">
        <h2 className="display text-3xl mb-4">Talk to commercial sales</h2>
        <p className="lede mb-8">
          Tell us the facility, voltage, and opening date. A specialist replies with freight, installation, and whether a package or a single machine is the right invoice.
        </p>
        <Suspense>
          <QuoteForm commercial />
        </Suspense>
      </div>
    </section>
  );
}
