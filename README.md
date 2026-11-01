# Aaryan Sahu — Portfolio (React)

Interactive portfolio built with **Vite + React + TypeScript + GSAP**, using the dark theme from `gpt_design.html` (`#080808` / `#f3f1eb` / `#ff6b35`) and layout patterns from your HTML prototypes.

## Run locally

```bash
cd app
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
cd app
npm run build
npm run preview
```

## Sections

| Section | Source inspiration |
|--------|---------------------|
| Hero | Particle canvas + cursor-reactive network (`gpt_design.html` + `Hero.dc.html`) |
| About | Editorial intro + `profile.json` panel (`Main.dc.html`) |
| Projects | Expandable horizontal panels (`Main.dc.html`) |
| Stack | Interactive orbital toolbox (`gpt_design.html`) |
| Experience | Tabbed detail panel (`Main.dc.html`) |
| Achievements & journey | Hackathon cards + timeline (`Main.dc.html`) |
| Contact | Large typographic CTA (`gpt_design.html`) |

Content is driven by `app/src/data/content.ts` (aligned with `aaryan_sahu_portfolio_content.md`).

## Legacy prototypes

The original static mocks remain in the repo root: `gpt_design.html`, `Main.dc.html`, `Hero.dc.html`.
