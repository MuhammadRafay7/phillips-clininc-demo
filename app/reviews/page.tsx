import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { reviews } from "@/lib/clinic";

export const metadata = {
  title: "Patient Reviews",
  description:
    "What patients say about Phillips Clinic Family Practice in Las Vegas: thorough visits, unhurried appointments, and providers who look for the cause instead of prescribing at the symptom.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title="In our patients’ words."
        intro="The same two things come up again and again: nobody feels rushed, and nobody feels handed a prescription instead of an answer."
      />

      <section className="shell py-20 md:py-28">
        <div className="columns-1 gap-8 md:columns-2 lg:columns-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.05} className="mb-8 break-inside-avoid">
              <figure className="rounded-[var(--radius-surface)] border border-[var(--hairline)] p-7">
                <blockquote className="font-display text-lg leading-[1.5] text-[var(--text-strong)]">
                  “{r.body}”
                </blockquote>
                <figcaption className="mt-4 text-sm text-[var(--text-muted)]">
                  {r.name}, patient
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        heading="See what an unhurried appointment looks like."
        body="New patients are welcome. Book online, or call the front desk and they will find you a slot, often the same day."
      />
    </>
  );
}
