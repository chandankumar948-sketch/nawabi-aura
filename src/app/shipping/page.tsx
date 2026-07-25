const sections = [
  {
    title: "Shipping & Delivery",
    items: [
      {
        q: "Processing Time",
        a: "Orders are processed within 1-2 business days after confirmation and payment.",
      },
      {
        q: "Delivery Time",
        a: "Standard delivery takes 5-7 business days from dispatch. Delivery times may vary based on your location.",
      },
      {
        q: "Tracking",
        a: "We'll share tracking details via WhatsApp once your order is dispatched.",
      },
      {
        q: "Shipping Charges",
        a: "Free shipping on orders above ₹999. A nominal shipping fee applies for orders below this amount.",
      },
    ],
  },
  {
    title: "Payment Methods",
    items: [
      { q: "UPI", a: "Google Pay, PhonePe, Paytm, and all UPI apps accepted." },
      { q: "Bank Transfer", a: "Direct bank transfer (NEFT/IMPS) available." },
      {
        q: "Cash on Delivery",
        a: "COD available in select areas — please confirm via WhatsApp before ordering.",
      },
    ],
  },
  {
    title: "Exchange Policy",
    items: [
      { q: "Exchange Window", a: "Exchanges accepted within 7 days of delivery." },
      {
        q: "Condition",
        a: "Item must be unused, unwashed, and in original packaging with tags intact.",
      },
      {
        q: "How to Exchange",
        a: "WhatsApp us with your order details and reason for exchange. We'll guide you through the process.",
      },
      {
        q: "Damaged or Wrong Item",
        a: "If you receive a damaged or incorrect item, contact us within 24 hours with photos. We'll resolve it promptly.",
      },
    ],
  },
  {
    title: "Important Notes",
    items: [
      {
        q: "Colour Variations",
        a: "Slight colour variations may occur due to screen settings and photography lighting. Actual colours are as accurate as possible.",
      },
      {
        q: "Size Confirmation",
        a: "We recommend confirming your size via WhatsApp before placing an order to avoid exchange hassle.",
      },
      {
        q: "Out of Stock",
        a: "If a product goes out of stock after your order, we'll notify you immediately via WhatsApp.",
      },
    ],
  },
];

export default function ShippingPage() {
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
          Shipping &amp; Returns
        </h1>
        <p className="text-white/60">
          Everything you need to know about orders, delivery, and exchanges.
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
        <p className="text-white/50 text-sm mb-4">Still have questions?</p>
        <a
          href="https://wa.me/917437063520?text=Hi, I have a question about shipping and returns."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold inline-flex items-center gap-2"
        >
          Ask on WhatsApp
        </a>
      </div>
    </div>
  );
}
