import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { serviceGroups } from "@/lib/clinic";

export const metadata = {
  title: "Healthcare Services",
  description:
    "Primary care, on-site x-ray, ultrasound, echocardiography, bone density and DEXA, allergy testing, bio-identical hormone therapy, IV nutrition and medically supervised weight loss in Las Vegas.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Comprehensive care at one address."
        intro="Phillips Clinic has served Las Vegas valley-wide from its South Rainbow location since 2005. Our providers offer the services below in a single building, so most visits do not send you anywhere else."
      />

      {/* Each group gets its own layout treatment so the page does not read as
          three identical stacks: dark band, photo split, then plain columns. */}
      {serviceGroups.map((group, gi) => (
        <section
          key={group.slug}
          id={group.slug}
          className={
            gi === 1
              ? "border-b border-[var(--hairline)] bg-[var(--surface-2)] scroll-mt-24"
              : "border-b border-[var(--hairline)] scroll-mt-24"
          }
        >
          <div className="shell py-20 md:py-28">
            <Reveal>
              <h2 className="max-w-[18ch] font-display text-3xl font-semibold leading-[1.1] md:text-[2.5rem]">
                {group.title}
              </h2>
              <p className="prose-body mt-4 text-lg">{group.blurb}</p>
            </Reveal>

            {gi === 1 && (
              <Reveal>
                <ImagingPathway count={group.services.length} />
              </Reveal>
            )}

            <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {group.services.map((s, i) => (
                <Reveal key={s.name} delay={i * 0.04}>
                  <article>
                    <h3 className="font-display text-lg font-semibold text-[var(--text-strong)]">
                      {s.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                      {s.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand
        heading="Not sure which visit you need?"
        body="Call the front desk and describe what is going on. They will tell you whether it is a wellness visit, an imaging appointment, or something we should see you for today."
      />
    </>
  );
}

/** The three steps of an on-site scan, in order. */
const imagingSteps = [
  {
    label: "Scanned here",
    body: "The x-ray, ultrasound or DEXA is done in this building, with a technician on site.",
  },
  {
    label: "Read here",
    body: "Your provider reads and interprets the images. Nothing is couriered to a third party first.",
  },
  {
    label: "Discussed here",
    body: "You talk through what the images show in the same visit, rather than booking a second one.",
  },
];

/**
 * Sits where an imaging photo would go. The clinic has no photo of its own
 * equipment yet (see photos.imaging in lib/images), and rather than hold the
 * space empty this states the thing the photo was meant to say: the workup
 * starts and finishes at one address.
 */
function ImagingPathway({ count }: { count: number }) {
  return (
    <div className="mt-10 overflow-hidden rounded-[var(--radius-surface)] bg-[var(--color-brand-950)] px-8 py-12 text-white md:px-14 md:py-16">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-300)]">
        {count} imaging services, one address
      </p>
      <h3 className="mt-4 max-w-[20ch] font-display text-2xl font-semibold leading-[1.15] text-white md:text-[2rem]">
        Scanned, read and discussed in the same visit.
      </h3>

      <ol className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-3">
        {imagingSteps.map((step, i) => (
          <li
            key={step.label}
            className="border-t border-white/20 pt-6"
          >
            <span className="font-display text-sm font-semibold tabular-nums text-[var(--color-accent-300)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h4 className="mt-3 font-display text-lg font-semibold">
              {step.label}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {step.body}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-12 max-w-[62ch] text-sm leading-relaxed text-white/60">
        Most clinics refer imaging out to a separate facility, which adds cost
        and another trip. Ours is down the hall.
      </p>
    </div>
  );
}
