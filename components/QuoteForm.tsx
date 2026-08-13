"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getProducts } from "@/lib/products-client";

export function QuoteForm({ commercial = false }: { commercial?: boolean }) {
  const params = useSearchParams();
  const preset = params.get("machine") ?? "";
  const [sent, setSent] = useState(false);
  const machines = getProducts().filter((p) => p.price >= 400);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="lede">
        Request received. A wellness equipment specialist will reply with availability, freight, and financing options. This is not an approval, a quote of record, or a medical consultation.
      </p>
    );
  }

  return (
    <form className="form-grid" onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        {commercial ? "Facility" : "Household or business"}
        <input name="business" placeholder={commercial ? "Gym, hotel, spa, clinic…" : "Home, studio, spa"} />
      </label>
      <label>
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      {commercial ? (
        <label>
          Facility type
          <select name="facility">
            <option value="">Select</option>
            <option>Gym</option>
            <option>Hotel</option>
            <option>Spa</option>
            <option>Clinic</option>
            <option>Wellness center</option>
            <option>Salon</option>
            <option>Apartment / corporate</option>
          </select>
        </label>
      ) : null}
      <label>
        Equipment
        <select name="machine" defaultValue={preset}>
          <option value="">Help me spec a room</option>
          {machines.map((p) => (
            <option key={p.handle} value={p.handle}>
              {p.title} — {p.quoteOnly ? "quote" : `$${p.price.toLocaleString()}`}
            </option>
          ))}
        </select>
      </label>
      <label>
        Notes
        <textarea name="notes" placeholder="Room size, voltage, delivery window, bulk quantity…" />
      </label>
      <button type="submit" className="btn btn-ink justify-self-start">
        {commercial ? "Outfit your facility" : "Request a quote"}
      </button>
    </form>
  );
}
