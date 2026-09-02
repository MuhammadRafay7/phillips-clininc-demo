import Image from "next/image";
import type { Slot } from "@/lib/images";

/**
 * Renders the clinic's own photo. When they have none, renders a branded panel
 * in the logo colours instead of an unrelated stock image. The panel is
 * intentionally plain so it reads as "photo pending", not as a design choice.
 */
export function Photo({
  slot,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  slot: Slot;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (!slot.src) {
    return (
      <div
        role="img"
        aria-label={slot.alt}
        className={`grid place-items-center border border-dashed border-[var(--hairline)] bg-[var(--color-brand-50)] ${className ?? ""}`}
      >
        <span className="px-6 text-center font-display text-sm font-medium text-[var(--text-muted)]">
          {slot.alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={slot.src}
      alt={slot.alt}
      width={slot.width}
      height={slot.height}
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
