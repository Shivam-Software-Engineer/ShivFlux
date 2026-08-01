// data/projects.js
// MODEL LAYER: portfolio items shown in the Projects section.
// These are placeholder case studies — replace with your real client
// projects, names and links as you complete them.

export const projects = [
  {
    tag: "E-Commerce",
    title: "Retail Storefront Rebuild",
    description:
      "A full storefront rebuild for a growing retail brand — new UI, faster checkout and mobile-first browsing.",
    stack: ["Next.js", "Tailwind CSS", "Razorpay"],
    metric: "+38% mobile conversions",
    color: "from-flux-600 to-flux-400",
  },
  {
    tag: "SaaS",
    title: "Client Management Dashboard",
    description:
      "A custom SaaS dashboard that replaced spreadsheets with real-time client tracking, invoicing and reports.",
    stack: ["React", "Node.js", "PostgreSQL"],
    metric: "6+ hrs saved / week",
    color: "from-flux-800 to-flux-500",
  },
  {
    tag: "Business Website",
    title: "Service Business Landing Page",
    description:
      "A lead-focused one-page site for a local service business, built to turn visitors into WhatsApp enquiries.",
    stack: ["Next.js", "Tailwind CSS", "SEO"],
    metric: "2.4x more enquiries",
    color: "from-ink to-flux-600",
  },
];

export default projects;
