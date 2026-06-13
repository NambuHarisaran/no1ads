# Number One Ads

Multi-page marketing website for **Number One Ads** — a 25-year 360° advertising agency in Madurai, Tamil Nadu. Built with React + Vite + React Router, GSAP, and a custom build-time image pipeline.

## Pages

- `/` — Home (hero, sectors, services overview, showcase, evolution, featured work, testimonials, CTA)
- `/about` — Our story, legacy timeline, values, evolution, testimonials
- `/services` — Capabilities, detailed signage/production grid, process
- `/work` — Filterable portfolio gallery + lightbox
- `/contact` — Contact details and enquiry form

Every route is **prerendered to static HTML at build time** by
[`vite-react-ssg`](https://github.com/Daydreamer-riri/vite-react-ssg) (routes
are defined in `src/App.jsx`, mounted in `src/main.jsx`). This is what lets AI
answer engines (GPTBot, ClaudeBot, PerplexityBot, Google AI Overviews) and
search crawlers read the full page content and per-page meta **without running
JavaScript** — the single biggest factor for being indexed and cited. After
prerender, the same tree hydrates in the browser. `vercel.json` provides the
SPA fallback for any non-prerendered URL.

Per-page `<title>`/description/canonical/OG tags are emitted by
`src/components/Seo.jsx` (vite-react-ssg `<Head>`) into each static page.

### GEO / SEO at a glance

- **Structured data** (JSON-LD: `LocalBusiness` + `WebSite` + `FAQPage`) is
  generated from `src/data/siteConfig.js` and `src/data/faqs.js` and injected
  into every prerendered page via the `transformIndexHtml` hook in
  `vite.config.js`. Business NAP details live in **one place** — `siteConfig.js`.
- **`public/robots.txt`** (generated) explicitly welcomes the major AI crawlers.
- **`public/llms.txt`** gives LLMs a clean markdown map of the site.
- **`sitemap.xml`** is generated for all 16 routes.
- A visible **FAQ section** (`src/sections/Faq.jsx`) mirrors the FAQ schema.

> **Action required for full local SEO:** open `src/data/siteConfig.js` and fill
> in `phone`, `whatsapp`, `streetAddress` and `postalCode`. Until then the
> click-to-call / WhatsApp CTAs stay hidden and phone/address are omitted from
> the structured data (everything else works).

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Contact form (email delivery)

The `/contact` enquiry form (and the home-page CTA form) submit to
[Web3Forms](https://web3forms.com), which emails every submission to
**contact@no1ads.in** — no backend required.

Setup:

1. Go to [web3forms.com](https://web3forms.com), enter `contact@no1ads.in`,
   and copy the free **Access Key** (a UUID).
2. Local dev: copy `.env.example` to `.env.local` and paste the key into
   `VITE_WEB3FORMS_KEY`.
3. Production (Vercel): add `VITE_WEB3FORMS_KEY` under
   **Project Settings → Environment Variables**, then redeploy.

If the key is missing, the form shows a message asking visitors to email
directly, so it never silently fails. A hidden honeypot field blocks basic
spam bots.

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
