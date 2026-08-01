// data/site.js
// -------------------------------------------------------------------------
// MODEL LAYER: central config for company info, contact details and SEO.
// Change values here once — every component (View) reads from this file.
// -------------------------------------------------------------------------

export const site = {
  name: "ShivFlux Technologies",
  shortName: "ShivFlux",
  tagline: "Powering Your Digital Evolution",
  founder: "Shivam Pathak",
  founderTitle: "Founder, ShivFlux Technologies",
  description:
    "ShivFlux Technologies is a Mumbai-based web development & digital growth studio. We design, build and manage websites, SaaS products and e-commerce platforms that turn visitors into paying customers — backed by AI-assisted design and ongoing monthly/yearly website management.",
  url: "https://shivflux.com",
  email: "hello.shivflux@gmail.com",
  phone: "+91 94212 27450",
  phoneRaw: "919421227450", // country code + number, no symbols — used for wa.me / tel:
  address: {
    line1: "ShivFlux Technologies",
    line2: "Mumbai, Maharashtra, India",
  },
  social: {
    instagram: "https://instagram.com/shivfluxtechnologies",
    linkedin: "https://linkedin.com/company/shivflux",
    
  },
  whatsapp: {
    number: "919421227450",
    defaultMessage:
      "Hi ShivFlux Technologies! I'm interested in getting a website / digital solution built for my business. Could we discuss my requirements?",
  },
  keywords: [
    "web development company Mumbai",
    "website design India",
    "SaaS development company",
    "e-commerce website development",
    "website maintenance services",
    "ShivFlux Technologies",
    "custom website design Mumbai",
    "AI website design agency",
  ],
};

export default site;
