# Number One Ads — Website Audit

> **Audit date:** October 28, 2026  
> **Audited by:** Antigravity (`website-audit` skill — UX & Content Audit)  
> **Pages reviewed:** 17 routes (`/`, `/about`, `/services`, 11 × `/services/:slug`, `/work`, `/contact`, `/404`)  
> **Site URL:** `https://no1ads.in` (local source: `C:\Users\nambu\OneDrive\Desktop\Projects\no1ads`)

---

## Executive Summary

**Number One Ads** has a strong technical foundation (static SSG prerendering via `vite-react-ssg`, WebP + LQIP image pipeline, clean dark-and-orange brand aesthetic, and structured data) and persuasive core positioning around its **25-year in-house 360° legacy in Madurai**.

However, several **critical pre-launch issues** will actively hurt credibility and lead generation if shipped as-is: a misspelled flagship client name (*"Thesi Anandam Silks"* instead of *Theni Anantham Silks*), raw designer filenames and spelling errors exposed in the portfolio lightbox (*"REPUBLIC DAY Cor"*, *"Soical Media Post 9"*, *"Nechlece Poster"*, *"Spark Jwellery"*, *"Broucher"*), anonymized placeholder-style testimonial attributions (*"Managing Director, Automobile Showroom"*), a contact form missing a Phone/WhatsApp field and `.env` Web3Forms key, and incomplete service detail pages (`/services/branding-identity`, `/services/printing`, and `/services/digital-marketing` lack showcase imagery). Fixing the critical items below will immediately elevate the site to agency-grade polish.

---

## Critical Issues (fix before launch)

