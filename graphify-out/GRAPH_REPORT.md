# Graph Report - .  (2026-06-22)

## Corpus Check
- Large corpus: 237 files � ~803,552 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 239 nodes · 473 edges · 19 communities (16 shown, 3 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.81)
- Token cost: 46,644 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Content Sections & Reveal Animations|Content Sections & Reveal Animations]]
- [[_COMMUNITY_Site Chrome, Contact & Analytics|Site Chrome, Contact & Analytics]]
- [[_COMMUNITY_Pages & Section Wrappers|Pages & Section Wrappers]]
- [[_COMMUNITY_Routing & Data Modules|Routing & Data Modules]]
- [[_COMMUNITY_Build Dependencies (package.json)|Build Dependencies (package.json)]]
- [[_COMMUNITY_Image Optimization Pipeline|Image Optimization Pipeline]]
- [[_COMMUNITY_Brand Logos & llms.txt Content|Brand Logos & llms.txt Content]]
- [[_COMMUNITY_FAQ & JSON-LD Injection|FAQ & JSON-LD Injection]]
- [[_COMMUNITY_README Prerender  SSG Architecture|README: Prerender / SSG Architecture]]
- [[_COMMUNITY_GEOSEO Structured Data Flow|GEO/SEO Structured Data Flow]]
- [[_COMMUNITY_Hero Section|Hero Section]]
- [[_COMMUNITY_README Image Manifests|README: Image Manifests]]
- [[_COMMUNITY_Vercel Routing Config|Vercel Routing Config]]
- [[_COMMUNITY_Veil of the Elements (Game Script PDF)|Veil of the Elements (Game Script PDF)]]
- [[_COMMUNITY_README llms.txt Reference|README: llms.txt Reference]]
- [[_COMMUNITY_README robots.txt|README: robots.txt]]
- [[_COMMUNITY_README sitemap.xml|README: sitemap.xml]]

## God Nodes (most connected - your core abstractions)
1. `ShinyText()` - 21 edges
2. `Reveal()` - 20 edges
3. `SplitText()` - 18 edges
4. `processGallery()` - 8 edges
5. `Seo()` - 8 edges
6. `processServices()` - 7 edges
7. `Number One Ads advertising agency` - 7 edges
8. `CtaBand()` - 6 edges
9. `PageHero()` - 6 edges
10. `whatsappLink()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Geo targeting meta (Madurai, IN-TN)` --conceptually_related_to--> `Number One Ads advertising agency`  [INFERRED]
  index.html → public/llms.txt
- `Number One Ads advertising agency` --conceptually_related_to--> `Number One Ads (project)`  [INFERRED]
  public/llms.txt → README.md
- `index.html app shell` --references--> `src/main.jsx mount entry`  [EXTRACTED]
  index.html → README.md
- `src/components/Seo.jsx per-page meta` --references--> `index.html app shell`  [EXTRACTED]
  README.md → index.html
- `__JSONLD__ injection placeholder` --references--> `vite.config.js transformIndexHtml JSON-LD injection`  [EXTRACTED]
  index.html → README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **GEO/SEO structured-data injection flow** — readme_site_config, readme_faqs_data, readme_vite_config_transform, readme_jsonld_structured_data, index_jsonld_placeholder [EXTRACTED 0.85]
- **Prerender + hydrate pipeline** — readme_prerender_ssg, readme_app_jsx_routes, readme_main_jsx, readme_seo_component, readme_vercel_json [EXTRACTED 0.85]
- **Slug-based logo with wordmark fallback convention** — clients_data_js, group_data_js, partners_data_js, clients_wordmark_fallback [INFERRED 0.75]

## Communities (19 total, 3 thin omitted)

### Community 0 - "Content Sections & Reveal Animations"
Cohesion: 0.13
Nodes (20): BrandLogo(), LazyImage(), Reveal(), ShinyText(), SplitText(), clients, group, ClientsWall() (+12 more)

### Community 1 - "Site Chrome, Contact & Analytics"
Cohesion: 0.11
Nodes (16): Analytics(), CursorDot(), FloatingContact(), ScrollToTop(), displayPhone(), site, whatsappLink(), track() (+8 more)

