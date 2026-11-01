import { useRef } from "react";
import { profile } from "../data/content";
import { useSectionReveal } from "../hooks/useGsap";
import { Footer } from "./Footer";
import "./Contact.css";

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  useSectionReveal(ref);

  return (
    <>
      <section id="contact" className="contact section-pad" ref={ref}>
        <div className="sectionTag" data-reveal>
          06 / Contact
        </div>
        <h2 className="contact-head head-one-line" data-reveal>
          LET&apos;S <span className="contact-stroke">BUILD.</span>
        </h2>
        <p className="contact-lede mono" data-reveal>
          Open to AI engineering roles, collaborations, and hard problems worth shipping.
        </p>
        <a className="contact-email" href={`mailto:${profile.email}`} data-reveal>
          {profile.email}
        </a>
        <div className="contact-cta-row" data-reveal>
          <a href={`mailto:${profile.email}`} className="btn btn-primary mono">
            Start a conversation ↗
          </a>
          <a href={profile.github} className="btn btn-ghost mono" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
