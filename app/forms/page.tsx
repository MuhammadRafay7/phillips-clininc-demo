import { FileArrowDown } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { clinic, patientForms } from "@/lib/clinic";

export const metadata = {
  title: "New Patients & Medical Forms",
  description:
    "Download and complete your Phillips Clinic paperwork before your visit: patient history, registration, policies, HIPAA notice, pain contract and records release.",
};

export default function FormsPage() {
  return (
    <>
      <PageHero
        title="Fill this in before you come in."
        intro="Completing the paperwork at home takes about fifteen minutes and saves you the same wait in our lobby. Bring the printed forms to your visit."
      />

      <section className="border-b border-[var(--hairline)]">
        <div className="shell grid gap-10 py-16 md:grid-cols-2 md:gap-16">
          <Reveal>
            <h2 className="font-display text-xl font-semibold">
              If this is your first visit
            </h2>
            <p className="prose-body mt-3">
              Complete forms 1 through 4 and bring them with you. If you have
              chronic pain issues and may need pain medication, please also read
              over the pain contract.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display text-xl font-semibold">
              If you are already a patient
            </h2>
            <p className="prose-body mt-3">
              Complete form 1 before a physical exam. If your contact details or
              insurance have changed, fill out a new registration form as well so
              we can update your records.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="shell py-20 md:py-24">
        <ul className="grid gap-4 md:grid-cols-2">
          {patientForms.map((f, i) => (
            <Reveal key={f.file} delay={i * 0.04}>
              <li className="list-none">
                <a
                  href={f.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-start gap-4 rounded-[var(--radius-surface)] border border-[var(--hairline)] p-6 transition-colors hover:border-[var(--accent)]"
                >
                  <FileArrowDown
                    size={26}
                    weight="duotone"
                    className="mt-0.5 shrink-0 text-[var(--accent)]"
                  />
                  <span>
                    <span className="block font-display text-lg font-semibold text-[var(--text-strong)]">
                      {f.title}
                    </span>
                    <span className="mt-1 block text-sm text-[var(--text-muted)]">
                      {f.who}
                    </span>
                    <span className="mt-2 block text-xs uppercase tracking-wide text-[var(--text-muted)]">
                      PDF
                    </span>
                  </span>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>

        <p className="prose-body mt-10">
          Trouble opening a form, or would you rather we mail one to you? Call
          us at{" "}
          <a
            href={clinic.phoneHref}
            className="font-semibold text-[var(--text-strong)] underline decoration-[var(--hairline)] underline-offset-4 hover:decoration-[var(--accent)]"
          >
            {clinic.phone}
          </a>{" "}
          and we will sort it out.
        </p>
      </section>

      <section
        id="covid-guide"
        className="scroll-mt-24 border-t border-[var(--hairline)] bg-[var(--surface-2)]"
      >
        <div className="shell py-16 md:py-20">
          <h2 className="font-display text-2xl font-semibold">Guide books</h2>
          <p className="prose-body mt-3">
            Reference material our providers hand out alongside the medication
            kits.
          </p>
          <a
            href="/forms/GUIDE_BOOK_COVID.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-start gap-4 rounded-[var(--radius-surface)] border border-[var(--hairline)] bg-[var(--surface-inset)] p-6 transition-colors hover:border-[var(--accent)]"
          >
            <FileArrowDown
              size={26}
              weight="duotone"
              className="mt-0.5 shrink-0 text-[var(--accent)]"
            />
            <span>
              <span className="block font-display text-lg font-semibold text-[var(--text-strong)]">
                COVID Guide Book
              </span>
              <span className="mt-1 block text-sm text-[var(--text-muted)]">
                The clinic&rsquo;s patient guide to COVID care and what to keep
                on hand.
              </span>
              <span className="mt-2 block text-xs uppercase tracking-wide text-[var(--text-muted)]">
                4.5 MB PDF
              </span>
            </span>
          </a>
        </div>
      </section>

      <CtaBand
        heading="Paperwork done? Pick a time."
        body="Book your appointment online and bring the completed forms with you. Walk-ins are welcome too, though an appointment means less waiting."
      />
    </>
  );
}
