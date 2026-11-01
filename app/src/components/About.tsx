import { useRef } from "react";
import { profileRows, stats } from "../data/content";
import { useSectionReveal } from "../hooks/useGsap";
import "./About.css";

export function About() {
  const ref = useRef<HTMLElement>(null);
  useSectionReveal(ref);

  return (
    <section id="about" className="intro section-pad" ref={ref}>
      <div className="sectionTag" data-reveal>
        01 / About
      </div>
      <div className="intro-grid">
        <div data-reveal>
          <h2 className="intro-head">
            I build AI systems that move from idea → model → product.
          </h2>
          <p className="introCopy">
            Computer Science engineer and AI Engineer working across LLM applications, agentic
            workflows, multimodal ML, and backend systems. My work sits where intelligent models meet
            reliable software — annotation quality at scale, voice AI in clinical flows, RAG assistants,
            and tools developers actually use.
          </p>
          <p className="introCopy introCopy--second">
            I stay close to the stack: architecture, APIs, data, evaluation, and the product surface
            that makes the capability legible to users.
          </p>
        </div>
        <aside className="profile-panel" data-reveal>
          <div className="profile-panel__tag mono">profile.json</div>
          {profileRows.map((row) => (
            <div key={row.k} className="profile-row">
              <span className="mono profile-row__k">{row.k}</span>
              <span className="profile-row__v">{row.v}</span>
            </div>
          ))}
        </aside>
      </div>
      <div className="facts" data-reveal>
        {stats.map((s) => (
          <div key={s.label} className="fact">
            <b>{s.value}</b>
            <small>{s.label}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
