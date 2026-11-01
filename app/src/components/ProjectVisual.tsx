type Props = { id: string };

export function ProjectVisual({ id }: Props) {
  if (id === "satya") {
    return (
      <svg viewBox="0 0 600 210" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <pattern id="ht" width="9" height="9" patternUnits="userSpaceOnUse">
            <circle cx="4.5" cy="4.5" r="1.7" fill="#f3f1eb" />
          </pattern>
          <radialGradient id="hg" cx=".5" cy=".5" r=".5">
            <stop offset="0" stopColor="#fff" />
            <stop offset="1" stopColor="#000" />
          </radialGradient>
          <mask id="hm">
            <ellipse cx="170" cy="105" rx="82" ry="98" fill="url(#hg)" />
          </mask>
        </defs>
        <rect width="600" height="210" fill="url(#ht)" mask="url(#hm)" opacity=".85" />
        <ellipse cx="260" cy="105" rx="70" ry="92" fill="none" stroke="#f3f1eb" strokeOpacity=".55" />
        <path
          d="M360 105 L380 105 L392 70 L404 140 L416 55 L428 150 L440 85 L452 120 L466 105 L580 105"
          fill="none"
          stroke="#ff6b35"
          strokeWidth="1.5"
        />
        <text x="360" y="190" fill="#8f8d87" fontSize="10" fontFamily="JetBrains Mono, monospace">
          VISUAL + AUDIO FORENSICS
        </text>
      </svg>
    );
  }
  if (id === "doc") {
    return (
      <svg viewBox="0 0 600 210" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="none" stroke="#f3f1eb" strokeOpacity=".5">
          <rect x="40" y="50" width="70" height="92" />
          <rect x="52" y="38" width="70" height="92" />
          <rect x="64" y="26" width="70" height="92" />
        </g>
        <path d="M150 90 L220 90" stroke="#f3f1eb" strokeDasharray="4 4" strokeOpacity=".6" />
        <circle cx="440" cy="95" r="7" fill="#ff6b35" />
        <text x="40" y="190" fill="#8f8d87" fontSize="10" fontFamily="JetBrains Mono, monospace">
          INGEST → CHUNK → EMBED → RETRIEVE → ANSWER
        </text>
      </svg>
    );
  }
  if (id === "agent") {
    return (
      <svg viewBox="0 0 600 210" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect x="24" y="22" width="552" height="166" fill="none" stroke="#f3f1eb" strokeOpacity=".3" />
        <text x="44" y="78" fill="#ff6b35" fontSize="13" fontFamily="JetBrains Mono, monospace">
          $ agent --mode plan
        </text>
        <text x="44" y="102" fill="#8f8d87" fontSize="13" fontFamily="JetBrains Mono, monospace">
          → read_file src/app.py
        </text>
        <text x="44" y="146" fill="#8f8d87" fontSize="13" fontFamily="JetBrains Mono, monospace">
          → write_file tests/test_app.py
        </text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 600 210" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="#f3f1eb" fillOpacity=".7">
        <rect x="60" y="120" width="34" height="50" />
        <rect x="110" y="90" width="34" height="80" />
        <rect x="160" y="60" width="34" height="110" />
      </g>
      <path
        d="M340 150 L390 120 L440 132 L490 80 L545 56"
        fill="none"
        stroke="#ff6b35"
        strokeWidth="1.6"
      />
      <text x="340" y="195" fill="#8f8d87" fontSize="10" fontFamily="JetBrains Mono, monospace">
        DISTRIBUTIONS · CORRELATIONS · AI SUMMARY
      </text>
    </svg>
  );
}
