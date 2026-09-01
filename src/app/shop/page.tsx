"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { sortedProducts } from "@/data/products";

const categories = [
  "All",
  "Short Kurtis",
  "Long Kurtis",
  "Kurti Sets",
  "Palazzo Sets",
  "Under ₹999",
  "Best Sellers",
  "New Arrivals",
];

/** `?category=` values used by the footer links, mapped to filter labels. */
const CATEGORY_PARAMS: Record<string, string> = {
  short: "Short Kurtis",
  long: "Long Kurtis",
  "kurti-set": "Kurti Sets",
  palazzo: "Palazzo Sets",
};

export default function ShopPage() {
  // Start on "All" so the static export prerenders the full grid — reading the
  // param with useSearchParams() instead would push the whole page behind a
  // Suspense boundary and ship an empty /shop.html. The footer's ?category=
  // links are applied on mount, before paint.
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("category");
    const mapped = CATEGORY_PARAMS[param ?? ""];
    // Syncing from the URL, which is only readable after mount — deriving this
    // during render would desync the prerendered HTML from the first paint.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (mapped) setActiveCategory(mapped);
  }, []);

  const filteredProducts = sortedProducts.filter((p) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Short Kurtis") return p.category === "short";
    if (activeCategory === "Long Kurtis") return p.category === "long";
    if (activeCategory === "Kurti Sets") return p.category === "kurti-set";
    if (activeCategory === "Palazzo Sets") return p.category === "palazzo";
    if (activeCategory === "Under ₹999") return p.price < 1000;
    if (activeCategory === "Best Sellers") return Boolean(p.bestSeller);
    if (activeCategory === "New Arrivals") return Boolean(p.newArrival);
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <p
          style={{ color: "rgba(201,168,76,0.6)", letterSpacing: "0.3em" }}
          className="text-xs uppercase mb-2"
        >
          Our Products
        </p>
        <h1
          style={{ fontFamily: "var(--font-serif)" }}
          className="text-4xl text-white"
        >
          Shop Chikankari Kurtis
        </h1>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={
              activeCategory === cat
                ? { backgroundColor: "var(--color-gold)", color: "var(--color-brand-black)" }
                : { border: "1px solid rgba(201,168,76,0.3)", color: "rgba(255,255,255,0.7)" }
            }
            className="px-5 py-2 rounded-full text-sm font-medium transition-all hover:opacity-90"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-white/50">
          <p className="text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
