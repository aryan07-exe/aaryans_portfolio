let cached: TorchScene | null = null;

export type TorchScene = {
  nodes: { x: number; y: number; r: number }[];
  edges: [number, number][];
  code: string;
};

export function buildTorchScene(): TorchScene {
  if (cached) return cached;
  let a = 29;
  const rnd = () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const nodes: { x: number; y: number; r: number }[] = [];
  for (let i = 0; i < 170; i++) {
    nodes.push({ x: 20 + rnd() * 1400, y: 20 + rnd() * 820, r: 1 + rnd() * 1.4 });
  }
  const seen: Record<string, 1> = {};
  const edges: [number, number][] = [];
  nodes.forEach((p, i) => {
    nodes
      .map((q, j) => ({ j, d: Math.hypot(p.x - q.x, p.y - q.y) }))
      .filter((o) => o.j !== i && o.d < 150)
      .sort((m, n) => m.d - n.d)
      .slice(0, 2)
      .forEach((o) => {
        const k = i < o.j ? `${i}-${o.j}` : `${o.j}-${i}`;
        if (!seen[k]) {
          seen[k] = 1;
          edges.push([i, o.j]);
        }
      });
  });
  const block = [
    "# iou: bounding-box agreement",
    "def iou(a, b):",
    "    inter = overlap(a, b)",
    "    return inter / (area(a) + area(b) - inter)",
    "",
    "# cohen kappa: categorical labels",
    "kappa = (p_o - p_e) / (1 - p_e)",
    "",
    "graph = StateGraph(AgentState)",
    'graph.add_node("planner", plan)',
    'graph.add_node("retriever", retrieve)',
    'graph.add_edge("planner", "retriever")',
    "app = graph.compile()",
    "",
    "def fuse(video_emb, audio_emb):",
    "    return head(concat(video_emb, audio_emb))",
    "",
    '@router.post("/query")',
    "async def query(q: Query, user=Depends(auth)):",
    "    docs = vectorstore.search(q.text, k=5)",
    "    return llm.answer(q.text, docs)",
    "",
    "class Workspace(Base):",
    '    roles = relationship("Role")',
    "",
    "def safe_path(root, p):",
    '    assert resolve(root, p).startswith(root)',
    "",
  ].join("\n");
  cached = { nodes, edges, code: `${block}\n${block}\n${block}` };
  return cached;
}

export function torchMask(x: number, y: number): string {
  return `radial-gradient(circle 300px at ${x.toFixed(0)}px ${y.toFixed(0)}px, #000 0%, rgba(0,0,0,0.9) 30%, transparent 100%)`;
}

export function torchLightPos(
  t: number,
  w: number,
  h: number,
  live: boolean,
  cx: number,
  cy: number
): { x: number; y: number } {
  if (live) return { x: cx, y: cy };
  return {
    x: w / 2 + Math.sin(t * 0.03) * w * 0.3,
    y: h / 2 + Math.sin(t * 0.045 + 1) * h * 0.2,
  };
}

export function meshPositions(
  scene: TorchScene,
  lightX: number,
  lightY: number,
  R = 280,
  pull = 55
) {
  return scene.nodes.map((n) => {
    const dx = lightX - n.x;
    const dy = lightY - n.y;
    const d = Math.hypot(dx, dy) || 1;
    const f = d < R ? Math.pow(1 - d / R, 2) * pull : 0;
    return {
      x: n.x + (dx / d) * f,
      y: n.y + (dy / d) * f,
      r: n.r,
    };
  });
}
