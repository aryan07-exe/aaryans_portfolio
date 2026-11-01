import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Grain, ScrollProgress } from "./components/Chrome";
import { useScrollProgress } from "./hooks/useGsap";
import "./App.css";

import { About } from "./components/About";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const progressRef = useRef<HTMLDivElement>(null);
  useScrollProgress(progressRef);

  return (
    <>
      <Grain />
      <ScrollProgress barRef={progressRef} />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Experience />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}

export default App;
