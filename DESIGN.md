# Design System — Number One Ads

> Design contract for the site. Read this before building or changing any UI.
> Story plan: "Every brand starts in the dark" — the home page is a scroll story
> where the visitor's brand is the hero and Number One Ads is the guide.

## Stack
- framework: React 18 + Vite 6 + `vite-react-ssg` (static prerender, then hydrate) + React Router 6
- styling: plain CSS — `src/index.css` (legacy pages) + `src/styles/story.css` (story system, `st-` prefix)
- components: hand-built + ReactBits (`src/components/reactbits/`: ScrollVelocity, CountUp) + GSAP `ClientMarquee`
- animation: GSAP 3.15 (ScrollTrigger, SplitText, DrawSVG) via `@gsap/react` `useGSAP`; Lenis 1.3 smooth scroll driven by `gsap.ticker`
- icons: inline SVG
- preset: `vanilla` (no Tailwind) — tokens are CSS custom properties

## Tokens
Full map lives in `src/styles/story.css` (`:root`). Summary:

| Role | Token | Value |
|---|---|---|
| Brand | `--st-orange` | `#E87722` |
| Brand glow | `--st-orange-glow` | `rgba(232,119,34,.45)` |
| Gold (lit accent) | `--st-gold` | `#F6C27A` |
| Bg base / raised / card | `--st-ink-950/900/800/700` | `#070707` / `#0D0D0D` / `#141414` / `#1C1C1C` |
| Text primary / secondary / muted | `--st-text`, `--st-text-2`, `--st-text-3` | `#F5F2EE` / `#BDB8B1` (9.9:1) / `#8C8781` (5.6:1) |
| Unlit (decorative, "lights off") | `--st-unlit` | `#2A2A2A` — never used for essential text |
| Hairline | `--st-line` | `rgba(255,255,255,.08)` |
| Radius | `--st-r-sm/md/lg` | `10px` / `18px` / `28px` |
| Shadow | `--st-shadow` | layered: tight dark + wide ambient |

### Typography
| Use | Family | Why |
|---|---|---|
| Display | **Montserrat** 700/900 | Brand continuity with the logo and inner pages |
| Accent italic | **Instrument Serif** italic | Editorial, modern-luxury counterpoint to the geometric sans |
| Body | **Inter** 400/500 | Legibility |

### Motion tokens (`src/motion/tokens.js`)
| Token | Value |
|---|---|
| Eases | `power3.out` UI · `power4.out` text · `expo.out` hero · `none` for every scrubbed track |
| Durations | reveal 0.75–1.1s · hover 0.35–0.6s · cursor 0.35s |
| Scrub | `1.2` cinematic scenes · `true` precise rails |
| Stagger | words 0.055 · lines 0.11 · cards 0.075 |
| Trigger | `top 82%`, `once: true` for reveals · `anticipatePin: 1` for pins |
| Lenis | `lerp .08`, `wheelMultiplier .9`, `anchors: true`, `autoRaf: false` |

## Motion principles
1. **One motif: light.** Things enter unlit (grey) and switch on (orange/gold). Every reveal means "being seen".
2. Content is visible without JS. Hidden start-states only apply under `html.has-motion` (added by an inline head script when the user does not prefer reduced motion).
3. Reduced motion → no Lenis, no pins, no scrub, everything static and readable (`gsap.matchMedia`).
4. Pins only for story moments (Prologue, One Brief, A Year). Max 3 per page. Mobile (<1024px) never pins.
5. Animate transform / opacity / short clip-path only. Blur only on text.
6. All GSAP inside `useGSAP({ scope })`; event handlers via `contextSafe`; never at module top level (SSG).

## Decisions
- 2026-10-28 — Audit (`no1ads-website-audit.md`) completed.
- 2026-11-06 — init: React + Vite + vite-react-ssg detected, no Tailwind → vanilla preset with CSS custom properties.
- 2026-11-06 — Home rebuilt as a 6-act scroll story (plan: brain artifact `cinematic-story-plan.md`). Composite "one brief" journey (not a named case). No before/after section. Testimonial names remain placeholders; design only.
- 2026-11-06 — Updated to pure English-only copy and typography per user feedback.
- 2026-11-06 — Lenis added; `html { scroll-behavior: smooth }` removed (conflicts with Lenis). Reveal / SplitText hidden states gated behind `html.has-motion`.
- 2026-11-06 — CursorDot rewritten on `gsap.quickTo` with contextual labels (`data-cursor="Play"`).

## Components
| Component | Path | Notes |
|---|---|---|
| SmoothScroll | `src/motion/SmoothScroll.jsx` | Lenis ↔ gsap.ticker bridge, `getLenis()`, `scrollToTarget()` |
| Magnetic | `src/motion/Magnetic.jsx` | quickTo magnetic wrapper, fine pointers only |
| CursorDot | `src/components/CursorDot.jsx` | quickTo follower, `data-cursor` labels |
| StoryNav | `src/story/StoryNav.jsx` | Fixed act index (desktop), current act highlight |
| Prologue | `src/story/Prologue.jsx` | Real H1, load timeline + pinned "switch-on" scrub |
| ActNoise | `src/story/ActNoise.jsx` | Word-scrub statement + ScrollVelocity marquee |
| ActOneBrief | `src/story/ActOneBrief.jsx` | Pinned 7-chapter labelled timeline; stacked cards on mobile |
| ActYear | `src/story/ActYear.jsx` | Horizontal festival calendar (containerAnimation); scroll-snap on mobile |
| ActOnAir | `src/story/ActOnAir.jsx` | Letterbox handoff + featured TVC scale |
| ActRemembered | `src/story/ActRemembered.jsx` | ClientMarquee client rows + testimonial line reveal |
| ActEras | `src/story/ActEras.jsx` | Five eras light up on scrub + CountUp stats |
| Epilogue | `src/story/Epilogue.jsx` | Wall of lit signs + "reserved for your brand" + magnetic CTA |

## Non-Goals
- No Figma sync
- No image generation
- No WebGL backgrounds on the home page
