import { hours } from "@/lib/clinic";

/**
 * Grouped rather than seven hairline rows: the clinic really only has three
 * distinct schedules, so showing seven identical-looking rows is noise.
 */
const grouped = [
  { label: "Monday, Friday", value: "8:00 AM - 5:00 PM" },
  { label: "Tuesday to Thursday", value: "7:30 AM - 6:00 PM" },
  { label: "Saturday", value: "9:00 AM - 4:00 PM" },
  { label: "Sunday", value: "Closed" },
];

export function HoursList() {
  return (
    <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
      {grouped.map((row) => (
        <div key={row.label} className="flex flex-col gap-0.5">
          <dt className="text-[13px] text-[var(--text-muted)]">
            {row.label}
          </dt>
          <dd className="font-display text-[17px] font-medium text-[var(--text-strong)]">
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export { hours };
