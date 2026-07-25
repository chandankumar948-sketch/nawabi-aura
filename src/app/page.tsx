import Link from "next/link";
import HomeShopSection from "@/components/HomeShopSection";
import { reviews } from "@/data/products";

const whatsappNumber = "917483706352";
const instagramHandle = "nawabiaura";

const benefits = [
  {
    icon: "✦",
    title: "Handcrafted Chikankari",
    description:
      "Every kurti is embroidered by skilled artisans using traditional Lucknowi chikankari techniques passed down through generations.",
  },
  {
    icon: "✦",
    title: "Premium Yet Affordable",
    description:
      "Luxury craftsmanship at prices that won't break the bank. Starting from just ₹799.",
  },
  {
    icon: "✦",
    title: "Supremely Comfortable",
    description:
      "Made from breathable natural fabrics — pure cotton, mul cotton, and georgette — for all-day comfort.",
  },
  {
    icon: "✦",
    title: "From College to Office",
    description:
      "Versatile designs that transition seamlessly from campus to boardroom to festive celebrations.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── SHOP SECTION — first thing visible ── */}
      <HomeShopSection />

      {/* ── BRAND BANNER — pure CSS, no image ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0D0B07 0%, #261A06 35%, #1E1508 65%, #0D0B07 100%)",
          borderTop: "1px solid rgba(201,168,76,0.2)",
          borderBottom: "1px solid rgba(201,168,76,0.2)",
        }}
        className="py-20 px-4 relative overflow-hidden"
      >
        {/* decorative gold circles */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-5 pointer-events-none"
          style={{ background: "radial-gradient(circle, #C9A84C, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-5 pointer-events-none"
          style={{ background: "radial-gradient(circle, #C9A84C, transparent 70%)" }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <p
            style={{ color: "rgba(201,168,76,0.7)", letterSpacing: "0.45em" }}
            className="text-xs uppercase mb-5"
          >
            Lucknow Chikankari · Est. 2024
          </p>

          {/* decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4))" }} className="h-px flex-1 max-w-[120px]" />
            <span style={{ color: "rgba(201,168,76,0.5)" }} className="text-lg">✦</span>
            <div style={{ background: "linear-gradient(to left, transparent, rgba(201,168,76,0.4))" }} className="h-px flex-1 max-w-[120px]" />
          </div>

          <h2
            style={{ fontFamily: "var(--font-serif)" }}
            className="text-4xl sm:text-5xl lg:text-6xl text-white mb-4 leading-tight"
          >
            Dress Like Royalty.
            <br />
            <span style={{ color: "var(--color-gold)" }}>Feel the Aura.</span>
          </h2>
          <p className="text-white/55 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Bringing the timeless beauty of Lucknow chikankari into modern everyday fashion —
            handcrafted with love, worn with pride.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi! I'd like to shop from Nawabi Aura.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center gap-2 px-7 py-3"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Order on WhatsApp
            </a>
            <a
              href={`https://instagram.com/${instagramHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold flex items-center justify-center gap-2 px-7 py-3"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="py-16 px-4 section-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p
              style={{ color: "rgba(160,120,48,0.7)", letterSpacing: "0.3em" }}
              className="text-xs uppercase mb-2"
            >
              Why Nawabi Aura
            </p>
            <h2
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)" }}
              className="text-3xl sm:text-4xl mb-2"
            >
              Crafted With Purpose
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                style={{ border: "1px solid rgba(201,168,76,0.1)" }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:border-[rgba(201,168,76,0.3)] transition-colors"
              >
                <div style={{ color: "var(--color-gold)" }} className="text-2xl mb-3">
                  {benefit.icon}
                </div>
                <h3
                  style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)" }}
                  className="text-base font-semibold mb-2"
                >
                  {benefit.title}
                </h3>
                <p style={{ color: "rgba(61,61,61,0.7)" }} className="text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-16 px-4" style={{ background: "linear-gradient(180deg, #0D0B07 0%, #1a1208 50%, #0D0B07 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p
              style={{ color: "rgba(201,168,76,0.6)", letterSpacing: "0.3em" }}
              className="text-xs uppercase mb-2"
            >
              Customer Love
            </p>
            <h2
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-3xl sm:text-4xl text-white mb-2"
            >
              Loved by Our Customers
            </h2>
            <p className="text-white/50 text-sm">Real smiles, real style, real Nawabi Aura moments.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.slice(0, 3).map((review) => (
              <div
                key={review.id}
                style={{
                  background: "linear-gradient(145deg, #1E1508, #120E05)",
                  border: "1px solid rgba(201,168,76,0.18)",
                }}
                className="rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    style={{ backgroundColor: "rgba(201,168,76,0.2)", color: "var(--color-gold)" }}
                    className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0"
                  >
                    {review.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium text-sm">{review.name}</p>
                    <p className="text-white/40 text-xs">{review.date}</p>
                  </div>
                  <div style={{ color: "var(--color-gold)" }} className="text-sm flex-shrink-0">
                    {"★".repeat(review.rating)}
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-2">{review.review}</p>
                <p style={{ color: "rgba(201,168,76,0.5)" }} className="text-xs">
                  — {review.product}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/reviews" className="btn-outline-gold">
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
