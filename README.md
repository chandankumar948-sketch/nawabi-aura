# Nawabi Aura

Storefront for Nawabi Aura, a Lucknowi Chikankari clothing brand. Built with Next.js (App Router) and statically exported for deployment to GitHub Pages at [nawabiaura.com](https://nawabiaura.com). There's no cart/checkout — every "Order" button opens a prefilled WhatsApp message.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Product catalog

Products live in `src/data/products.ts` as a typed array (`Product[]`), covering four categories: `short` and `long` kurtis, `kurti-set` (georgette kurti with matching pants or inner slip), and `palazzo` (kurta + palazzo + dupatta sets). `catalog-sample.csv` mirrors the same rows in CSV form for bulk editing/import — when you add or edit products, keep both in sync.

Cards and the product gallery show at most one ribbon, derived by `productBadge()` from the `bestSeller` / `newArrival` flags — `Best Seller` wins when a product is both. `sortedProducts` is the display order used by the shop page and homepage grid: products with a `ranking` from the master sheet come first in ascending order, and everything unranked follows in catalog order.

Product images are either remote URLs or local files under `public/images/<category>/` —
`short-tops/`, `long-tops/`, `kurti-sets/`, `palazzo-sets/`. Local images should already be
cropped to a 3:4 aspect ratio to match the product card/detail layout; cards use
`object-cover`, so a 2:3 source is tolerated but gets cropped top and bottom.

Filenames follow the product's slug — `<slug>.webp` for the primary image, then
`<slug>-2.webp`, `<slug>-3.webp` … for the gallery. **Renaming a slug means renaming its
image files too.** Source photos are shot as PNG/JPEG and live outside this repo, in the
sibling folders of the project directory (`Cotton short top/`, `long gergrate/`,
`short top/`, `Co-set/`); convert them in with:

```bash
cwebp -q 82 "../short top/Baby Pink1.png" -o public/images/long-tops/<slug>.webp
```

The `reviews` array (same file) powers the homepage testimonials and `/reviews` page. It's empty by default — only add reviews for products that currently exist in `products`.

Master-sheet rows 39–44 (six ₹999 Georgette kurtis: Beige, White, Mustard Yellow, Grey set,
Aqua Blue Anarkali, Rust Orange set) are deliberately **not** in `products.ts` — no image
files exist for them, and five of the six duplicate rows 8–13 at a different price. Decide
whether they're new stock or a re-pricing of the existing kurti sets before adding them.

Adding a new category (beyond short/long/kurti-set/palazzo) means updating the `Product.category` union, the filters in `src/app/shop/page.tsx` (both the `categories` list and `CATEGORY_PARAMS`, which maps the footer's `?category=` values onto filter labels), `src/components/HomeShopSection.tsx`, and the footer link in `src/components/Footer.tsx`.

## Service worker

`public/sw.js` is a PWA cache, registered by `src/components/PWARegister.tsx` **only in production**. It caches JS/CSS chunks cache-first, which is safe in production because Next's static export gives every chunk a content hash — a new build gets new URLs.

In dev, chunk URLs aren't hashed that way, so a registered service worker would keep serving stale JS across reloads (including hard refreshes, which don't touch the Cache Storage API). `PWARegister.tsx` unregisters any existing service worker instead of registering one whenever `NODE_ENV !== "production"`. Don't remove that guard, and don't bump into it by testing PWA/offline behavior against `next dev` — build (`npm run build`) and serve `out/` if you need to test the real caching behavior.

## Build & deploy

```bash
npm run build
```

Outputs a static site to `out/`. Pushing to `main` runs `.github/workflows/*.yml`, which builds and deploys `out/` to GitHub Pages automatically.

## Ordering flow

All "Order on WhatsApp" buttons go through `src/lib/whatsapp.ts` (the number, `wa.me` link builder, and click-tracking helper) plus the shared `src/components/WhatsAppLink.tsx` / `WhatsAppIcon.tsx` components. If the number ever changes, update `WHATSAPP_NUMBER` in `src/lib/whatsapp.ts` only.

Every WhatsApp CTA fires a `whatsapp_order_click` GA4 event and a `WhatsAppOrderClick` Meta Pixel custom event (tagged with a `source`, e.g. `header_desktop`, `product_card`, `float_button`) — see the PRD's analytics requirements. Both are no-ops until you set the env vars below.

### Analytics setup

Set these in `.env.local` (see `.env.local.example`) before running `npm run build` — they're `NEXT_PUBLIC_*` so they get inlined into the static export at build time:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — GA4 Measurement ID (e.g. `G-XXXXXXX`)
- `NEXT_PUBLIC_META_PIXEL_ID` — Meta Pixel ID

Without them, `src/components/Analytics.tsx` renders nothing and `trackWhatsAppClick` silently no-ops.

## WhatsApp Business catalogue

The WhatsApp Business account (`917483706352`) has its Business Profile and Catalogue configured directly in WhatsApp Web (Business Tools → Business profile / Catalogue) — this is account configuration, not code, so it isn't in this repo.

All 38 products in `src/data/products.ts` are mirrored there manually: image, price, sale price, description, and a link back to `https://nawabiaura.com/products/<slug>` for each. **There's no sync between the two** — if a product's price, description, or availability changes in code, update the matching WhatsApp catalogue item by hand, or customers will see stale info when they tap through from a WhatsApp chat. New products need to be added to the WhatsApp catalogue the same way (Business Tools → Catalogue → Add new item) after they're added to `products.ts`.

Watch out for slug changes specifically: the catalogue item links to
`https://nawabiaura.com/products/<slug>`, so renaming a slug silently repoints an existing
catalogue entry at a different product. The master-sheet sync moved the Georgette baby pink
top to `pastel-pink-3-4-sleeve-chikankari-top` and handed its old slug
(`baby-pink-3-4-sleeve-chikankari-top`) to the new Mal cotton top — that catalogue entry's
link needs updating by hand.

WhatsApp's India compliance form (legal name, business address, customer care contact, grievance officer) was filed once during setup — required by law to keep current if any of it changes.
