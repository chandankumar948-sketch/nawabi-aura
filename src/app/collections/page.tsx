import Link from "next/link";
import Image from "next/image";
import { collections } from "@/data/products";

export default function CollectionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <p
          style={{ color: "rgba(201,168,76,0.6)", letterSpacing: "0.3em" }}
          className="text-xs uppercase mb-2"
        >
          Curated Collections
        </p>
        <h1
          style={{ fontFamily: "var(--font-serif)" }}
          className="text-4xl text-white mb-4"
        >
          Shop by Collection
        </h1>
        <p className="text-white/60 max-w-xl mx-auto">
          Every collection tells a story — find the one that speaks to your style.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <div
            key={collection.id}
            style={{
              backgroundColor: "var(--color-brand-dark)",
              border: "1px solid rgba(201,168,76,0.1)",
            }}
            className="group rounded-2xl overflow-hidden hover:border-[rgba(201,168,76,0.4)] transition-all duration-300"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(10,10,10,0.8), transparent)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2
                  style={{ fontFamily: "var(--font-serif)" }}
                  className="text-xl text-white mb-1"
                >
                  {collection.name}
                </h2>
                <p className="text-white/60 text-sm mb-3">{collection.description}</p>
                <span style={{ color: "rgba(201,168,76,0.7)" }} className="text-xs">
                  {collection.productCount} pieces
                </span>
              </div>
            </div>
            <div className="p-4">
              <Link
                href={`/shop?collection=${collection.id}`}
                className="block text-center btn-outline-gold text-sm"
              >
                View Collection
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
