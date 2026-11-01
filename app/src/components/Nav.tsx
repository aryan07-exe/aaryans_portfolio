const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <nav className="nav">
      <a className="brand mono" href="#top">
        AS / 01
      </a>
      <div className="navlinks mono">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </div>
      <div className="navnum mono">AI ENGINEER · 2026</div>
    </nav>
  );
}
