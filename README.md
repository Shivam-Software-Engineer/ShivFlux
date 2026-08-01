# ShivFlux Technologies — Website

Official one-page marketing website for **ShivFlux Technologies** (Mumbai, India),
built with **Next.js (App Router)**, **Tailwind CSS**, and **AOS** scroll animations.

---

## 1. Getting started

```bash
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

To build for production:

```bash
npm run build
npm start
```

---

## 2. Project structure (MVC-style)

The project is organised so content, logic and UI are kept separate — easy to
edit without touching design code, and easy to redesign without touching content.

```
shivflux-website/
├── app/                     → Routes & pages (Next.js App Router)
│   ├── layout.js            → Root layout: fonts, global <head> SEO/meta, JSON-LD
│   ├── page.js              → Homepage — assembles all sections
│   ├── globals.css          → Design tokens, glass effect, buttons
│   ├── sitemap.js           → Auto-generated sitemap.xml
│   └── robots.js            → Auto-generated robots.txt
│
├── components/
│   ├── layout/               → Navbar, Footer, floating WhatsApp button
│   ├── sections/              → Hero, Services, WhyUs, ManagementPlans,
│   │                            Projects, Testimonials, CTASection
│   └── ui/                    → Small reusable pieces (Container, SectionHeading)
│
├── data/            ← "MODEL" layer — all editable content lives here
│   ├── site.js       → Company name, address, phone, email, WhatsApp message
│   ├── services.js    → The 12 services shown in the Services grid
│   ├── projects.js    → Portfolio / case study cards
│   ├── testimonials.js → Client testimonials
│   └── plans.js       → Monthly / yearly website management pricing
│
├── lib/             ← "CONTROLLER" layer — shared logic/helpers
│   ├── whatsapp.js    → Builds wa.me / tel: / mailto: links
│   └── seo.js         → Builds JSON-LD structured data
│
└── public/
    ├── logo.svg        → Your SF mark (used in navbar & footer)
    └── logo-mark.png    → PNG version (used for favicon & social sharing image)
```

---

## 3. What to edit first

### Company info, phone, email, WhatsApp message
Open **`data/site.js`** — this one file controls the phone number, email,
address, and the default message that opens when someone taps the WhatsApp
button. Change it once here and it updates everywhere on the site.

### Services
Edit **`data/services.js`**. Each entry needs an `icon` (any icon name from
[lucide.dev/icons](https://lucide.dev/icons)), a `title`, and a `description`.

### Portfolio / projects
Edit **`data/projects.js`**. Replace the 3 placeholder case studies with your
real client work — title, short description, tech stack tags, and a one-line
result/metric.

### Testimonials
Edit **`data/testimonials.js`**. Replace the 3 placeholder quotes with real
client feedback (name, role, quote, rating out of 5).

### Website management pricing
Edit **`data/plans.js`** to set your actual monthly/yearly maintenance
pricing and what's included in each tier.

### Colours / fonts
Open **`tailwind.config.js`** → `theme.extend.colors.flux` for the blue scale
(matched to your logo) and `colors.ink` for the near-black text colour.
Fonts are set in `app/layout.js` (currently Manrope for headings, Inter for
body text).

---

## 4. WhatsApp button

- Floating button: bottom-right on every page (`components/layout/WhatsAppButton.jsx`)
- All "Book Free Consultation" buttons across the site also open WhatsApp
- Number and default message are both set in `data/site.js` → `whatsapp`
- No contact form is used anywhere — every lead goes straight to your WhatsApp

---

## 5. SEO

- Metadata (title, description, Open Graph, Twitter card) is set in `app/layout.js`
- `app/sitemap.js` and `app/robots.js` auto-generate `/sitemap.xml` and `/robots.txt`
- JSON-LD structured data (`ProfessionalService` schema) is injected in the
  `<head>` via `lib/seo.js` — this helps Google understand your business
  details (name, address, services, founder)
- Update `site.url` in `data/site.js` once you have your final domain live

---

## 6. Deploying

The easiest option is [Vercel](https://vercel.com) (built by the makers of
Next.js — free for personal/small business use):

1. Push this project to a GitHub repo
2. Import the repo on vercel.com
3. Deploy — done

Alternatively it works on any Node.js host (Netlify, Render, your own VPS, etc.).

---

Built by **Shivam Pathak** for **ShivFlux Technologies**.
