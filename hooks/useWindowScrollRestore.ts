import { useEffect } from "react";

export const useWindowScrollRestore = (lessonId: string) => {
  const MAX_AGE = 3 * 24 * 60 * 60 * 1000;

  useEffect(() => {
    history.scrollRestoration = "manual";

    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");

      let attempts = 0;

      const interval = setInterval(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "instant",
            block: "start",
          });

          clearInterval(interval);
        }

        attempts++;

        if (attempts > 20) {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }
    // if (window.location.hash) {
    //   return;
    // }

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
      if (window.location.hash) {
        return;
      }

      localStorage.setItem(
        `lesson-${lessonId}-window`,
        JSON.stringify({
          scrollY: window.scrollY,
          timestamp: Date.now(),
        }),
      );
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lessonId]);
};
