import Link from "next/link";
import { products, productBadge } from "@/data/products";
import { notFound } from "next/navigation";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import WhatsAppLink from "@/components/WhatsAppLink";
import ProductGallery from "@/components/ProductGallery";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const whatsappMessage = `Hi! I'd like to order:\n\n*Product:* ${product.name}\n*Price:* ₹${product.price}\n*Size:* (please specify ${product.sizes.join("/")})\n\nPlease confirm availability.`;

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
          {/* Product Images */}
          <ProductGallery
            images={product.images}
            alt={product.name}
            badge={productBadge(product)}
          />

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
                {product.sizes.map((size) => (
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
              <WhatsAppLink
                message={whatsappMessage}
                source="product_detail"
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-4 rounded-full transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Order on WhatsApp
              </WhatsAppLink>
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
                { label: "Colour", value: product.colour },
                { label: "Fabric", value: product.fabric },
                { label: "Work", value: product.work },
                { label: "Fit", value: product.fit },
                ...(product.setIncludes
                  ? [{ label: "Set Includes", value: product.setIncludes }]
                  : []),
                { label: "Occasion", value: product.occasion },
                { label: "Care", value: product.care },
                { label: "Sizes", value: product.sizes.join(", ") },
                { label: "Country of Origin", value: product.countryOfOrigin },
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
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-medium truncate">{product.name}</p>
          <p style={{ color: "var(--color-gold)" }} className="font-bold">
            ₹{product.price.toLocaleString()}
          </p>
        </div>
        <WhatsAppLink
          message={whatsappMessage}
          source="product_detail_sticky"
          className="flex-shrink-0 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-3 rounded-full transition-colors text-sm whitespace-nowrap"
        >
          <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
          Order on WhatsApp
        </WhatsAppLink>
      </div>
    </>
  );
}
