<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project notes

- Static export (`output: "export"` in `next.config.ts`), deployed to GitHub Pages via `.github/workflows/*.yml`. No server runtime in production.
- Product data: `src/data/products.ts` (typed, used by the app) and `catalog-sample.csv` (same rows, for bulk edit/import). Keep both in sync when changing the catalog.
- `public/sw.js` + `src/components/PWARegister.tsx`: the service worker registers only in production. Don't test PWA/caching behavior against `next dev` — it's intentionally disabled there because dev chunk URLs aren't content-hashed. See README's "Service worker" section before touching either file.
- No cart/checkout — every order flow is a `wa.me` deep link. The number, link builder, and click-tracking helper live in `src/lib/whatsapp.ts`, shared via the `WhatsAppLink`/`WhatsAppIcon` components. Don't reintroduce a hardcoded number in a component; import from `src/lib/whatsapp.ts` instead. See README's "Ordering flow" section.
