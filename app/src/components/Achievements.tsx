import { useRef } from "react";
import { awards, journey } from "../data/content";
import { useSectionReveal } from "../hooks/useGsap";
import "./Achievements.css";

export function Achievements() {
  const ref = useRef<HTMLElement>(null);
  useSectionReveal(ref);

  return (
    <section id="achievements" className="achievements section-pad" ref={ref}>
      <div className="sectionTag" data-reveal>
        04 / Recognition
      </div>
      <h2 className="ach-head" data-reveal>
        Built under pressure on national stages.
      </h2>

      <div className="award-grid" data-reveal>
        {awards.map((a) => (
          <article key={a.venue} className="award-card">
            <div className="mono award-venue">{a.venue}</div>
            <div className="award-rank">{a.rank}</div>
            <h3 className="award-headline">{a.headline}</h3>
            <span className="mono award-highlight">{a.highlight}</span>
            <p className="award-note">{a.note}</p>
          </article>
        ))}
      </div>

      <div className="ach-extra" data-reveal>
        <div className="ach-strip">
          <div className="mono ach-strip__label">Research</div>
          <p>
            MANIT Bhopal — solar-panel tilt prediction with ML · IIITM Gwalior × IIT Hyderabad
            (iHub-Data) — synthetic scenario generation for Indian traffic.
          </p>
        </div>
        <div className="ach-strip">
          <div className="mono ach-strip__label">2025 snapshot</div>
          <p>
            150 DSA problems · 50-day LeetCode streak · 300+ GitHub commits across AI/ML projects.
          </p>
        </div>
      </div>

      <div className="sectionTag journey-tag" data-reveal>
        05 / Journey
      </div>
      <h2 className="ach-head journey-head" data-reveal>
        From foundations to production AI.
      </h2>
      <div className="journey-row" data-reveal>
        {journey.map((j) => (
          <div key={j.n} className="journey-step">
            <div className="journey-rail">
              <span className={`journey-dot ${j.active ? "journey-dot--on" : ""}`} />
              <span className="journey-line" />
            </div>
            <div className="mono journey-meta">
              {j.n} · {j.when}
            </div>
            <div className="journey-title">{j.title}</div>
            <p className="journey-text">{j.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
