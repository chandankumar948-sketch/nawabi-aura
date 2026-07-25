const whatsappNumber = "917483706352";
const instagramHandle = "nawabiaura";

const faqs = [
  {
    q: "How do I place an order?",
    a: "Simply click 'Order on WhatsApp' on any product page. A pre-filled message will open — just mention your size and we'll confirm availability and payment details.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI, bank transfer, and online payment methods. Cash on delivery may be available — please ask on WhatsApp.",
  },
  {
    q: "How long does delivery take?",
    a: "Most orders are delivered within 5-7 business days. We'll share tracking details once your order is dispatched.",
  },
  {
    q: "Can I exchange the kurti?",
    a: "Yes! Exchanges are accepted within 7 days of delivery for unused, unwashed items in original packaging. Contact us on WhatsApp to initiate.",
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <p
          style={{ color: "rgba(201,168,76,0.6)", letterSpacing: "0.3em" }}
          className="text-xs uppercase mb-2"
        >
          Get in Touch
        </p>
        <h1
          style={{ fontFamily: "var(--font-serif)" }}
          className="text-4xl text-white mb-4"
        >
          Contact Us
        </h1>
        <p className="text-white/60 max-w-xl mx-auto">
          We&apos;d love to hear from you! Reach out on WhatsApp for the fastest response.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=Hi! I have a query about Nawabi Aura.`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "var(--color-brand-dark)",
            border: "1px solid rgba(201,168,76,0.1)",
          }}
          className="rounded-2xl p-8 hover:border-green-500/40 transition-all text-center group block"
        >
          <div className="w-14 h-14 rounded-full bg-green-600/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600/30 transition-colors">
            <svg className="w-7 h-7 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <h3 className="font-semibold text-white mb-1">WhatsApp</h3>
          <p className="text-white/50 text-sm">Fastest response — tap to chat</p>
          <p className="text-green-400 text-sm mt-2 font-medium">Message Us →</p>
        </a>

        {/* Instagram */}
        <a
          href={`https://instagram.com/${instagramHandle}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "var(--color-brand-dark)",
            border: "1px solid rgba(201,168,76,0.1)",
          }}
          className="rounded-2xl p-8 hover:border-pink-500/40 transition-all text-center group block"
        >
          <div className="w-14 h-14 rounded-full bg-pink-600/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-600/30 transition-colors">
            <svg className="w-7 h-7 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>
          <h3 className="font-semibold text-white mb-1">Instagram</h3>
          <p className="text-white/50 text-sm">@{instagramHandle}</p>
          <p className="text-pink-400 text-sm mt-2 font-medium">Follow Us →</p>
        </a>

        {/* Phone */}
        <a
          href="tel:+917483706352"
          style={{
            backgroundColor: "var(--color-brand-dark)",
            border: "1px solid rgba(201,168,76,0.1)",
          }}
          className="rounded-2xl p-8 hover:border-[rgba(201,168,76,0.4)] transition-all text-center group block"
        >
          <div
            style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[rgba(201,168,76,0.2)] transition-colors"
          >
            <svg
              className="w-7 h-7"
              style={{ color: "var(--color-gold)" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-white mb-1">Call Us</h3>
          <p className="text-white/50 text-sm">Tap to call directly</p>
          <p style={{ color: "var(--color-gold)" }} className="text-sm mt-2 font-medium">
            +91 7483706352
          </p>
        </a>
      </div>

      {/* FAQ */}
      <div
        style={{
          backgroundColor: "var(--color-brand-dark)",
          border: "1px solid rgba(201,168,76,0.1)",
        }}
        className="rounded-2xl p-8"
      >
        <h2
          style={{ fontFamily: "var(--font-serif)" }}
          className="text-2xl text-white mb-6"
        >
          Common Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              style={{ borderBottom: i < faqs.length - 1 ? "1px solid rgba(201,168,76,0.1)" : "none" }}
              className="pb-4"
            >
              <h3 className="text-white font-medium mb-1 text-sm">{item.q}</h3>
              <p className="text-white/50 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
