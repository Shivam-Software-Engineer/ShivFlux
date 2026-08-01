// data/plans.js
// MODEL LAYER: ongoing website management plans (monthly / yearly).
// Prices are placeholders in INR — update to your actual pricing.

export const plans = [
  {
    name: "Starter Care",
    monthly: 1999,
    yearly: 19999,
    description: "For businesses that just need their site kept live, safe and up to date.",
    features: [
      "Uptime & security monitoring",
      "Monthly backups",
      "Minor content updates (2/month)",
      "Bug fixes",
      "Email support",
    ],
    highlight: false,
  },
  {
    name: "Growth Care",
    monthly: 4999,
    yearly: 49999,
    description: "Our most popular plan — active maintenance plus ongoing SEO & growth support.",
    features: [
      "Everything in Starter Care",
      "Weekly backups & staging",
      "Unlimited minor content updates",
      "SEO health checks",
      "Speed & performance tuning",
      "Priority WhatsApp support",
    ],
    highlight: true,
  },
  {
    name: "Scale Care",
    monthly: 9999,
    yearly: 99999,
    description: "For SaaS products and stores that need a dedicated technical partner.",
    features: [
      "Everything in Growth Care",
      "Feature additions & integrations",
      "AI-assisted design iterations",
      "Dedicated account manager",
      "Monthly growth reporting",
      "Same-day priority support",
    ],
    highlight: false,
  },
];

export default plans;
