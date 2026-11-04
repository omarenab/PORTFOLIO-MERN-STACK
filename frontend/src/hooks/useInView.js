import { useEffect, useRef, useState } from "react";

const useInView = (rootMargin = " 0px") => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      {
        rootMargin,
        threshold: 0,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, isInView };
};

export default useInView;
