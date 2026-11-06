# 100-Device Live DOM Responsiveness Audit — Number One Ads

> **Methodology**: Live Chrome DevTools Protocol (CDP) DOM geometry inspection (`dom_audit.mjs`) + scroll-stop visual verification (`shoot.mjs`) executed in parallel by **5 DOM Responsiveness Testing Agents** across **100 real-world device formats** (`280×653` through `3840×2160`) and **6 primary routes** (`/`, `/about`, `/services`, `/services/led-signage`, `/work`, `/contact`) = **600 live DOM route×device evaluations**.

---

## 1. Executive Summary

| Batch | Agent | Device IDs | Viewport Range | Form Factors | Checks | Console Errors | Key Issues Found |
|---|---|---|---|---|---:|---:|---|
| **Batch 1** | Auditor B1 | `#1–#20` | `280×653` – `384×854` | Foldables, ultra-small & compact phones | 120 | 0 | `/contact` & `/about` right-edge overflow at `280px`; Act VI `"Broadcast"` overflow; cramped 2-col grids (`<115px`); excessive `h2` wrapping; `<36px` tap targets; `.floating-contact` footer overlap |
| **Batch 2** | Auditor B2 | `#21–#40` | `390×844` – `480×854` | Modern standard & Pro Max smartphones | 120 | 0 | `.work-filter-btn` horizontal overflow & clipping; Act I `h2#noise-title` 7–9 line wrapping; `<36px` tap targets; `.floating-contact` overlapping footer copy; `/about` nested `<Reveal>` + `<SplitText>` conflict |
| **Batch 3** | Auditor B3 | `#41–#60` | `540×720` – `834×1194` | Landscape phones, unfolded foldables, iPad Mini/Air/Pro 11" | 120 | 0 | `.floating-contact` consumes up to `37.5%` of landscape height; short landscape hero clips Prologue & inner-page heroes; `.work-filter-btn` overflow at `540–568px`; `<36px` tap targets |
| **Batch 4** | Auditor B4 | `#61–#80` | `844×390` – `1440×740` | Large landscape phones, tablets, netbooks & short laptops (`1024×600`, `1280×720`, `1366×768`) | 120 | 0 | Pinned `.st-prologue` & `.st-year__pin` vertical overflow on short laptops; `.st-year__head { margin: 0 }` left-alignment bug; `.st-storynav` `218px` hitbox overlap; `.st-brief__tick-label` truncation (`"switc..."`); landscape navbar + floating pill height (`58%` of `vh`) |
| **Batch 5** | Auditor B5 | `#81–#100` | `1440×900` – `3840×2160` | MacBooks, Windows 125% (`1536×754`/`864`), 1080p, QHD, 4K & Ultrawides (`3440×1440`) | 120 | 0 | `.st-year__head` stranded at `left: 0` on ultrawides (`1080px` off-center from cards); `.st-prologue` vertical overflow at `1536×754`; `.st-storynav` hitbox overlap on `1440–1600px`; `.floating-contact` covering Act III `"DEC"` label |

---

## 2. Prioritized Root-Cause Issues & Exact DOM Measurements

