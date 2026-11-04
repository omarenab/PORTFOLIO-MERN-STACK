import { useTheme } from "../../hooks/useTheme";

const Preloader = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`fixed inset-0 z-9999 flex flex-col items-center justify-center transition-colors duration-300 ${
        darkMode ? "bg-[#1d1b19]" : "bg-beige"
      }`}
    >
      <div className="flex items-center gap-2 mb-8">
        <span className="text-5xl font-bold text-primary">
          O
        </span>
        <span className="text-5xl font-bold text-secondary">
          E
        </span>
      </div>

      <div className="w-40 h-1 rounded-full overflow-hidden bg-gray-500/20">
        <div className="h-full w-full rounded-full bg-primary animate-loading-bar" />
      </div>

      <p className="mt-4 text-xs tracking-[0.3em] text-primary">
        LOADING...
      </p>
    </div>
  );
};

export default Preloader;
