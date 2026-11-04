import { twMerge } from "tailwind-merge";
import MiniCard from "./MiniCard";

const GenericCard = ({
  item ,
  darkMode,
  Icon,
  size = 26,
  flex,
  className,
  ...props
}) => {
  return (
    <div
      key={item.title}
      {...props}
      className={twMerge(
        `rounded-xl  ${darkMode ? "bg-secondary" : "bg-surface"} 
                     p-5  transition-all duration-300 ${flex} gap-3 items-center justify-center
                    hover:-translate-y-1  cursor-pointer border border-transparent 
                    hover:shadow-md ${darkMode ? "hover:shadow-primary/30 hover:border-primary hover:bg-secondary/80  hover:text-primary" : "hover:shadow-theme/60  hover:bg-surface/95 hover:border-theme/60 hover:text-primary"} `,
        className,
      )}
    >
      <div className="flex gap-3 flex-row">

      <Icon
        size={size}
        className={`mb-3 text-primary $ shrink-0 transition-transform duration-300 group-hover:scale-110`}
      />

      <h4 className="mb-2  text-md tracking-wide sm:tracking-wider font-semibold">{item.title}</h4>
      </div>

      <p className="text-sm leading-6 mb-4 text-primary">{item.description}</p>

      <div className="flex flex-wrap gap-2">
        {item.skills?.map((skill,index) => (
          <MiniCard key={`${skill}-${index}`} skill={skill} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
};

export default GenericCard;
