import { useRef, useState } from "react";
import { projects } from "../data/content";
import { useSectionReveal } from "../hooks/useGsap";
import { ProjectVisual } from "./ProjectVisual";
import "./Projects.css";

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  useSectionReveal(ref);

  return (
    <section id="work" className="work section-pad" ref={ref}>
      <div className="sectionHead" data-reveal>
        <h2 className="head-one-line">SELECTED WORK</h2>
        <p className="mono">projects / experiments / systems</p>
      </div>

      <p className="work-hint mono" data-reveal>
        hover or focus a panel to expand · architecture-first builds
      </p>

      <div className="panel-row" data-reveal>
        {projects.map((p, i) => {
          const isActive = i === active;
          return (
            <article
              key={p.id}
              className={`panel ${isActive ? "panel--active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <button
                type="button"
                className="panel-hit"
                aria-expanded={isActive}
                aria-label={`Open ${p.title}`}
                onClick={() => setActive(i)}
              />
              {isActive ? (
                <div className="panel-body">
                  <div className="panel-top mono">
                    <span>
                      {p.n} / {p.tag}
                    </span>
                    <span className="panel-cat">{p.cat}</span>
                  </div>
                  <div className="panel-visual">
                    <ProjectVisual id={p.id} />
                  </div>
                  <h3>{p.title}</h3>
                  <div className="panel-highlight">{p.highlight}</div>
                  <p className="panel-desc">{p.desc}</p>
                  <div className="panel-stack mono">
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="panel-cta">
                    <a href={p.gh} className="btn btn-ghost mono" target="_blank" rel="noreferrer">
                      GitHub ↗
                    </a>
                    {p.live ? (
                      <a href={p.live} className="btn btn-primary mono" target="_blank" rel="noreferrer">
                        Live demo ↗
                      </a>
                    ) : null}
                  </div>
                </div>
              ) : (
                <div className="panel-collapsed">
                  <span className="mono panel-n">{p.n}</span>
                  <span className="panel-title-vert">{p.title}</span>
                  <span className="mono panel-tag-vert">{p.tag}</span>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div className="also-built mono" data-reveal>
        <span>Also built</span>
        <span className="chip">Detectify — object detection &amp; alerts</span>
        <span className="chip">Diabetes Agent</span>
        <a href="https://github.com/aryan07-exe" target="_blank" rel="noreferrer">
          50+ repositories on GitHub ↗
        </a>
      </div>
    </section>
  );
}
