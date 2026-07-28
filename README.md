# Nawabi Aura

Storefront for Nawabi Aura, a Lucknowi Chikankari clothing brand. Built with Next.js (App Router) and statically exported for deployment to GitHub Pages at [nawabiaura.com](https://nawabiaura.com). There's no cart/checkout — every "Order" button opens a prefilled WhatsApp message.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Product catalog

Products live in `src/data/products.ts` as a typed array (`Product[]`), covering three categories: `short` and `long` kurtis, and `palazzo` (kurta + palazzo + dupatta sets). `catalog-sample.csv` mirrors the same rows in CSV form for bulk editing/import — when you add or edit products, keep both in sync.

Product images are either remote URLs or local files under `public/images/<category>/`. Local images should already be cropped to a 3:4 aspect ratio to match the product card/detail layout.

The `reviews` array (same file) powers the homepage testimonials and `/reviews` page. It's empty by default — only add reviews for products that currently exist in `products`.

Adding a new category (beyond short/long/palazzo) means updating the `Product.category` union and the filters in `src/app/shop/page.tsx`, `src/components/HomeShopSection.tsx`, and the footer link in `src/components/Footer.tsx`.

## Service worker

`public/sw.js` is a PWA cache, registered by `src/components/PWARegister.tsx` **only in production**. It caches JS/CSS chunks cache-first, which is safe in production because Next's static export gives every chunk a content hash — a new build gets new URLs.

In dev, chunk URLs aren't hashed that way, so a registered service worker would keep serving stale JS across reloads (including hard refreshes, which don't touch the Cache Storage API). `PWARegister.tsx` unregisters any existing service worker instead of registering one whenever `NODE_ENV !== "production"`. Don't remove that guard, and don't bump into it by testing PWA/offline behavior against `next dev` — build (`npm run build`) and serve `out/` if you need to test the real caching behavior.

## Build & deploy

```bash
npm run build
```

Outputs a static site to `out/`. Pushing to `main` runs `.github/workflows/*.yml`, which builds and deploys `out/` to GitHub Pages automatically.

## Ordering flow

All "Order on WhatsApp" buttons send to the number hardcoded as `whatsappNumber`/`WA_NUMBER` in `src/components/Header.tsx`, `Footer.tsx`, `ProductCard.tsx`, `HomeShopSection.tsx`, `WhatsAppFloat.tsx`, and `src/app/{page,contact,products/[slug],shipping}/page.tsx`. If the number ever changes, update it in all of those.
