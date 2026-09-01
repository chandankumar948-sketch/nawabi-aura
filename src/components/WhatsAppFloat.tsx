"use client";

import { usePathname } from "next/navigation";
import WhatsAppIcon from "./WhatsAppIcon";
import WhatsAppLink from "./WhatsAppLink";

export default function WhatsAppFloat() {
  const pathname = usePathname();
  // Product detail pages carry their own mobile sticky order bar (lg:hidden), and the
  // float would sit on top of it. Below lg, let the sticky bar be the only CTA there.
  const clashesWithStickyBar = pathname?.startsWith("/products/") ?? false;

  return (
    <WhatsAppLink
      message="Hi! I'd like to order from Nawabi Aura."
      source="float_button"
      className={`${
        clashesWithStickyBar ? "hidden lg:flex" : "flex"
      } fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 items-center gap-2 group`}
      aria-label="Order on WhatsApp"
      style={{ boxShadow: "0 10px 40px rgba(34,197,94,0.3)" }}
    >
      <WhatsAppIcon className="w-6 h-6 flex-shrink-0" />
      <span
        className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-sm font-medium whitespace-nowrap"
      >
        Order Now
      </span>
    </WhatsAppLink>
  );
}
