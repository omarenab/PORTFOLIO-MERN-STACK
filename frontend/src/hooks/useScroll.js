const useScroll = () => {
  const scrollToSection = (section) => {
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return { scrollToSection };
};
export default useScroll;
