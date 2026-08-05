export const WHATSAPP_NUMBER = "917483706352";
export const WHATSAPP_PHONE_DISPLAY = "+91 7483706352";

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/** Fires the PRD's most-important funnel event ("WhatsApp Order Click") to GA4 + Meta Pixel, tagged by source. No-ops if neither is installed. */
export function trackWhatsAppClick(source: string) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "whatsapp_order_click", {
    event_category: "engagement",
    event_label: source,
    source,
  });
  window.fbq?.("trackCustom", "WhatsAppOrderClick", { source });
}
