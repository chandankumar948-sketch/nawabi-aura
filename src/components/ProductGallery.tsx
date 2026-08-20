"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  alt: string;
  badge?: string;
}

const ROTATE_MS = 3500;

export default function ProductGallery({ images, alt, badge }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  // Auto-rotation stops for good once the shopper takes control, and pauses
  // while they're hovering or tabbed into the gallery.
  const [taken, setTaken] = useState(false);
  const [paused, setPaused] = useState(false);

  const many = images.length > 1;

  useEffect(() => {
    if (!many || taken || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(
      () => setActive((i) => (i + 1) % images.length),
      ROTATE_MS,
    );
    return () => window.clearInterval(id);
  }, [many, taken, paused, images.length]);

  function pick(i: number) {
    setActive(i);
    setTaken(true);
  }

  return (
    <div className="flex flex-col gap-3">
      <div
        style={{ backgroundColor: "var(--color-brand-dark)" }}
        className="relative aspect-[3/4] rounded-2xl overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={i === 0 ? alt : ""}
            aria-hidden={i !== active}
            fill
            priority={i === 0}
            sizes="(max-width: 1024px) 100vw, 45vw"
            className={`object-cover transition-opacity duration-700 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {badge && (
          <span
            style={{ backgroundColor: "var(--color-gold)", color: "var(--color-brand-black)" }}
            className="absolute top-4 left-4 z-10 text-xs font-semibold px-3 py-1 rounded-full"
          >
            {badge}
          </span>
        )}
      </div>

      {many && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => pick(i)}
              aria-label={`View image ${i + 1} of ${images.length}`}
              aria-current={i === active}
              style={{
                backgroundColor: "var(--color-brand-dark)",
                borderColor:
                  i === active ? "var(--color-gold)" : "rgba(201,168,76,0.18)",
              }}
              className="relative aspect-[3/4] rounded-lg overflow-hidden border-2 transition-colors hover:border-[rgba(201,168,76,0.6)]"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 25vw, 12vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
