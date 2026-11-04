import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../hooks/useTheme";

const Footer = () => {
  const { darkMode } = useTheme();
  const navLinks = [
    { name: "Projects", path: "/#projects" },
    { name: "About", path: "/#about" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <footer
      className={`border-t ${darkMode ? "bg-muted" : "bg-beige"} border-none`}
    >
      <div className="mx-auto max-w-7xl px-3 py-12 lg:px-4">
        <div className="flex gap-10 flex-row items-center justify-between">
          <div className="flex items-center ">
            <Link
              to="/#home"
              className={`text-2xl font-bold  ${darkMode ? "text-primary" : "text-theme"} `}
            >
              Omar
              <span
                className={`text-lg ml-1 ${darkMode ? "text-secondary" : "text-surface"}`}
              >
                Enab
              </span>
            </Link>

            <img src="/icons/grapes.svg" alt="Icon" className="w-8 h-8 mx-1" />
          </div>

          <nav className="flex lg:flex-row flex-col gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-md  transition-colors duration-300 ${darkMode ? `hover:text-secondary text-primary` : `hover:text-surface text-theme`} `}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="max-w-2xl ">
            <Link
              to="/#home"
              onClick={() => {
                document.getElementById("home")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              aria-label="Back to top"
              className={`group ${darkMode ? `text-primary` : `text-theme`} flex items-center gap-2 transition-colors duration-300 ${darkMode ? `hover:text-secondary` : `hover:text-surface`}`}
            >
              Back to top
              <ArrowUp
                size={16}
                className={`transition-transform  duration-300 group-hover:-translate-y-1`}
              />
            </Link>
          </div>
        </div>

        <div
          className={`my-8 h-px ${darkMode ? "bg-white/10" : "bg-theme"}  `}
        />

        <div
          className={`flex   flex-col sm:items-center items-center justify-between ${darkMode ? `text-primary` : `text-theme`} gap-4 text-sm  md:flex-row`}
        >
          <p>© {new Date().getFullYear()} Omar Enab</p>
          <div className=" flex flex-row gap-6 items-center text-md leading-tight">
            <p>Think</p>
            <p>Create</p>
            <p> Elevate</p>
          </div>
          <p>All rights reserved .</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
