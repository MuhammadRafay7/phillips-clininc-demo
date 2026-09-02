import type { ReactNode } from "react";

/**
 * Interior-page header. Deliberately plainer than the home hero so the home
 * page stays the only place with a full-bleed photographic moment.
 * Title and intro stack; no headline-left / floating-paragraph-right split.
 */
export function PageHero({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-[var(--hairline)] bg-[var(--surface-2)]">
      <div className="shell py-16 md:py-24">
        <h1 className="max-w-[16ch] font-display text-4xl font-semibold leading-[1.08] md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && <p className="prose-body mt-6 text-lg">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
