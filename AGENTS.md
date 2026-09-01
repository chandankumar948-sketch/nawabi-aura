<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project notes

- Static export (`output: "export"` in `next.config.ts`), deployed to GitHub Pages via `.github/workflows/*.yml`. No server runtime in production.
- Product data: `src/data/products.ts` (typed, used by the app) and `catalog-sample.csv` (same rows, for bulk edit/import). Keep both in sync when changing the catalog. The WhatsApp Business account's own Catalogue (set up manually in WhatsApp Web, not code) mirrors these 38 products too — it does **not** auto-sync, so a product change here needs a matching manual edit there. See README's "WhatsApp Business catalogue" section.
- `public/sw.js` + `src/components/PWARegister.tsx`: the service worker registers only in production. Don't test PWA/caching behavior against `next dev` — it's intentionally disabled there because dev chunk URLs aren't content-hashed. See README's "Service worker" section before touching either file.
- Product images are named after the product's slug (`<slug>.webp`, `<slug>-2.webp`, …) under `public/images/<category>/`. Renaming a slug means renaming its image files and updating the matching WhatsApp catalogue link, which points at `nawabiaura.com/products/<slug>`. Source photos live outside the repo in the project's sibling folders; convert with `cwebp -q 82`.
- Cards never read `product.badge` — there is no such field. Use `productBadge(product)`, which derives one ribbon from the `bestSeller` / `newArrival` flags. Order product grids with `sortedProducts`, not `products`, so the master sheet's `ranking` is honoured.
- `WhatsAppFloat` is mounted globally in `layout.tsx` at `z-50` and hides itself below `lg` on `/products/*`, where the detail page's own sticky order bar (`z-40`, `lg:hidden`) already provides the CTA. Any new page with a fixed bottom bar needs the same treatment, or the float will sit on top of it.
- No cart/checkout — every order flow is a `wa.me` deep link. The number, link builder, and click-tracking helper live in `src/lib/whatsapp.ts`, shared via the `WhatsAppLink`/`WhatsAppIcon` components. Don't reintroduce a hardcoded number in a component; import from `src/lib/whatsapp.ts` instead. See README's "Ordering flow" section.
