export default function SantaClaus() {
  return (
    <div
      className="santa-wrap"
      aria-label="Santa Claus animado estilo Coca-Cola"
      role="img"
    >
      <svg
        viewBox="0 0 220 360"
        width="220"
        height="360"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        {/* ─────────────────────────────────────
            BOTTLE  (animated, held by left hand)
        ───────────────────────────────────── */}
        <g
          style={{
            animation: 'bottleLift 2.5s ease-in-out infinite',
            transformOrigin: '38px 210px',
          }}
        >
          {/* Bottle cap */}
          <rect x="27" y="148" width="14" height="7" rx="2" fill="#C8102E" />
          <rect x="25" y="153" width="18" height="3" rx="1" fill="#a00010" />
          {/* Neck */}
          <rect x="29" y="156" width="10" height="18" rx="3" fill="#1a5c1a" />
          {/* Bottle shoulder */}
          <path d="M26 174 Q22 180 20 192 L20 240 Q20 250 34 250 Q48 250 48 240 L48 192 Q46 180 42 174 Z" fill="#2d7a2d" />
          {/* Bottle waist indent */}
          <path d="M20 195 Q34 190 48 195 L48 205 Q34 200 20 205 Z" fill="#1a5c1a" />
          {/* Red Coca-Cola label */}
          <rect x="21" y="213" width="26" height="26" rx="2" fill="#C8102E" />
          {/* Label highlight lines */}
          <line x1="23" y1="218" x2="45" y2="218" stroke="white" strokeWidth="1.8" />
          <path d="M26 222 Q34 219 42 222" stroke="white" strokeWidth="1" fill="none" />
          <line x1="23" y1="226" x2="45" y2="226" stroke="white" strokeWidth="1.2" />
          <line x1="24" y1="230" x2="44" y2="230" stroke="white" strokeWidth="0.8" />
          <line x1="23" y1="234" x2="45" y2="234" stroke="white" strokeWidth="1" />
          {/* Bottle bottom */}
          <ellipse cx="34" cy="240" rx="14" ry="5" fill="#1a5c1a" />
          {/* Glass highlight */}
          <path d="M22 185 Q20 200 21 220" stroke="rgba(255,255,255,0.25)" strokeWidth="3" strokeLinecap="round" fill="none" />
        </g>

        {/* ─────────────────────────────────────
            LEFT ARM (holding bottle, raised)
        ───────────────────────────────────── */}
        <path
          d="M75 198 Q55 188 38 195"
          stroke="#C8102E"
          strokeWidth="24"
          strokeLinecap="round"
          fill="none"
        />
        {/* Left fur cuff */}
        <ellipse cx="40" cy="196" rx="14" ry="11" fill="white" />
        {/* Left fist / glove */}
        <ellipse cx="40" cy="196" rx="9"  ry="7"  fill="#FFCBA4" />

        {/* ─────────────────────────────────────
            RIGHT ARM (resting at side)
        ───────────────────────────────────── */}
        <path
          d="M145 205 Q168 198 178 210"
          stroke="#C8102E"
          strokeWidth="24"
          strokeLinecap="round"
          fill="none"
        />
        {/* Right fur cuff */}
        <ellipse cx="178" cy="210" rx="13" ry="11" fill="white" />
        {/* Right fist */}
        <ellipse cx="178" cy="210" rx="8"  ry="6"  fill="#FFCBA4" />

        {/* ─────────────────────────────────────
            BODY
        ───────────────────────────────────── */}
        <ellipse cx="110" cy="240" rx="60" ry="72" fill="#C8102E" />

        {/* Jacket centre fold */}
        <path d="M110 175 L110 285" stroke="#a00010" strokeWidth="1.5" opacity="0.4" />

        {/* Body top shadow */}
        <ellipse cx="110" cy="175" rx="55" ry="15" fill="#a00010" opacity="0.3" />

        {/* ── Belt ── */}
        <rect x="54"  y="228" width="112" height="20" rx="3" fill="#1a1a1a" />
        {/* Belt buckle plate */}
        <rect x="94"  y="224" width="32"  height="28" rx="4" fill="#CC9900" />
        {/* Buckle inner frame */}
        <rect x="98"  y="228" width="24"  height="20" rx="2" fill="#1a1a1a" />
        {/* Buckle cross */}
        <line x1="110" y1="228" x2="110" y2="248" stroke="#CC9900" strokeWidth="2.5" />
        <line x1="98"  y1="238" x2="122" y2="238" stroke="#CC9900" strokeWidth="2.5" />
        {/* Belt highlight */}
        <rect x="55" y="229" width="40" height="4" rx="2" fill="rgba(255,255,255,0.08)" />

        {/* Bottom fur trim */}
        <ellipse cx="110" cy="300" rx="60" ry="13" fill="white" />

        {/* ─────────────────────────────────────
            BEARD
        ───────────────────────────────────── */}
        {/* Beard base */}
        <ellipse cx="110" cy="172" rx="44" ry="28" fill="white" />
        {/* Beard puffs */}
        <ellipse cx="82"  cy="182" rx="18" ry="22" fill="white" />
        <ellipse cx="110" cy="186" rx="22" ry="24" fill="white" />
        <ellipse cx="138" cy="182" rx="18" ry="22" fill="white" />
        {/* Beard wisps */}
        <ellipse cx="68"  cy="190" rx="10" ry="14" fill="white" />
        <ellipse cx="152" cy="190" rx="10" ry="14" fill="white" />
        {/* Beard highlights */}
        <ellipse cx="90"  cy="178" rx="7"  ry="9"  fill="rgba(240,240,240,0.5)" />
        <ellipse cx="125" cy="180" rx="6"  ry="8"  fill="rgba(240,240,240,0.5)" />

        {/* ─────────────────────────────────────
            COLLAR FUR
        ───────────────────────────────────── */}
        <ellipse cx="110" cy="172" rx="44" ry="12" fill="white" />

        {/* ─────────────────────────────────────
            HEAD
        ───────────────────────────────────── */}
        <circle cx="110" cy="126" r="46" fill="#FFCBA4" />

        {/* Cheeks */}
        <circle cx="82"  cy="138" r="14" fill="#FF9999" opacity="0.45" />
        <circle cx="138" cy="138" r="14" fill="#FF9999" opacity="0.45" />

        {/* ── Nose ── */}
        <ellipse cx="110" cy="133" rx="7" ry="6" fill="#FF8877" />
        <ellipse cx="108" cy="131" rx="2" ry="1.5" fill="rgba(255,255,255,0.4)" />

        {/* ── Mustache ── */}
        <path
          d="M88 145 Q99 138 110 142 Q121 138 132 145"
          stroke="white"
          strokeWidth="5.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Mustache curl tips */}
        <path d="M88 145 Q84 148 86 151" stroke="white" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M132 145 Q136 148 134 151" stroke="white" strokeWidth="3.5" strokeLinecap="round" fill="none" />

        {/* ── Smile ── */}
        <path
          d="M92 154 Q110 167 128 154"
          stroke="#c06060"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* ─────────────────────────────────────
            EYEBROWS
        ───────────────────────────────────── */}
        {/* Left eyebrow */}
        <path
          d="M86 110 Q94 105 102 109"
          stroke="#8B6040"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Right eyebrow (slightly raised / playful) */}
        <path
          d="M118 108 Q126 103 134 108"
          stroke="#8B6040"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* ─────────────────────────────────────
            EYES
            Left  = always open
            Right = winks every 6s
        ───────────────────────────────────── */}

        {/* LEFT EYE — open */}
        <circle cx="94"  cy="120" r="6" fill="#2a1a0a" />
        <circle cx="96"  cy="118" r="2" fill="white"   />
        <circle cx="94"  cy="120" r="1" fill="#4a3a2a" />

        {/* RIGHT EYE — open (fades out when winking) */}
        <g style={{ animation: 'winkOpen 6s ease-in-out infinite' }}>
          <circle cx="126" cy="120" r="6" fill="#2a1a0a" />
          <circle cx="128" cy="118" r="2" fill="white"   />
          <circle cx="126" cy="120" r="1" fill="#4a3a2a" />
        </g>

        {/* RIGHT EYE — wink (arc, fades in when winking) */}
        <g style={{ animation: 'winkClosed 6s ease-in-out infinite' }}>
          <path
            d="M120 120 Q126 113 132 120"
            stroke="#2a1a0a"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Small lashes */}
          <line x1="121" y1="121" x2="119" y2="124" stroke="#2a1a0a" strokeWidth="1.5" />
          <line x1="126" y1="119" x2="126" y2="123" stroke="#2a1a0a" strokeWidth="1.5" />
          <line x1="131" y1="121" x2="133" y2="124" stroke="#2a1a0a" strokeWidth="1.5" />
        </g>

        {/* ─────────────────────────────────────
            HAT
        ───────────────────────────────────── */}
        {/* Fur brim */}
        <ellipse cx="110" cy="84" rx="50" ry="14" fill="white" />

        {/* Hat body */}
        <path
          d="M72 84 Q68 58 78 36 Q88 16 110 10 Q132 16 142 36 Q152 58 148 84 Z"
          fill="#C8102E"
        />
        {/* Hat fold detail */}
        <path
          d="M95 84 Q92 60 97 38 Q103 22 110 14"
          stroke="#a00010"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
        {/* Hat highlight */}
        <path
          d="M100 82 Q96 60 102 40"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Pompom */}
        <circle cx="110" cy="11" r="13" fill="white" />
        {/* Pompom fluffy texture */}
        <circle cx="105" cy="8"  r="4" fill="rgba(240,240,240,0.7)" />
        <circle cx="115" cy="10" r="3" fill="rgba(240,240,240,0.6)" />
        <circle cx="110" cy="16" r="3" fill="rgba(240,240,240,0.6)" />

        {/* ─────────────────────────────────────
            BOOTS / LEGS
        ───────────────────────────────────── */}
        {/* Left leg */}
        <rect x="80"  y="298" width="28" height="36" rx="10" fill="#C8102E" />
        {/* Right leg */}
        <rect x="112" y="298" width="28" height="36" rx="10" fill="#C8102E" />
        {/* Left boot */}
        <path d="M76 318 Q80 348 115 348 Q118 348 120 345 L120 318 Z" fill="#222" />
        {/* Right boot */}
        <path d="M108 318 L108 345 Q110 348 145 348 Q148 345 144 318 Z" fill="#222" />
        {/* Boot buckle left */}
        <rect x="82" y="326" width="18" height="10" rx="3" fill="#CC9900" />
        <rect x="85" y="328" width="12" height="6"  rx="2" fill="#222" />
        {/* Boot buckle right */}
        <rect x="118" y="326" width="18" height="10" rx="3" fill="#CC9900" />
        <rect x="121" y="328" width="12" height="6"  rx="2" fill="#222" />
        {/* Boot shine left */}
        <ellipse cx="90"  cy="321" rx="6" ry="3" fill="rgba(255,255,255,0.18)" />
        {/* Boot shine right */}
        <ellipse cx="126" cy="321" rx="6" ry="3" fill="rgba(255,255,255,0.18)" />

        {/* ─────────────────────────────────────
            HOLLY DECORATION (on hat)
        ───────────────────────────────────── */}
        <ellipse cx="133" cy="84" rx="9" ry="5" fill="#2d7a2d" transform="rotate(-30 133 84)" />
        <ellipse cx="142" cy="80" rx="9" ry="5" fill="#2d7a2d" transform="rotate(20 142 80)"  />
        <circle  cx="138" cy="79" r="4.5" fill="#C8102E" />
        <circle  cx="135" cy="82" r="3"   fill="#a00010" />
      </svg>
    </div>
  )
}
