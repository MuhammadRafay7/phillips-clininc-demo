import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { clinic, hours } from "@/lib/clinic";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://phillipscliniclv.com"),
  title: {
    default:
      "Phillips Clinic Family Practice | Wellness & Anti-Aging Medicine | Las Vegas, NV",
    template: "%s | Phillips Clinic Family Practice",
  },
  description:
    "Personalized health care for the entire family in Las Vegas: children, adults and seniors. Family practice, on-site imaging, anti-aging and wellness medicine. Same-day appointments, open Saturdays.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Phillips Clinic Family Practice",
  },
};

/** Google/Bing local-pack markup. Keeps the clinic findable through the rebuild. */
function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinic.legalName,
    slogan: clinic.tagline,
    telephone: clinic.phone,
    faxNumber: clinic.fax,
    email: clinic.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.street,
      addressLocality: clinic.address.city,
      addressRegion: clinic.address.state,
      postalCode: clinic.address.zip,
      addressCountry: "US",
    },
    openingHoursSpecification: hours
      .filter((h) => h.open)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${h.day}`,
        opens: h.open,
        closes: h.close,
      })),
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${manrope.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--accent)] focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-[var(--accent-on)]"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
      </body>
    </html>
  );
}
