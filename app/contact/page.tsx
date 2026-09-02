import { MapPin, Phone, Printer, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { HoursList } from "@/components/hours-list";
import { Photo } from "@/components/photo";
import { photos } from "@/lib/images";
import { clinic } from "@/lib/clinic";

export const metadata = {
  title: "Contact & Directions",
  description:
    "Phillips Clinic Family Practice, 5970 South Rainbow Boulevard Suite 100, Las Vegas NV 89118. Phone (702) 363-4000. Open six days a week including Saturday.",
};

const details = [
  { icon: Phone, label: "Phone", value: clinic.phone, href: clinic.phoneHref },
  { icon: Printer, label: "Fax", value: clinic.fax, href: null },
  {
    icon: EnvelopeSimple,
    label: "Email",
    value: clinic.email,
    href: `mailto:${clinic.email}`,
  },
  {
    icon: MapPin,
    label: "Address",
    value: `${clinic.address.street}, ${clinic.address.city}, ${clinic.address.state} ${clinic.address.zip}`,
    href: clinic.mapsHref,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Find us on South Rainbow."
        intro={clinic.directions}
      />

      <section className="shell grid gap-12 py-16 md:py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <dl className="space-y-7">
            {details.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex gap-4">
                <Icon
                  size={22}
                  weight="duotone"
                  className="mt-1 shrink-0 text-[var(--accent)]"
                />
                <div>
                  <dt className="text-[13px] text-[var(--text-muted)]">
                    {label}
                  </dt>
                  <dd className="mt-0.5 font-display text-lg font-medium text-[var(--text-strong)]">
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="underline decoration-[var(--hairline)] underline-offset-4 hover:decoration-[var(--accent)]"
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="mt-10 border-t border-[var(--hairline)] pt-8">
            <h2 className="font-display text-lg font-semibold">Office hours</h2>
            <div className="mt-5">
              <HoursList />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[var(--text-muted)]">
              Same-day appointments are available. Walk-ins are always welcome,
              though booking ahead means less time in the waiting room.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={clinic.bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book online
            </a>
            <a
              href={clinic.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Get directions
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="overflow-hidden rounded-[var(--radius-surface)] border border-[var(--hairline)]">
            <iframe
              title="Map showing Phillips Clinic at 5970 South Rainbow Boulevard, Las Vegas"
              src="https://www.google.com/maps?q=5970+S+Rainbow+Blvd+Suite+100+Las+Vegas+NV+89118&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full border-0 md:h-[460px]"
            />
          </div>
          <Photo
            slot={photos.building}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="mt-4 aspect-[16/9] w-full rounded-[var(--radius-surface)] object-cover"
          />
        </Reveal>
      </section>

      <section className="border-t border-[var(--hairline)] bg-[var(--color-brand-50)]">
        <div className="shell py-14">
          <h2 className="font-display text-xl font-semibold">
            In an emergency
          </h2>
          <p className="mt-3 max-w-[58ch] leading-relaxed text-[var(--text-body)]">
            If you are having a medical emergency, call 911 or go to the nearest
            emergency room. Do not use this page, email, or online booking to
            report an urgent problem.
          </p>
        </div>
      </section>
    </>
  );
}
