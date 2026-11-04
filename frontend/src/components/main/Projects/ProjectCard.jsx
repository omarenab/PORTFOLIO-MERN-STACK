import { useTheme } from "../../../hooks/useTheme";
import MiniCard from "../../shared/MiniCard";
import ProjectLink from "./ProjectLink";

const ProjectCard = ({ project }) => {
  const { darkMode } = useTheme();
  const { title, description, projectImage, techStack, liveUrl, gitHubUrl } =
    project;

  return (
    <article
      className={`overflow-hidden rounded-2xl cursor-pointer 
                hover:shadow-xl  hover:shadow-primary/10  ${darkMode ? "bg-secondary" : "bg-surface"} shadow-lg transition duration-300 hover:scale-95 `}
    >
      <img
        src={`${import.meta.env.VITE_BACKEND_URL}/assets/${projectImage}`}
        alt={`${title} preview`}
        loading="lazy"
        className="h-52 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold text-theme">{title}</h3>

        <p
          className={`mb-5 text-justify tracking-normal leading-relaxed  ${darkMode ? "text-primary" : "text-black"} text-sm  text-white`}
        >
          {description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <MiniCard
              key={`${tech}-${index}`}
              skill={tech}
              darkMode={darkMode}
              className={"px-3 py-1 rounded-full"}
            />
          ))}
        </div>
        <div className="flex items-center gap-4">
          <ProjectLink
            url={liveUrl}
            className={`text-red-500`}
            type="live"
            darkMode={darkMode}
          />
          <ProjectLink url={gitHubUrl} type="github" darkMode={darkMode} />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
