import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "../data/content";
import "./Experience.css";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 901px)", () => {
      const getScroll = () => Math.max(track.scrollWidth - window.innerWidth + window.innerWidth * 0.15, 0);

      const tween = gsap.to(track, {
        x: () => -getScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScroll() + window.innerHeight * 0.4}`,
          pin: true,
          scrub: 0.85,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const i = Math.round(self.progress * (experiences.length - 1));
            setActive(i);
          },
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    mm.add("(max-width: 900px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".exp-card", track);
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="experience" className="experience section-pad" ref={sectionRef}>
      <div className="exp-header">
        <div className="sectionHead">
          <h2 className="head-one-line">EXPERIENCE</h2>
          <p className="mono">where I have built</p>
        </div>
        <div className="exp-counter mono" aria-live="polite">
          <span className="exp-counter__now">{String(active + 1).padStart(2, "0")}</span>
          <span className="exp-counter__sep">/</span>
          <span>{String(experiences.length).padStart(2, "0")}</span>
        </div>
      </div>

      <p className="exp-scroll-hint mono">Scroll to walk through each role →</p>

      <div className="exp-viewport">
        <div className="exp-track" ref={trackRef}>
          {experiences.map((exp, i) => (
            <article
              key={exp.org}
              className={`exp-card ${i === active ? "exp-card--active" : ""}`}
              aria-hidden={i !== active}
            >
              <div className="exp-card__rail mono">
                <span>{exp.dates}</span>
                <span>{exp.place}</span>
              </div>
              <h3 className="exp-card__org">{exp.org}</h3>
              <div className="exp-card__role">{exp.role}</div>
              <p className="exp-card__narrative">{exp.narrative}</p>
              <ul className="exp-card__bullets">
                {exp.bullets.map((b) => (
                  <li key={b}>
                    <span className="mono">&gt;</span>
                    {b}
                  </li>
                ))}
              </ul>
              {exp.metrics.length > 0 ? (
                <div className="exp-card__metrics">
                  {exp.metrics.map((m) => (
                    <div key={m.l}>
                      <div className="exp-metric-v">{m.v}</div>
                      <div className="mono exp-metric-l">{m.l}</div>
                    </div>
                  ))}
                </div>
              ) : null}
              <div className="exp-card__tags mono">
                {exp.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="exp-dots" role="tablist" aria-label="Experience progress">
        {experiences.map((e, i) => (
          <button
            key={e.org}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`${e.org}, ${e.role}`}
            className={i === active ? "is-on" : ""}
            onClick={() => {
              setActive(i);
              const section = sectionRef.current;
              const track = trackRef.current;
              if (!section || !track || window.innerWidth <= 900) {
                track?.children[i]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
                return;
              }
              const st = ScrollTrigger.getAll().find((t) => t.trigger === section);
              if (st) {
                const target = i / (experiences.length - 1);
                const y = st.start + (st.end - st.start) * target;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          />
        ))}
      </div>
    </section>
  );
}
