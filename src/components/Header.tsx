"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import WhatsAppLink from "./WhatsAppLink";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        background: "linear-gradient(135deg, rgba(13,11,7,0.97) 0%, rgba(30,21,8,0.97) 50%, rgba(13,11,7,0.97) 100%)",
        borderBottom: "1px solid rgba(201,168,76,0.25)",
        backdropFilter: "blur(12px)",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/logo.png"
              alt="Nawabi Aura"
              width={64}
              height={64}
              style={{ display: "block" }}
            />
            <div className="flex flex-col -ml-1">
              <span
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-gold)", letterSpacing: "0.15em" }}
                className="text-base leading-tight"
              >
                NAWABI AURA
              </span>
              <span
                style={{ color: "rgba(201,168,76,0.55)", letterSpacing: "0.25em" }}
                className="text-[9px] uppercase leading-tight"
              >
                Royalty the Lucknowi Way
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ color: "rgba(255,255,255,0.8)", letterSpacing: "0.05em" }}
                className="text-sm hover:text-[var(--color-gold)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* WhatsApp CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <WhatsAppLink
              message="Hi! I'd like to order from Nawabi Aura."
              source="header_desktop"
              className="hidden sm:flex items-center gap-2 btn-gold text-xs px-4 py-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Order on WhatsApp
            </WhatsAppLink>

            <button
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            style={{ borderTop: "1px solid rgba(201,168,76,0.2)" }}
            className="md:hidden py-4"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: "rgba(255,255,255,0.8)" }}
                  className="hover:text-[var(--color-gold)] transition-colors px-2 py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <WhatsAppLink
                message="Hi! I'd like to order from Nawabi Aura."
                source="header_mobile"
                className="btn-gold text-center mt-2"
              >
                Order on WhatsApp
              </WhatsAppLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
