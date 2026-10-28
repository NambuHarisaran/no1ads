# Number One Ads

Multi-page marketing website for **Number One Ads** (`No.1 Tele Advertisers`) — a 25-year 360° advertising, branding, and signage agency in Madurai, Tamil Nadu. Built with React + Vite + React Router (`vite-react-ssg` static prerendering) and a build-time WebP image pipeline.

---

## 🎨 Redesign & Agent Handoff Guide (Start Here)

If you are an AI agent or developer tasked with **redesigning this website**, all website copy, business data, and optimized images are already stored and decoupled from the visual design. **You do not need to invent or scrape content.**

### 1. Read the Complete Website Content & Image Specification
- **[`WEBSITE_CONTENT.md`](./WEBSITE_CONTENT.md)** — Complete, design-free website description containing **every page, section, heading, paragraph, CTA, FAQ, client list, YouTube video, and linked image asset** in the repository.
- **[`src/data/websiteContent.js`](./src/data/websiteContent.js)** — Centralized JavaScript content module exporting all page copy, section structures, and image paths for direct import into redesigned components.
- **[`public/llms.txt`](./public/llms.txt)** — High-level business summary and route map.

### 2. Stored Content Data Files (`src/data/`)
All structured data is stored in [`src/data/`](./src/data/) and re-exported by [`src/data/websiteContent.js`](./src/data/websiteContent.js):
- [`src/data/siteConfig.js`](./src/data/siteConfig.js) — Single source of truth for Business NAP (Name, Address, Phone, WhatsApp, Email, Geo coordinates, Opening hours, Social URLs).
- [`src/data/servicePages.js`](./src/data/servicePages.js) — All 11 individual `/services/:slug` page definitions (titles, taglines, intro paragraphs, deliverable checklists, showcase images).
- [`src/data/services.json`](./src/data/services.json) — 13 on-ground/signage production capabilities with blurbs, project counts, image dimensions, LQIP blur placeholders, and `/services/*.webp` image paths.
- [`src/data/gallery.json`](./src/data/gallery.json) — 69 portfolio items with titles, dimensions, LQIP placeholders, thumbnail paths (`/gallery/*-thumb.webp`), and full-res paths (`/gallery/*-full.webp`).
- [`src/data/clients.js`](./src/data/clients.js) — 30 client brands categorized by sector (`silks`, `jewellery`, `other`).
- [`src/data/faqs.js`](./src/data/faqs.js) — 6 frequently asked questions and answers (powers both the FAQ UI and `FAQPage` JSON-LD).
- [`src/data/group.js`](./src/data/group.js) — The 3 sister companies in the Number One Ads Group (`Number One Ads`, `Triple A Signage`, `Infobus Advertising`).
- [`src/data/partners.js`](./src/data/partners.js) — Digital advertising platform partners (`Google`, `Meta`, `Spotify`, `JioHotstar`).
- [`src/data/videos.js`](./src/data/videos.js) — 15 YouTube TVCs & ad films (`@No1ads`) with helper functions for watch links and thumbnails.

### 3. Stored Image Assets (`public/`)
All web-ready images live under [`public/`](./public/) and are referenced using root-relative URLs (e.g. `/assets/logo.png`):
- **[`public/assets/`](./public/assets/)** — Core brand assets:
  - [`public/assets/logo.png`](./public/assets/logo.png) (`/assets/logo.png`) — Primary Number One Ads logo
  - [`public/assets/25.png`](./public/assets/25.png) (`/assets/25.png`) — 25 Years of Legacy badge ([`25.base.png`](./public/assets/25.base.png) alt)
  - [`public/assets/bni.webp`](./public/assets/bni.webp) (`/assets/bni.webp`) — BNI member badge logo
  - [`public/Clients2-500x284.jpg`](./public/Clients2-500x284.jpg) (`/Clients2-500x284.jpg`) — Composite client logos reference
