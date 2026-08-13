import { Suspense } from "react";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata = { title: "Outfit your facility" };

export default function CommercialPage() {
  return (
    <section className="section max-w-3xl mx-auto">
      <p className="kicker">Commercial</p>
      <h1 className="display text-4xl mt-2">Outfit Your Facility</h1>
      <p className="lede mt-3 mb-8">
        Gyms, spas, hotels, and recovery studios. Tell us member volume, voltage, and how many stations you need. A specialist will reply with a floor plan of the machines on this site — not a medical protocol.
      </p>
      <Suspense>
        <QuoteForm intent="facility" />
      </Suspense>
    </section>
  );
}
