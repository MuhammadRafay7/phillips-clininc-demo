import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Check,
  CheckCircle,
  Clock,
  Flask,
  Heartbeat,
  Phone,
  ShoppingBag,
  Sparkle,
  Stethoscope,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { ReviewsCarousel } from "@/components/reviews-carousel";
import { clinic, founder, medicationKits, providers, reviews } from "@/lib/clinic";

export const metadata = {
  description:
    "Family practice, wellness and anti-aging medicine in Las Vegas since 2005. On-site x-ray, ultrasound, echocardiography and DEXA, board-certified providers, same-day appointments and open Saturdays.",
};

/** What the clinic leads with: who they are, not what they ship. */
const clinicPillars = [
  {
    icon: Stethoscope,
    title: "Board-Certified Providers",
    body: "Physicians and family nurse practitioners who see patients of every age, from newborns to seniors.",
  },
  {
    icon: Flask,
    title: "Diagnostics On Site",
    body: "X-ray, ultrasound, echocardiography and DEXA in the same building, read by your own provider.",
  },
  {
    icon: Clock,
    title: "Open Six Days a Week",
    body: "Same-day appointments are available and walk-ins are welcome, including Saturday 9:00 AM to 4:00 PM.",
  },
  {
    icon: Heartbeat,
    title: "One Address, Whole Family",
    body: "Primary care, wellness and anti-aging medicine under one roof at 5970 S Rainbow Boulevard.",
  },
  ];

/** The three service groups, linked to their sections on /services. */
const careAreas = [
  {
    href: "/services#primary-care",
    eyebrow: "Primary care",
    title: "Care for the whole family",
    body: "Wellness exams, pediatrics, sports physicals, gynecological exams, allergy testing and immunotherapy.",
    icon: Heartbeat,
  },
  {
    href: "/services#on-site-diagnostics",
    eyebrow: "Diagnostics",
    title: "Imaging under one roof",
    body: "In-house x-ray, a full spectrum of ultrasound, cardiac echo, vascular testing, bone density and DEXA.",
    icon: Flask,
  },
  {
    href: "/services#wellness-longevity",
    eyebrow: "Wellness & longevity",
    title: "Healthspan, not just lifespan",
    body: "Bio-identical hormone therapy, medically supervised weight loss, IV nutritional therapy and chelation.",
    icon: Sparkle,
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
    badge: "3\u20135 Days",
  },
  ];

/**
 * The team grid. The founder leads it but is tagged so he does not read as
 * someone you can book: his bio on /team is past tense throughout.
 */
const teamCards = [
  {
    key: "founder",
    photo: founder.photo,
    name: founder.name,
    credential: founder.credential,
    role: founder.role,
    isFounder: true,
  },
  ...providers.map((p) => ({
    key: p.slug,
    photo: p.photo,
    name: p.name,
    credential: p.credential,
    role: p.role,
    isFounder: false,
  })),
];

/** Clinic questions lead; the kit and delivery questions follow. */
const faqItems = [
  {
    q: "Can I see a provider in person in Las Vegas?",
    a: "Yes. Phillips Clinic is a full-service medical practice with on-site radiology, ultrasound, DEXA scans and family care at 5970 S Rainbow Blvd. We see patients six days a week, including Saturdays, and walk-ins are welcome.",
  },
  {
    q: "Do you take new patients, and do I need a referral?",
    a: "We are accepting new patients of every age and no referral is needed. Call the front desk or book online, and if you are unsure which kind of visit you need, describe what is going on and they will tell you.",
  },
  {
    q: "Is imaging really done in the building?",
    a: "Yes. We are one of the few clinics in the Las Vegas valley with an in-house x-ray machine, with a technician on site and providers available to read and interpret the images. Ultrasound, echocardiography, vascular testing, bone density and DEXA are also done here.",
  },
  {
    q: "Do I need a prior prescription for a medication kit?",
    a: "No. Your order includes a secure medical intake and telehealth evaluation by a licensed Phillips Clinic provider. If clinically appropriate, our providers write and authorize the prescription directly for fulfillment through Partell Pharmacy.",
  },
  ];

