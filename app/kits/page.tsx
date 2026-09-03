import Image from "next/image";
import { Check, FileArrowDown, Truck, Video, ShieldCheck, ShoppingBag, Phone, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { clinic, kitsIntro, kitsPartner, medicationKits } from "@/lib/clinic";

export const metadata = {
  title: "Prescription Medication Kits",
  description:
    "Antibiotic and COVID emergency prescription medication kits from Phillips Clinic in Las Vegas, dispensed with a telehealth visit through Partell Pharmacy.",
};

const steps = [
  {
    icon: FileArrowDown,
    title: "Complete the Health Questionnaire",
    body: "Takes 2–3 minutes. Your medical history tells our providers whether this kit is clinically appropriate for you.",
  },
  {
    icon: Video,
    title: "Telehealth Medical Approval",
    body: "A licensed Phillips Clinic physician or nurse practitioner reviews your intake and writes the authorization.",
  },
  {
    icon: Truck,
    title: "Free Tracked Delivery in 3–5 Days",
    body: "Compounded and fulfilled by Partell Pharmacy, shipped discreetly with tracking.",
  },
];

export default function KitsPage() {
  return (
    <>
      <PageHero
        title="Prescription emergency kits, on your shelf before you need them."
        intro={kitsIntro}
      />

      {/* Trust & Guarantee Banner */}
      <section className="border-b border-[var(--hairline)] bg-white py-6">
        <div className="shell flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-semibold text-[var(--text-strong)]">
          <span className="flex items-center gap-2 text-emerald-700">
            <ShieldCheck size={18} weight="fill" />
            Dispensed Through Partell Pharmacy
          </span>
          <span className="flex items-center gap-2 text-sky-800">
            <Sparkle size={16} weight="fill" />
            Telehealth Medical Consultation Included
          </span>
          <span className="flex items-center gap-2 text-slate-700">
            <Truck size={18} weight="duotone" />
            Tracked 3–5 Day Home Delivery
          </span>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="shell py-16 md:py-20">
        <div className="text-center max-w-[60ch] mx-auto mb-12">
          <h2 className="font-display text-2xl font-bold text-[var(--text-strong)] md:text-3xl">
            How the Online Prescription Process Works
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <article className="h-full rounded-2xl border border-[var(--hairline)] bg-[var(--surface-2)] p-7">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white text-[var(--accent)] border border-[var(--hairline)] shadow-sm">
                  <Icon size={26} weight="duotone" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-[var(--text-strong)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Product Detail Sections */}
      {medicationKits.map((kit, i) => (
        <section
          key={kit.slug}
          id={kit.slug}
          className={`scroll-mt-24 border-t border-[var(--hairline)] ${
            i % 2 === 1 ? "bg-[var(--surface-2)]" : "bg-white"
          }`}
        >
          <div className="shell grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-20">
            <Reveal className={i % 2 === 1 ? "lg:order-2" : undefined}>
              <div className="relative overflow-hidden rounded-2xl border border-[var(--hairline-strong)] bg-white p-6 shadow-md">
                <span className="absolute top-4 left-4 rounded-full bg-[var(--color-brand-900)] text-white text-[11px] font-bold px-3 py-1 uppercase tracking-wider">
                  In Stock • Dispatches in 24h
                </span>
                <Image
                  src={kit.image}
                  alt={`${kit.name} contents`}
                  width={945}
                  height={495}
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="w-full object-contain p-4"
                />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900 border border-amber-200 mb-3">
                <span>Prescription Required</span> • <span>Includes Provider Review</span>
              </div>
              <h2 className="font-display text-3xl font-bold leading-[1.1] md:text-4xl text-[var(--text-strong)]">
                {kit.name}
              </h2>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="font-display text-4xl font-bold text-[var(--accent-bright)]">
                  {kit.price}
                </span>
                <span className="text-xs text-[var(--text-muted)] font-medium">
                  All-inclusive (medications, consultation &amp; shipping)
                </span>
              </div>
              <p className="mt-5 text-base text-[var(--text-body)] leading-relaxed">{kit.blurb}</p>

              <h3 className="mt-8 font-display text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-strong)]">
                Included Medications &amp; Dosages ({kit.contents.length})
              </h3>
              <ul className="mt-4 grid gap-2.5">
                {kit.contents.map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-[var(--text-body)]">
                    <Check
                      size={18}
                      weight="bold"
                      className="mt-0.5 shrink-0 text-emerald-600"
                    />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:+17023634000`}
                  className="btn btn-primary"
                >
                  <ShoppingBag size={18} weight="bold" />
                  Order Kit via Phone (702) 363-4000
                </a>
                <a
                  href={clinic.bookingHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  Book Telehealth Consultation
                </a>
              </div>
              <p className="mt-3 text-xs text-[var(--text-muted)]">
                Call front desk for immediate digital questionnaire link or order processing.
              </p>
            </Reveal>
          </div>
        </section>
      ))}

      {/* Compounding partner banner */}
      <section className="border-t border-[var(--hairline)] bg-[var(--color-brand-950)] text-white">
        <div className="shell grid gap-10 py-16 md:grid-cols-2 md:gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Compounding Facility
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold text-white">
              Dispensed through Partell Pharmacy
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{kitsPartner}</p>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Medical Safety
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold text-white">
              Safety &amp; Compliance Notice
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              These are prescription medications and are dispensed only after a licensed
              medical provider reviews your history. They are designed for emergency preparedness,
              not a substitute for emergent care. If you are experiencing a life-threatening medical emergency, please call 911 immediately.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Be prepared before unexpected illness occurs."
        body={`Call ${clinic.phone} to receive the medical intake questionnaire, or order your emergency kit directly with our staff.`}
      />
    </>
  );
}
