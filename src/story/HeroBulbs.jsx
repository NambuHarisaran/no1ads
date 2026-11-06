/**
 * Hanging vintage ST64 Edison filament bulbs for the hero stage.
 * Pure inline SVG crafted with multi-stop metallic brass sockets, knurled
 * collars, internal E27 screw threads, glass arbor stems, Dumet support wires,
 * squirrel-cage tungsten filaments, and curved glass specular reflections.
 *
 * Each "lit" layer carries `data-bulb-on`; the Prologue's scroll scrub
 * switches them on (with a realistic tungsten flicker), and scrolling back up
 * dims them off again.
 */
const BULBS = [1, 2, 3, 4];

// Classic ST64 Edison teardrop glass envelope (viewBox 0 0 80 156).
const GLASS_OUTER =
  'M27 42 C27 56 11 70 11 101 C11 131 24 148 40 148 C56 148 69 131 69 101 C69 70 53 56 53 42 Z';
const GLASS_INNER =
  'M29 44 C29 57 14 71 14 101 C14 128 26 144 40 144 C54 144 66 128 66 101 C66 71 51 57 51 44 Z';

// Internal glass stem / press-seal arbor + molybdenum support hooks.
const GLASS_STEM = 'M35.5 42 L36.8 72 C36.8 74 43.2 74 43.2 72 L44.5 42 Z';
const LEAD_WIRES = 'M38 42 L38 72 L30 82 M42 42 L42 72 L50 82';
const ANCHOR_WIRES = 'M40 73 L33 114 M40 73 L47 114 M40 73 L40 118';

// Multi-loop squirrel-cage tungsten filament.
const FILAMENT =
  'M30 82 C28 92 29 106 33 114 C35 118 36 93 38 93 C40 93 38 118 40 118 C42 118 40 93 42 93 C44 93 45 118 47 114 C51 106 52 92 50 82';

