import { useRef, useState } from "react";
import { orbSkills } from "../data/content";
import { useSectionReveal } from "../hooks/useGsap";
import "./TechStack.css";

type Filter = "all" | "ai" | "ml" | "eng";

export function TechStack() {
  const ref = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const [coreTitle, setCoreTitle] = useState("AI ENGINEER");
  const [coreSub, setCoreSub] = useState("click a capability");
  const [selected, setSelected] = useState("Explore the field");
  const [detail, setDetail] = useState("10 core capabilities · hover or click");

  useSectionReveal(ref);

  const onSkill = (name: string, sub: string) => {
    setCoreTitle(name.toUpperCase());
    setCoreSub(sub);
    setSelected(name);
    setDetail(`${sub} · part of my production and project work`);
  };

  return (
    <section id="stack" className="tech section-pad" ref={ref}>
      <header className="tech-header" data-reveal>
        <span className="sectionTag">03 / Toolbox</span>
        <div className="tech-header__body">
          <h2 className="tech-header__title">Systems I ship with</h2>
          <p className="tech-blurb">
            Not a logo wall — explore the stack behind my agents, RAG pipelines, and production
            backends. Filter by domain, then inspect each capability.
          </p>
        </div>
      </header>

      <div className="techStage" data-reveal>
        <div className="cat mono">
          {(
            [
              ["all", "All"],
              ["ai", "AI / Agents"],
              ["ml", "ML / Vision"],
              ["eng", "Engineering"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              className={filter === key ? "active" : ""}
              onClick={() => setFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="beam b1" />
        <div className="beam b2" />
        <div className="beam b3" />
        <div className="core">
          <div>
            <strong>{coreTitle}</strong>
            <small>{coreSub}</small>
          </div>
        </div>
        {orbSkills.map((s) => {
          const dim = filter !== "all" && s.filter !== filter;
          return (
            <button
              type="button"
              key={s.name}
              className={`skill ${s.filter} ${s.className} ${dim ? "skill--dim" : ""}`}
              onMouseEnter={() => onSkill(s.name, s.sub)}
              onFocus={() => onSkill(s.name, s.sub)}
              onClick={() => onSkill(s.name, s.sub)}
            >
              <b>{s.name}</b>
              <span>{s.filter === "ai" ? "AI / Agents" : s.filter === "ml" ? "ML / Vision" : "Engineering"}</span>
            </button>
          );
        })}
        <div className="techInfo mono">
          <strong>{selected}</strong>
          <span>{detail}</span>
        </div>
        <div className="techLegend mono">move cursor · choose category</div>
      </div>
    </section>
  );
}
