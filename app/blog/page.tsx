import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { postsByDate, formatPostDate } from "@/lib/blog";

export const metadata = {
  title: "Health Newsletter",
  description:
    "The Phillips Health Care Newsletter: monthly notes from our Las Vegas providers on screenings, immunizations, cholesterol, allergies and preventive care.",
};

export default function BlogPage() {
  const [lead, ...rest] = postsByDate;

  return (
    <>
      <PageHero
        title="Phillips Health Care Newsletter"
        intro="Monthly notes from our providers on the screenings, immunizations and preventive care worth booking, and what the current public-health guidance actually says."
      />

      <section className="shell py-16 md:py-24">
        {/* The newest post gets the wide treatment; the rest are a plain list. */}
        <Reveal>
          <Link
            href={`/blog/${lead.slug}`}
            className="group block rounded-[var(--radius-surface)] border border-[var(--hairline)] bg-[var(--surface-2)] p-8 transition-colors hover:border-[var(--accent)] md:p-12"
          >
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
              Latest &middot; {formatPostDate(lead.date)}
            </p>
            <h2 className="mt-4 max-w-[26ch] font-display text-3xl font-semibold leading-[1.12] text-[var(--text-strong)] md:text-[2.5rem]">
              {lead.title}
            </h2>
            <p className="prose-body mt-5 max-w-[62ch] text-lg">{lead.dek}</p>
            <span className="mt-8 inline-flex items-center gap-2 font-semibold text-[var(--accent)]">
              Read it
              <ArrowRight
                size={16}
                weight="bold"
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </Link>
        </Reveal>

        <ul className="mt-6 divide-y divide-[var(--hairline)] border-t border-[var(--hairline)]">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <li>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid gap-2 py-8 md:grid-cols-[13rem_1fr] md:gap-10"
                >
                  <time
                    dateTime={post.date}
                    className="font-display text-sm font-medium text-[var(--text-muted)] md:pt-1"
                  >
                    {formatPostDate(post.date)}
                  </time>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[var(--text-strong)] transition-colors group-hover:text-[var(--accent)] md:text-2xl">
                      {post.title}
                    </h3>
                    <p className="mt-2 max-w-[68ch] text-sm leading-relaxed text-[var(--text-muted)]">
                      {post.dek}
                    </p>
                  </div>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="mt-12 text-sm text-[var(--text-muted)]">
            Nothing here is medical advice for your situation. If something in a
            post applies to you, bring it to your next visit.
          </p>
        </Reveal>
      </section>

      <CtaBand
        heading="Due for a screening?"
        body="Most of what these posts recommend is a single appointment. Book online, or call the front desk and describe what you are due for."
      />
    </>
  );
}
