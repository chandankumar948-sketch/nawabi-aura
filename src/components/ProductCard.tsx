import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import WhatsAppIcon from "./WhatsAppIcon";
import WhatsAppLink from "./WhatsAppLink";
import CardAltFrame from "./CardAltFrame";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappMessage = `Hi! I'm interested in ordering the *${product.name}* (₹${product.price}). Could you please help me with sizes and availability?`;

  return (
    <div
      style={{ background: "linear-gradient(145deg, #1E1508, #120E05)", border: "1px solid rgba(201,168,76,0.18)" }}
      className="group rounded-2xl overflow-hidden transition-all duration-300 hover:border-[rgba(201,168,76,0.5)] hover:shadow-lg hover:shadow-[rgba(201,168,76,0.08)] hover:-translate-y-0.5"
    >
      <Link href={`/products/${product.slug}`} className="block relative aspect-[3/4] overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        {/* Alternate frame: hover-swap on pointer devices, on-screen rotation on touch */}
        {product.images[1] && (
          <CardAltFrame
            src={product.images[1]}
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        )}
        {product.badge && (
          <span
            style={{ backgroundColor: "var(--color-gold)", color: "var(--color-brand-black)" }}
            className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full"
          >
            {product.badge}
          </span>
        )}
        {!product.available && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
      </Link>
      <div className="p-4">
        <Link href={`/products/${product.slug}`}>
          <h3
            style={{ fontFamily: "var(--font-serif)" }}
            className="text-white text-sm font-medium mb-1 hover:text-[var(--color-gold)] transition-colors line-clamp-2"
          >
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mb-3">
          <span style={{ color: "var(--color-gold)" }} className="font-semibold">
            ₹{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-white/40 text-sm line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        <WhatsAppLink
          message={whatsappMessage}
          source="product_card"
          className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-xs font-medium px-4 py-2.5 rounded-full transition-colors"
        >
          <WhatsAppIcon className="w-3.5 h-3.5" />
          Order on WhatsApp
        </WhatsAppLink>
      </div>
    </div>
  );
}
