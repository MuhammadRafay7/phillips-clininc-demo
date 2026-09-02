import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { Photo } from "@/components/photo";
import { photos } from "@/lib/images";

export const metadata = {
  title: "Anti-Aging & Age Management Medicine",
  description:
    "Age management medicine at Phillips Clinic Las Vegas: early detection and reversal of age-related disease, bio-identical hormone therapy, nutrition, supplements and risk-factor reduction.",
};

const therapies = [
  {
    name: "Bio-identical hormone therapy",
    body: "Hormones molecularly identical to the ones your body makes, prescribed as customized compounded formulations rather than a standard dose.",
  },
  {
    name: "Nutrition and supplementation",
    body: "Practitioner-grade supplements chosen against your labs and your diet, so there is no guessing about what to take or how often.",
  },
  {
    name: "Risk-factor reduction",
    body: "Blood pressure, cholesterol, blood sugar and bone density tracked over time and treated before they become the diagnosis.",
  },
  {
    name: "Body composition and fitness",
    body: "DEXA body fat analysis, the gold standard measurement, used to steer a plan rather than a scale weight.",
  },
];

export default function AntiAgingPage() {
  return (
    <>
      <PageHero
        title="Age management medicine."
        intro="Within the last hundred years the average lifespan has doubled. Age management medicine is about making the second half as rewarding and healthy as the first."
      />

      <section className="border-b border-[var(--hairline)]">
        <div className="shell grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="max-w-[16ch] font-display text-3xl font-semibold leading-[1.1] md:text-[2.5rem]">
              Ninety percent of adult illness is degenerative.
            </h2>
            <p className="prose-body mt-5">
              Heart disease, most cancers, adult-onset diabetes, stroke, high
              blood pressure, osteoporosis, osteoarthritis, autoimmune disease,
              glaucoma and Alzheimer’s all trace back to the degenerative
              processes of aging.
            </p>
            <p className="prose-body mt-4">
              With early detection and appropriate intervention, most of these
              can be prevented, cured, or have their downward course reversed.
              That is the whole premise of the specialty: catch it at the
              earliest stage, when there is still something to do about it.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Photo
              slot={photos.wellness}
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="aspect-[4/3] w-full rounded-[var(--radius-surface)] object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-[var(--hairline)] bg-[var(--surface-2)]">
        <div className="shell py-20 md:py-28">
          <Reveal>
            <h2 className="max-w-[20ch] font-display text-3xl font-semibold leading-[1.1] md:text-[2.5rem]">
              Lifespan is one measure. Healthspan is the one that matters.
            </h2>
            <p className="prose-body mt-5">
              Healthspan is the length of time you are able to live productively
              and independently. Therapies are built around your own lifestyle,
              make-up and needs, not a protocol.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {therapies.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.05}>
                <article className="border-t border-[var(--hairline)] pt-6">
                  <h3 className="font-display text-xl font-semibold">
                    {t.name}
                  </h3>
                  <p className="mt-2 leading-relaxed text-[var(--text-muted)]">
                    {t.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-12 text-[var(--text-body)]">
            Julie Gidvani, FNP-C is certified in anti-aging medicine and leads
            hormone replacement and supplement work at the clinic.{" "}
            <Link
              href="/team#julie-gidvani"
              className="font-semibold text-[var(--text-strong)] underline decoration-[var(--hairline)] underline-offset-4 hover:decoration-[var(--accent)]"
            >
              Read her background
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBand
        heading="Start with a conversation about where you are now."
        body="An age management plan begins with labs and a long appointment, not a package. Book online or call and ask for an anti-aging consultation."
      />
    </>
  );
}
