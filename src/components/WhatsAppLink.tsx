"use client";

import { AnchorHTMLAttributes, ReactNode } from "react";
import { buildWhatsAppLink, trackWhatsAppClick } from "@/lib/whatsapp";

interface WhatsAppLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> {
  message: string;
  source: string;
  children: ReactNode;
}

/** Shared "Order on WhatsApp" anchor: builds the wa.me link and fires the click-tracking event on click. */
export default function WhatsAppLink({ message, source, children, ...rest }: WhatsAppLinkProps) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(source)}
      {...rest}
    >
      {children}
    </a>
  );
}
