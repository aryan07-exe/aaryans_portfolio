import { useCallback, useEffect, useState } from "react";
import { profile } from "../data/content";
import "./Footer.css";

const links = [
  { label: "Email", href: `mailto:${profile.email}`, copy: profile.email },
  { label: "GitHub", href: profile.github, copy: profile.github.replace("https://", "") },
  { label: "LinkedIn", href: profile.linkedin, copy: "LinkedIn profile" },
];

export function Footer() {
  const [time, setTime] = useState("");
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2200);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      showToast("Email copied");
    } catch {
      showToast("Copy failed — use the mail link");
    }
  };

  return (
    <footer className="site-footer section-pad">
      <div className="site-footer__top">
        <div>
          <div className="sectionTag">07 / Footer</div>
          <p className="site-footer__tagline">
            Building intelligent systems across GenAI, agents, ML, and backend — based in Gwalior.
          </p>
          <div className="site-footer__clock mono">
            <span className="site-footer__clock-dot" />
            IST {time || "—:—"} · {profile.location}
          </div>
        </div>
        <button type="button" className="site-footer__copy mono" onClick={copyEmail}>
          Copy email ↗
        </button>
      </div>

      <div className="site-footer__grid">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="site-footer__card"
            target={l.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={l.href.startsWith("mailto:") ? undefined : "noreferrer"}
          >
            <span className="mono site-footer__card-label">{l.label}</span>
            <span className="site-footer__card-arrow">↗</span>
            <span className="site-footer__card-line" aria-hidden="true" />
          </a>
        ))}
      </div>

      <div className="site-footer__bottom mono">
        <span>&copy; 2026 Aaryan Sahu</span>
        <span className="site-footer__quote">&quot;Living in dark (light attracts bugs)&quot;</span>
        <a href="#top" className="site-footer__toplink">
          Back to top ↑
        </a>
      </div>

      {toast ? (
        <div className="site-footer__toast mono" role="status">
          {toast}
        </div>
      ) : null}
    </footer>
  );
}
