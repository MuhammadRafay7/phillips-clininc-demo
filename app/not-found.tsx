import Link from "next/link";
import { clinic } from "@/lib/clinic";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[60vh] flex-col justify-center py-24">
      <h1 className="max-w-[16ch] font-display text-4xl font-semibold leading-[1.1] md:text-5xl">
        That page has moved.
      </h1>
      <p className="prose-body mt-5">
        We rebuilt this site, and a few older links did not survive the move. The
        services, team and patient forms are all still here.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-primary">
          Go to the home page
        </Link>
        <a href={clinic.phoneHref} className="btn btn-ghost">
          Call {clinic.phone}
        </a>
      </div>
    </section>
  );
}
