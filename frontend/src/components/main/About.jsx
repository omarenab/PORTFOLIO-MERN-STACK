import { useTheme } from "../../hooks/useTheme";
import GenericCard from "../shared/GenericCard";
import useAbout from "../../hooks/useAbout";
import { aboutHightLights } from "../../data/aboutData";
import LoadingSpinner from "../shared/LoadingSpinner";
import ErrorMessage from "../common/ErrorMessage";
import RevealSection from "../common/RevealSection";

function About() {
  const { darkMode } = useTheme();
  const { about, error, loading } = useAbout();
  if (loading) {
    return <LoadingSpinner message="Loading about information..." />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!about) return null;
  return (
    <section
      id="about"
      className={`scroll-mt-24 relative  ${darkMode ? "bg-surface-dark" : "bg-creamy"} px-6 py-20 `}
    >
      <div className="mx-auto max-w-7xl">
        <div className={`mb-12  flex items-center justify-center lg:text-4xl`}>
          <div className=" items-center ">
            <p
              className={`mb-3 md:text-4xl text-3xl font-family uppercase tracking-[0.1em] ${darkMode ? "text-primary" : "text-theme"}`}
            >
              Get to know me
            </p>
            <hr
              className={`max-w-60 ${darkMode ? `text-primary` : `text-theme`} mx-auto my-4`}
            />
          </div>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <h2
              className={`text-4xl  ${darkMode ? "text-primary" : "text-theme"} tracking-wide mb-2  md:text-5xl`}
            >
              About{" "}
              <span
                className={`text-4xl ${darkMode ? `text-lightblue` : `text-surface`}`}
              >
                me
              </span>
            </h2>
            <RevealSection>
              <h3
                className={`mb-8 ${darkMode ? "text-primary" : "text-theme"} text-2xl font-semibold md:text-3xl`}
              >
                {about?.title?.split(" ").slice(0, -1).join(" ")}{" "}
                <span className={darkMode ? "text-lightblue" : "text-surface"}>
                  {about?.title?.split(" ").at(-1)}
                </span>
              </h3>

              <p
                className={`mb-8 text-justify tracking-normal leading-relaxed  ${darkMode ? "text-primary/80" : "text-theme"}`}
              >
                {about?.description_1}
              </p>

              <p
                className={`mb-14 text-justify tracking-normal leading-relaxed ${darkMode ? "text-primary/80" : "text-theme"}`}
              >
                {about?.description_2}
              </p>

            </RevealSection>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-2xl
                 blur-3xl"
              />

              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/assets/${about.profileImage}`}
                alt="Portrait of Omar"
                loading="lazy"
                decoding="async"
                className="relative aspect-auto w-full max-w-sm h-160 lg:max-w-lg
                rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
        <div className="grid py-15 gap-4  lg:px-8 md:grid-cols-3">
          {aboutHightLights.map((item) => {
            const Icon = item.icon;

            return (
              <GenericCard
                key={item.title}
                Icon={Icon}
                item={item}
                className={"mx-4 lg:mx-0.5 py-8"}
                darkMode={darkMode}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
