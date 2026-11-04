import { useTheme } from "../../../hooks/useTheme";
import Button from "../../shared/Button";
import ProjectCard from "./ProjectCard";
import useLoadMore from "../../../hooks/useLoadMore";
import RevealSection from "../../common/RevealSection";
import useProjects from "../../../hooks/useProjects";
import LoadingSpinner from "../../shared/LoadingSpinner";
import ErrorMessage from "../../common/ErrorMessage";

const ProjectsList = () => {
  const { darkMode } = useTheme();
  const { projects, error, loading } = useProjects();
  const {
    visibleProjects,
    hasMoreProjects,
    hasEnoughProjects,
    loadMore,
    showLess,
  } = useLoadMore(projects);
  if (loading) {
    return <LoadingSpinner message="Loading about information..." />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }
  if (!projects) return null;
  return (
    <section
      id="projects"
      className={` ${darkMode ? "bg-surface-dark" : "bg-creamy"} py-15  px-6 lg:py-20 scroll-mt-24 md:px-12`}
    >
      <div className="mb-12 text-center">
        <h2
          className={`text-4xl uppercase tracking-[0.1em] font-family ${darkMode ? "text-primary" : "text-theme"}  md:text-5xl`}
        >
          My Work
        </h2>

        <hr
          className={`mx-auto my-2 w-42  ${darkMode ? `text-primary` : `text-theme`} `}
        />

        <p
          className={`mt-4 ${darkMode ? "text-primary" : "text-theme"} text-sm uppercase tracking-[0.3em] text-primary`}
        >
          Things I've built
        </p>
      </div>
      <RevealSection>
        <div className="lg:mx-2 mx-4 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <div
              key={project._id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard  project={project} />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          {hasEnoughProjects ? (
            hasMoreProjects ? (
              <Button onClick={loadMore} variant={darkMode ? "dark" : "light"}>
                Load More
              </Button>
            ) : (
              <Button onClick={showLess} variant={darkMode ? "dark" : "light"}>
                Show Less
              </Button>
            )
          ) : null}
        </div>
      </RevealSection>
    </section>
  );
};

export default ProjectsList;
