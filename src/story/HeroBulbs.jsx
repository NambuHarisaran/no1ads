/**
 * Hanging Edison bulbs for the hero. Pure inline SVG so every part can be
 * lit separately: the glass fills with warm light, the filament glows and a
 * soft halo blooms behind it. Each "lit" layer carries `data-bulb-on`; the
 * Prologue's scroll scrub switches them on (with a short flicker), so
 * scrolling back up switches them off again. Without JS / with reduced
 * motion the lit layers are simply visible.
 *
 * Positions, cord lengths and sizes live in CSS (`.st-bulb--1` … `--4`).
 */
const BULBS = [1, 2, 3, 4];

// Edison "teardrop" glass, filament supports and a coiled filament loop.
const GLASS = 'M23 26 C23 38 9 47 9 67 C9 87 20 100 30 100 C40 100 51 87 51 67 C51 47 37 38 37 26 Z';
const SUPPORTS = 'M27 27 L27 56 M33 27 L33 56';
const FILAMENT = 'M27 56 C25 63 26 70 28 66 C29 62 30 71 31 66 C32 62 33 70 34 66 C35 62 35 59 33 56';

function Bulb({ n }) {
  const id = `st-bulb-${n}`;
  return (
    <div className={`st-bulb st-bulb--${n}`} data-bulb>
      <span className="st-bulb__cord" />
      <span className="st-bulb__body">
        <span className="st-bulb__halo" data-bulb-on />
        <svg className="st-bulb__svg" viewBox="0 0 60 104" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id={`${id}-metal`} x1="0" x2="1">
              <stop offset="0" stopColor="#2a2a2a" />
              <stop offset="0.45" stopColor="#8a7a63" />
              <stop offset="1" stopColor="#1e1e1e" />
            </linearGradient>
            <radialGradient id={`${id}-warm`} cx="0.5" cy="0.62" r="0.6">
              <stop offset="0" stopColor="#FFF4D6" stopOpacity="0.95" />
              <stop offset="0.35" stopColor="#FFC56E" stopOpacity="0.75" />
              <stop offset="1" stopColor="#E87722" stopOpacity="0.28" />
            </radialGradient>
          </defs>

          {/* socket */}
          <rect x="22" y="0" width="16" height="6" rx="1.5" fill="#111" />
          <rect x="21" y="5" width="18" height="21" rx="2" fill={`url(#${id}-metal)`} />
          <path d="M21 10 H39 M21 14 H39 M21 18 H39 M21 22 H39" stroke="rgba(0,0,0,.45)" strokeWidth="1" />

          {/* glass — unlit */}
          <path d={GLASS} fill="rgba(255,255,255,0.035)" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
          {/* filament — unlit */}
          <path d={SUPPORTS} stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" fill="none" />
          <path d={FILAMENT} stroke="#5a5048" strokeWidth="1.1" fill="none" strokeLinecap="round" />

          {/* lit layers */}
          <g className="st-bulb__on" data-bulb-on>
            <path d={GLASS} fill={`url(#${id}-warm)`} stroke="rgba(255,214,150,0.65)" strokeWidth="1" />
            <path d={FILAMENT} className="st-bulb__filament" stroke="#FFF1C9" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          </g>

          {/* glass highlight */}
          <path d="M17 58 C17 48 22 42 25 38" stroke="rgba(255,255,255,0.35)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </svg>
      </span>
    </div>
  );
}

export default function HeroBulbs() {
  return (
    <div className="st-bulbs" aria-hidden="true">
      {BULBS.map(n => (
        <Bulb n={n} key={n} />
      ))}
    </div>
  );
}
