import WhatsAppLink from "@/components/WhatsAppLink";
import { WHATSAPP_PHONE_DISPLAY } from "@/lib/whatsapp";

const sections = [
  {
    title: "About These Terms",
    items: [
      {
        q: "Who We Are",
        a: "Nawabi Aura is a Lucknowi chikankari clothing brand. These terms govern your use of nawabiaura.com and any order placed with us via WhatsApp.",
      },
      {
        q: "How Ordering Works",
        a: "There's no cart or online checkout. Browsing and size selection happen on the website; the order itself is confirmed in a WhatsApp chat, including price, size, and payment.",
      },
      {
        q: "Acceptance",
        a: "By browsing this site or messaging us to place an order, you agree to these terms.",
      },
    ],
  },
  {
    title: "Products & Pricing",
    items: [
      {
        q: "Product Accuracy",
        a: "We describe fabric, work, and fit as accurately as possible. Slight colour variation can occur due to screen settings and photography lighting.",
      },
      {
        q: "Pricing",
        a: "Prices shown on the site are in INR and may change without notice. The price confirmed with you on WhatsApp at the time of order is final.",
      },
      {
        q: "Availability",
        a: "Stock is limited. If an item goes out of stock after you order, we'll notify you on WhatsApp and offer an alternative or a refund.",
      },
    ],
  },
  {
    title: "Payment & Delivery",
    items: [
      {
        q: "Payment Methods",
        a: "We accept UPI, bank transfer, and (in select areas) cash on delivery, confirmed directly over WhatsApp.",
      },
      {
        q: "Delivery",
        a: "Standard delivery takes 5-7 business days from dispatch. See our Shipping & Returns page for full details.",
      },
    ],
  },
  {
    title: "Exchanges & Liability",
    items: [
      {
        q: "Exchange Policy",
        a: "Exchanges are accepted within 7 days of delivery for unused, unwashed items in original packaging. See Shipping & Returns for the full process.",
      },
      {
        q: "Limitation of Liability",
        a: "We are not liable for delays caused by courier partners, incorrect delivery details provided by the customer, or events outside our reasonable control.",
      },
    ],
  },
  {
    title: "Grievance Redressal",
    items: [
      {
        q: "Contact for Complaints",
        a: `If you have a complaint about an order or these terms, reach us on WhatsApp at ${WHATSAPP_PHONE_DISPLAY}. We aim to resolve grievances within 7 business days, as required under Indian consumer protection law.`,
      },
      {
        q: "Governing Law",
        a: "These terms are governed by the laws of India, with courts in Bengaluru, Karnataka having jurisdiction.",
      },
    ],
  },
];

export default function TermsPage() {
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
          Terms &amp; Conditions
        </h1>
        <p className="text-white/60">
          The terms that apply when you browse or order from Nawabi Aura.
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
        <p className="text-white/50 text-sm mb-4">Questions about these terms?</p>
        <WhatsAppLink
          message="Hi, I have a question about the terms and conditions."
          source="terms_page"
          className="btn-gold inline-flex items-center gap-2"
        >
          Ask on WhatsApp
        </WhatsAppLink>
      </div>
    </div>
  );
}
