import { useCallback, useRef } from "react";

export function useAutoScroll() {
  const scrollRAF = useRef<number | null>(null);
  const lastPointerY = useRef<number>(0);

  const stopAutoScroll = useCallback(() => {
    if (scrollRAF.current !== null) {
      cancelAnimationFrame(scrollRAF.current);
      scrollRAF.current = null;
    }
  }, []);

  const startAutoScroll = useCallback(() => {
    const scrollThreshold = 80;
    const scrollSpeed = 10;

    const performScroll = () => {
      const y = lastPointerY.current;
      const viewportHeight = window.innerHeight;
      let scrollDelta = 0;

      if (y < scrollThreshold) {
        scrollDelta = -scrollSpeed;
      } else if (y > viewportHeight - scrollThreshold) {
        scrollDelta = scrollSpeed;
      }

      if (scrollDelta !== 0) {
        window.scrollBy(0, scrollDelta);
        scrollRAF.current = requestAnimationFrame(performScroll);
      } else {
        scrollRAF.current = null;
      }
    };

    if (scrollRAF.current === null) {
      scrollRAF.current = requestAnimationFrame(performScroll);
    }
  }, []);

  const updatePointerPosition = useCallback((y: number) => {
    lastPointerY.current = y;
  }, []);

  return {
    startAutoScroll,
    stopAutoScroll,
    updatePointerPosition,
  };
}
