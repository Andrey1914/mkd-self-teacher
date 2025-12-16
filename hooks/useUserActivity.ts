import { useEffect, useRef, useState } from "react";

export const useUserActivity = (delay = 4000) => {
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    setVisible(true);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setVisible(false);
    }, delay);
  };

  useEffect(() => {
    const events = [
      "mousemove",
      "mousedown",
      "touchstart",
      "scroll",
      "keydown",
    ];

    events.forEach((event) =>
      window.addEventListener(event, resetTimer, { passive: true })
    );

    resetTimer();

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [delay]);

  return visible;
};