### 1. `🔴 CRITICAL` `⚠️` Flagship client name misspelled on Client Wall (`/about`)
- **Where:** [`src/data/clients.js`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/data/clients.js#L9) → rendered on `/about` via [`ClientsWall.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/ClientsWall.jsx)
- **Problem:** Line 9 lists `{ slug: 'thesi-anandam-silks', name: 'Thesi Anandam Silks', sector: 'silks' }`. The actual client in Tamil Nadu is **Theni Anantham Silks** (which is spelled correctly in [`src/data/videos.js`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/data/videos.js#L11) as `Theni Anantham Silks`). Since `public/clients/` has no logo files yet, [`BrandLogo.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/components/BrandLogo.jsx) renders the text wordmark **`Thesi Anandam Silks`** in large type on the About page.
- **Fix:**
  - `Thesi Anandam Silks` → **`Theni Anantham Silks`** (and harmonize `Anandam` vs `Anantham` and `Saastha` vs `Sastha` across `clients.js` and `videos.js`).

### 2. `🔴 CRITICAL` `⚠️` Typos & raw designer filenames exposed to users in Portfolio Lightbox & Alt Texts (`/`, `/work`, `/services/creative-design`)
- **Where:** [`src/data/gallery.json`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/data/gallery.json) → rendered visibly inside [`Lightbox.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/components/Lightbox.jsx#L86) (`<span className="lightbox-title">{item.title}</span>`) and as button `aria-label` / image `alt` text in [`Gallery.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Gallery.jsx#L107-L112).
- **Problem:** The gallery titles were auto-generated from raw filenames and contain numerous spelling mistakes, internal revision tags, and generic numbering:
  - `"REPUBLIC DAY Cor"` → **`"Republic Day Campaign Creative"`** (`Cor` is internal shorthand for "Correction")
  - `"Soical Media Post 9"` → **`"Social Media Campaign Creative"`** (typo: *Soical*)
  - `"Nechlece Poster"` & `"Necklece"` → **`"Bridal Necklace Campaign Poster"`** / **`"Gold Necklace Showcase"`** (typos: *Nechlece*, *Necklece*)
  - `"Spark Jwellery"` & `"Jewell Language"` → **`"Spark Jewellery Campaign"`** / **`"The Language of Fine Jewellery"`** (typos: *Jwellery*, *Jewell*)
  - `"Mangalam Festival Broucher 03"` → **`"Mangalam Festival Brochure"`** (typo: *Broucher*)
  - `"SMJ Anniversari Handbill"` → **`"SMJ Anniversary Offer Handbill"`** (typo: *Anniversari*)
  - `"Matress"` → **`"Mattress Retail Campaign"`** (typo: *Matress*)
  - `"Christmas. Handbill"` → **`"Christmas Festive Handbill"`** (stray period)
  - `"Akshaya Thirithi"` vs `"Akshaya Thiruthi Handbill 02"` → inconsistent transliteration (standardize to **`"Akshaya Tritiya"`** or **`"Akshaya Thiruthi"`**)
  - `"Mens T"` / `"KRUTHI 2"` / `"Puthandu Offer A01"` / 13 items identically titled `"Creative Design"` / 20+ items titled `"Social Media Post 12"`, `"Social Media Post 28"`, etc.

### 3. `🔴 CRITICAL` `💡` Contact form lacks a Phone / WhatsApp field & `.env` key check (`/contact`)
- **Where:** [`src/sections/Contact.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Contact.jsx#L171-L175)
- **Problem:**
  1. The form only collects **Name**, **Email**, and **Message**. For a B2B signage, branding, and advertising agency in Madurai/Tamil Nadu, business owners expect a quick phone call or WhatsApp follow-up rather than email threads. Not collecting a phone number on the enquiry form will significantly reduce lead close rates.
  2. Locally, no `.env` or `.env.local` file is present with `VITE_WEB3FORMS_KEY`. If deployed without that environment variable set in Vercel, submitting the form immediately fails with: *"Form is not configured yet. Please email contact@no1ads.in directly."*
- **Fix:**
  - Add a **Phone / WhatsApp Number** field (`type="tel"`, required) and an optional **Service Required** dropdown (`LED Signage`, `ACP Elevation`, `Creative Design`, `Digital Marketing`, `Exhibition Stalls`, `Roadshow & Outdoor`, `Printing`, `Film & Photography`, `Other`) to [`Contact.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Contact.jsx).
  - Verify `VITE_WEB3FORMS_KEY` is configured in production environment variables before launch.

### 4. `🔴 CRITICAL` `💡` Testimonials use generic, unnamed company placeholders (`/`, `/about`)
- **Where:** [`src/sections/Testimonials.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Testimonials.jsx#L5-L25)
- **Problem:** The three testimonials are attributed to:
  - `Senthil Kumar — Managing Director, Automobile Showroom`
  - `Priya Rajan — Marketing Head, Retail Chain`
  - `Arun Vetri — Founder, FMCG Brand`
  For an agency that proudly lists 30 real, recognizable brands on its Client Wall (*The Chennai Silks*, *Thangamayil*, *Tulsi Diamonds*, *Preethi*, *Germanus Hotels*), generic labels like *"Automobile Showroom"*, *"Retail Chain"*, and *"FMCG Brand"* read like AI-generated template placeholders and actively hurt trust.
- **Fix:** Replace with real client company names (or at minimum specific descriptors like *"Leading Multi-Brand Auto Dealership, Madurai"* or real quotes from BNI / Google Reviews with real business names).

### 5. `🔴 CRITICAL` `💡` Contact page hides the physical street address, postal code & opening hours (`/contact`)
- **Where:** [`src/sections/Contact.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Contact.jsx#L139-L142) vs [`src/data/siteConfig.js`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/data/siteConfig.js#L20-L39)
- **Problem:** [`siteConfig.js`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/data/siteConfig.js) has the full office address (`94/4A, Melakkal Main Road, Opp Jayabharath Housing, Kochadai, Madurai 625016`) and opening hours (`Mon–Sat, 9:30 AM – 7:00 PM`), and the Footer uses `site.streetAddress`. Yet on the actual **`/contact` page**, [`Contact.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Contact.jsx#L141) hardcodes only `<span>Madurai, Tamil Nadu, India</span>`! Visitors going to `/contact` to visit the studio cannot see the street address, landmark (*Opp Jayabharath Housing, Kochadai*), pin code, opening hours, or a Google Maps link.
- **Fix:** Render `site.streetAddress`, `site.locality`, `site.postalCode`, opening hours (`Mon–Sat: 9:30 AM – 7:00 PM`), a direct WhatsApp CTA link, and a "Get Directions on Google Maps" link on [`Contact.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Contact.jsx).

---

## Content & Copy Issues

### Global (`siteConfig.js`, `Footer.jsx`, `Contact.jsx`)
- `🟡 IMPORTANT` `⚠️` **Verify Facebook URL spelling (`no1teleadvertisors` vs `no1teleadvertisers`)**
  - In [`src/data/siteConfig.js`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/data/siteConfig.js#L31-L32), [`Footer.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Footer.jsx#L36), and [`Contact.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Contact.jsx#L160):
    - Facebook: `https://www.facebook.com/no1teleadvertisors` (ends in `-ors`)
    - Instagram: `https://www.instagram.com/no1teleadvertisers` (ends in `-ers`)
  - Verify whether the Facebook page handle genuinely uses `-ors`; if not, update all 3 occurrences to `no1teleadvertisers` (and read from `site.social.facebook` / `site.social.instagram` instead of hardcoding in `Footer.jsx` and `Contact.jsx`).

### Homepage (`/`)
- `🟡 IMPORTANT` `⚠️` **Awkward phrasing in Hero Ticker (`Hero.jsx`)**
  - **Original:** `EXHIBITION DESIGN & CONDUCTION` ([`src/sections/Hero.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Hero.jsx#L8))
  - **Correction:** **`EXHIBITION STALLS & EXECUTION`** (or **`EXHIBITION DESIGN & MANAGEMENT`** — *"conduction"* means heat/electrical transfer in standard English).
- `🟡 IMPORTANT` `⚠️` **Milestone year math in Timeline (`Timeline.jsx`)**
  - **Original:** `['2024', '25 Years. 360° capabilities. One agency.']` ([`src/sections/Timeline.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Timeline.jsx#L12))
  - **Correction:** **`['2025', '25 Years. 360° capabilities. One agency.']`** (Founded in `2000` → 25 years is `2025`, and current year is `2026`).

### Film & Photography Page (`/services/film-photography`) & Home YouTube Strip (`/`)
- `🟡 IMPORTANT` `⚠️` **Raw video file export names in `videos.js`**
  - **Where:** [`src/data/videos.js`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/data/videos.js#L11-L26) → rendered visibly as card titles on `/services/film-photography` ([`ServiceDetail.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/pages/ServiceDetail.jsx#L117)).
  - **Original → Corrected:**
    - `Theni Anantham Silks - ARANMANAI OPENING 60sec FINAL` → **`Theni Anantham Silks — Aranmanai Grand Opening TVC (60s)`**
    - `SRI RADHA SILKS 60 SEC DIWALI` → **`Sri Radha Silks — Diwali Commercial (60s)`**
    - `Oviya TMJL Ad` → **`Thangamayil Jewellery (TMJL) — Oviya Brand Film`**
    - `AI Ad Video Promotion` → **`AI-Generated Commercial Reel`**

### Client List (`/about`)
- `🟡 IMPORTANT` `⚠️` **Brand name consistency across data files (`clients.js` vs `videos.js`)**
  - In [`src/data/clients.js`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/data/clients.js):
    - Line 8: `Anandam Silks` vs `Anantham Silks` in `videos.js` & `gallery.json`
    - Line 9: `Thesi Anandam Silks` → **`Theni Anantham Silks`**
    - Line 32: `Saastha` vs `Sastha Sesame Oil` in `videos.js`

---

## UX & Structure Issues

### 1. `🟡 IMPORTANT` `💡` Heavy content duplication between Homepage (`/`) and About Page (`/about`)
- **Problem:** Three full sections — **`Group`** (*The Number One Ads Group*), **`Evolution`** (*How Advertising Has Changed*), and **`Testimonials`** (*Trusted by Tamil Nadu's boldest brands*) — are rendered identically on both `/` ([`Home.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/pages/Home.jsx)) and `/about` ([`About.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/pages/About.jsx)). When a visitor clicks `"Our Story →"` in the Home hero, nearly half of the About page repeats sections they just scrolled past on the Homepage.
- **Recommendation:**
  - Keep **`Evolution`** and **`Values`** + **`Timeline`** + **`BniBadge`** + **`ClientsWall`** as the signature narrative on `/about`.
  - On **Home (`/`)**, replace `Evolution` with the **`ClientsWall`** (or a compact client logo marquee) right after the Hero/Services! Showing household names like *The Chennai Silks*, *Thangamayil*, *Ramraj*, and *Preethi* on the Homepage builds immediate trust without requiring a visit to `/about`.

### 2. `🟡 IMPORTANT` `💡` "Services in the Field" cards on Homepage (`/`) are not clickable
- **Where:** [`src/sections/ServicesShowcase.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/ServicesShowcase.jsx#L31-L48)
- **Problem:** On the Homepage, the 13 photo cards under *"Where Our Work Meets the Real World"* (`LED Signage`, `ACP Elevation`, `Exhibition Stalls`, `Roadshow & Outdoor`, etc.) are static `<article>` elements with no links. On `/services` ([`ServicesDetail.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/ServicesDetail.jsx#L50-L69)), those exact same 13 cards are clickable `<Link>` cards with project count badges (`17+ projects`). Users on the homepage naturally try to click/tap a photo card of *LED Signage* or *ACP Elevation* to learn more.
- **Recommendation:** Wrap the cards in `ServicesShowcase.jsx` with `<Link to={\`/services/${PAGE_FOR[svc.slug]}\`}>` (just like `ServicesDetail.jsx`), or cap the Homepage showcase to the top 6 flagship field services with a `"View All 13 Production Capabilities →"` link.

### 3. `🟡 IMPORTANT` `💡` 3 of 11 Service Detail pages lack visual proof (`/services/:slug`)
- **Where:** [`src/data/servicePages.js`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/data/servicePages.js) & [`src/pages/ServiceDetail.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/pages/ServiceDetail.jsx)
- **Problem:**
  1. **`/services/branding-identity`** has no `image` and no `gallery` — it renders only 2 short paragraphs and 6 bullets before jumping straight to "Explore other services".
  2. **`/services/printing`** has no `image` and no `gallery` — despite `public/gallery/` containing 15+ print handbills, paper ads, and festival brochures!
  3. **`/services/digital-marketing`** has no `image` and no `gallery` — despite `public/gallery/` having 30+ social media campaign creatives. Furthermore, a comment in `servicePages.js` line 6 says `// (digital-marketing renders Partners + BNI)`, but [`ServiceDetail.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/pages/ServiceDetail.jsx#L147-L151) only renders `<Partners />` and omits `<BniBadge />`.
  4. **`/services/film-photography`** has `productShoots: []` (empty), so no photography work is shown alongside the YouTube TVCs.
- **Recommendation:** Attach curated `gallery` arrays from `/gallery/*-thumb.webp` to `branding-identity`, `printing`, and `digital-marketing` in [`src/data/servicePages.js`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/data/servicePages.js) (just like `creative-design` already does on lines 28–38!).

### 4. `🟢 NICE TO HAVE` `💡` 13 Capability cards on `/services` map to 6 detail URLs without context
- **Where:** [`src/sections/ServicesDetail.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/ServicesDetail.jsx#L9-L23)
- **Problem:** Clicking *"Pylon Branding"* or *"Backlit Boards"* takes the user to `/services/signage-boards`; clicking *"Auto Back Branding"* or *"Lamp Post Branding"* takes them to `/services/roadshow-outdoor`; clicking *"Standees"* takes them to `/services/in-shop-branding`. Because the destination H1 says e.g. `Signage Boards`, the user may wonder if they clicked the wrong card.
- **Recommendation:** Explicitly list *"Pylon & totem signage"* under `signage-boards` deliverables and *"Auto-back & lamp-post branding"* under `roadshow-outdoor` deliverables so the landing page immediately confirms the capability they clicked.

---

## Conversion Issues

### 1. `🟡 IMPORTANT` `💡` Homepage Hero has no direct conversion CTA (`/`)
- **Where:** [`src/sections/Hero.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Hero.jsx#L73-L76)
- **Problem:** The two Hero CTAs are `"Explore Our Work"` (`/work`) and `"Our Story →"` (`/about`). Neither is a lead-generation action. A business owner landing on `no1ads.in` looking for an immediate quote on an LED signboard, showroom ACP elevation, or ad campaign has no `"Start a Project"` or `"Get a Free Quote"` button in the Hero.
- **Recommendation:** Make the primary Hero CTA **`Start a Project →`** (`/contact`) and the secondary CTA **`Explore Our Work`** (`/work`), or offer a 2-button pair: **`Get a Free Quote →`** (`/contact`) + **`Explore Our Work`** (`/work`).

### 2. `🟡 IMPORTANT` `💡` Client Social Proof (`ClientsWall`) is buried on `/about` instead of `/`
- **Problem:** In regional B2B agencies, **who you have worked for** is the #1 conversion driver. Currently, the 30 client names (*The Chennai Silks*, *Thangamayil*, *Ramraj*, *Preethi*, *Tulsi Diamonds*, *KRT*, *Germanus Hotels*) only appear on `/about` (and an unused `src/sections/Clients.jsx` file sits orphaned in the repo).
- **Recommendation:** Add a client trust strip or marquee on the Homepage right below the Hero or before the Testimonials.

### 3. `🟢 NICE TO HAVE` `💡` Visible Hero Headline doesn't state core deliverables
- **Where:** [`src/sections/Hero.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Hero.jsx#L47-L70)
- **Problem:** Visually, the Hero says:
  - Eyebrow: `EST. 2000 · MADURAI, INDIA`
  - Headline: `360° ADVERTISING AGENCY`
  - Subheadline: `25 years of precision, creativity & legacy`
  While poetic, a first-time visitor scanning in 5 seconds doesn't immediately see *Design · LED & ACP Signage · Exhibition Stalls · TVCs · Digital* until they read the moving bottom ticker.
- **Recommendation:** Strengthen the subheadline to blend legacy + concrete capabilities:
  - *"25 years of design, LED & ACP signage, brand films, and on-ground campaigns across Tamil Nadu."*

---

## Content Improvements by Page

| Page | Section | Current Copy / State | Recommended Improvement |
|---|---|---|---|
| **Home (`/`)** | Hero Subheadline & CTAs | *"25 years of precision, creativity & legacy"* + CTAs: `Explore Our Work` / `Our Story →` | Subheadline: *"25 years of creative design, LED & ACP signage, TVCs & on-ground branding across Tamil Nadu."* CTAs: **`Start a Project →`** (`/contact`) + **`Explore Our Work`** (`/work`) |
| **Home (`/`)** | Hero Ticker | `EXHIBITION DESIGN & CONDUCTION` | **`EXHIBITION STALLS & EXECUTION`** |
| **Home (`/`)** | Social Proof | No client brand names shown on `/` | Render client marquee (`The Chennai Silks`, `Thangamayil`, `Ramraj`, `Preethi`, `Tulsi Diamonds`, etc.) on `/` |
| **About (`/about`)** | Timeline | `2024 — 25 Years. 360° capabilities. One agency.` | **`2025 — 25 Years. 360° capabilities. One agency.`** |
| **About (`/about`)** | Clients Wall | `Thesi Anandam Silks` | **`Theni Anantham Silks`** |
| **Services (`/services/:slug`)** | `branding-identity`, `printing`, `digital-marketing` | Text-only pages with no visual showcase | Add 6–9 curated portfolio images from `/gallery/*-thumb.webp` to each service in `src/data/servicePages.js` |
| **Work (`/work`)** | Portfolio Lightbox | Raw filenames & typos (`REPUBLIC DAY Cor`, `Soical Media Post 9`, `Nechlece`, `Broucher`, `Anniversari`, `Matress`) | Clean all 69 `title` strings in `src/data/gallery.json` to human-readable campaign titles |
| **Contact (`/contact`)** | Info & Form | Shows only `Madurai, Tamil Nadu, India`; form has only `Name`, `Email`, `Message` | Show full street address (`94/4A, Melakkal Main Road, Opp Jayabharath Housing, Kochadai, Madurai 625016`), opening hours (`Mon–Sat 9:30 AM – 7:00 PM`), WhatsApp link, and add **Phone / WhatsApp** + **Service** fields to the form |

---

## Technical Issues

### 1. `🔴 CRITICAL` 30 HTTP `404 Not Found` console errors on `/about` (`ClientsWall.jsx`)
- **Where:** [`src/sections/ClientsWall.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/ClientsWall.jsx#L34) & [`src/components/BrandLogo.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/components/BrandLogo.jsx#L22-L31)
- **Problem:** `ClientsWall.jsx` passes `src={\`/clients/${c.slug}.webp\`}` for all 30 clients. Because `public/clients/` currently contains **0 image files** (only `README.md`), loading `/about` fires **30 failed HTTP requests (`404 Not Found`)** in the browser console before `BrandLogo`'s `onError` handler falls back to text!
- **Fix:** Add an optional `hasLogo: true` flag in `src/data/clients.js` (defaulting to `false` until a logo file exists) so `ClientsWall.jsx` only passes `src` when the file actually exists, eliminating all 30 console 404 errors immediately.

### 2. `🟡 IMPORTANT` `FAQPage` JSON-LD schema injected on all 16 routes instead of only FAQ routes (`vite.config.js`)
- **Where:** [`vite.config.js`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/vite.config.js#L92-L114)
- **Problem:** `transformIndexHtml` injects the `FAQPage` schema into **every prerendered HTML file** (`/about`, `/work`, `/services/*`), even though the `<Faq />` section is only rendered on `/` and `/contact`. Google's structured data guidelines require visible FAQ content on any page declaring `FAQPage` schema.
- **Fix:** Inject `FAQPage` JSON-LD via `<Head>` inside [`src/sections/Faq.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Faq.jsx) so it only appears on pages that actually render the `<Faq />` component (`/` and `/contact`), while keeping `AdvertisingAgency` + `WebSite` site-wide in `vite.config.js`.

### 3. `🟡 IMPORTANT` Service Detail pages don't pass their service photo to `<Seo image={...} />` (`ServiceDetail.jsx`)
- **Where:** [`src/pages/ServiceDetail.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/pages/ServiceDetail.jsx#L34-L38)
- **Problem:** `<Seo />` supports an `image` prop (`src/components/Seo.jsx` line 12), but `ServiceDetail.jsx` doesn't pass `service.image`, so sharing `/services/led-signage` or `/services/acp-elevation` on WhatsApp/LinkedIn shows the generic logo instead of the actual service photo.
- **Fix:** Pass `image={service.image ? \`https://no1ads.in${service.image}\` : undefined}` to `<Seo />` in `ServiceDetail.jsx`.

### 4. `🟢 NICE TO HAVE` Missing YouTube icon in Footer & Contact social links (`Footer.jsx`, `Contact.jsx`)
- **Where:** [`src/sections/Footer.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Footer.jsx#L35-L42) & [`src/sections/Contact.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Contact.jsx#L159-L166)
- **Problem:** `site.social.youtube` (`https://www.youtube.com/@No1ads`) is configured in `siteConfig.js`, and YouTube TVCs are a major showcase of the agency, but the social icon rows in the Footer and Contact section only show Facebook and Instagram.
- **Fix:** Add a `YouTubeIcon` link to `site.social.youtube` alongside Facebook and Instagram, and reference `site.social.*` from `siteConfig.js` instead of hardcoding URLs.

### 5. `🟢 NICE TO HAVE` Orphaned component (`src/sections/Clients.jsx`)
- **Where:** [`src/sections/Clients.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Clients.jsx)
- **Problem:** `src/sections/Clients.jsx` exists in the codebase and is mentioned in `README.md`, but is not imported by any page. Either mount it on `Home.jsx` to solve the homepage social proof gap, or remove it if superseded by `ClientsWall.jsx`.

---

## Priority Action Plan

| Priority | Action | Type | Page / File |
|---|---|---|---|
| `🔴 CRITICAL` | Fix misspelled flagship client name `"Thesi Anandam Silks"` → `"Theni Anantham Silks"` and harmonize `Anantham` / `Sastha` | `⚠️` Copy / Credibility | `/about` ([`src/data/clients.js`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/data/clients.js)) |
| `🔴 CRITICAL` | Clean all typos & raw designer filenames (`REPUBLIC DAY Cor`, `Soical Media Post 9`, `Nechlece`, `Spark Jwellery`, `Broucher`, `Anniversari`, `Matress`) in portfolio items | `⚠️` Copy / QA | `/`, `/work` ([`src/data/gallery.json`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/data/gallery.json)) |
| `🔴 CRITICAL` | Add **Phone / WhatsApp** field (`type="tel"`) and **Service** selector to Contact Form; ensure `VITE_WEB3FORMS_KEY` is set | `💡` Conversion | `/contact` ([`src/sections/Contact.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Contact.jsx)) |
| `🔴 CRITICAL` | Render full street address (`94/4A, Melakkal Main Road, Kochadai`), postal code (`625016`), opening hours, and WhatsApp link on `/contact` | `💡` UX / Local SEO | `/contact` ([`src/sections/Contact.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Contact.jsx)) |
| `🔴 CRITICAL` | Stop requesting 30 non-existent `/clients/*.webp` images on `/about` (eliminates 30 console `404` errors) | Technical QA | `/about` ([`src/sections/ClientsWall.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/ClientsWall.jsx)) |
| `🔴 CRITICAL` | Replace generic testimonial roles (`"Automobile Showroom"`, `"Retail Chain"`, `"FMCG Brand"`) with real client businesses or specific attributions | `💡` Conversion / Trust | `/`, `/about` ([`src/sections/Testimonials.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Testimonials.jsx)) |
| `🟡 IMPORTANT` | Add portfolio showcase galleries to `/services/branding-identity`, `/services/printing`, and `/services/digital-marketing` | `💡` UX / Content | `/services/:slug` ([`src/data/servicePages.js`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/data/servicePages.js)) |
| `🟡 IMPORTANT` | Clean raw YouTube video titles (`60sec FINAL`, all-caps) in `videos.js` | `⚠️` Copy | `/`, `/services/film-photography` ([`src/data/videos.js`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/data/videos.js)) |
| `🟡 IMPORTANT` | Make Homepage `ServicesShowcase` cards clickable links to their `/services/:slug` pages & add a direct conversion CTA (`Start a Project →`) in the Hero | `💡` UX / Conversion | `/` ([`Hero.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Hero.jsx), [`ServicesShowcase.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/ServicesShowcase.jsx)) |
| `🟡 IMPORTANT` | Add Client Social Proof (`Clients.jsx` / `ClientsWall.jsx`) to Homepage (`/`) and reduce section duplication between `/` and `/about` | `💡` UX / Conversion | `/`, `/about` ([`Home.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/pages/Home.jsx), [`About.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/pages/About.jsx)) |
| `🟡 IMPORTANT` | Scope `FAQPage` JSON-LD schema to only pages that render `<Faq />` (`/` and `/contact`) and pass `service.image` to `<Seo />` on `/services/:slug` | Technical SEO | [`vite.config.js`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/vite.config.js), [`Faq.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Faq.jsx), [`ServiceDetail.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/pages/ServiceDetail.jsx) |
| `🟢 NICE TO HAVE` | Fix `EXHIBITION DESIGN & CONDUCTION` ticker copy, update Timeline `2024` → `2025`, and add YouTube icon to Footer/Contact social links | `⚠️` Polish | [`Hero.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Hero.jsx), [`Timeline.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Timeline.jsx), [`Footer.jsx`](file:///C:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Footer.jsx) |
