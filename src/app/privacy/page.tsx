import WhatsAppLink from "@/components/WhatsAppLink";
import { WHATSAPP_PHONE_DISPLAY } from "@/lib/whatsapp";

const sections = [
  {
    title: "Information We Collect",
    items: [
      {
        q: "Order Details",
        a: "When you order via WhatsApp, we collect what you share in that chat — name, delivery address, phone number, size, and product preferences — to fulfil your order.",
      },
      {
        q: "Website Usage",
        a: "We use Google Analytics and Meta Pixel to understand how visitors browse the site and which products are popular. This does not include payment or address details, since there's no checkout on the website itself.",
      },
      {
        q: "No Accounts, No Stored Payments",
        a: "Nawabi Aura has no user accounts or cart. We never collect or store card, UPI, or bank details on the website — all payment happens directly between you and us over WhatsApp/UPI/bank transfer.",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    items: [
      {
        q: "Order Fulfilment",
        a: "To confirm availability, process payment, and ship your order to the address you provide.",
      },
      {
        q: "Customer Support",
        a: "To respond to questions, exchanges, and complaints raised via WhatsApp.",
      },
      {
        q: "Marketing (Opt-in Only)",
        a: "We may message you about new arrivals or offers only if you've messaged us on WhatsApp first. You can ask us to stop at any time.",
      },
    ],
  },
  {
    title: "Sharing & Storage",
    items: [
      {
        q: "Third Parties",
        a: "We share order details only with courier partners for delivery. We do not sell or rent your personal information to anyone.",
      },
      {
        q: "WhatsApp",
        a: "Conversations happen on WhatsApp Business, which is end-to-end encrypted and governed by WhatsApp's own privacy policy.",
      },
      {
        q: "Retention",
        a: "We keep order chats and delivery details only as long as needed for fulfilment, support, and legal record-keeping.",
      },
    ],
  },
  {
    title: "Your Rights",
    items: [
      {
        q: "Access & Correction",
        a: "You can ask us via WhatsApp to see, correct, or delete the personal information we hold about you.",
      },
      {
        q: "Grievance Officer",
        a: `For privacy concerns or complaints, reach out on WhatsApp at ${WHATSAPP_PHONE_DISPLAY}. We aim to acknowledge and resolve grievances within 7 business days, in line with Indian consumer protection rules.`,
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <p
          style={{ color: "rgba(201,168,76,0.6)", letterSpacing: "0.3em" }}
          className="text-xs uppercase mb-2"
        >
          Policies
        </p>
        <h1
          style={{ fontFamily: "var(--font-serif)" }}
          className="text-4xl text-white mb-4"
        >
          Privacy Policy
        </h1>
        <p className="text-white/60">
          How Nawabi Aura collects, uses, and protects your information.
        </p>
      </div>

      <div className="space-y-8">
        {sections.map((section) => (
          <div
            key={section.title}
            style={{
              backgroundColor: "var(--color-brand-dark)",
              border: "1px solid rgba(201,168,76,0.1)",
            }}
            className="rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                style={{ backgroundColor: "var(--color-gold)", width: "1.5rem", height: "2px" }}
              />
              <h2
                style={{ fontFamily: "var(--font-serif)" }}
                className="text-xl text-white"
              >
                {section.title}
              </h2>
            </div>
            <div className="space-y-4">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  style={
                    i < section.items.length - 1
                      ? { borderBottom: "1px solid rgba(201,168,76,0.1)" }
                      : {}
                  }
                  className="grid grid-cols-1 sm:grid-cols-3 gap-1 pb-4"
                >
                  <span style={{ color: "rgba(201,168,76,0.7)" }} className="text-sm font-medium">
                    {item.q}
                  </span>
                  <span className="text-white/70 text-sm sm:col-span-2">{item.a}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-white/50 text-sm mb-4">Questions about your data?</p>
        <WhatsAppLink
          message="Hi, I have a question about the privacy policy."
          source="privacy_page"
          className="btn-gold inline-flex items-center gap-2"
        >
          Ask on WhatsApp
        </WhatsAppLink>
      </div>
    </div>
  );
}
