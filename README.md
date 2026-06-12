# Number One Ads

Multi-page marketing website for **Number One Ads** — a 25-year 360° advertising agency in Madurai, Tamil Nadu. Built with React + Vite + React Router, GSAP, and a custom build-time image pipeline.

## Pages

- `/` — Home (hero, sectors, services overview, showcase, evolution, featured work, testimonials, CTA)
- `/about` — Our story, legacy timeline, values, evolution, testimonials
- `/services` — Capabilities, detailed signage/production grid, process
- `/work` — Filterable portfolio gallery + lightbox
- `/contact` — Contact details and enquiry form

Routing is client-side; `public/_redirects` and `vercel.json` provide the SPA fallback so deep links resolve on static hosts. Per-page `<title>`/meta are handled by `src/components/Seo.jsx`, and `vite.config.js` lists every route for the generated `sitemap.xml`.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

The site is fully static — `dist/` can be hosted on any static host (Vercel, Netlify, Cloudflare Pages, etc.).

## Images

The raw, print-resolution source art lives in `website creatives/` (several GB) and is **not** committed to Git. Only the web-optimized WebP derivatives are committed, under:

- `public/gallery/` — portfolio pieces (thumb + full)
- `public/services/` — one image per service
- `src/data/gallery.json` / `src/data/services.json` — generated manifests (paths, sizes, blur placeholders)

### Adding new creatives later

1. Drop new images into the relevant folder inside `website creatives/`
   (e.g. `website creatives/Sample Design/` for the gallery, or a service
   subfolder under `website creatives/Creatives/No1 ads Services Image/`).
2. Regenerate the optimized assets and manifests:
   ```bash
   node scripts/optimize-images.mjs
   ```
3. Commit the new files in `public/gallery`, `public/services`, and `src/data`.
   Push — the host rebuilds and the new work appears automatically.
