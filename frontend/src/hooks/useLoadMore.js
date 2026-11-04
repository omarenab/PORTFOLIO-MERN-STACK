import { useState } from "react";

const useLoadMore = (projects, initialCount = 3, loadCount = 3) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < projects.length;
  const hasEnoughProjects = visibleCount < projects.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + loadCount, projects.length));
  };

  const showLess = () => {
    setVisibleCount(initialCount);
  };

  return {
    visibleProjects,
    visibleCount,
    hasMoreProjects,
    hasEnoughProjects,
    loadMore,
    showLess,
  };
};

export default useLoadMore;
