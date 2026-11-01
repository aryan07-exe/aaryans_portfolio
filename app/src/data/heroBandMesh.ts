let cached: BandMesh | null = null;

export type BandMesh = {
  nodes: { x: number; y: number; r: number }[];
  edges: [number, number][];
};

/** Same mesh geometry as the pre-torch hero redesign. */
export function buildBandMesh(): BandMesh {
  if (cached) return cached;
  let a = 11;
  const rnd = () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const bands = [
    { x1: 720, y1: 820, x2: 1180, y2: 420, n: 72, w: 210 },
    { x1: 1520, y1: 40, x2: 1120, y2: 320, n: 58, w: 180 },
  ];
  const nodes: BandMesh["nodes"] = [];
  bands.forEach((b) => {
    const len = Math.hypot(b.x2 - b.x1, b.y2 - b.y1);
    const nx = -(b.y2 - b.y1) / len;
    const ny = (b.x2 - b.x1) / len;
    for (let i = 0; i < b.n; i++) {
      const t = rnd();
      const taper = 0.3 + 0.7 * Math.sin(Math.PI * (0.1 + 0.85 * t));
      const off = (rnd() + rnd() - 1) * b.w * taper;
      nodes.push({
        x: b.x1 + (b.x2 - b.x1) * t + nx * off,
        y: b.y1 + (b.y2 - b.y1) * t + ny * off,
        r: 1 + rnd() * 1.2,
      });
    }
  });
  const seen: Record<string, 1> = {};
  const edges: [number, number][] = [];
  nodes.forEach((p, i) => {
    nodes
      .map((q, j) => ({ j, d: Math.hypot(p.x - q.x, p.y - q.y) }))
      .filter((o) => o.j !== i && o.d < 150)
      .sort((m, n) => m.d - n.d)
      .slice(0, 3)
      .forEach((o) => {
        const k = i < o.j ? `${i}-${o.j}` : `${o.j}-${i}`;
        if (!seen[k]) {
          seen[k] = 1;
          edges.push([i, o.j]);
        }
      });
  });
  cached = { nodes, edges };
  return cached;
}

export function heroPointerToViewBox(
  clientX: number,
  clientY: number,
  rect: DOMRect
): { x: number; y: number } {
  const sc = Math.max(rect.width / 1440, rect.height / 860);
  const ox = (rect.width - 1440 * sc) / 2;
  const oy = (rect.height - 860 * sc) / 2;
  return {
    x: (clientX - rect.left - ox) / sc,
    y: (clientY - rect.top - oy) / sc,
  };
}

export type MeshNodePos = {
  x: number;
  y: number;
  r: number;
  near: number;
};

export function meshNodePositions(
  mesh: BandMesh,
  tick: number,
  live: boolean,
  cursorX: number,
  cursorY: number
): MeshNodePos[] {
  const cx = live ? cursorX : 1100;
  const cy = live ? cursorY : 480;
  const R = 320;
  return mesh.nodes.map((n, i) => {
    const dx = cx - n.x;
    const dy = cy - n.y;
    const d = Math.hypot(dx, dy) || 1;
    const pull = live ? 1 : 0.35;
    const f = d < R ? Math.pow(1 - d / R, 2) * 90 * pull : 0;
    return {
      x: n.x + (dx / d) * f + Math.sin(tick * 0.07 + i) * 3,
      y: n.y + (dy / d) * f + Math.cos(tick * 0.06 + i * 1.3) * 3,
      r: n.r,
      near: d < R ? 1 - d / R : 0,
    };
  });
}