function Bulb({ n }) {
  const id = `st-bulb-${n}`;
  return (
    <div className={`st-bulb st-bulb--${n}`} data-bulb>
      <span className="st-bulb__cord" />
      <span className="st-bulb__body">
        <span className="st-bulb__halo" data-bulb-on />
        <span className="st-bulb__core-bloom" data-bulb-on />
        <svg className="st-bulb__svg" viewBox="0 0 80 156" aria-hidden="true" focusable="false">
          <defs>
            {/* Machined antique brass socket gradient */}
            <linearGradient id={`${id}-brass`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1c1813" />
              <stop offset="18%" stopColor="#594a36" />
              <stop offset="38%" stopColor="#b89b6c" />
              <stop offset="50%" stopColor="#dec392" />
              <stop offset="68%" stopColor="#7d674a" />
              <stop offset="88%" stopColor="#332a1e" />
              <stop offset="100%" stopColor="#16120d" />
            </linearGradient>

            {/* Dark gunmetal strain-relief collar */}
            <linearGradient id={`${id}-collar`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0f0f0f" />
              <stop offset="35%" stopColor="#3d3934" />
              <stop offset="55%" stopColor="#59534b" />
              <stop offset="85%" stopColor="#1c1a17" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </linearGradient>

            {/* Unlit smoked amber glass gradient */}
            <radialGradient id={`${id}-glass-off`} cx="0.5" cy="0.62" r="0.58">
              <stop offset="0%" stopColor="#2b241d" stopOpacity="0.18" />
              <stop offset="65%" stopColor="#1a1510" stopOpacity="0.34" />
              <stop offset="100%" stopColor="#574737" stopOpacity="0.52" />
            </radialGradient>

            {/* Lit warm tungsten glass fill */}
            <radialGradient id={`${id}-glass-on`} cx="0.5" cy="0.65" r="0.56">
              <stop offset="0%" stopColor="#FFFDF6" stopOpacity="0.96" />
              <stop offset="24%" stopColor="#FFE1A6" stopOpacity="0.88" />
              <stop offset="55%" stopColor="#F59E36" stopOpacity="0.62" />
              <stop offset="85%" stopColor="#D96B16" stopOpacity="0.36" />
              <stop offset="100%" stopColor="#FFE4B5" stopOpacity="0.58" />
            </radialGradient>

            {/* Specular highlight fade */}
            <linearGradient id={`${id}-spec`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#FFF5E4" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* --- SOCKET & HARDWARE --- */}
          {/* Cord strain relief grip */}
          <rect x="33" y="0" width="14" height="6" rx="2" fill={`url(#${id}-collar)`} />
          <path d="M30 6 C30 3.5 50 3.5 50 6 L52 13 L28 13 Z" fill={`url(#${id}-collar)`} />

          {/* Upper brass cap */}
          <rect x="26" y="12" width="28" height="9" rx="2" fill={`url(#${id}-brass)`} />

          {/* Knurled central brass ring */}
          <rect x="24.5" y="20" width="31" height="10" rx="2" fill={`url(#${id}-brass)`} />
          <path
            d="M27 20 V30 M30 20 V30 M33 20 V30 M36 20 V30 M39 20 V30 M42 20 V30 M45 20 V30 M48 20 V30 M51 20 V30 M53.5 20 V30"
            stroke="rgba(15, 11, 7, 0.48)"
            strokeWidth="1.1"
          />

          {/* Lower brass skirt */}
          <rect x="26.5" y="29.5" width="27" height="11" rx="1.5" fill={`url(#${id}-brass)`} />
          {/* Socket horizontal shadow grooves */}
          <path
            d="M26 15.5 H54 M25 20.5 H55 M25 29.5 H55 M26.5 35.5 H53.5 M27 40 H53"
            stroke="rgba(0, 0, 0, 0.58)"
            strokeWidth="1"
          />
          <path
            d="M26.5 16.5 H53.5 M25.5 30.5 H54.5"
            stroke="rgba(255, 232, 190, 0.28)"
            strokeWidth="0.7"
          />

          {/* Internal E27 screw threads visible inside glass neck */}
          <path
            d="M29 42 C33 44 47 44 51 42 L49 48 C45 50 35 50 31 48 Z"
            fill={`url(#${id}-brass)`}
            opacity="0.65"
          />

          {/* --- UNLIT GLASS & INTERNAL STRUCTURE --- */}
          <path
            d={GLASS_OUTER}
            fill={`url(#${id}-glass-off)`}
            stroke="rgba(255, 238, 214, 0.26)"
            strokeWidth="1.15"
          />
          <path
            d={GLASS_INNER}
            fill="none"
            stroke="rgba(255, 255, 255, 0.07)"
            strokeWidth="0.8"
          />

          {/* Internal glass arbor stem & press seal */}
          <path
            d={GLASS_STEM}
            fill="rgba(255, 255, 255, 0.08)"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="0.8"
          />
          <ellipse cx="40" cy="72.5" rx="4.2" ry="1.8" fill="rgba(255, 255, 255, 0.22)" />

          {/* Unlit lead-in & support wires */}
          <path d={LEAD_WIRES} stroke="rgba(220, 200, 175, 0.32)" strokeWidth="0.9" fill="none" />
          <path d={ANCHOR_WIRES} stroke="rgba(220, 200, 175, 0.18)" strokeWidth="0.6" fill="none" />

          {/* Unlit tungsten filament */}
          <path
            d={FILAMENT}
            stroke="#635445"
            strokeWidth="1.25"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* --- LIT LAYERS (controlled via [data-bulb-on]) --- */}
          <g className="st-bulb__on" data-bulb-on>
            {/* Warm illuminated glass envelope */}
            <path
              d={GLASS_OUTER}
              fill={`url(#${id}-glass-on)`}
              stroke="rgba(255, 222, 165, 0.82)"
              strokeWidth="1.25"
            />
            {/* Warm rim glow on inner glass */}
            <path
              d={GLASS_INNER}
              fill="none"
              stroke="rgba(255, 244, 214, 0.45)"
              strokeWidth="1"
            />
            {/* Lit support wires */}
            <path d={LEAD_WIRES} stroke="rgba(255, 232, 185, 0.65)" strokeWidth="0.9" fill="none" />
            <path d={ANCHOR_WIRES} stroke="rgba(255, 215, 150, 0.45)" strokeWidth="0.65" fill="none" />

            {/* Outer orange-amber filament bloom */}
            <path
              d={FILAMENT}
              stroke="#E87722"
              strokeWidth="5.5"
              strokeOpacity="0.45"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Mid golden incandescent glow */}
            <path
              d={FILAMENT}
              className="st-bulb__filament-glow"
              stroke="#FFBD59"
              strokeWidth="2.8"
              strokeOpacity="0.92"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* White-hot tungsten filament core */}
            <path
              d={FILAMENT}
              className="st-bulb__filament"
              stroke="#FFFDF7"
              strokeWidth="1.35"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Tiny incandescent anchor sparks where filament hooks attach */}
            <circle cx="33" cy="114" r="1.4" fill="#FFFDF7" />
            <circle cx="40" cy="118" r="1.5" fill="#FFFDF7" />
            <circle cx="47" cy="114" r="1.4" fill="#FFFDF7" />
          </g>

          {/* --- GLASS SPECULAR REFLECTIONS (always on top for realism) --- */}
          {/* Primary curved left window reflection */}
          <path
            d="M28 52 C24 63 17 77 16.5 99 C16.3 111 19 122 23 130"
            stroke={`url(#${id}-spec)`}
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M31 56 C28 65 22.5 77 22 95"
            stroke="rgba(255, 255, 255, 0.18)"
            strokeWidth="1.1"
            fill="none"
            strokeLinecap="round"
          />
          {/* Secondary right rim reflection */}
          <path
            d="M62.5 92 C63 110 57 128 46 138"
            stroke="rgba(255, 242, 220, 0.24)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Bottom glass tip pip highlight */}
          <ellipse cx="40" cy="146.5" rx="3.5" ry="1.1" fill="rgba(255, 245, 225, 0.28)" />
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
