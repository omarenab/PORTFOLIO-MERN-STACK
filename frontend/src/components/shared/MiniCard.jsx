import { twMerge } from "tailwind-merge";

const MiniCard = ({ skill, darkMode, className, ...props }) => {
  return (
    <div
      key={skill}
      {...props}
      className={twMerge(
        `rounded-lg px-3 font-bold py-2 text-xs ${darkMode ? "bg-primary text-secondary" : "bg-beige text-theme"} hover:scale-105  transition-all duration-300 ${darkMode ? `bg-primary` : `bg-beige`} hover:scale-110) `,
        className,
      )}
    >
      {skill}
    </div>
  );
};

export default MiniCard;
