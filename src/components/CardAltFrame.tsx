"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface CardAltFrameProps {
  src: string;
  sizes: string;
}

/**
 * The alternate product photo layered over a card's primary image.
 *
 * Pointer devices reveal it on hover (handled in CSS). Touch devices have no
 * hover, so it cross-fades on a loop — but only while the card is actually on
 * screen, so a long grid isn't animating two dozen cards out of view.
 */
export default function CardAltFrame({ src, sizes }: CardAltFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotating, setRotating] = useState(false);

  useEffect(() => {
    // Pointer devices get the CSS hover swap instead.
    if (window.matchMedia("(hover: hover)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setRotating(entry.isIntersecting),
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`card-alt-frame absolute inset-0 ${rotating ? "is-rotating" : ""}`}
    >
      <Image src={src} alt="" fill className="object-cover" sizes={sizes} />
    </div>
  );
}