- **[`public/services/`](./public/services/)** — 13 service capability photos (`design.webp`, `led-signage.webp`, `signage-boards.webp`, `acp-elevation.webp`, `exhibition-stall.webp`, `roadshow.webp`, `in-shop.webp`, `backlight-board.webp`, `pylon-branding.webp`, `lamp-post-branding.webp`, `standee.webp`, `signage.webp`, `auto-back-branding.webp`).
- **[`public/gallery/`](./public/gallery/)** — 69 portfolio creatives × 2 variants (`*-thumb.webp` and `*-full.webp` = 138 WebP files). Full manifest in [`WEBSITE_CONTENT.md`](./WEBSITE_CONTENT.md#section-52-filterable-portfolio-gallery-69-portfolio-pieces) and [`src/data/gallery.json`](./src/data/gallery.json).
- **[`public/group/`](./public/group/)** — Sister company logos: [`triple-a-signage.webp`](./public/group/triple-a-signage.webp) and [`infobus-advertising.webp`](./public/group/infobus-advertising.webp) (see [`public/group/README.md`](./public/group/README.md)).
- **[`public/partners/`](./public/partners/)** — Partner platform logos: [`google.webp`](./public/partners/google.webp), [`meta.webp`](./public/partners/meta.webp), [`spotify.webp`](./public/partners/spotify.webp), [`jiohotstar.webp`](./public/partners/jiohotstar.webp) (see [`public/partners/README.md`](./public/partners/README.md)).
- **[`public/clients/`](./public/clients/)** — Optional per-client `<slug>.webp` logos with automatic text-wordmark fallback in [`src/components/BrandLogo.jsx`](./src/components/BrandLogo.jsx) (see [`public/clients/README.md`](./public/clients/README.md)).

### 4. Where to Start Redesigning the Scaffolded Layout
1. **Stylesheet Reset / New Design System:** Start in [`src/index.css`](./src/index.css) (and optional text-effect styles [`src/components/ShinyText.css`](./src/components/ShinyText.css), [`src/components/TrueFocus.css`](./src/components/TrueFocus.css)).
2. **Global Layout Shell:** Update [`src/components/Layout.jsx`](./src/components/Layout.jsx), [`src/sections/Nav.jsx`](./src/sections/Nav.jsx), [`src/sections/Footer.jsx`](./src/sections/Footer.jsx), and [`src/components/FloatingContact.jsx`](./src/components/FloatingContact.jsx).
3. **Page Scaffolds (`src/pages/`):**
   - [`src/pages/Home.jsx`](./src/pages/Home.jsx) — `/`
   - [`src/pages/About.jsx`](./src/pages/About.jsx) — `/about`
   - [`src/pages/ServicesPage.jsx`](./src/pages/ServicesPage.jsx) — `/services`
   - [`src/pages/ServiceDetail.jsx`](./src/pages/ServiceDetail.jsx) — `/services/:slug` (11 static service routes)
   - [`src/pages/Work.jsx`](./src/pages/Work.jsx) — `/work`
   - [`src/pages/ContactPage.jsx`](./src/pages/ContactPage.jsx) — `/contact`
   - [`src/pages/NotFound.jsx`](./src/pages/NotFound.jsx) — `*` (404)
4. **Section Components (`src/sections/`):** Redesign the markup and layout in [`Hero.jsx`](./src/sections/Hero.jsx), [`Services.jsx`](./src/sections/Services.jsx), [`ServicesShowcase.jsx`](./src/sections/ServicesShowcase.jsx), [`ServicesDetail.jsx`](./src/sections/ServicesDetail.jsx), [`Group.jsx`](./src/sections/Group.jsx), [`Evolution.jsx`](./src/sections/Evolution.jsx), [`Gallery.jsx`](./src/sections/Gallery.jsx), [`YouTubeAds.jsx`](./src/sections/YouTubeAds.jsx), [`Testimonials.jsx`](./src/sections/Testimonials.jsx), [`LegacyBanner.jsx`](./src/sections/LegacyBanner.jsx), [`Faq.jsx`](./src/sections/Faq.jsx), [`Timeline.jsx`](./src/sections/Timeline.jsx), [`Values.jsx`](./src/sections/Values.jsx), [`BniBadge.jsx`](./src/sections/BniBadge.jsx), [`Clients.jsx`](./src/sections/Clients.jsx), [`ClientsWall.jsx`](./src/sections/ClientsWall.jsx), [`Partners.jsx`](./src/sections/Partners.jsx), [`Process.jsx`](./src/sections/Process.jsx), and [`Contact.jsx`](./src/sections/Contact.jsx).
5. **Preserve Core Plumbing:** Keep the route definitions in [`src/App.jsx`](./src/App.jsx), `<Seo />` head tags in [`src/components/Seo.jsx`](./src/components/Seo.jsx), JSON-LD generation in [`vite.config.js`](./vite.config.js), and Web3Forms submission logic in [`src/sections/Contact.jsx`](./src/sections/Contact.jsx).

---

## Pages Overview

- `/` — Home (hero, core services, field showcase, group companies, evolution, featured work, YouTube TVCs, testimonials, legacy banner, FAQ, CTA)
- `/about` — Our story, quick stats, 25-year timeline, core values, group companies, BNI badge, evolution, client wall, testimonials, CTA
- `/services` — 6 creative disciplines, 13 signage/on-ground capabilities grid, 4-step process, CTA
- `/services/:slug` — 11 dedicated service pages with deliverables, imagery, and specialized showcases (portfolio grid, digital partners, or YouTube film catalogue)
- `/work` — Filterable 69-piece portfolio gallery + lightbox
- `/contact` — Contact details, Web3Forms enquiry form, and FAQ

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
