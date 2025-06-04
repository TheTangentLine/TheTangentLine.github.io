import React, { useRef } from "react";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About/About";
// import Projects from "./components/Projects";

const App: React.FC = () => {
  // Create refs for each scrollable section
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  // Scroll handler to scroll into view of the target section
  const handleScrollTo = (section: string) => {
    switch (section) {
      case "home":
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Navbar onNavClick={handleScrollTo} />
      {/* 
      <section ref={homeRef} className="snap-start h-screen">
        <Home />
      </section> */}
      {/* <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">

        <section ref={aboutRef} className="snap-start h-screen">
          <About />
        </section>

        <section ref={projectsRef} className="snap-start h-screen">
          <Projects />
        </section>
      </main> */}
    </>
  );
};

export default App;
