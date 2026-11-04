import { Download } from "lucide-react";
import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  variant = "light",
  type = "button",
  disabled = false,
  onClick,
  href,
  download,
  className,
}) => {
  const baseStyles =
    "cursor-pointer opacity-90 hover:scale-105 flex-row items-center border rounded-4xl px-6 sm:px-8 lg:px-16 py-3 lg:py-4 font-semibold transition-all duration-300";

  const variants = {
    light:
      " bg-beige hover:text-primary  hover:bg-surface text-theme ",

    dark: " bg-secondary hover:bg-primary  text-primary hover:text-secondary",
  };

  const classes = twMerge(
    `inline-flex items-center justify-center ${baseStyles} ${variants[variant]}`,
    className,
  );
  if (href && download) {
    return (
      <a href={href} download={download || undefined} className={classes}>
        {children}
        {download && <Download size={20} />}
      </a>
    );
  }

  return (
    <button
      href={href}
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
