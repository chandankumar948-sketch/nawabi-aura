import Link from "next/link";
import WhatsAppIcon from "./WhatsAppIcon";
import WhatsAppLink from "./WhatsAppLink";

const instagramHandle = "nawabiaura";

export default function Footer() {
  return (
    <footer
      style={{ background: "linear-gradient(135deg, #0D0B07 0%, #1E1508 50%, #0D0B07 100%)", borderTop: "1px solid rgba(201,168,76,0.25)", color: "rgba(255,255,255,0.7)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-gold)" }}
              className="text-2xl mb-2"
            >
              NAWABI AURA
            </h3>
            <p
              style={{ color: "rgba(201,168,76,0.6)", letterSpacing: "0.2em" }}
              className="text-xs mb-4 uppercase"
            >
              DRESS LIKE ROYALTY. FEEL THE AURA.
            </p>
            <p className="text-sm leading-relaxed mb-4">
              Bringing the timeless beauty of Lucknow chikankari into modern everyday fashion.
              Handcrafted with love, worn with pride.
            </p>
            <div className="flex gap-4">
              <a
                href={`https://instagram.com/${instagramHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(255,255,255,0.6)" }}
                className="hover:text-[var(--color-gold)] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <WhatsAppLink
                message="Hi! I'd like to know more about Nawabi Aura."
                source="footer_icon"
                style={{ color: "rgba(255,255,255,0.6)" }}
                className="hover:text-[var(--color-gold)] transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </WhatsAppLink>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              Shop
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="hover:text-[var(--color-gold)] transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop?category=short" className="hover:text-[var(--color-gold)] transition-colors">
                  Short Kurtis
                </Link>
              </li>
              <li>
                <Link href="/shop?category=long" className="hover:text-[var(--color-gold)] transition-colors">
                  Long Kurtis
                </Link>
              </li>
              <li>
                <Link href="/shop?category=palazzo" className="hover:text-[var(--color-gold)] transition-colors">
                  Palazzo Sets
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-[var(--color-gold)] transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-[var(--color-gold)] transition-colors">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              Help
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shipping" className="hover:text-[var(--color-gold)] transition-colors">
                  Shipping &amp; Returns
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[var(--color-gold)] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--color-gold)] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <WhatsAppLink
                  message="Hi, I need help with my order."
                  source="footer_support"
                  className="hover:text-[var(--color-gold)] transition-colors"
                >
                  WhatsApp Support
                </WhatsAppLink>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{ borderTop: "1px solid rgba(201,168,76,0.1)", color: "rgba(255,255,255,0.4)" }}
          className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs"
        >
          <p>© 2025 Nawabi Aura. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-[var(--color-gold)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[var(--color-gold)] transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
