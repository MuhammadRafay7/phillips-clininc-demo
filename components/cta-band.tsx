import { clinic } from "@/lib/clinic";
import { HoursList } from "./hours-list";

/**
 * The closing band on every page. One CTA intent throughout the site:
 * "Book online" is the primary everywhere, calling is the secondary.
 */
export function CtaBand({
  heading = "Same-day appointments, and walk-ins are welcome.",
  body = "Appointments are available and preferred, but you will not be turned away for walking in. We are open six days a week, including Saturday.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="border-t border-[var(--hairline)] bg-[var(--color-brand-100)]">
      <div className="shell grid gap-12 py-20 md:py-28 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div>
          <h2 className="max-w-[15ch] font-display text-3xl font-semibold leading-[1.1] md:text-[2.75rem]">
            {heading}
          </h2>
          <p className="mt-5 max-w-[52ch] leading-relaxed text-[var(--text-body)]">
            {body}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={clinic.bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book online
            </a>
            <a href={clinic.phoneHref} className="btn btn-ghost">
              Call {clinic.phone}
            </a>
          </div>
        </div>

        <div className="border-t border-[var(--hairline)] pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
          <p className="font-display text-lg font-medium">
            {clinic.address.street}
          </p>
          <p className="mt-1 text-[var(--text-muted)]">
            {clinic.address.city}, {clinic.address.state} {clinic.address.zip}
          </p>
          <p className="mt-3 max-w-[38ch] text-sm leading-relaxed text-[var(--text-muted)]">
            {clinic.directions}
          </p>
          <div className="mt-8">
            <HoursList />
          </div>
        </div>
      </div>
    </section>
  );
}
