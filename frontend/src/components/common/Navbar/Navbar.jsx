import { Moon, Sun, X, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../hooks/useTheme";
import { useState } from "react";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = `font-medium transition-all duration-300 `;
  const navLinks = [
    {
      name: "Home",
      path: "/#home",
    },
    {
      name: "About",
      path: "/#about",
    },
    {
      name: "Projects",
      path: "/#projects",
    },
    {
      name: "Contact",
      path: "/#contact",
    },
    {
      name: "Services",
      path: "/#services",
    },
  ];

  const closeMenu = () => setMenuOpen(false);
  return (
    <nav
      className={`
    fixed
    top-0
    left-0
    z-50
    w-full
    backdrop-blur-2xl
    transition-all
    duration-300
    ${
      darkMode
        ? "bg-secondary/20"
        : " bg-beige/90"
    }
  `}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-2 py-4">
        <div className=" flex items-center justify-between ">
          <Link
            to="/#home"
            className={`text-3xl  transition-all duration-300 font-bold ${darkMode ? "text-primary" : "text-theme"}
          }`}
          >
            Omar 
            <span
              className={`text-lg ml-1 transition-all duration-300 ${darkMode ? "text-primary" : "text-theme"}`}
            >
              Enab
            </span>
          </Link>
          <img src="/icons/grapes.svg" alt="Icon" className="w-10 h-10 mx-4" />
        </div>
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-md font-medium mx-2 ${darkMode ? `text-primary` : `text-theme`}   duration-150  transition-transform  hover:-translate-y-2 `}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`${darkMode ? "hover:text-secondary" : "hover:text-surface"} rounded-full p-2.5 cursor-pointer transition-all duration-300 text-primary`}
          >
            {darkMode ? <Sun size={30} /> : <Moon size={30} />}
          </button>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className={`rounded-lg p-2 transition-colors cursor-pointer text-primary duration-300 md:hidden ${
              darkMode ? " hover:text-secondary" : " hover:text-surface"
            }`}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          id="mobile-navigation"
          className={`flex flex-col gap-1 border-t py-3 md:hidden ${
            darkMode ? "border-white/10" : "border-black/10"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={`rounded-lg ${darkMode ? `text-primary`:`text-theme`} px-4 py-3 transition-colors duration-200 ${
                linkStyle
              } ${darkMode ? "hover:text-secondary" : "hover:text-surface"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
