/**
 * PHOTOGRAPHY.
 *
 * Only the clinic's own images are used. Where they have no photo for a slot,
 * we render a branded panel rather than an unrelated stock picture.
 *
 * Note on what was deliberately left out: their weight-loss page image is a
 * watermarked Adobe Stock comp, so it is not licensed and cannot ship.
 */
export type Slot = {
  /** Their image, or null when they have none for this slot. */
  src: string | null;
  alt: string;
  /** The photo to shoot to replace the branded panel or upgrade a low-res file. */
  need: string;
  width: number;
  height: number;
};

export const photos = {
  homeHero: {
    src: "/family.jpg",
    alt: "A family together outdoors",
    need: "Their own image, 733x339 and dated. Reshoot: a provider with a family in a Phillips Clinic exam room, vertical.",
    width: 733,
    height: 339,
  },
  imaging: {
    src: null,
    alt: "On-site imaging at Phillips Clinic",
    need: "MISSING. The in-house x-ray, ultrasound or DEXA equipment with a technician. This is the clinic's strongest differentiator and has no photo at all.",
    width: 1200,
    height: 900,
  },
  wellness: {
    src: "/nutrition.jpg",
    alt: "Fresh produce in a shopping bag",
    need: "Their own image, 127x535 and very narrow. Reshoot wider, or a 50-plus patient in consultation.",
    width: 127,
    height: 535,
  },
  records: {
    src: "/records.jpg",
    alt: "Patient records being filed",
    need: "Their own image, 204x308. Fine at small sizes.",
    width: 204,
    height: 308,
  },
  building: {
    src: null,
    alt: "The Phillips Clinic building on South Rainbow Boulevard",
    need: "MISSING. Exterior of Suite 100 at 5970 S Rainbow Blvd, so a patient arriving by car recognises it.",
    width: 1400,
    height: 800,
  },
} satisfies Record<string, Slot>;
