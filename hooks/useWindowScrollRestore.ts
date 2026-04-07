import { useEffect } from "react";

export const useWindowScrollRestore = (lessonId: string) => {
  const MAX_AGE = 3 * 24 * 60 * 60 * 1000;

  useEffect(() => {
    const saved = localStorage.getItem(`lesson-${lessonId}-window`);
    if (saved) {
      try {
        const data = JSON.parse(saved);

        if (!data.timestamp || Date.now() - data.timestamp > MAX_AGE) {
          localStorage.removeItem(`lesson-${lessonId}-window`);
          window.scrollTo(0, 0);
          return;
        }

        setTimeout(() => window.scrollTo(0, data.scrollY), 200);
        // console.log(`RESTORED lesson-${lessonId}: ${scrollY}px`);
      } catch {
        localStorage.removeItem(`lesson-${lessonId}-window`);
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [lessonId]);

  useEffect(() => {
    const handleScroll = () => {
      localStorage.setItem(
        `lesson-${lessonId}-window`,
        JSON.stringify({
          scrollY: window.scrollY,
          timestamp: Date.now(),
        }),
      );
      // console.log(`SAVED lesson-${lessonId}: ${window.scrollY}px`);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lessonId]);
};