export default function HomePage() {
  return (
    <>
      {/* 1. CLINIC HERO */}
      <section className="relative overflow-hidden border-b border-[var(--hairline)] bg-gradient-to-b from-[var(--color-brand-50)]/70 via-[var(--surface)] to-[var(--surface)]">
        {/* Subtle background glow element */}
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-sky-200/30 blur-3xl" />
        <div className="pointer-events-none absolute top-40 left-0 h-[400px] w-[400px] rounded-full bg-amber-100/40 blur-3xl" />

        <div className="shell relative grid items-center gap-12 pb-16 pt-10 md:pb-24 md:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            {/* Trust Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/90 px-3.5 py-1.5 text-xs font-semibold text-sky-900 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
              <span>Serving the Las Vegas valley since 2005 &bull; Open Saturdays</span>
            </div>

            <h1 className="mt-5 font-display text-[2.75rem] font-bold leading-[1.06] tracking-tight text-[var(--text-strong)] md:text-5xl lg:text-[4rem]">
              Family practice, wellness and{" "}
              <span className="text-[var(--accent)]">anti-aging medicine.</span>
            </h1>

            {/* Their hand-lettered promise, straight off their own homepage:
                "Our goal for our patients is to Be Well, Stay Well & Age Well." */}
            <Image
              src="/tagline-be-well.png"
              alt={clinic.tagline}
              width={788}
              height={105}
              sizes="360px"
              priority
              className="mt-6 h-auto w-[19rem] max-w-full sm:w-[22rem]"
            />

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[var(--text-body)] max-w-[56ch]">
              Personalized care for children, adults and seniors in one Las Vegas
              building &mdash; with x-ray, ultrasound and DEXA on site, so most
              visits do not send you anywhere else.
            </p>

            {/* Quick Guarantees Pill Row */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-semibold text-[var(--text-strong)]">
              <span className="flex items-center gap-1.5">
                <CheckCircle size={16} weight="fill" className="text-emerald-600" />
                Same-Day Appointments
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={16} weight="fill" className="text-emerald-600" />
                Walk-Ins Welcome
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={16} weight="fill" className="text-emerald-600" />
                Board-Certified Providers
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={clinic.bookingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary shadow-md hover:shadow-lg"
              >
                <CalendarCheck size={18} weight="bold" />
                Book an Appointment
              </a>
              <Link href="/services" className="btn btn-ghost">
                See Our Services
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>

            {/* Was a fabricated "4.9/5.0 from 500+ patients" bar. The clinic
                publishes no rating, so this quotes a real review instead. */}
            <figure className="mt-10 border-t border-[var(--hairline)] pt-6">
              <blockquote className="max-w-[52ch] text-sm leading-relaxed text-[var(--text-body)]">
                &ldquo;It was the most thorough doctor visit I&rsquo;ve ever had.
                Everything was addressed during the same visit and I never felt
                rushed at all.&rdquo;
              </blockquote>
              <figcaption className="mt-2 text-xs text-[var(--text-muted)]">
                Stephanie V., patient &middot;{" "}
                <Link href="/#reviews" className="font-medium text-[var(--accent)] hover:underline">
                  Read more reviews
                </Link>
              </figcaption>
            </figure>
          </div>

          {/* Hero visual. /family.jpg is the clinic's own photo at 733x339, so it
              is shown at its native aspect and never upscaled past source width. */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[20px] border border-[var(--hairline-strong)] bg-white p-3 shadow-xl">
              <div className="relative aspect-[733/339] w-full overflow-hidden rounded-[14px]">
                <Image
                  src="/family.jpg"
                  alt="A family together outdoors"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-emerald-800 backdrop-blur-md shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Accepting New Patients
                </div>
              </div>

              {/* Practical details a first-time patient needs before anything else */}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href={clinic.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-[var(--hairline)] bg-[var(--color-brand-50)] p-3 transition-colors hover:border-[var(--accent)] hover:bg-white"
                >
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">
                    Find Us
                  </span>
                  <p className="font-display text-sm font-semibold text-[var(--text-strong)]">
                    S Rainbow Blvd, Suite 100
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    {clinic.address.city}, {clinic.address.state}
                  </p>
                </a>

                <a
                  href={clinic.phoneHref}
                  className="group rounded-xl border border-[var(--hairline)] bg-[var(--color-brand-50)] p-3 transition-colors hover:border-[var(--accent)] hover:bg-white"
                >
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-sky-700">
                    Front Desk
                  </span>
                  <p className="font-display text-sm font-semibold text-[var(--text-strong)]">
                    {clinic.phone}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    Mon&ndash;Sat
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLINIC PILLARS BAR */}
      <section className="border-b border-[var(--hairline)] bg-white py-10">
        <div className="shell grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clinicPillars.map(({ icon: Icon, title, body }) => (
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

      {/* 3. CARE AT PHILLIPS CLINIC */}
      <section className="border-b border-[var(--hairline)] bg-[var(--surface-2)] py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="font-display text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                  What We Do
                </span>
                <h2 className="mt-2 max-w-[24ch] font-display text-3xl font-semibold leading-tight text-[var(--text-strong)] md:text-4xl">
                  Care at Phillips Clinic
                </h2>
                <p className="mt-3 max-w-[56ch] text-sm text-[var(--text-body)]">
                  Three sides of one practice. Most patients see us for all of them
                  over the years, and never change buildings to do it.
                </p>
              </div>
              <Link href="/services" className="btn btn-ghost shrink-0">
                All Services
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {careAreas.map(({ href, eyebrow, title, body, icon: Icon }, i) => (
              <Reveal key={href} delay={i * 0.08}>
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-2xl border border-[var(--hairline)] bg-white p-8 shadow-sm transition-all duration-300 hover:border-[var(--accent)] hover:shadow-lg"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-50 text-[var(--accent)] border border-amber-200/60">
                    <Icon size={24} weight="duotone" />
                  </div>
                  <span className="mt-6 font-display text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                    {eyebrow}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-[var(--text-strong)]">
                    {title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                    {body}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)]">
                    Read more
                    <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MEDICAL TEAM */}
      <section className="border-b border-[var(--hairline)] bg-[var(--surface-2)] py-20 md:py-28">
        <div className="shell">
          <Reveal>
            {/* Header row matches the Care and Kits sections: copy left,
                section link right, rather than a narrow column of text with
                two thirds of the row left empty. */}
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="font-display text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                  Licensed Clinical Staff
                </span>
                <h2 className="mt-2 max-w-[24ch] font-display text-3xl font-semibold leading-tight text-[var(--text-strong)] md:text-4xl">
                  Real doctors you see in person, year after year.
                </h2>
                <p className="mt-4 max-w-[56ch] text-sm text-[var(--text-body)]">
                  Our board-certified physicians and family nurse practitioners
                  take extra time in the room, and they are the same providers
                  who read your imaging.
                </p>
              </div>
              <Link href="/team" className="btn btn-ghost shrink-0">
                Meet the Team
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </Reveal>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {teamCards.map((p, i) => (
              <Reveal key={p.key} delay={i * 0.06}>
                <li className="relative h-full rounded-2xl border border-[var(--hairline)] bg-white p-5 shadow-sm">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-100">
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
                    {p.isFounder && (
                      <span className="absolute left-2 top-2 rounded-full bg-[var(--color-brand-950)]/85 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                        Founder
                      </span>
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

      {/* 5. SUPPLEMENTS & BIO-IDENTICAL COMPOUNDING */}
      <section className="border-b border-[var(--hairline)] bg-[var(--surface-2)] py-20 md:py-28">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-[var(--hairline-strong)] bg-white p-3 shadow-lg">
                <Image
                  src="/protocol-packaging-alt.jpg"
                  alt="A Foundations health protocol as it ships, with daily sachets"
                  width={1824}
                  height={1026}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="rounded-xl object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/95 p-4 backdrop-blur-md border border-slate-200/80 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display text-sm font-semibold text-[var(--text-strong)]">
                        Phillips Clinic Supplement Store
                      </p>
                      <p className="text-xs text-[var(--text-muted)]">
                        Ten Foundations protocols, shipped as dated sachets
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
                  Most off-the-shelf vitamins contain cheap fillers, substandard absorption rates, and inaccurate dosages. Our own store connects you directly to physician-grade nutraceuticals formulated to match your actual blood panels.
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
                    Open the Supplement Store
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

      {/* 6. MEDICATION KITS (secondary to the clinic offering) */}
      <section id="medication-kits" className="border-b border-[var(--hairline)] bg-white py-20 md:py-28 scroll-mt-20">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="font-display text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                  Also Available
                </span>
                <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-[var(--text-strong)] md:text-4xl">
                  Prescription Medication Kits
                </h2>
                <p className="mt-3 max-w-[56ch] text-sm text-[var(--text-body)]">
                  Alongside the clinic, we dispense prescription kits with a telehealth evaluation through Partell Pharmacy, so you have them on the shelf before you need them.
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

      {/* 7. HOW ORDERING A KIT WORKS */}
      <section className="border-b border-[var(--hairline)] bg-[var(--surface-2)] py-20 md:py-24">
        <div className="shell">
          <Reveal>
            <div className="text-center max-w-[64ch] mx-auto">
              <span className="font-display text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                Ordering a Kit
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-[var(--text-strong)] md:text-4xl">
                How a kit order works, in three steps
              </h2>
              <p className="mt-3 text-sm text-[var(--text-muted)]">
                This applies to the medication kits only. For clinic visits, book online or call the front desk.
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

      {/* 8. PATIENT REVIEWS */}
      <section
        id="reviews"
        className="scroll-mt-24 border-b border-[var(--hairline)] bg-white py-20 md:py-28"
      >
        <div className="shell">
          <Reveal>
            <div className="text-center max-w-[60ch] mx-auto">
              <span className="font-display text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                Patient Testimonials
              </span>
              <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-[var(--text-strong)] md:text-4xl">
                In our patients&rsquo; words
              </h2>
            </div>
          </Reveal>

          <ReviewsCarousel reviews={reviews} />
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="border-b border-[var(--hairline)] bg-[var(--surface-2)] py-20 md:py-28">
        {/* Heading sits beside the accordion rather than above a narrow
            centred column, which left most of the row empty. */}
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="font-display text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                Got Questions?
              </span>
              <h2 className="mt-2 max-w-[16ch] font-display text-3xl font-semibold leading-tight text-[var(--text-strong)] md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-[var(--text-body)]">
                Visiting the clinic, what we do on site, and how the medication
                kits work. If your question is not here, the front desk would
                rather you called than guessed.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={clinic.phoneHref} className="btn btn-primary">
                  <Phone size={16} weight="fill" />
                  Call {clinic.phone}
                </a>
                <Link href="/contact" className="btn btn-ghost">
                  Contact &amp; directions
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.05}>
                <details className="group rounded-2xl border border-[var(--hairline)] bg-white p-6 open:shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-[var(--text-strong)]">
                    <span>{item.q}</span>
                    <span className="shrink-0 text-[var(--accent)] transition-transform duration-200 group-open:rotate-180">
                      ↓
                    </span>
                  </summary>
                  <p className="mt-4 border-t border-[var(--hairline)] pt-4 text-sm leading-relaxed text-[var(--text-body)]">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. BOOK A VISIT CTA BAND */}
      <section className="relative overflow-hidden bg-[var(--color-brand-950)] text-white py-20 md:py-24">
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="shell relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold text-amber-300">
              <Sparkle size={13} weight="fill" /> Accepting New Patients of Every Age
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl text-white">
              Book a visit at the clinic.
            </h2>
            <p className="mt-4 text-base text-slate-300 max-w-[50ch] leading-relaxed">
              Appointments are available and preferred, but you will not be turned away for walking in. We are open six days a week, including Saturday.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={clinic.bookingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary shadow-lg"
              >
                <CalendarCheck size={18} weight="bold" />
                Book an Appointment
              </a>
              <a href={clinic.phoneHref} className="btn border border-white/20 text-white hover:bg-white/10">
                <Phone size={16} weight="fill" />
                Call {clinic.phone}
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-md">
            <h3 className="font-display text-lg font-bold text-white">
              Las Vegas Family Practice
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
                  Same-Day Appointments Available
              </span>
              <Link
                href="/kits"
                className="text-[var(--color-accent-300)] font-semibold hover:underline"
              >
                Medication Kits →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
