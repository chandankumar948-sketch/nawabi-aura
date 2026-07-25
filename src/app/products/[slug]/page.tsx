import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

const whatsappNumber = "917483706352";

const sizes = ["S", "M", "L", "XL"];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const whatsappMessage = `Hi! I'd like to order:\n\n*Product:* ${product.name}\n*Price:* ₹${product.price}\n*Size:* (please specify S/M/L/XL)\n\nPlease confirm availability.`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-white/40 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--color-gold)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[var(--color-gold)] transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-white/70">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div
            style={{ backgroundColor: "var(--color-brand-dark)" }}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {product.badge && (
              <span
                style={{ backgroundColor: "var(--color-gold)", color: "var(--color-brand-black)" }}
                className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full"
              >
                {product.badge}
              </span>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-3xl text-white mb-2"
            >
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mb-4">
              <span style={{ color: "var(--color-gold)" }} className="text-2xl font-semibold">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-white/40 text-lg line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
              {product.originalPrice && (
                <span className="bg-green-600/20 text-green-400 text-xs px-2 py-1 rounded-full">
                  Save ₹{(product.originalPrice - product.price).toLocaleString()}
                </span>
              )}
            </div>

            <p className="text-white/70 leading-relaxed mb-6">{product.description}</p>

            {/* Size Selector */}
            <div className="mb-6">
              <h3 className="text-white/80 text-sm font-medium mb-3">
                Select Size (mention in WhatsApp)
              </h3>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <div
                    key={size}
                    style={{ border: "1px solid rgba(201,168,76,0.3)" }}
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white/70 text-sm"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 mb-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-4 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Order on WhatsApp
              </a>
              <Link href="/shop" className="btn-outline-gold text-center">
                Continue Shopping
              </Link>
            </div>

            {/* Product Details */}
            <div
              style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}
              className="pt-6 space-y-3 text-sm"
            >
              {[
                { label: "Fabric", value: product.fabric },
                { label: "Work", value: product.work },
                { label: "Fit", value: product.fit },
                { label: "Occasion", value: product.occasion },
                { label: "Care", value: product.care },
                { label: "Sizes", value: product.sizes.join(", ") },
              ].map((detail) => (
                <div key={detail.label} className="flex gap-3">
                  <span className="text-white/40 w-24 flex-shrink-0">{detail.label}</span>
                  <span className="text-white/80">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bar */}
      <div
        style={{
          backgroundColor: "rgba(17,17,17,0.95)",
          borderTop: "1px solid rgba(201,168,76,0.2)",
        }}
        className="fixed bottom-0 left-0 right-0 backdrop-blur-sm p-4 flex items-center gap-4 lg:hidden z-40"
      >
        <div>
          <p className="text-white text-sm font-medium">{product.name}</p>
          <p style={{ color: "var(--color-gold)" }} className="font-bold">
            ₹{product.price.toLocaleString()}
          </p>
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-3 rounded-full transition-colors text-sm"
        >
          Order on WhatsApp
        </a>
      </div>
    </>
  );
}