### Community 2 - "Pages & Section Wrappers"
Cohesion: 0.11
Nodes (15): CtaBand(), PageHero(), Seo(), QUICK_STATS, BniBadge(), Evolution(), Gallery(), Group() (+7 more)

### Community 3 - "Routing & Data Modules"
Cohesion: 0.11
Nodes (15): Layout(), partners, getServiceBySlug(), servicePages, FEATURED_IDS, featuredVideos, thumbUrl(), videos (+7 more)

### Community 4 - "Build Dependencies (package.json)"
Cohesion: 0.09
Nodes (22): dependencies, gsap, @gsap/react, motion, react, react-dom, react-router-dom, devDependencies (+14 more)

### Community 5 - "Image Optimization Pipeline"
Cohesion: 0.18
Nodes (19): CREATIVES, DATA_DIR, __dirname, emit(), GALLERY_SRC, main(), makeLqip(), OUT_GALLERY (+11 more)

### Community 6 - "Brand Logos & llms.txt Content"
Cohesion: 0.11
Nodes (18): src/data/clients.js slugs, Client logos convention (WebP by slug), Text wordmark fallback for missing logo, src/data/group.js slugs, Group company logos convention, Geo targeting meta (Madurai, IN-TN), Open Graph / Twitter site-wide meta, BNI Chanakyaas Madurai (network) (+10 more)

### Community 7 - "FAQ & JSON-LD Injection"
Cohesion: 0.32
Nodes (3): faqs, Faq(), AI_AGENTS

### Community 8 - "README: Prerender / SSG Architecture"
Cohesion: 0.29
Nodes (7): index.html app shell, src/App.jsx route definitions, GEO/SEO for AI answer engines, src/main.jsx mount entry, Build-time prerender via vite-react-ssg, src/components/Seo.jsx per-page meta, vercel.json SPA fallback

### Community 9 - "GEO/SEO Structured Data Flow"
Cohesion: 0.33
Nodes (6): __JSONLD__ injection placeholder, src/sections/Faq.jsx, src/data/faqs.js, JSON-LD structured data (LocalBusiness + WebSite + FAQPage), src/data/siteConfig.js (single source of NAP), vite.config.js transformIndexHtml JSON-LD injection

### Community 10 - "Hero Section"
Cohesion: 0.50
Nodes (3): TrueFocus(), Hero(), TICKER_ITEMS

### Community 11 - "README: Image Manifests"
Cohesion: 0.50
Nodes (4): src/data/gallery.json manifest, Build-time image optimization pipeline, scripts/optimize-images.mjs, src/data/services.json manifest

### Community 12 - "Vercel Routing Config"
Cohesion: 0.50
Nodes (3): cleanUrls, rewrites, trailingSlash

### Community 13 - "Veil of the Elements (Game Script PDF)"
Cohesion: 1.00
Nodes (3): The Elements (game theme), Veil of the Elements: The Missing Spirit (Game Script), The Missing Spirit (central plot subject)

## Knowledge Gaps
- **71 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+66 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `ShinyText()` connect `Content Sections & Reveal Animations` to `Site Chrome, Contact & Analytics`, `Pages & Section Wrappers`, `Routing & Data Modules`, `FAQ & JSON-LD Injection`, `Hero Section`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Why does `Reveal()` connect `Content Sections & Reveal Animations` to `Site Chrome, Contact & Analytics`, `Pages & Section Wrappers`, `Routing & Data Modules`, `FAQ & JSON-LD Injection`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Why does `SplitText()` connect `Content Sections & Reveal Animations` to `Routing & Data Modules`, `Site Chrome, Contact & Analytics`, `Pages & Section Wrappers`, `Hero Section`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _72 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Content Sections & Reveal Animations` be split into smaller, more focused modules?**
  _Cohesion score 0.12513842746400886 - nodes in this community are weakly interconnected._
- **Should `Site Chrome, Contact & Analytics` be split into smaller, more focused modules?**
  _Cohesion score 0.11174242424242424 - nodes in this community are weakly interconnected._
- **Should `Pages & Section Wrappers` be split into smaller, more focused modules?**
  _Cohesion score 0.11397849462365592 - nodes in this community are weakly interconnected._