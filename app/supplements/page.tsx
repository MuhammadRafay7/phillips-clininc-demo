import Image from "next/image";
import { ArrowUpRight, CheckCircle, ShieldCheck, ShoppingBag, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { clinic } from "@/lib/clinic";

export const metadata = {
  title: "Practitioner-Grade Supplements & Dispensary",
  description:
    "Phillips Clinic offers a full line of proprietary nutritional supplements formulated for our patients, ordered through our Wholescripts direct dispensary.",
};

const supplementCategories = [
  {
    title: "Cardiovascular & Metabolic",
    items: ["Omega-3 Elite EPA/DHA", "CoQ10 Ubiquinol", "Berberine Active", "Magnesium Glycinate"],
  },
  {
    title: "Immunity & Respiratory",
    items: ["Orthomune Defense", "Vitamin D3 + K2 Liquid Drops", "Buffered Vitamin C", "Zinc Glycinate"],
  },
  {
    title: "Longevity & Anti-Aging",
    items: ["Methylated B-Complex", "Collagen Peptide Powder", "NAD+ Precursors", "Melatonin Prolonged Release"],
  },
  {
    title: "Hormone & Adrenal Support",
    items: ["DHEA Micronized", "Adrenal Adaptogens", "Pregnenolone", "DIM Complex"],
  },
];

export default function SupplementsPage() {
  return (
    <>
      <PageHero
        title="Physician-grade supplements, matched to your biology."
        intro="Phillips Clinic offers proprietary, practitioner-formulated nutritional supplements through our Wholescripts dispensary. Sourced without cheap fillers, artificial colorings, or unverified ingredients."
      />

      <section className="border-b border-[var(--hairline)] bg-white py-6">
        <div className="shell flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-semibold text-[var(--text-strong)]">
          <span className="flex items-center gap-2 text-emerald-700">
            <ShieldCheck size={18} weight="fill" />
            3rd-Party Lab Verified Potency
          </span>
          <span className="flex items-center gap-2 text-sky-800">
            <Sparkle size={16} weight="fill" />
            Direct Dispensary Pricing
          </span>
          <span className="flex items-center gap-2 text-slate-700">
            <ShoppingBag size={18} weight="duotone" />
            Automated Doorstep Refills
          </span>
        </div>
      </section>

      <section className="shell py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-[var(--hairline-strong)] bg-white p-3 shadow-xl">
              <Image
                src="/pharmacy-supplements.jpg"
                alt="Practitioner-grade supplement bottles"
                width={1200}
                height={900}
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="w-full rounded-xl object-cover"
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
              Wholescripts Online Dispensary
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold leading-tight md:text-4xl text-[var(--text-strong)]">
              Order directly to your door with doctor guidance.
            </h2>
            <p className="prose-body mt-4">
              Your provider recommends targeted dosages tailored to your blood labs and health history. You then order through our secure Wholescripts dispensary, which ships to you directly and maintains your refill record.
            </p>

            <div className="mt-6 space-y-3 text-sm text-[var(--text-strong)]">
              <div className="flex items-center gap-2.5">
                <CheckCircle size={18} weight="fill" className="text-emerald-600 shrink-0" />
                <span>Practitioner-exclusive formulations unavailable in regular stores</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle size={18} weight="fill" className="text-emerald-600 shrink-0" />
                <span>Zero synthetic binders or excipients</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle size={18} weight="fill" className="text-emerald-600 shrink-0" />
                <span>Free doorstep shipping on orders over $50</span>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={clinic.supplementsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Open Wholescripts Dispensary
                <ArrowUpRight size={17} weight="bold" />
              </a>
              <p className="mt-3 text-xs text-[var(--text-muted)]">
                First-time users automatically register with the Phillips Clinic practitioner code.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="border-t border-[var(--hairline)] bg-[var(--surface-2)] py-16 md:py-24">
        <div className="shell">
          <Reveal>
            <div className="text-center max-w-[60ch] mx-auto">
              <h2 className="font-display text-3xl font-bold text-[var(--text-strong)]">
                Core Formulations Available in Our Dispensary
              </h2>
              <p className="mt-3 text-sm text-[var(--text-muted)]">
                Prescribed based on your metabolic and biomarker evaluations.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supplementCategories.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-[var(--hairline)] bg-white p-6 shadow-sm">
                  <h3 className="font-display text-base font-bold text-[var(--text-strong)]">
                    {cat.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-xs text-[var(--text-body)]">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Need custom supplement guidance?"
        body="Book a wellness consultation with Dr. Moffat or Julie Gidvani to review your current supplements and get a personalized regimen."
      />
    </>
  );
}
