import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Truck,
  FirstAidKit,
  Pill,
  Prescription,
  CheckCircle,
  Clock,
  LockKey,
  Star,
  Sparkle,
  ArrowRight,
  Flask,
  Heartbeat,
  Check,
  Phone,
  ShoppingBag,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { clinic, medicationKits, providers, reviews } from "@/lib/clinic";

export const metadata = {
  title: "Phillips Clinic & Pharmacy | Prescription Emergency Kits & Clinical Wellness",
  description:
    "Physician-prescribed Antibiotic and COVID Emergency Kits, practitioner-grade supplements, and custom compounding delivered to your door in partnership with Partell Pharmacy.",
};

const pharmacyPillars = [
  {
    icon: Prescription,
    title: "Licensed 503A Partner",
    body: "Compounded and fulfilled in partnership with Partell Pharmacy, a premier licensed compounding facility in Las Vegas.",
  },
  {
    icon: ShieldCheck,
    title: "Physician-Supervised",
    body: "Every order is reviewed and prescribed by board-certified physicians and family nurse practitioners.",
  },
  {
    icon: Truck,
    title: "Free 3–5 Day Delivery",
    body: "Shipped directly to your doorstep in discreet, tamper-evident, temperature-protected packaging.",
  },
  {
    icon: LockKey,
    title: "Transparent & HSA/FSA",
    body: "All-inclusive pricing covers medical telehealth review and medications. Qualifies for HSA/FSA reimbursement.",
  },
];

const howItWorksSteps = [
  {
    step: "01",
    title: "Select Your Kit or Treatment",
    desc: "Choose from our broad-spectrum Antibiotic Emergency Kit, COVID & Respiratory Kit, or custom longevity compounds.",
    badge: "2 Minutes",
  },
  {
    step: "02",
    title: "Quick Online Medical Review",
    desc: "Complete a simple health questionnaire. A licensed Phillips Clinic provider reviews your history and approves your prescription.",
    badge: "Same-Day Telehealth",
  },
  {
    step: "03",
    title: "Discreet Delivery to Your Door",
    desc: "Partell Pharmacy prepares your medications with personalized dosing instructions and ships via tracked express delivery.",
    badge: "3–5 Days",
  },
];

