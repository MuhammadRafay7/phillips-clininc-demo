import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { clinic } from "@/lib/clinic";

export const metadata = {
  title: "Type 2 Diabetes & Weight Loss Clinical Trials",
  description:
    "Phillips Clinic Las Vegas is enrolling in type 2 diabetes and weight loss clinical trials. Study care and medications are provided at no cost and participants may be compensated.",
};

const eligibility = [
  "Aged 18 years or over",
  "Have type 2 diabetes and take at least one medicine to manage it",
  "Have a BMI of 27 or higher",
  "Have an A1c of 6.5 or higher",
];

const benefits = [
  "Possible weight loss of up to 26% of body weight",
  "Possible decrease in blood sugar levels",
  "Possible decrease in A1c",
  "Possible improvement in blood pressure",
  "Possible improvement in cholesterol levels",
];

export default function TrialsPage() {
  return (
    <>
      <PageHero
        title="Type 2 diabetes and weight loss clinical trials."
        intro="Phillips Clinic is participating in trials studying new, investigational approaches to managing excess weight and diabetes. All study care and medications are provided at no cost, and participants can be compensated up to $6,000."
      />

      <section className="border-b border-[var(--hairline)]">
        <div className="shell grid gap-12 py-20 md:grid-cols-2 md:gap-20 md:py-24">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              Who can join
            </h2>
            <p className="prose-body mt-4">
              If your medical conditions and history appear to qualify you, you
              may be eligible to participate. You may be able to join if you
              meet all of the following.
            </p>
            <ul className="mt-7 space-y-4">
              {eligibility.map((e) => (
                <li
                  key={e}
                  className="flex gap-4 border-t border-[var(--hairline)] pt-4 text-[var(--text-body)]"
                >
                  {e}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-[var(--text-muted)]">
              BMI is body mass index. A1c measures your average blood glucose
              over the past three months.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[var(--radius-surface)] border border-[var(--hairline)] bg-[var(--color-brand-50)] p-8 md:p-10">
              <h2 className="font-display text-2xl font-semibold md:text-3xl">
                What participants may see
              </h2>
              <ul className="mt-7 space-y-4">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="border-t border-[var(--hairline)] pt-4 text-[var(--text-body)]"
                  >
                    {b}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm leading-relaxed text-[var(--text-muted)]">
                These are possible outcomes under study, not promised results.
                Your study team will explain the risks and what is expected of
                you before you agree to take part.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        heading="Find out whether a study is right for you."
        body={`Call ${clinic.phone} and tell the front desk you are asking about the diabetes and weight loss trials. Screening is a conversation first, then labs.`}
      />
    </>
  );
}
