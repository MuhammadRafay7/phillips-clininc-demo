import type { NextConfig } from "next";

/**
 * The old site's URLs are .html files that have been indexed for years.
 * Every one of them redirects permanently to its replacement so the clinic
 * does not lose its search ranking in the rebuild.
 */
const legacyRedirects = [
  ["/index.html", "/"],
  ["/HealthCareTeam.html", "/team"],
  ["/HealthcareServices.html", "/services"],
  ["/AntiAging.html", "/anti-aging"],
  ["/MedicalForms.html", "/forms"],
  ["/WeightLossTrials.html", "/weight-loss-trials"],
  ["/Reviews.html", "/reviews"],
  ["/ContactUs.html", "/contact"],
  ["/COVIDandAntibioticKits.html", "/kits"],
  ["/blog.html", "/"],
];

const nextConfig: NextConfig = {
  images: {
    
  },
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
