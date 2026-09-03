import Image from "next/image";
import { ArrowUpRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { clinic, supplementProtocols, supplementProductHref } from "@/lib/clinic";

export const metadata = {
  title: "Practitioner-Grade Supplements",
  description:
    "Phillips Clinic offers ten Foundations health protocols formulated for our patients, ordered through our own online supplement store and shipped to your door.",
};

export default function SupplementsPage() {
  return (
    <>
      <PageHero
        title="Physician-grade supplements, matched to your biology."
        intro="Phillips Clinic offers proprietary, practitioner-formulated nutritional supplements through our own online store. Sourced without cheap fillers, artificial colorings, or unverified ingredients."
      >
        <div className="mt-8">
          <a
            href={clinic.supplementsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Open the supplement store
            <ArrowUpRight size={17} weight="bold" />
          </a>
          <p className="mt-3 text-xs text-[var(--text-muted)]">
            The store is set up under Phillips Clinic, so your provider&rsquo;s
            recommendations carry across.
          </p>
        </div>
      </PageHero>

      <section className="shell py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-[var(--hairline-strong)] bg-white p-3 shadow-xl">
              <Image
                src="/protocol-packaging.jpg"
                alt="A Foundations health protocol as it ships, with daily sachets"
                width={1824}
                height={1026}
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="w-full rounded-xl object-cover"
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
              Phillips Clinic Supplement Store
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold leading-tight md:text-4xl text-[var(--text-strong)]">
              Order directly to your door with doctor guidance.
            </h2>
            <p className="prose-body mt-4">
              Your provider recommends targeted dosages tailored to your blood labs and health history. You then order through our secure online store, which ships to you directly and maintains your refill record.
            </p>

            <div className="mt-6 space-y-3 text-sm text-[var(--text-strong)]">
              <div className="flex items-center gap-2.5">
                <CheckCircle size={18} weight="fill" className="text-emerald-600 shrink-0" />
                <span>Practitioner-exclusive formulations unavailable in regular stores</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle size={18} weight="fill" className="text-emerald-600 shrink-0" />
                <span>Zero synthetic binders or excipients</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The store's actual Foundations line-up, with its own product photos. */}
      <section className="border-t border-[var(--hairline)] bg-[var(--surface-2)] py-16 md:py-24">
        <div className="shell">
          <Reveal>
            <div className="text-center max-w-[60ch] mx-auto">
              <h2 className="font-display text-3xl font-bold text-[var(--text-strong)]">
                Ten protocols, one for each concern
              </h2>
              <p className="mt-3 text-sm text-[var(--text-muted)]">
                Each Foundations protocol arrives as dated sachets, so there is no
                guessing about what to take, how much, or how often. Your provider
                recommends the one that matches your labs and history.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {supplementProtocols.map((prot, i) => (
              <Reveal key={prot.slug} delay={i * 0.04}>
                <a
                  href={supplementProductHref(prot.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-[var(--hairline)] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[var(--accent)] hover:shadow-lg"
                >
                  <h3 className="font-display text-base font-bold text-[var(--text-strong)]">
                    {prot.name}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--text-body)]">
                    {prot.blurb}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent)]">
                    View this protocol
                    <ArrowUpRight
                      size={13}
                      weight="bold"
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-10 text-center text-xs text-[var(--text-muted)]">
              Essentials+ and Ultimate tiers of each protocol are also available.
              Current pricing is in the store.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        heading="Need custom supplement guidance?"
        body="Book a wellness consultation with Dr. Moffat or Julie Gidvani to review your current supplements and get a personalized regimen."
      />
    </>
  );
}