const faqItems = [
  {
    q: "Do I need a prior prescription from another doctor?",
    a: "No. Your order includes a secure medical intake and telehealth evaluation by a licensed Phillips Clinic provider. If clinically appropriate, our providers write and authorize the prescription directly for fulfillment through Partell Pharmacy.",
  },
  {
    q: "How are the medications compounded and packaged?",
    a: "All medications are sourced from FDA-registered facilities and dispensed by Partell Pharmacy, an accredited 503A compounding pharmacy adhering to the highest standards of safety, sterility, and quality control.",
  },
  {
    q: "Can I use my HSA or FSA card?",
    a: "Yes. Prescription emergency medication kits and physician consultations are qualified medical expenses under most Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA). An itemized medical receipt is provided.",
  },
  {
    q: "How fast will my order arrive?",
    a: "Once your telehealth questionnaire is reviewed and approved (typically within 24 hours), your kit is prepared and dispatched with tracking. You will receive your kit in 3 to 5 business days.",
  },
  {
    q: "Can I also see a provider in person in Las Vegas?",
    a: "Yes! Phillips Clinic operates a full-service medical clinic with on-site radiology, ultrasound, DEXA scans, and family practice at 5970 S Rainbow Blvd in Las Vegas. We welcome in-person visits 6 days a week.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. HIGH-CONVERTING PHARMACY HERO */}
      <section className="relative overflow-hidden border-b border-[var(--hairline)] bg-gradient-to-b from-[var(--color-brand-50)]/70 via-[var(--surface)] to-[var(--surface)]">
        {/* Subtle background glow element */}
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-sky-200/30 blur-3xl" />
        <div className="pointer-events-none absolute top-40 left-0 h-[400px] w-[400px] rounded-full bg-amber-100/40 blur-3xl" />

        <div className="shell relative grid items-center gap-12 pb-16 pt-10 md:pb-24 md:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            {/* Trust Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/90 px-3.5 py-1.5 text-xs font-semibold text-sky-900 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
              <span>US Licensed 503A Compounding Partner • Telehealth Included</span>
            </div>

            <h1 className="mt-5 font-display text-[2.75rem] font-bold leading-[1.06] tracking-tight text-[var(--text-strong)] md:text-5xl lg:text-[4rem]">
              Prescription emergency kits &amp; custom health,{" "}
              <span className="text-[var(--accent)]">delivered to your door.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[var(--text-body)] max-w-[56ch]">
              Be prepared before illness strikes. Physician-prescribed antibiotic kits,
              respiratory emergency kits, and practitioner-grade supplements dispensed directly to you in partnership with Partell Pharmacy.
            </p>

            {/* Quick Guarantees Pill Row */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-semibold text-[var(--text-strong)]">
              <span className="flex items-center gap-1.5">
                <CheckCircle size={16} weight="fill" className="text-emerald-600" />
                Free 3–5 Day Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={16} weight="fill" className="text-emerald-600" />
                Board-Certified Review
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={16} weight="fill" className="text-emerald-600" />
                HSA/FSA Eligible
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#medication-kits" className="btn btn-primary shadow-md hover:shadow-lg">
                <ShoppingBag size={18} weight="bold" />
                Explore Prescription Kits
              </a>
              <Link href="/supplements" className="btn btn-ghost">
                Shop Supplements
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>

            {/* Social Proof Star Bar */}
            <div className="mt-10 flex items-center gap-4 pt-6 border-t border-[var(--hairline)]">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={17} weight="fill" />
                ))}
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                <strong className="font-semibold text-[var(--text-strong)]">4.9 / 5.0 rating</strong> from 500+ patients across Nevada &amp; beyond.
              </p>
            </div>
          </div>

          {/* Hero Visual Card / Product Showcase */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[20px] border border-[var(--hairline-strong)] bg-white p-3 shadow-xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px]">
                <Image
                  src="/pharmacy-delivery.jpg"
                  alt="Prescription emergency medication kit unboxing"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-emerald-800 backdrop-blur-md shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  In Stock • Dispatches in 24h
                </div>
                <div className="absolute bottom-3 right-3 rounded-lg bg-black/75 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  Partell Pharmacy 503A Partner
                </div>
              </div>

              {/* Mini Product Cards Strip */}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href="#antibiotic-emergency-kit"
                  className="group rounded-xl border border-[var(--hairline)] bg-[var(--color-brand-50)] p-3 transition-colors hover:border-[var(--accent)] hover:bg-white"
                >
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">
                    Most Popular
                  </span>
                  <p className="font-display text-sm font-semibold text-[var(--text-strong)]">
                    Antibiotic Kit
                  </p>
                  <p className="text-xs font-bold text-[var(--accent-bright)] mt-0.5">$249</p>
                </a>

                <a
                  href="#covid-emergency-kit"
                  className="group rounded-xl border border-[var(--hairline)] bg-[var(--color-brand-50)] p-3 transition-colors hover:border-[var(--accent)] hover:bg-white"
                >
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-sky-700">
                    With Nebulizer
                  </span>
                  <p className="font-display text-sm font-semibold text-[var(--text-strong)]">
                    COVID Emergency Kit
                  </p>
                  <p className="text-xs font-bold text-[var(--accent-bright)] mt-0.5">$299</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST & COMPLIANCE PILLARS BAR */}
      <section className="border-b border-[var(--hairline)] bg-white py-10">
        <div className="shell grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pharmacyPillars.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4 items-start">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-50 text-[var(--accent)] border border-amber-200/60">
                <Icon size={24} weight="duotone" />
              </div>
              <div>
                <h2 className="font-display text-base font-semibold text-[var(--text-strong)]">
                  {title}
                </h2>
                <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HOW OUR DIGITAL PHARMACY WORKS */}
      <section className="border-b border-[var(--hairline)] bg-[var(--surface-2)] py-20 md:py-24">
        <div className="shell">
          <Reveal>
            <div className="text-center max-w-[64ch] mx-auto">
              <span className="font-display text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                Seamless Telehealth &amp; Delivery
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-[var(--text-strong)] md:text-4xl">
                Get your prescription in 3 simple steps
              </h2>
              <p className="mt-3 text-sm text-[var(--text-muted)]">
                No insurance pre-authorizations, no crowded pharmacy lines, and no waiting weeks for a specialist referral.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {howItWorksSteps.map(({ step, title, desc, badge }, i) => (
              <Reveal key={step} delay={i * 0.08}>
                <div className="relative flex h-full flex-col rounded-2xl border border-[var(--hairline)] bg-white p-8 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-bold text-slate-200">
                      {step}
                    </span>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 border border-emerald-200/60">
                      {badge}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold text-[var(--text-strong)]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    {desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED MEDICATION KITS (E-COMMERCE SHOWCASE) */}
      <section id="medication-kits" className="border-b border-[var(--hairline)] bg-white py-20 md:py-28 scroll-mt-20">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="font-display text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                  Preparedness &amp; Pharmacy
                </span>
                <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-[var(--text-strong)] md:text-4xl">
                  Prescription Medication Kits
                </h2>
                <p className="mt-3 max-w-[56ch] text-sm text-[var(--text-body)]">
                  Dispensed with a telehealth evaluation through Partell Pharmacy. Kept safely in your medicine cabinet for immediate access.
                </p>
              </div>
              <Link href="/kits" className="btn btn-ghost shrink-0">
                View Full Kit Details
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {medicationKits.map((kit, i) => (
              <Reveal key={kit.slug} delay={i * 0.1}>
                <article
                  id={kit.slug}
                  className="flex flex-col overflow-hidden rounded-2xl border border-[var(--hairline-strong)] bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:border-[var(--accent)]"
                >
                  {/* Top Badge & Image */}
                  <div className="relative border-b border-[var(--hairline)] bg-slate-50 p-6 flex items-center justify-center">
                    <span className="absolute top-4 left-4 rounded-full bg-[var(--color-brand-900)] text-white text-[11px] font-bold px-3 py-1 uppercase tracking-wider">
                      Rx Required • Telehealth Included
                    </span>
                    <Image
                      src={kit.image}
                      alt={`${kit.name} contents`}
                      width={945}
                      height={495}
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="h-60 w-auto object-contain transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-8">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-display text-2xl font-bold text-[var(--text-strong)]">
                        {kit.name}
                      </h3>
                      <span className="font-display text-3xl font-bold text-[var(--accent-bright)]">
                        {kit.price}
                      </span>
                    </div>

                    <p className="mt-3 text-sm text-[var(--text-body)] leading-relaxed">
                      {kit.blurb}
                    </p>

                    <div className="mt-6 border-t border-[var(--hairline)] pt-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                        Included Medications ({kit.contents.length}):
                      </p>
                      <ul className="mt-3 grid gap-2 text-xs text-[var(--text-body)]">
                        {kit.contents.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <Check size={15} weight="bold" className="mt-0.5 shrink-0 text-emerald-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[var(--hairline)] flex flex-wrap items-center justify-between gap-4">
                      <div className="text-xs text-[var(--text-muted)]">
                        <span>Ships via <strong>Partell Pharmacy</strong></span>
                        <br />
                        <span>Delivered in 3–5 days</span>
                      </div>
                      <Link
                        href={`/kits#${kit.slug}`}
                        className="btn btn-primary"
                      >
                        <ShoppingBag size={17} weight="bold" />
                        Order Kit
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRACTITIONER SUPPLEMENTS & BIO-IDENTICAL COMPOUNDING */}
      <section className="border-b border-[var(--hairline)] bg-[var(--surface-2)] py-20 md:py-28">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-[var(--hairline-strong)] bg-white p-3 shadow-lg">
                <Image
                  src="/pharmacy-supplements.jpg"
                  alt="Practitioner-grade supplements and clinical formulations"
                  width={1200}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="rounded-xl object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/95 p-4 backdrop-blur-md border border-slate-200/80 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display text-sm font-semibold text-[var(--text-strong)]">
                        Wholescripts Direct Dispensary
                      </p>
                      <p className="text-xs text-[var(--text-muted)]">
                        Proprietary formulations formulated by our medical team
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1">
                      Practitioner-Grade
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <span className="font-display text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                  Physician-Grade Formulations
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-[var(--text-strong)] md:text-4xl">
                  Supplements chosen for your biology, not mass-market shelves.
                </h2>
                <p className="mt-4 text-base text-[var(--text-body)] leading-relaxed">
                  Most off-the-shelf vitamins contain cheap fillers, substandard absorption rates, and inaccurate dosages. Our dispensary connects you directly to physician-grade nutraceuticals formulated to match your actual blood panels.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "Zero artificial fillers, heavy metals, or untested additives",
                    "Custom compounded prescriptions tailored with Partell Pharmacy",
                    "Bio-Identical Hormone Replacement Therapy (BHRT) capsules & creams",
                    "Direct home delivery with automatic refill reminders",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2.5 text-sm text-[var(--text-strong)]">
                      <CheckCircle size={18} weight="fill" className="text-[var(--accent)] shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={clinic.supplementsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Open Supplement Dispensary
                    <ArrowUpRight size={17} weight="bold" />
                  </a>
                  <Link href="/anti-aging" className="btn btn-ghost">
                    Hormone Compounding
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. COMPARISON: WHY DIRECT CLINIC PHARMACY BEATS RETAIL */}
      <section className="border-b border-[var(--hairline)] bg-white py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <div className="text-center max-w-[62ch] mx-auto">
              <span className="font-display text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                The Compounding Difference
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-[var(--text-strong)] md:text-4xl">
                Why patients choose Phillips Clinic &amp; Partell Pharmacy
              </h2>
              <p className="mt-3 text-sm text-[var(--text-muted)]">
                Experience healthcare that puts convenience, clinical quality, and emergency preparedness first.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 overflow-hidden rounded-2xl border border-[var(--hairline-strong)] bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--hairline)]">
              {/* Conventional Retail */}
              <div className="p-8 sm:p-10 bg-slate-50/50">
                <p className="font-display text-lg font-bold text-slate-400">
                  Conventional Retail Pharmacy
                </p>
                <ul className="mt-6 space-y-4 text-sm text-slate-500">
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold mt-0.5">✕</span>
                    <span>Waiting in crowded retail queues when already feeling sick</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold mt-0.5">✕</span>
                    <span>One-size-fits-all commercial dosages without compounding flexibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold mt-0.5">✕</span>
                    <span>No advance emergency preparations — leaves you stranded during shortages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold mt-0.5">✕</span>
                    <span>Impersonal clerks with no access to your medical history</span>
                  </li>
                </ul>
              </div>

              {/* Phillips Clinic & Partell Pharmacy */}
              <div className="p-8 sm:p-10 bg-gradient-to-br from-amber-50/40 via-white to-white border-t-2 md:border-t-0 md:border-l-2 border-[var(--accent)]">
                <div className="flex items-center justify-between">
                  <p className="font-display text-lg font-bold text-[var(--text-strong)]">
                    Phillips Clinic + Partell Pharmacy
                  </p>
                  <span className="rounded-full bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-0.5">
                    Recommended
                  </span>
                </div>
                <ul className="mt-6 space-y-4 text-sm text-[var(--text-strong)]">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} weight="fill" className="text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Pre-emptive kits on your shelf</strong> before travel or illness strikes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} weight="fill" className="text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>503A Licensed custom compounding</strong> tailored to your body and tolerance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} weight="fill" className="text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Discreet home delivery</strong> with full tracking within 3 to 5 business days</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} weight="fill" className="text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>20+ years of continuous medical oversight</strong> by Nevada physicians</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MEDICAL TEAM & CLINICAL BACKING */}
      <section className="border-b border-[var(--hairline)] bg-[var(--surface-2)] py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <div className="max-w-[24ch]">
              <span className="font-display text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                Licensed Clinical Staff
              </span>
              <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-[var(--text-strong)] md:text-4xl">
                Real doctors. Real oversight. Not an anonymous app.
              </h2>
              <p className="mt-4 text-sm text-[var(--text-muted)]">
                Our board-certified providers personally review every health questionnaire and ensure your prescription fits your medical history.
              </p>
            </div>
          </Reveal>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {providers.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <li className="rounded-2xl border border-[var(--hairline)] bg-white p-5 shadow-sm">
                  <div className="aspect-[4/5] overflow-hidden rounded-xl bg-slate-100">
                    {p.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={p.photo}
                        alt={`${p.name}, ${p.credential}`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="grid h-full place-items-center font-display text-4xl font-semibold text-slate-400">
                        {p.name
                          .split(" ")
                          .map((w) => w[0])
                          .join("")}
                      </div>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-[var(--text-strong)]">
                    {p.name}, {p.credential}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">{p.role}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. VERIFIED PATIENT REVIEWS */}
      <section className="border-b border-[var(--hairline)] bg-white py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <div className="text-center max-w-[60ch] mx-auto">
              <span className="font-display text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                Patient Testimonials
              </span>
              <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-[var(--text-strong)] md:text-4xl">
                Trusted by thousands of Nevada families
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.slice(0, 6).map((r, i) => (
              <Reveal key={r.name} delay={i * 0.05}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-[var(--hairline)] bg-slate-50/60 p-6">
                  <div>
                    <div className="flex text-amber-500 mb-3">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} size={15} weight="fill" />
                      ))}
                    </div>
                    <blockquote className="text-sm leading-relaxed text-[var(--text-strong)]">
                      “{r.body}”
                    </blockquote>
                  </div>
                  <p className="mt-5 text-xs font-semibold text-[var(--text-muted)]">
                    — {r.name}, Verified Patient
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PHARMACY & PRESCRIPTION FAQS */}
      <section className="border-b border-[var(--hairline)] bg-[var(--surface-2)] py-20 md:py-28">
        <div className="shell max-w-4xl">
          <Reveal>
            <div className="text-center">
              <span className="font-display text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                Got Questions?
              </span>
              <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-[var(--text-strong)] md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-sm text-[var(--text-muted)]">
                Everything you need to know about our prescription emergency kits, pharmacy partnership, and delivery.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 space-y-4">
            {faqItems.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.05}>
                <details className="group rounded-2xl border border-[var(--hairline)] bg-white p-6 open:shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base font-semibold text-[var(--text-strong)]">
                    <span>{item.q}</span>
                    <span className="ml-4 transition-transform duration-200 group-open:rotate-180 text-[var(--accent)]">
                      ↓
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--text-body)] border-t border-[var(--hairline)] pt-4">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. URGENT PREPAREDNESS BOTTOM CTA BAND */}
      <section className="relative overflow-hidden bg-[var(--color-brand-950)] text-white py-20 md:py-24">
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="shell relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold text-amber-300">
              <Sparkle size={13} weight="fill" /> Be Prepared Before Symptoms Start
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl text-white">
              Order your prescription emergency kit today.
            </h2>
            <p className="mt-4 text-base text-slate-300 max-w-[50ch] leading-relaxed">
              Fast online telehealth intake, approved by board-certified providers, and dispensed directly to your doorstep in 3 to 5 days.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/kits" className="btn btn-primary shadow-lg">
                <ShoppingBag size={18} weight="bold" />
                Order Medication Kits Now
              </Link>
              <a href={clinic.phoneHref} className="btn border border-white/20 text-white hover:bg-white/10">
                <Phone size={16} weight="fill" />
                Call (702) 363-4000
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-md">
            <h3 className="font-display text-lg font-bold text-white">
              Las Vegas Clinic &amp; Pharmacy Care
            </h3>
            <p className="mt-2 text-xs text-slate-300 leading-relaxed">
              5970 South Rainbow Boulevard, Suite 100, Las Vegas, NV 89118
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Open 6 Days a Week, including Saturday 9:00 AM – 4:00 PM.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                Accepting New Telehealth Patients
              </span>
              <a
                href={clinic.bookingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent-300)] font-semibold hover:underline"
              >
                Book In-Person →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
