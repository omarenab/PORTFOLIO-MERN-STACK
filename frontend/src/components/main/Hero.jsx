import { ArrowRight, FolderCode, Code2, Layers3 } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import Button from "../shared/Button";
import BluredBackground from "../shared/BluredBackground";
import { FaDatabase, FaNode, FaReact } from "react-icons/fa";
import useScroll from "../../hooks/useScroll";
import useHero from "../../hooks/useHero";
import LoadingSpinner from "../shared/LoadingSpinner";
import ErrorMessage from "../common/ErrorMessage";

const Hero = () => {
  const { darkMode } = useTheme();
  const { scrollToSection } = useScroll();
  const { loading, error, heroData } = useHero();

  if (loading) {
    return <LoadingSpinner message="Loading about information..." />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }
  if (!heroData) return null;
  return (
    <section
      id="home"
      className="relative isolate  min-h-screen overflow-hidden text-primary px-4 py-12 sm:px-6 sm:py-16"
    >
      <BluredBackground imageURL="/images/coding-img.jpg" />

      <div className="absolute inset-0 -z-10" />

      <div className="absolute -left-32 top-1/4 -z-10 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-secondary/20 blur-[100px] sm:blur-[120px]" />

      <div className="mx-auto grid min-h-[calc(100svh-6rem)] max-w-7xl items-center gap-12 py-8 sm:py-12 lg:min-h-screen lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">
        <div className="relative z-10 min-w-0 text-center ">
          <div
            className={`my-6 sm:mb-7 inline-flex max-w-full items-center gap-2 sm:gap-3 rounded-full border ${
              darkMode
                ? "border-secondary/30 bg-secondary/10"
                : "border-beige/30 bg-beige/10"
            } px-3 py-2 sm:px-4 backdrop-blur-md`}
          >
            <span
              className={`h-2.5 w-2.5 shrink-0 animate-pulse rounded-full ${
                darkMode ? "bg-secondary" : "bg-surface"
              }`}
            />
            <span className="text-xs sm:text-sm font-medium tracking-wide">
              Full Stack Developer
            </span>
          </div>

          <div
            className={`mx-auto flex w-full max-w-xl flex-col items-center  rounded-full border-2  px-3 py-4 sm:px-8 md:px-12 lg:px-8 xl:px-12 ${
              darkMode ? "border-secondary/30" : "border-primary"
            } backdrop-blur-md font-family`}
          >
            <h1 className={`text-4xl leading-tight tracking-wider lg:text-5xl`}>
              {heroData.headline?.split(" ").slice(0, -1).join(" ")}{" "}
            </h1>

            <span
              className={`mt-1 text-3xl  lg:text-4xl ${
                darkMode ? "text-secondary" : "text-surface/80"
              }`}
            >
              {heroData.headline?.split(" ").at(-1)}
            </span>
          </div>

          <p className="mx-auto mt-5 max-w-lg text-sm  leading-6 opacity-90 sm:mt-6 sm:text-lg sm:leading-7 lg:mx-0">
            {heroData.description}
            <span className="block text-center">
              {" "}
              
            </span>
          </p>

          <div className="mt-7 flex flex-row  justify-center gap-3 sm:mt-8  sm:flex-wrap sm:gap-4 ">
            <Button
              onClick={() => scrollToSection("contact")}
              variant={darkMode ? "dark" : "light"}
              className="w-full justify-center gap-2 sm:w-auto"
            >
              {heroData.contactButtonInput}
                </Button>

            <Button
              href="/Omar-Enab-CV.pdf"
              download="Omar-Enab-CV.pdf"
              variant={darkMode ? "dark" : "light"}
              className="w-full justify-center gap-2 sm:w-auto"
            >
              
              {heroData.resumeButtonInput}
            </Button>
          </div>

          <div className="mt-12 sm:mt-16 flex text-primary flex-wrap md:gap-7 lg:gap-10 gap-3 items-center justify-center mx-auto gap-y-4 text-s opacity-80 sm:gap-x-8 sm:text-sm lg:justify-start">
            <span className={`flex rounded-2xl px-3 py-2 items-center gap-2 `}>
              <FaReact size={20} />
              React
            </span>

            <span className={`flex items-center gap-2 `}>
              <FaNode size={20} />
              Node.js
            </span>

            <span className={`flex items-center gap-2 `}>
              <Layers3 size={20} />
              Express
            </span>

            <span className={`flex items-center gap-2 `}>
              <FaDatabase size={20} />
              MongoDB
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-xl">
          <div className="absolute inset-10 rounded-full bg-secondary/25 blur-[80px] sm:blur-[100px]" />

          <div
            className={`relative min-w-0 overflow-hidden rounded-2xl border border-white/15 ${
              darkMode ? "bg-slate-950/85" : "bg-slate-550/20"
            } shadow-2xl ${
              darkMode ? "shadow-secondary/20" : "shadow-primary/20"
            } backdrop-blur-xl`}
          >
            <div className="flex items-center justify-between gap-2 border-b border-white/10 px-3 py-3 sm:px-5 sm:py-4">
              <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3" />
              </div>

              <span className="truncate text-xs text-slate-400">
                Omar_Enab.jsx
              </span>

              <Code2
                size={18}
                className={`shrink-0 ${darkMode ? `text-secondary` : `text-beige`}`}
              />
            </div>

            <div className="overflow-x-auto p-3 font-mono text-[11px] leading-6 sm:p-7 sm:text-sm sm:leading-7">
              <p className="whitespace-nowrap text-purple-300">
                const <span className="text-sky-300">developer</span> = {"{"}
              </p>

              <p className="whitespace-nowrap pl-4 sm:pl-5 text-slate-300">
                name: <span className="text-emerald-300">"Omar Enab"</span>,
              </p>

              <p className="whitespace-nowrap pl-4 sm:pl-5 text-slate-300">
                <span className="text-emerald-300">"Full Stack Developer"</span>
                ,
              </p>

              <p className="pl-4 sm:pl-5 text-slate-300">stack: [</p>

              <p className="whitespace-nowrap pl-7 sm:pl-10 text-yellow-200">
                "React", "Node.js",
              </p>

              <p className="whitespace-nowrap pl-7 sm:pl-10 text-yellow-200">
                "Express", "MongoDB"
              </p>

              <p className="pl-4 sm:pl-5 text-slate-300">],</p>

              <p className="whitespace-nowrap pl-4 sm:pl-5 text-slate-300">
                mindset:{" "}
                <span className="text-emerald-300">
                  "Think. Create. Elevate."
                </span>
              </p>

              <p className="text-purple-300">{"};"}</p>

              <p className="mt-4 whitespace-nowrap text-slate-500">
                // Turning ideas into applications...
              </p>
            </div>

            <div className="flex items-start gap-2 border-t border-white/10 px-3 py-3 text-[11px] leading-5 text-slate-400 sm:px-5 sm:text-xs">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>Ready to build something great</span>
            </div>
          </div>

          <div
            className={`relative -mt-4 ml-auto mr-2 flex w-fit max-w-[95%] items-center gap-3 rounded-2xl border-2 p-3 text-white shadow-xl backdrop-blur-md sm:-mt-5 sm:mr-3 sm:gap-4 sm:p-5 ${
              darkMode
                ? "bg-surface-dark border-secondary/30"
                : "bg-beige hover:border-primary"
            }`}
          >
            <div
              className={`shrink-0 rounded-xl p-2.5 sm:p-3 ${
                darkMode ? "bg-secondary/30" : "bg-surface/20"
              }`}
            >
              <FolderCode
                size={24}
                className={darkMode ? "text-secondary" : "text-surface"}
              />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-bold sm:text-base">Projects & Ideas</p>

              <button
                onClick={() => scrollToSection("projects")}
                className={`mt-1 flex items-center cursor-pointer gap-2 text-xs transition-all duration-300 hover:text-white sm:text-sm ${
                  darkMode ? "text-secondary" : "text-surface"
                }`}
              >
                Explore my work
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
