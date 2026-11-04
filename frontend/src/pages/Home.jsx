import About from "../components/main/About";
import Contact from "../components/main/Contact/Contact";
import Hero from "../components/main/Hero";
import ProjectsList from "../components/main/Projects/ProjectsList";
import Services from "../components/main/Services";
import Skills from "../components/main/Skills";
import { useState, useEffect } from "react";
import Preloader from "../components/common/PreLoader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const startTime = Date.now();

    const initializeApp = async () => {
      if (document.readyState !== "complete") {
        await new Promise((resolve) => {
          window.addEventListener("load", resolve, {
            once: true,
          });
        });
      }

      await document.fonts.ready;

      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 700 - elapsed);

      setTimeout(() => {
        setIsLoading(false);
      }, remaining);
    };

    initializeApp();
  }, []);

  return (
    <>
      <div
        className={`transition-opacity duration-700 ${
          isLoading ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
      >
        <Hero />
        <About />
        <Skills />
        <ProjectsList />
        <Services />
        <Contact />
      </div>
      {isLoading && <Preloader />}
    </>
  );
};

export default Home;
