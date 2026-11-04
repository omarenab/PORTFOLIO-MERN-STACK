import LoadingSpinner from "../shared/LoadingSpinner";
import ErrorMessage from "../common/ErrorMessage";
import { useTheme } from "../../hooks/useTheme";
import GenericCard from "../shared/GenericCard";
import RevealSection from "../common/RevealSection";
import useSkills from "../../hooks/useSkills";
function Skills() {
  const { darkMode } = useTheme();
  const { error, loading, skills } = useSkills();

  if (loading) {
    return <LoadingSpinner message={`Loading about information...`} />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }
  if (!skills) return null;

  return (
    <section
      id="skills"
      className={`scroll-mt-24 animate-fade-up py-15  px-6 lg:py-20  ${darkMode ? "bg-surface-dark" : "bg-creamy"}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 items-center text-center">
          <h2
            className={`text-3xl ${darkMode ? "text-primary" : "text-theme"} tracking-[0.1em] uppercase font-family md:text-5xl`}
          >
            Skills & Technologies
          </h2>
          <hr
            className={`max-w-1/3 mx-auto my-2 ${darkMode ? `text-primary` : `text-theme`}`}
          />
          <p
            className={`mt-4 text-sm  ${darkMode ? "text-primary" : "text-theme"}  uppercase tracking-[0.3em] `}
          >
            What I work with
          </p>
        </div>

        <RevealSection>
          <div className="grid gap-6 mx-4 sm:mx-2 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((category, index) => {
              const Icon = category.icon;

              return (
                <div key={category.title}>
                  <GenericCard
                    key={`${category.title}-${index}`}
                    item={category}
                    className={"p-8"}
                    darkMode={darkMode}
                    Icon={Icon}
                  />
                </div>
              );
            })}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

export default Skills;
