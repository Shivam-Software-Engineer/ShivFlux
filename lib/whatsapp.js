// lib/whatsapp.js
// -------------------------------------------------------------------------
// CONTROLLER LAYER: pure helper functions. Components (Views) call this
// instead of building wa.me URLs inline, so the logic lives in one place.
// -------------------------------------------------------------------------
import { site } from "@/data/site";

/**
 * Builds a wa.me link with an optional custom message.
 * Falls back to the default business enquiry message from data/site.js.
 */
export function getWhatsAppLink(customMessage) {
  const message = customMessage || site.whatsapp.defaultMessage;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.whatsapp.number}?text=${encoded}`;
}

export function getTelLink() {
  return `tel:${site.phoneRaw}`;
}

export function getMailLink(subject) {
  const subj = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${site.email}${subj}`;
}
