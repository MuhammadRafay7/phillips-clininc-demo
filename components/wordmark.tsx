import Image from "next/image";

/**
 * The clinic's real logo, lifted from their own print collateral because they
 * have no digital asset. It is a raster crop, so it is only ever rendered
 * small. Ask them for the vector before launch.
 */
export function Wordmark() {
  return (
    <Image
      src="/logo.png"
      alt="Phillips Clinic"
      width={896}
      height={360}
      priority
      className="h-11 w-auto"
    />
  );
}
