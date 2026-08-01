import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";
import { site } from "@/data/site";
import { getMailLink, getTelLink, getWhatsAppLink } from "@/lib/whatsapp";
import Container from "@/components/ui/Container";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why ShivFlux", href: "#why-us" },
  { label: "Management Plans", href: "#plans" },
  { label: "Our Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pixel-dots pointer-events-none absolute -right-10 -top-10 h-56 w-56 text-flux-500/20" />
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              
              <span className="font-display text-xl font-extrabold tracking-tight text-white">
                Shiv<span className="text-flux-400">Flux</span>
              </span>

              <span className="font-display text-xl font-extrabold tracking-tight text-white">
                Technologies!
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              {site.description}
            </p>
            <div className="flex gap-3 pt-1">
              <SocialIcon href={site.social.instagram} label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={site.social.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialIcon>
              {/* <SocialIcon href={site.social.twitter} label="Twitter / X">
                <Twitter className="h-4 w-4" />
              </SocialIcon> */}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white/40">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 transition-colors hover:text-flux-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white/40">
              Get In Touch
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-flux-400" />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </span>
              </li>
              <li>
                <a href={getTelLink()} className="flex items-center gap-3 transition-colors hover:text-flux-400">
                  <Phone className="h-4 w-4 shrink-0 text-flux-400" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={getMailLink()} className="flex items-center gap-3 transition-colors hover:text-flux-400">
                  <Mail className="h-4 w-4 shrink-0 text-flux-400" />
                  {site.email}
                </a>
              </li>
            </ul>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-1 w-fit"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Founded &amp; built by <span className="text-white/70">{site.founder}</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-flux-400 hover:text-flux-400"
    >
      {children}
    </a>
  );
}
