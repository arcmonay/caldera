import type { Guide, PackageDeal } from "@/lib/types";

export const packages: PackageDeal[] = [
  {
    slug: "recovery-room",
    title: "The Recovery Room",
    audience: "Home sanctuary",
    summary: "Cold plunge, infrared sauna, massage chair, and a red light panel — a four-piece recovery floor.",
    price: 15960,
    monthly: 443,
    includes: [
      "Alba Acrylic Cold Plunge",
      "Cedar Two-Person Infrared Sauna",
      "Zero-G 4D Massage Chair",
      "Spectrum Red Light Panel",
    ],
    productHandles: [
      "caldera-alba-acrylic-cold-plunge-1",
      "caldera-cedar-two-person-infrared-sauna-4",
      "caldera-zero-g-4d-massage-chair-6",
      "caldera-spectrum-red-light-panel-11",
    ],
  },
  {
    slug: "the-athlete",
    title: "The Athlete",
    audience: "Training and recovery",
    summary: "A plunge, compression boots, percussion gun, and a folding table for a compact athlete kit.",
    price: 6227,
    monthly: 173,
    includes: [
      "Alba Acrylic Cold Plunge",
      "Sequential Compression Boots",
      "Percussion Recovery Gun",
      "Studio Portable Massage Table",
    ],
    productHandles: [
      "caldera-alba-acrylic-cold-plunge-1",
      "caldera-sequential-compression-boots-8",
      "caldera-percussion-recovery-gun-7",
      "caldera-studio-portable-massage-table-9",
    ],
  },
  {
    slug: "spa-at-home",
    title: "The Spa at Home",
    audience: "Home spa",
    summary: "Heat, a massage chair, a facial tower, and red light for a private spa room.",
    price: 15750,
    monthly: 438,
    includes: [
      "Cedar Two-Person Infrared Sauna",
      "Zero-G 4D Massage Chair",
      "Atelier Hydrodermabrasion Tower",
      "Spectrum Red Light Panel",
    ],
    productHandles: [
      "caldera-cedar-two-person-infrared-sauna-4",
      "caldera-zero-g-4d-massage-chair-6",
      "caldera-atelier-hydrodermabrasion-tower-12",
      "caldera-spectrum-red-light-panel-11",
    ],
  },
  {
    slug: "longevity-suite",
    title: "The Longevity Suite",
    audience: "Heat, cold, and light",
    summary: "Sauna, cold plunge, red light, and compression — a longevity-minded room without medical claims.",
    price: 10360,
    monthly: 288,
    includes: [
      "Cedar Two-Person Infrared Sauna",
      "Alba Acrylic Cold Plunge",
      "Spectrum Red Light Panel",
      "Sequential Compression Boots",
    ],
    productHandles: [
      "caldera-cedar-two-person-infrared-sauna-4",
      "caldera-alba-acrylic-cold-plunge-1",
      "caldera-spectrum-red-light-panel-11",
      "caldera-sequential-compression-boots-8",
    ],
  },
];

export const guides: Guide[] = [
  {
    slug: "cold-plunge-buying-guide",
    title: "How to Choose a Cold Plunge for Home",
    dek: "Acrylic versus inflatable, chillers, electrical, and what actually belongs in a garage or bathroom.",
    category: "Buying guides",
    readMinutes: 8,
    sections: [
      {
        heading: "Start with the room, not the temperature",
        body: "A plunge needs a level floor, a drain plan, and a dedicated circuit if you add a chiller. Inflatable barrels fit apartments. Acrylic cabinets belong where they will not move. Caldera lists both so you can match the footprint, not a trend.",
      },
      {
        heading: "Ice versus a chiller",
        body: "Ice works for occasional sessions. A 1HP chiller is for people who will use the tub several times a week. Pair the chiller with the tub you already own — the listing photos show the chiller as its own machine.",
      },
      {
        heading: "What this is not",
        body: "Cold water is popular among athletes for recovery routines. It is not a treatment for disease. If you have a medical condition, ask a clinician before you buy.",
      },
    ],
  },
  {
    slug: "infrared-vs-traditional-sauna",
    title: "Infrared vs Traditional Sauna",
    dek: "Cabinets, electrical, and how to spec heat next to a plunge without overselling the science.",
    category: "Buying guides",
    readMinutes: 7,
    sections: [
      {
        heading: "What you are buying",
        body: "An infrared cabin is a wooden room with panel heaters and a glass door. A traditional sauna uses a rock heater and usually needs more clearance and ventilation. Caldera currently lists a two-person infrared cabin and a portable blanket — not a rock-heater room — because those are the units we photographed.",
      },
      {
        heading: "Contrast rooms",
        body: "Many owners put heat and cold in the same suite. Leave dry floor between them. Do not run a blanket on a wet plunge deck.",
      },
    ],
  },
  {
    slug: "massage-chair-for-home-or-lobby",
    title: "Massage Chairs for Home and Commercial Lobbies",
    dek: "Zero-gravity capsules that have to survive a Tuesday, not a showroom demo.",
    category: "Buying guides",
    readMinutes: 6,
    sections: [
      {
        heading: "Look at the track and the leather",
        body: "A home chair can be quieter and lighter. A hotel or clinic lobby needs serviceable rollers and upholstery you can wipe. Measure recline clearance before you fall in love with a capsule shell.",
      },
      {
        heading: "Financing",
        body: "Chairs in this catalog sit in the mid four figures. Monthly figures on the product page are 36-month illustrations, not an offer.",
      },
    ],
  },
  {
    slug: "red-light-panel-guide",
    title: "Red Light Panels for a Wellness Room",
    dek: "Tabletop versus standing panels, timers, and responsible language.",
    category: "Wellness guides",
    readMinutes: 6,
    sections: [
      {
        heading: "What the panel is",
        body: "A red and near-infrared LED panel is a light source with a timer. It is designed to complement a recovery or skincare routine. Caldera does not claim it reverses aging or treats disease.",
      },
      {
        heading: "Placement",
        body: "Give the panel a stable stand or hang kit, eye covers, and a circuit that is not shared with a sauna heater. Use as directed in the included guide.",
      },
    ],
  },
  {
    slug: "outfitting-a-recovery-studio",
    title: "How to Outfit a Recovery Studio",
    dek: "A first-room list for gyms, physio annexes, and hotel wellness floors.",
    category: "Commercial",
    readMinutes: 9,
    sections: [
      {
        heading: "Room one",
        body: "One plunge or barrel plus chiller, one heat option, compression boots, and a table. Add a chair when the lobby needs a seated recovery piece. Do not fill the floor with machines you cannot staff.",
      },
      {
        heading: "Electrical and freight",
        body: "Plunges, saunas, and chillers are freight. Get the electrician in before the crate. Commercial quotes cover liftgate, placement, and a walkthrough.",
      },
    ],
  },
  {
    slug: "financing-high-ticket-wellness",
    title: "Paying for High-Ticket Wellness Equipment",
    dek: "Illustrative monthly figures, third-party lenders, and what we will not promise.",
    category: "Buying guides",
    readMinutes: 5,
    sections: [
      {
        heading: "How the numbers work",
        body: "Product pages show a 36-month illustration. That is not an APR, not an approval, and not a partnership with a named lender until one is connected at checkout.",
      },
      {
        heading: "If a plan is declined",
        body: "You can still request a quote and pay by invoice. Commercial accounts may ask about net terms after review.",
      },
    ],
  },
];

export function getPackage(slug: string) {
  return packages.find((p) => p.slug === slug);
}

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
