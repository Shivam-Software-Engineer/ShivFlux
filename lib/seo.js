// lib/seo.js
// CONTROLLER LAYER: builds the JSON-LD structured data for the homepage.
// Kept separate from the layout/page (Views) so SEO logic stays in one place.
import { site } from "@/data/site";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    logo: `${site.url}/logo-mark.png`,
    image: `${site.url}/logo-mark.png`,
    description: site.description,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    areaServed: "IN",
    priceRange: "$$",
    sameAs: Object.values(site.social),
    founder: {
      "@type": "Person",
      name: site.founder,
    },
    makesOffer: [
      "Custom Website Development",
      "SaaS & Web Applications",
      "E-Commerce Solutions",
      "UI/UX Design",
      "Website Maintenance & Support",
      "SEO & Analytics",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  };
}
