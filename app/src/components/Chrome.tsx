import "./layout.css";

export function Grain() {
  return <div className="grain" aria-hidden="true" />;
}

export function ScrollProgress({ barRef }: { barRef: React.RefObject<HTMLDivElement | null> }) {
  return <div className="progress" ref={barRef} aria-hidden="true" />;
}
