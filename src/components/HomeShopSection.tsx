"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { sortedProducts, productBadge, Product } from "@/data/products";
import { buildWhatsAppLink, trackWhatsAppClick } from "@/lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";
import CardAltFrame from "./CardAltFrame";

const TABS = [
  { label: "All", filter: () => true },
  { label: "Short Kurtis", filter: (p: Product) => p.category === "short" },
  { label: "Long Kurtis", filter: (p: Product) => p.category === "long" },
  { label: "Kurti Sets", filter: (p: Product) => p.category === "kurti-set" },
  { label: "Palazzo Sets", filter: (p: Product) => p.category === "palazzo" },
  { label: "Under ₹999", filter: (p: Product) => p.price < 1000 },
  { label: "Best Sellers", filter: (p: Product) => Boolean(p.bestSeller) },
  { label: "New Arrivals", filter: (p: Product) => Boolean(p.newArrival) },
];

function ShopCard({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [ordered, setOrdered] = useState(false);
  const badge = productBadge(product);

  function handleOrder() {
    const sizeText = selectedSize ? `*Size:* ${selectedSize}` : "*Size:* (please reply with S/M/L/XL)";
    const msg = `Hi! I'd like to order:\n\n*Product:* ${product.name}\n*Price:* ₹${product.price}\n${sizeText}\n\nPlease confirm availability.`;
    trackWhatsAppClick("home_shop_section");
    window.open(buildWhatsAppLink(msg), "_blank");
    setOrdered(true);
    setTimeout(() => setOrdered(false), 3000);
  }

  return (
    <div
      style={{ background: "linear-gradient(145deg, #1E1508, #120E05)", border: "1px solid rgba(201,168,76,0.18)" }}
      className="group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-[rgba(201,168,76,0.5)] hover:shadow-xl hover:shadow-[rgba(201,168,76,0.1)] hover:-translate-y-0.5"
    >
      {/* Image */}
      <Link href={`/products/${product.slug}`} className="relative aspect-[3/4] overflow-hidden block">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* Alternate frame: hover-swap on pointer devices, on-screen rotation on touch */}
        {product.images[1] && (
          <CardAltFrame
            src={product.images[1]}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        )}
        {badge && (
          <span
            style={{ backgroundColor: "var(--color-gold)", color: "var(--color-brand-black)" }}
            className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide"
          >
            {badge}
          </span>
        )}
        {!product.available && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white text-sm font-semibold tracking-wide">Out of Stock</span>
          </div>
        )}

        {/* Quick view overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-black text-xs font-semibold px-4 py-2 rounded-full">
            View Details
          </span>
        </div>
      </Link>

      {/* Info */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <Link href={`/products/${product.slug}`}>
            <h3
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-white text-sm font-medium leading-snug hover:text-[var(--color-gold)] transition-colors line-clamp-2 mb-1"
            >
              {product.name}
            </h3>
          </Link>
          <div className="flex items-center gap-2">
            <span style={{ color: "var(--color-gold)" }} className="font-bold text-base">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-white/35 text-xs line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
                <span className="text-green-400 text-[10px] font-semibold bg-green-900/30 px-1.5 py-0.5 rounded-full">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                </span>
              </>
            )}
          </div>
        </div>

        {/* Size picker */}
        {product.available && (
          <div>
            <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1.5">Pick size</p>
            <div className="flex gap-1.5 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                  className="w-8 h-8 rounded-lg text-xs font-semibold transition-all duration-200 border"
                  style={
                    selectedSize === size
                      ? { backgroundColor: "var(--color-gold)", color: "var(--color-brand-black)", borderColor: "var(--color-gold)" }
                      : { backgroundColor: "transparent", color: "rgba(255,255,255,0.6)", borderColor: "rgba(201,168,76,0.25)" }
                  }
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <button
          onClick={handleOrder}
          disabled={!product.available}
          className="w-full flex items-center justify-center gap-2 text-white text-xs font-semibold px-4 py-3 rounded-full transition-all duration-300 mt-auto disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            backgroundColor: ordered ? "#15803d" : "#16a34a",
          }}
        >
          <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
          {ordered ? "Opening WhatsApp…" : selectedSize ? `Order Size ${selectedSize}` : "Order on WhatsApp"}
        </button>
      </div>
    </div>
  );
}

export default function HomeShopSection() {
  const [activeTab, setActiveTab] = useState(0);

  const filtered = sortedProducts.filter(TABS[activeTab].filter);

  return (
    <section className="py-20 px-4" style={{ background: "linear-gradient(180deg, #0D0B07 0%, #1a1208 40%, #0D0B07 100%)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <p
            style={{ color: "rgba(201,168,76,0.6)", letterSpacing: "0.3em" }}
            className="text-xs uppercase mb-2"
          >
            Curated For You
          </p>
          <h2
            style={{ fontFamily: "var(--font-serif)" }}
            className="text-3xl sm:text-4xl text-white mb-3"
          >
            Shop the Nawabi Way
          </h2>
          <p className="text-white/50 text-sm max-w-md mx-auto">
            Pick your size and order instantly on WhatsApp — no checkout hassle.
          </p>
        </div>

        {/* Category tabs — horizontally scrollable on mobile */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide justify-start sm:justify-center">
          {TABS.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border"
              style={
                activeTab === i
                  ? { backgroundColor: "var(--color-gold)", color: "var(--color-brand-black)", borderColor: "var(--color-gold)" }
                  : { backgroundColor: "transparent", color: "rgba(255,255,255,0.65)", borderColor: "rgba(201,168,76,0.25)" }
              }
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {filtered.map((product) => (
              <ShopCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-white/40">
            <p className="text-lg">No products in this category yet.</p>
            <p className="text-sm mt-1">Check back soon!</p>
          </div>
        )}

        {/* Footer CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link
            href="/shop"
            style={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }}
            className="border font-semibold px-8 py-3 rounded-full hover:bg-[var(--color-gold)] hover:text-[var(--color-brand-black)] transition-all text-sm"
          >
            Browse Full Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
