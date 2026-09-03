import Link from "next/link";
import Image from "next/image";
import { FacebookLogo } from "@phosphor-icons/react/dist/ssr";
import { clinic } from "@/lib/clinic";
import { Wordmark } from "./wordmark";

type FooterLink = { href: string; label: string; external?: boolean };

const columns = [
  {
    heading: "Care",
    links: [
      { href: "/services", label: "All services" },
      { href: "/anti-aging", label: "Anti-aging medicine" },
      { href: "/services#on-site-diagnostics", label: "On-site imaging" },
      { href: "/weight-loss-trials", label: "Weight loss trials" },
    ],
  },
  {
    heading: "Patients",
    links: [
      { href: "/forms", label: "New patient forms" },
      { href: "/supplements", label: "Supplements" },
      { href: "/forms#covid-guide", label: "COVID guide book" },
      { href: "/kits", label: "Medication kits" },
      { href: "/#reviews", label: "Patient reviews" },
    ],
  },
  {
    heading: "Practice",
    links: [
      { href: "/team", label: "Our team" },
      { href: "/blog", label: "Health newsletter" },
      { href: "/contact", label: "Contact & directions" },
      {
        href: clinic.employeePortalHref,
        label: "Employee portal",
        external: true,
      },
    ],
  },
] satisfies { heading: string; links: FooterLink[] }[];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--hairline)] bg-[var(--surface)]">
      <div className="shell grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Wordmark />
          {/* The clinic's own hand-lettered slogan, lifted from their site.
              Its ink is already brand-300, so it sits in the palette as-is. */}
          <Image
            src="/tagline-be-well.png"
            alt={clinic.tagline}
            width={788}
            height={105}
            sizes="240px"
            className="mt-5 h-auto w-[15rem] max-w-full"
          />
          <p className="mt-5 max-w-[34ch] text-sm leading-relaxed text-[var(--text-muted)]">
            {clinic.descriptor}. Serving Las Vegas families since 2005.
          </p>
          <address className="mt-6 not-italic text-sm leading-relaxed text-[var(--text-body)]">
            {clinic.address.street}
            <br />
            {clinic.address.city}, {clinic.address.state} {clinic.address.zip}
            <br />
            <a
              href={clinic.phoneHref}
              className="mt-2 inline-block font-semibold text-[var(--text-strong)]"
            >
              {clinic.phone}
            </a>
            <br />
            <span className="text-[var(--text-muted)]">Fax {clinic.fax}</span>
            <br />
            <a
              href={`mailto:${clinic.email}`}
              className="text-[var(--text-strong)] underline decoration-[var(--hairline)] underline-offset-4 hover:decoration-[var(--accent)]"
            >
              {clinic.email}
            </a>
          </address>

          <a
            href={clinic.facebookHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] px-3.5 py-2 text-sm font-medium text-[var(--text-body)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <FacebookLogo size={17} weight="fill" />
            Follow us on Facebook
          </a>
        </div>

        {columns.map((col) => (
          <nav
            key={col.heading}
            aria-label={col.heading}
            className="md:col-span-4 lg:col-span-2"
          >
            <h2 className="font-display text-sm font-semibold text-[var(--text-strong)]">
              {col.heading}
            </h2>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.href + l.label}>
                  {"external" in l && l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      href={l.href}
                      className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="md:col-span-4 lg:col-span-2">
          <h2 className="font-display text-sm font-semibold text-[var(--text-strong)]">
            Book a visit
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
            Same-day appointments. Walk-ins welcome.
          </p>
          <a
            href={clinic.bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-5 w-full"
          >
            Book online
          </a>
        </div>
      </div>

      <div className="border-t border-[var(--hairline)]">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {clinic.legalName}. All rights
            reserved.
          </p>
          <p>
            This site is for general information and is not medical advice. For
            a medical emergency, call 911.
          </p>
        </div>
      </div>
    </footer>
  );
}
