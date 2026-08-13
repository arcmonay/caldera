"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getProducts } from "@/lib/products-client";

export function QuoteForm({
  intent = "quote",
}: {
  intent?: "quote" | "facility";
}) {
  const params = useSearchParams();
  const preset = params.get("machine") ?? "";
  const [sent, setSent] = useState(false);
  const machines = getProducts();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="lede">
        Request filed. A specialist will reply with availability, freight, and payment-option next steps. This is not an approval, a medical consult, or a confirmed inventory hold.
      </p>
    );
  }

  return (
    <form className="form-grid" onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" required autoComplete="name" />
      </label>
      {intent === "facility" ? (
        <label>
          Facility
          <input name="facility" placeholder="Gym, spa, recovery studio, hotel" />
        </label>
      ) : (
        <label>
          Room or business
          <input name="business" placeholder="Home sanctuary, spa, gym" />
        </label>
      )}
      <label>
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
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
        <textarea
          name="notes"
          placeholder={
            intent === "facility"
              ? "Member volume, voltage, install date, number of stations…"
              : "Room size, voltage, opening date…"
          }
        />
      </label>
      <button type="submit" className="btn btn-ink justify-self-start">
        {intent === "facility" ? "Request a facility plan" : "Request a quote"}
      </button>
    </form>
  );
}
