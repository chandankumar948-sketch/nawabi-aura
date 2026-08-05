import WhatsAppIcon from "./WhatsAppIcon";
import WhatsAppLink from "./WhatsAppLink";

export default function WhatsAppFloat() {
  return (
    <WhatsAppLink
      message="Hi! I'd like to order from Nawabi Aura."
      source="float_button"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2 group"
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
