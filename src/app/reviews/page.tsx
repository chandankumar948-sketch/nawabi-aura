import { reviews } from "@/data/products";

export default function ReviewsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <p
          style={{ color: "rgba(201,168,76,0.6)", letterSpacing: "0.3em" }}
          className="text-xs uppercase mb-2"
        >
          Customer Love
        </p>
        <h1
          style={{ fontFamily: "var(--font-serif)" }}
          className="text-4xl text-white mb-4"
        >
          Real Reviews, Real Smiles
        </h1>
        <p className="text-white/60 max-w-xl mx-auto">
          Hear from our customers who wear Nawabi Aura with pride every day.
        </p>

        {/* Rating Summary */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <div
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-gold)" }}
            className="text-5xl font-bold"
          >
            5.0
          </div>
          <div className="text-left">
            <div style={{ color: "var(--color-gold)" }} className="text-xl">
              ★★★★★
            </div>
            <div className="text-white/50 text-sm">Based on {reviews.length} reviews</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            style={{
              backgroundColor: "var(--color-brand-dark)",
              border: "1px solid rgba(201,168,76,0.1)",
            }}
            className="rounded-2xl p-6 hover:border-[rgba(201,168,76,0.3)] transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                style={{ backgroundColor: "rgba(201,168,76,0.2)", color: "var(--color-gold)" }}
                className="w-12 h-12 rounded-full flex items-center justify-center font-semibold"
              >
                {review.initials}
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">{review.name}</p>
                <p className="text-white/40 text-xs">{review.date}</p>
              </div>
              <div style={{ color: "var(--color-gold)" }}>{"★".repeat(review.rating)}</div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-3">{review.review}</p>
            <p
              style={{
                color: "rgba(201,168,76,0.6)",
                borderTop: "1px solid rgba(201,168,76,0.1)",
              }}
              className="text-xs pt-3"
            >
              Purchased: {review.product}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        style={{
          backgroundColor: "var(--color-brand-dark)",
          border: "1px solid rgba(201,168,76,0.2)",
        }}
        className="mt-16 text-center rounded-2xl p-10"
      >
        <h2
          style={{ fontFamily: "var(--font-serif)" }}
          className="text-2xl text-white mb-2"
        >
          Love your Nawabi Aura kurti?
        </h2>
        <p className="text-white/60 mb-6">
          Share your experience on Instagram and tag us @nawabiaura
        </p>
        <a
          href="https://instagram.com/nawabiaura"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold inline-flex items-center gap-2"
        >
          Share on Instagram
        </a>
      </div>
    </div>
  );
}
