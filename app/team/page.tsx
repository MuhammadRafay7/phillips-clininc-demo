import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { providers, founder } from "@/lib/clinic";

export const metadata = {
  title: "Healthcare Team",
  description:
    "Meet the team at Phillips Clinic Family Practice in Las Vegas: founder Mitchel E. Phillips DO, plus William Moffat DO, Julie Gidvani FNP-C, Kenneth Meier FNP-C and Hannah Garcia FNP-C.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="The people you will actually see."
        intro="The practice Dr. Phillips founded, and the physician and three family nurse practitioners who run it today. Several have been here well over a decade. Continuity is the point: the person who saw you last time is the person who sees you next time."
      />

      {/* The founder leads the page, but on a tinted band and in the past
          tense: he built the practice, he is not someone you can book.
          His photo is only 137x159, so it is rendered small rather than
          stretched into the portrait column the providers below use. */}
      <section className="border-b border-[var(--hairline)] bg-[var(--color-brand-50)]">
        <div className="shell py-16 md:py-20">
          <Reveal>
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={founder.photo}
                alt={`${founder.name}, ${founder.credential}`}
                width={137}
                height={159}
                className="w-[137px] shrink-0 rounded-[var(--radius-surface)] border border-[var(--hairline)] bg-white object-cover"
              />
              <div>
                <span className="font-display text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                  {founder.role}
                </span>
                <h2 className="mt-1 font-display text-2xl font-semibold md:text-3xl">
                  {founder.name}, {founder.credential}
                </h2>
                <p className="mt-5 max-w-[62ch] leading-relaxed text-[var(--text-body)]">
                  {founder.bio}
                </p>
                <p className="mt-4 text-sm text-[var(--text-muted)]">{founder.years}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="shell divide-y divide-[var(--hairline)]">
        {providers.map((p, i) => (
          <Reveal key={p.slug}>
            <article
              id={p.slug}
              className="grid scroll-mt-24 gap-8 py-16 md:grid-cols-12 md:gap-12 md:py-20"
            >
              <div className="md:col-span-4 lg:col-span-3">
                <div className="aspect-[4/5] overflow-hidden rounded-[var(--radius-surface)] bg-[var(--color-brand-100)]">
                  {p.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.photo}
                      alt={`${p.name}, ${p.credential}`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="grid h-full place-items-center font-display text-5xl font-semibold text-[var(--color-brand-600)]">
                      {p.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </div>
                  )}
                </div>
                {p.focus.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.focus.map((f) => (
                      <li
                        key={f}
                        className="rounded-full border border-[var(--hairline)] px-3 py-1 text-xs text-[var(--text-muted)]"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="md:col-span-8 lg:col-span-7">
                <h2 className="font-display text-2xl font-semibold md:text-3xl">
                  {p.name}, {p.credential}
                </h2>
                <p className="mt-1 text-[var(--accent)]">{p.role}</p>
                <div className="mt-6 space-y-4">
                  {p.bio.map((para, bi) => (
                    <p key={bi} className="prose-body">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
              <span className="sr-only">{`Provider ${i + 1}`}</span>
            </article>
          </Reveal>
        ))}
      </div>

      <CtaBand
        heading="Book with the provider you prefer."
        body="Online booking lets you choose your provider and see their next available slot. If you would rather talk to someone, the front desk can match you to whoever knows your history best."
      />
    </>
  );
}
