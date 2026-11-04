import { twMerge } from "tailwind-merge";
const IconTemplate = ({
  darkMode,
  href,
  children,
  className,
  rounded = "rounded-xl",
  height = "h-11",
  width = "w-11"
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="profile link"
      className={twMerge(
        `flex ${height} ${width} items-center border border-theme justify-center ${rounded} transition-all hover:-translate-y-1 ${
          darkMode
            ? "text-secondary bg-primary "
            : "text-theme bg-beige "
        }`,
        className,
      )}
    >
      {children}
    </a>
  );
};

export default IconTemplate;
