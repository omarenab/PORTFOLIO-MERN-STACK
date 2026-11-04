import { Radio } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectLink = ({ url, type, darkMode, className }) => {
  const isLive = type === "live";

  const Icon = isLive ? Radio : FaGithub;
  const label = isLive ? "Live Demo" : "GitHub";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center font-semibold font-family ${darkMode ? "bg-primary" : "bg-beige"}  text-theme gap-2 rounded-lg  px-4 py-2 text-sm transition-all duration-300  hover:scale-105 
       `}
    >
      {label}
      <Icon className={className} size={16} />
    </a>
  );
};

export default ProjectLink;
