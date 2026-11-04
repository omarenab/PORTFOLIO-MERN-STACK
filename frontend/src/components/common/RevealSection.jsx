
import useInView from "../../hooks/useInView";

const RevealSection = ({ children, className = "" }) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`${className} ${
        isInView
          ? "animate-fade-in-up"
          : "translate-y-6 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default RevealSection;
