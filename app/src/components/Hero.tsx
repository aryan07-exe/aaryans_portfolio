import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { profile, tickerItems } from "../data/content";
import {
  buildBandMesh,
  heroPointerToViewBox,
  meshNodePositions,
} from "../data/heroBandMesh";
import { buildTorchScene, torchMask } from "../data/heroTorch";
import "./Hero.css";

const HERO_WORDS = ["agentic systems", "retrieval", "multimodal ML", "production APIs"];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const torchScene = useMemo(() => buildTorchScene(), []);
  const bandMesh = useMemo(() => buildBandMesh(), []);
  const [live, setLive] = useState(false);
  const [pointer, setPointer] = useState({ cx: 720, cy: 400 });
  const [cursor, setCursor] = useState({ x: 1100, y: 480 });
  const [tick, setTick] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setTick((t) => t + 1), 90);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setWordIdx((i) => (i + 1) % HERO_WORDS.length), 3200);
    return () => clearInterval(id);
  }, []);

  useLayoutEffect(() => {
    const root = contentRef.current;
    const section = sectionRef.current;
    if (!root || !section) return;
    const ctx = gsap.context(() => {
      gsap.set(root.querySelectorAll("[data-hero-in]"), { opacity: 1, y: 0 });
      gsap.from(root.querySelectorAll("[data-hero-in]"), {
        y: 22,
        opacity: 0,
        duration: 0.8,
        stagger: 0.06,
        ease: "power3.out",
        delay: 0.12,
      });
      gsap.from(section.querySelector(".hero-ticker"), {
        y: 20,
        opacity: 0,
        duration: 0.55,
        ease: "power3.out",
        delay: 0.45,
      });
    }, section);
    return () => ctx.revert();
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setLive(true);
    setPointer({ cx: e.clientX - r.left, cy: e.clientY - r.top });
    setCursor(heroPointerToViewBox(e.clientX, e.clientY, r));
  }, []);

  const onPointerLeave = useCallback(() => {
    setLive(false);
  }, []);

  const mask = live ? torchMask(pointer.cx, pointer.cy) : "none";
  const pos = meshNodePositions(bandMesh, tick, live, cursor.x, cursor.y);

  return (
    <section
      id="top"
      className="hero hero--torch"
      ref={sectionRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div className="hero-dot-grid" aria-hidden="true" />

      <div
        className="hero-torch-layer"
        aria-hidden="true"
        style={{
          opacity: live ? 1 : 0,
          WebkitMaskImage: mask,
          maskImage: mask,
        }}
      >
        <pre className="hero-code-bg mono">{torchScene.code}</pre>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <svg className="hero-mesh" viewBox="0 0 1440 860" preserveAspectRatio="xMidYMid slice">
          <g stroke="#f3f1eb" strokeWidth={1}>
            {bandMesh.edges.map(([i, j]) => {
              const p = pos[i];
              const q = pos[j];
              const near = Math.max(p.near, q.near);
              return (
                <line
                  key={`${i}-${j}`}
                  x1={p.x}
                  y1={p.y}
                  x2={q.x}
                  y2={q.y}
                  strokeOpacity={0.12 + near * 0.55}
                />
              );
            })}
          </g>
          <g fill="#f3f1eb">
            {pos.map((p, i) => (
              <circle
                key={i}
                cx={p.x}
                cy={p.y}
                r={p.r + p.near * 1.2}
                fillOpacity={0.35 + p.near * 0.5}
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="hero-meta-strip mono">
        <span>Portfolio / 2026</span>
        <span>
          {profile.coords} · {profile.location}
        </span>
      </div>

      <div className="hero-layout">
        <div className="heroContent" ref={contentRef}>
          <div className="hero-mark mono" data-hero-in aria-hidden="true">
            AS
          </div>
          <div className="hero-title-block" data-hero-in>
            <h1 className="hero-name">Aaryan Sahu</h1>
            <p className="hero-role">AI Engineer · Predusk · Gwalior</p>
          </div>
          <p className="hero-lead" data-hero-in>
            I turn{" "}
            <span className="hero-lead__swap" key={wordIdx}>
              {HERO_WORDS[wordIdx]}
            </span>{" "}
            into software that survives real users — memory, evaluation, and backends included.
          </p>
          <div className="hero-signal" data-hero-in>
            <p className="hero-signal__line">
              <span className="hero-signal__dot" />
              Now: quality systems across 50k+ annotations · IAA · multi-tenant RBAC
            </p>
            <p className="hero-signal__line">
              <span className="hero-signal__dot hero-signal__dot--dim" />
              Shipped: deepfake detection · document RAG · coding agents · voice AI workflows
            </p>
          </div>
          <a href="#work" className="hero-gate" data-hero-in>
            <span className="hero-gate__bar" aria-hidden="true" />
            <span className="hero-gate__text">Descend into the work</span>
            <span className="hero-gate__idx mono">01</span>
          </a>
        </div>
        <p className="hero-mesh-hint mono">
          Move your cursor
          <br />
          <span className="hero-mesh-hint__accent">the network reaches toward it</span>
        </p>
      </div>

      <div className="hero-ticker mono">
        <span className="ticker-label">Scroll ↓</span>
        <div className="ticker-track">
          <div className="ticker-inner">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={`${item}-${i}`}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
