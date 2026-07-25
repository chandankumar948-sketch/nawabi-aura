import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Elegance",
    description: "Every piece is designed to make you feel graceful and poised.",
  },
  {
    title: "Comfort",
    description: "Breathable fabrics that keep you comfortable through long days.",
  },
  {
    title: "Affordability",
    description: "Premium-looking kurtis at prices everyone can enjoy.",
  },
  {
    title: "Indian Craftsmanship",
    description: "Supporting traditional chikankari artisans of Lucknow.",
  },
  {
    title: "Trust",
    description: "Transparent policies, honest product descriptions, real reviews.",
  },
  {
    title: "Everyday Beauty",
    description: "Making ethnic elegance accessible for every occasion.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1920&q=80"
            alt="Nawabi Aura Story"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-brand-black), rgba(10,10,10,0.8))",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <p
            style={{ color: "rgba(201,168,76,0.6)", letterSpacing: "0.3em" }}
            className="text-xs uppercase mb-2"
          >
            Our Story
          </p>
          <h1
            style={{ fontFamily: "var(--font-serif)" }}
            className="text-5xl text-white mb-6"
          >
            Born from a Love
            <br />
            of Chikankari
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Nawabi Aura brings the timeless beauty of Lucknow chikankari into modern everyday
            fashion. What started as a small home business with a passion for handcrafted ethnic
            wear has grown into a brand that helps women dress with elegance, comfort, and
            confidence every day.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 section-ivory">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)" }}
                className="text-3xl mb-4"
              >
                The Nawabi Way
              </h2>
              <p style={{ color: "rgba(61,61,61,0.7)" }} className="leading-relaxed mb-4">
                Chikankari is not just embroidery — it is a 400-year-old art form from Lucknow, a
                city known for its tehzeeb (culture) and nazakat (elegance). Each stitch tells a
                story of artisan dedication, patient craftsmanship, and timeless beauty.
              </p>
              <p style={{ color: "rgba(61,61,61,0.7)" }} className="leading-relaxed mb-6">
                At Nawabi Aura, we work closely with skilled chikankari artisans to bring you
                authentic, beautifully crafted kurtis that honour this heritage while fitting
                seamlessly into modern life.
              </p>
              <Link href="/shop" className="btn-gold inline-block">
                Shop Now
              </Link>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571513800374-df1bbe650e56?w=800&q=80"
                alt="Chikankari Craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-3xl text-white mb-2"
            >
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "var(--color-brand-dark)",
                  border: "1px solid rgba(201,168,76,0.1)",
                }}
                className="p-6 rounded-2xl hover:border-[rgba(201,168,76,0.3)] transition-colors"
              >
                <div
                  style={{ backgroundColor: "var(--color-gold)", width: "2rem", height: "2px" }}
                  className="mb-4"
                />
                <h3
                  style={{ fontFamily: "var(--font-serif)" }}
                  className="text-lg text-white mb-2"
                >
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