### Issue R1 [CRITICAL — Desktop & Ultrawide `#70–#100`, `1024px–3840px`]: Act III Header (`header.st-year__head.st-container`) Left-Aligned (`left: 0`) Instead of Centered
- **Route & Selector**: `/` — `html.has-motion .st-year__head` ([src/styles/story.css](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/styles/story.css#L1378))
- **DOM Measurement**:
  - On `#98` (`3440×1440` Ultrawide), all other `.st-container` sections have `boundingClientRect.left = 1080px`, whereas `header.st-year__head.st-container` has `left: 0px, right: 1280px` (`marginLeft: 0px`), stranding the heading `1080px` to the left of the festival cards (`left: 1120px`).
  - On `#79` (`1366×768`) & `#85` (`1536×754`), `.st-year__head` starts at `x = 40px` and physically collides with `.st-storynav` (`x = 24px..50px`).
- **Root Cause**: `html.has-motion .st-year__head { margin: 0; }` overwrites `margin: 0 auto` from `.st-container`.
- **Fix**: Change `html.has-motion .st-year__head { margin: 0; }` to `html.has-motion .st-year__head { margin-bottom: 0; }`.

---

### Issue R2 [CRITICAL — Short Desktops & Laptops `#70, #71, #73, #74, #77–#80, #85`, `vh <= 820px`]: Pinned Desktop Stages (`.st-prologue`, `.st-brief__stage`, `.st-year__pin`) Overflow Viewport Height Vertically
- **Route & Selectors**: `/` — `.st-prologue`, `.st-brief__stage`, `.st-year__pin` ([src/styles/story.css](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/styles/story.css#L224-L365))
- **DOM Measurements**:
  - `#70 (1024×600)`: `.st-prologue` `neededH: 742px > vh: 600px` (`+142px` overflow, clipping `.st-prologue__ctas` and `.st-prologue__cue`); `.st-year__pin` `neededH: 662px > vh: 600px` (flex centering pushes `.st-year__head` up under `.nav` at `top: 63px`); `.st-brief__stage` `neededH: 602px > vh: 600px`.
  - `#77 (1280×720)`: `.st-prologue` `neededH: 803px > vh: 720px` (`+83px` overflow).
  - `#79 (1366×768)`: `.st-prologue` `neededH: 823px > vh: 768px` (`+55px` overflow).
  - `#80 (1440×740)` & `#85 (1536×754)`: `.st-prologue` `neededH: 840px–860px > vh: 740px–754px` (`+100px` overflow; `.st-prologue__ctas` bottom `762px > 754px` clipped).
- **Fix**:
  - Scale `.st-prologue__title` and `.st-prologue__switch` with `min(vw, svh)` so typography adapts to short heights as well as narrow widths.
  - Add `@media (min-width: 1024px) and (max-height: 860px)` and `@media (min-width: 1024px) and (max-height: 680px)` rules in `src/styles/story.css` to tighten padding, margins, badge diameter (`min(100%, 48svh)`), Act II copy sizing, and Act III card width (`calc(clamp(180px, 32svh, 420px) * 0.8)`).

---

### Issue R3 [HIGH — Laptops & Desktops `#79–#86`, `1360px–1600px`]: `StoryNav` (`.st-storynav__item`) Uncollapsed Button Box (`218px` Wide) Overlaps Main Content Column
- **Route & Selector**: `/` — `.st-storynav`, `.st-storynav__item`, `.st-storynav__title` ([src/styles/story.css](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/styles/story.css#L1200-L1249))
- **DOM Measurement**:
  - `.st-storynav__title` is hidden only via `opacity: 0`, so `<button class="st-storynav__item">` remains `218px` wide (`left: 18px, right: 236px`), overlapping `.st-container` content (`left: 83px` on `1366px`, `left: 120px` on `1440px`, `left: 168px` on `1536px`) by **`68px–153px`**.
- **Fix**:
  - Make `.st-storynav__item` `width: 38px; height: 38px; padding: 6px;` and position `.st-storynav__title` out of flow (`position: absolute; left: calc(100% + 6px); top: 50%; pointer-events: none;`) so the button hitbox is strictly `38×38px` (`left: 18px, right: 56px`), and raise `.st-storynav` display threshold to `@media (min-width: 1400px)` (or `left: 12px` with container clearance).

---

### Issue R4 [HIGH — Ultra-Narrow Devices `#1–#4`, `280px–320px`]: `/contact` & `/about` Grid Children Overflow Right Viewport Edge (`+5px` to `+16px`) & Cramped 2-Column Grids (`<115px`)
- **Routes & Selectors**:
  - `/contact` — `.contact-grid`, `.contact-form`, `.form-field`, `select#service`, `input#name`, `.contact-info-item` ([src/index.css](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/index.css#L1140-L1195))
  - `/about` — `.story-grid`, `.story-copy`, `.story-stats`, `.story-stat` ([src/index.css](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/index.css#L655-L715))
  - `/` — `.st-era__name` (`"Broadcast"`), `.st-epilogue__wall > .st-sign` ([src/styles/story.css](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/styles/story.css#L1061))
  - All routes — `.footer-grid > .footer-col` ([src/index.css](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/index.css#L2754))
- **DOM Measurements (`#1 Galaxy Z Fold Cover 280×653`)**:
  - `/contact`: `input#name`, `select#service`, `button.btn-orange` have `left: 18, right: 285, width: 267` (`+5px` past `vw: 280` and `+23px` past container padding).
  - `/about`: `.story-copy` and `.story-stats` have `left: 18, right: 296, width: 278` (`+16px` past `vw: 280`).
  - `/`: `.st-era__name` (`"Broadcast"`) has `scrollWidth: 243 > clientWidth: 240`; `.st-sign` cards are `114px` wide.
  - All routes: `.footer-col` columns are `112px` wide at `280px` because `@media (max-width: 560px)` at line 2754 forces `grid-template-columns: 1fr 1fr`.
- **Fix**:
  - Use `minmax(0, 1fr)` on `.contact-grid` and `.story-grid`, add `min-width: 0; max-width: 100%;` to `.contact-grid > *, .story-grid > *, .contact-form, .form-field, .form-field input, .form-field select, .form-field textarea`, and allow `.contact-info-item` with `.social-links` to `flex-wrap: wrap`.
  - Add `@media (max-width: 359px)` rules collapsing `.footer-grid`, `.story-stats`, and `.st-epilogue__wall` to `1fr`, and lower `.st-era__name` min font-size to `clamp(2.2rem, 8vw, 7.6rem)`.

---

### Issue R5 [HIGH — Mobile & Tablet `#1–#60`, `280px–600px`]: `/work` Filter Bar (`button.work-filter-btn`) Overflows Viewport Horizontally (`right: 590px > vw`)
- **Route & Selector**: `/work` — `.work-filter`, `button.work-filter-btn` ([src/index.css](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/index.css#L2679-L2695))
- **DOM Measurement**:
  - On `#1–#42` (`280px–568px`), `@media (max-width: 640px)` forces `.work-filter { flex-wrap: nowrap; overflow-x: auto }`, pushing `"Festive"` (`right: 454px`) and `"Brand Design"` (`right: 590px–596px`) off-screen and slicing the 4th pill at the right container border on `390px` (`b2-work-390-00-0.png`).
- **Fix**:
  - Change `.work-filter` at `@media (max-width: 640px)` to `flex-wrap: wrap; overflow-x: visible; gap: 8px;` with `min-height: 38px; padding: 9px 16px;` so all 5 filter buttons wrap cleanly into 2 rows with zero clipping.

---

### Issue R6 [HIGH — Landscape Phones, Tablets & Short Viewports `#1–#85`]: `.floating-contact` Dominates Short Landscape Viewports (`33%–38%` of `vh`), Covers Footer Copyright & Overlaps Act III `"DEC"` Bar Label
- **Routes & Selectors**: All routes — `.floating-contact`, `.fc-btn`, `.fc-label` ([src/index.css](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/index.css#L1043-L1077)), `.footer`, `.st-year__bar`
- **DOM Measurements**:
  - On `#42` (`568×320`), `#46` (`640×360`), `#53` (`740×360`), `#56` (`800×360`), `#61–#67` (`844×390`–`932×430`), `.floating-contact` is `145×120px` (`33%–37.5%` of viewport height) because icon-only mode only triggers at `max-width: 560px`.
  - On `#1–#40` (`280px–480px`), `.floating-contact` overlaps `.footer-bottom` copyright text at the bottom of every page.
  - On `#70–#85` (`1024px–1536px`), `.floating-contact` overlaps the `"DEC"` label at the right end of `.st-year__bar`.
- **Fix**:
  - Switch `.floating-contact` to compact `44×44px` icon-only circles on `@media (max-width: 1023px), (max-height: 540px)` (and horizontal row `flex-direction: row` on `@media (max-height: 440px)`).
  - Add bottom clearance to `.footer` on mobile/tablet (`padding-bottom: 88px`) so `.footer-bottom` scrolls clear of the floating buttons.
  - On desktop `1024px–1600px`, add right clearance (`padding-right: clamp(160px, 14vw, 190px)`) to `html.has-motion .st-year__bar` so `"DEC"` never sits behind `.floating-contact`.

---

### Issue R7 [MEDIUM-HIGH — All Mobile & Tablet Viewports `#1–#69`, `280px–1023px`]: Undersized Tap Targets (`< 36×36px`) on Social Icons (`22×22px`), Footer Links (`35×17px`), and Burger Button (`38×28px`)
- **Routes & Selectors**: All 6 routes — `.social-links a`, `.footer-col ul li a`, `.nav-burger` ([src/index.css](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/index.css#L230-L237))
- **DOM Measurements**:
  - `.social-links a` (`Facebook`, `Instagram`, `YouTube` in Footer and Contact): `22×22px` across all 69 mobile/tablet devices (`414` checks).
  - `.footer-col a` (`"Work"` and sibling footer links): `35×17px` (`height: 17px` across all footer links).
  - `button.nav-burger`: `38×28px`.
- **Fix**:
  - Set `.social-links a { min-width: 40px; min-height: 40px; display: inline-flex; align-items: center; justify-content: center; }`.
  - Set `.footer-col a { display: inline-flex; align-items: center; min-height: 36px; min-width: 40px; padding: 4px 0; }` and `.footer-col ul { gap: 4px; }`.
  - Set `.nav-burger { min-width: 44px; min-height: 44px; align-items: center; justify-content: center; }`.

---

### Issue R8 [MEDIUM — Desktop `1024px–1180px` `#70–#75`]: Act II Progress Rail Tick Label Truncation (`"switc..."`)
- **Route & Selector**: `/` — `.st-brief__rail ol`, `.st-brief__tick`, `.st-brief__tick-label` ([src/styles/story.css](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/styles/story.css#L1330-L1358))
- **DOM Measurement**:
  - On `#70–#74` (`1024px–1133px`), `.st-brief__tick-label` #4 (`"switch-on"`) has `scrollWidth: 53px > clientWidth: 44px–50px`, truncating to `"switc..."`.
- **Fix**:
  - Tighten `.st-brief__rail ol` gap (`4px`), `.st-brief__tick` horizontal padding (`4px 0`), and `.st-brief__tick-label` font-size (`clamp(9.5px, 0.85vw, 11px)`) so `"switch-on"` fits without ellipsis across all `1024px+` viewports.

---

### Issue R9 [MEDIUM — All Viewports `#1–#100`]: Excessive Heading Line Wrapping (`>4.5` Lines) on Act I `h2#noise-title` & Mobile Section Headings
- **Routes & Selectors**:
  - `/` — `h2#noise-title.st-noise__title` ([src/story/ActNoise.jsx](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/story/ActNoise.jsx#L57-L60), [src/styles/story.css](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/styles/story.css#L382-L402)), `h2#year-title`, `h2#remembered-title`
  - `/about`, `/services` — `h2.headline`, `h2.cta-band-title` at `280px`
- **DOM Measurement**:
  - `h2#noise-title` wraps both `NOISE_STATEMENT` (22 words) and `NOISE_PAYOFF` (7 words) inside a single `<h2>`, reaching `383px` tall (~11.5 lines) at `280px`, `281px` (~8.5 lines) at `390px`, and `498px` (~6.55× line-height) at `1536px+`.
- **Fix**:
  - Move `<span className="st-noise__payoff">` out of `<h2 id="noise-title">` into its own `<p className="st-noise__payoff">` element in `ActNoise.jsx`, and tune `.st-noise__title` clamp to `clamp(1.45rem, min(3.8vw, 6.8svh), 3.5rem)`.
  - Lower mobile minimum clamp on `.st-year__title`, `.st-remembered__title`, `.headline`, `.cta-band-title` for `<=480px`.

---

### Issue R10 [MEDIUM — Short Landscape Phones `#42, #46, #48, #52, #53, #56, #58, #61–#67`, `vh <= 480px`]: Landscape Hero & Navbar Vertical Crowding
- **Routes & Selectors**: All routes — `.nav-inner`, `.st-prologue`, `.page-hero`
- **DOM Measurement**:
  - On `667×375` (`#48`) and `844×390` (`#61`), `.nav` (`76px–88px`) + top hero padding pushes `.st-prologue__ctas` completely below the `375px–390px` fold.
- **Fix**:
  - Add `@media (max-height: 480px) and (orientation: landscape)` rules in `src/styles/story.css` and `src/index.css` to compact `--st-nav-h: 56px`, `.nav-inner`, `.st-prologue`, and `.page-hero`.

---

### Issue R11 [LOW-MEDIUM — All Viewports `#1–#100`]: Off-Screen `.cursor-dot`/`ring`, `.page-hero-glow` (`120%` Width), & Pre-Scrub `.st-onair__feature img` (`scale(1.25)`) Bleeding Outside `[0, vw]`
- **Routes & Selectors**:
  - `div.cursor-dot`, `div.cursor-ring` ([src/components/CursorDot.jsx](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/components/CursorDot.jsx#L26)) — initialized at `x: -100, y: -100` with `opacity: 1`.
  - `div.page-hero-glow` ([src/index.css](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/index.css#L1228)) — `max-width: 120%` bleeds `10%` past left and right viewport edges.
  - `.st-onair__feature img` ([src/story/ActOnAir.jsx](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/story/ActOnAir.jsx#L37)) — initial `scale: 1.25` inside `scale: 0.9` (`1.125×` container width) bleeds `2px–35px` past `[0, vw]`.
  - `.st-brief__img` ([src/story/ActOneBrief.jsx](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/story/ActOneBrief.jsx#L95)) — pre-scaled `1.16×` inside `[data-media]`.
- **Fix**:
  - Initialize `CursorDot.jsx` with `x: 0, y: 0, autoAlpha: 0` (revealing only on first fine-pointer move) and hide via `@media (max-width: 1023px), (pointer: coarse), (hover: none)`.
  - Cap `.page-hero-glow` to `max-width: 100%`.
  - Change `.st-onair__feature img` initial scale from `1.25` to `1.08` (`0.9 × 1.08 = 0.972 <= 1.0`).

---

### Issue R12 [MEDIUM — `/about`]: Nested `<Reveal>` Wrapping `<SplitText>` in `Group.jsx` Leaves Blank Headline Gap on Fast Scroll
- **Route & Selector**: `/about` — `.group-head > h2.group-headline` ([src/sections/Group.jsx](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Group.jsx#L11-L24))
- **Fix**: Apply `<Reveal>` to `.section-label` and `.group-intro` individually rather than wrapping `<SplitText>` inside a transformed parent `<Reveal>`.


---

## 3. Post-Fix Verification Across All 100 Devices (600 DOM Checks)

After **Fixer Agent 1** ([src/styles/story.css](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/styles/story.css)), **Fixer Agent 2** ([src/index.css](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/index.css)), and **Fixer Agent 3** ([ActNoise.jsx](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/story/ActNoise.jsx), [ActOnAir.jsx](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/story/ActOnAir.jsx), [ActOneBrief.jsx](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/story/ActOneBrief.jsx), [CursorDot.jsx](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/components/CursorDot.jsx), [Group.jsx](file:///c:/Users/nambu/OneDrive/Desktop/Projects/no1ads/src/sections/Group.jsx)) applied all fixes, the full 100-device DOM inspection suite (`dom_audit.mjs`) was re-executed across all 5 batches:

| Batch | Devices | Viewport Range | Routes Tested | Total Checks | Issues Remaining | Console Errors | Status |
|---|---|---|---|---:|---:|---:|---|
| **Batch 1** | `#1–#20` | `280×653` – `384×854` | `/`, `/about`, `/services`, `/services/led-signage`, `/work`, `/contact` | 120 | **0** | **0** | PASS |
| **Batch 2** | `#21–#40` | `390×844` – `480×854` | `/`, `/about`, `/services`, `/services/led-signage`, `/work`, `/contact` | 120 | **0** | **0** | PASS |
| **Batch 3** | `#41–#60` | `540×720` – `834×1194` | `/`, `/about`, `/services`, `/services/led-signage`, `/work`, `/contact` | 120 | **0** | **0** | PASS |
| **Batch 4** | `#61–#80` | `844×390` – `1440×740` | `/`, `/about`, `/services`, `/services/led-signage`, `/work`, `/contact` | 120 | **0** | **0** | PASS |
| **Batch 5** | `#81–#100` | `1440×900` – `3840×2160` | `/`, `/about`, `/services`, `/services/led-signage`, `/work`, `/contact` | 120 | **0** | **0** | PASS |
| **Total** | **100 Devices** | **`280×653` – `3840×2160`** | **6 Routes** | **600** | **0** | **0** | **100% PASS** |
