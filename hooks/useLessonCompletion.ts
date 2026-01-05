import { useEffect } from "react";

export function useLessonCompletion(
  slideRoot: HTMLElement | null,
  activeIndex: number,
  onReached: () => void
) {
  useEffect(() => {
    if (!slideRoot) return;

    const marker = slideRoot.querySelector("[data-lesson-end]");
    if (!marker) return;

    let triggered = false;

    const onScroll = () => {
      if (triggered) return;

      const rect = marker.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top <= viewportHeight - 80) {
        triggered = true;
        onReached();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [slideRoot, activeIndex, onReached]);
}
