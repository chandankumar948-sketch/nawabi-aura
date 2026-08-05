import Link from "next/link";
import HomeShopSection from "@/components/HomeShopSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import WhatsAppLink from "@/components/WhatsAppLink";
import { reviews } from "@/data/products";

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
            <WhatsAppLink
              message="Hi! I'd like to shop from Nawabi Aura."
              source="home_hero_banner"
              className="btn-gold flex items-center justify-center gap-2 px-7 py-3"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Order on WhatsApp
            </WhatsAppLink>
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
