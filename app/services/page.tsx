import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { Photo } from "@/components/photo";
import { photos } from "@/lib/images";
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
                <Photo
                  slot={photos.imaging}
                  sizes="(max-width: 1024px) 100vw, 78rem"
                  className="mt-10 aspect-[21/9] w-full rounded-[var(--radius-surface)] object-cover"
                />
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
