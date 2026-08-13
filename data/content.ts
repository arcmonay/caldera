import type { Guide, PackageDeal } from "@/lib/types";

export const packages: PackageDeal[] = [
  {
    slug: "recovery-room",
    title: "Recovery Room",
    audience: "Home sanctuary or training annex",
    summary: "Cold plunge, infrared cabin, zero-gravity chair, and red light as a finished recovery corner.",
    price: 15960,
    monthly: 443,
    includes: ["Alba Acrylic Cold Plunge", "Cedar Two-Person Infrared Sauna", "Zero-G 4D Massage Chair", "Spectrum Red Light Panel"],
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
    audience: "Training room or serious home gym",
    summary: "Portable ice bath, 1HP chiller, percussion gun, and compression boots.",
    price: 3198,
    monthly: 89,
    includes: ["Field Inflatable Ice Bath", "1HP Plunge Chiller", "Percussion Recovery Gun", "Sequential Compression Boots"],
    productHandles: [
      "caldera-field-inflatable-ice-bath-2",
      "caldera-1hp-plunge-chiller-3",
      "caldera-percussion-recovery-gun-7",
      "caldera-sequential-compression-boots-8",
    ],
  },
  {
    slug: "spa-at-home",
    title: "Spa at Home",
    audience: "Residential wellness room",
    summary: "Infrared cabin, zero-gravity chair, LED mask, and red light for a quiet evening circuit.",
    price: 11259,
    monthly: 313,
    includes: ["Cedar Two-Person Infrared Sauna", "Zero-G 4D Massage Chair", "Lumen LED Facial Mask", "Spectrum Red Light Panel"],
    productHandles: [
      "caldera-cedar-two-person-infrared-sauna-4",
      "caldera-zero-g-4d-massage-chair-6",
      "caldera-lumen-led-facial-mask-13",
      "caldera-spectrum-red-light-panel-11",
    ],
  },
  {
    slug: "longevity-suite",
    title: "Longevity Suite",
    audience: "Dedicated wellness wing",
    summary: "Sauna, cold plunge, red light, and compression recovery as one invoice.",
    price: 10360,
    monthly: 288,
    includes: ["Cedar Two-Person Infrared Sauna", "Alba Acrylic Cold Plunge", "Spectrum Red Light Panel", "Sequential Compression Boots"],
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
    dek: "Acrylic versus inflatable, chiller sizing, and the circuit your electrician will ask about.",
    category: "Buying guides",
    readMinutes: 8,
    sections: [
      {
        heading: "Start with the room, not the temperature",
        body: "A plunge is a wet appliance. You need a drain path, a GFCI circuit, and enough clearance to step in without hitting a wall. If the room cannot take water, start with an inflatable tub you can empty, not a built-in acrylic cabinet.",
      },
      {
        heading: "Ice versus a chiller",
        body: "Bags of ice work for occasional sessions. Daily use wants a chiller sized to the water volume. Pair the Field inflatable with the 1HP chiller; the Alba cabinet is specified as an insulated basin with filtration housing. Confirm voltage before you order.",
      },
      {
        heading: "What we will not claim",
        body: "Cold water is popular among athletes and people who like a sharp morning. Caldera does not sell plunges as medical treatment, detox, or a cure. If a listing promises that, it is not this house.",
      },
    ],
  },
  {
    slug: "infrared-sauna-vs-blanket",
    title: "Infrared Cabin vs. Sauna Blanket",
    dek: "When a two-person cedar cabin is the right heat, and when a wrap is enough.",
    category: "Buying guides",
    readMinutes: 6,
    sections: [
      {
        heading: "Cabin",
        body: "A cabin is furniture. It needs floor load, 220V in many two-person models, and a room that can take heat and wood. It is the piece you build a sanctuary around, often next to a plunge for contrast.",
      },
      {
        heading: "Blanket",
        body: "A blanket stores in a closet and plugs into a standard outlet. It will not replace a cabin for two people, and it will not heat a room. It is the honest option for an apartment.",
      },
    ],
  },
  {
    slug: "massage-chairs-for-home-and-lobby",
    title: "Massage Chairs for Home and Commercial Lobbies",
    dek: "Zero-gravity shells that survive a Tuesday, not a showroom demo.",
    category: "Buying guides",
    readMinutes: 7,
    sections: [
      {
        heading: "Look at the track and the leather",
        body: "Residential chairs fail in spas. You want a serviceable SL-track, commercial upholstery, and a vendor who stocks actuators. Weight and doorway width matter more than the number of auto programs on the tablet.",
      },
      {
        heading: "Home versus lobby",
        body: "At home, noise and footprint decide. In a lobby, duty cycle and wipe-down leather decide. The Caldera Zero-G chair is specified for both; ask a specialist if you are putting it in a waiting room that runs all day.",
      },
    ],
  },
  {
    slug: "red-light-panel-buying-guide",
    title: "What to Look for in a Red Light Panel",
    dek: "Wavelengths, independent red/NIR channels, and why a catalog photo of the panel matters.",
    category: "Buying guides",
    readMinutes: 7,
    sections: [
      {
        heading: "The panel, not the brochure",
        body: "Buy the chassis you can hang or stand. Independent red and near-infrared dimming is more useful than a long list of nanometers on a wholesale graphic. Caldera’s Spectrum panel is the white vertical unit in the listing photo, with a side touchscreen for timer and pulse.",
      },
      {
        heading: "Claims",
        body: "Red light is used in recovery rooms and evening rituals. We describe it as designed for recovery and relaxation. We do not claim it reverses aging, treats disease, or replaces a clinician.",
      },
    ],
  },
  {
    slug: "build-a-wellness-room",
    title: "How to Build a Personal Wellness Room",
    dek: "A first-room list that can hold heat, cold, and recovery without filling a warehouse.",
    category: "Business",
    readMinutes: 9,
    sections: [
      {
        heading: "Pick a circuit",
        body: "Contrast (plunge + sauna) is the most requested sanctuary. Recovery (chair + boots + gun) is quieter and easier electrically. Longevity (panel + filtration + heat) is the third path. Do not buy all three on day one unless the room and the panel are already built.",
      },
      {
        heading: "Packages",
        body: "Recovery Room, The Athlete, Spa at Home, and Longevity Suite are invoices of the machines on this site — not invented bundles. A specialist will confirm freight, voltage, and whether white-glove is worth it.",
      },
    ],
  },
  {
    slug: "outfit-a-recovery-facility",
    title: "Outfitting a Commercial Recovery Facility",
    dek: "Duty cycle, garments, and the difference between a home plunge and a floor that books all day.",
    category: "Business",
    readMinutes: 8,
    sections: [
      {
        heading: "Duty cycle first",
        body: "If members book 20-minute plunges back to back, you need filtration, a chiller that can recover temperature, and a floor drain. Home inflatables will not survive that week.",
      },
      {
        heading: "Staff and wear parts",
        body: "Boots, filters, and sauna benches are consumables. Ask how long parts stay in stock. Caldera keeps wear parts for seven years from purchase. If a vendor cannot say that, keep walking.",
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
