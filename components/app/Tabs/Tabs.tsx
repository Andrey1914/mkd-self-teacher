import { useRef, useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { TabsProps } from "@/types";

import { styles } from "./styles";

export const Tabs = ({ tabs, activeIndex, onChange }: TabsProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [localIndex, setLocalIndex] = useState(activeIndex);
  const {
    tabsContainer,
    swiper,
    swiperSlide,
    active,
    tab: tabStyle,
  } = styles.tabs;

  useEffect(() => {
    setLocalIndex(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(activeIndex, 300);
    }
  }, [activeIndex]);

  const handleTabClick = useCallback(
    (index: number) => {
      if (index === localIndex) return;

      setLocalIndex(index);

      onChange(index);
    },
    [localIndex, onChange],
  );

  const isHoveringRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onEnter = () => {
      isHoveringRef.current = true;
    };

    const onLeave = () => {
      isHoveringRef.current = false;
    };

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const onWheel = (e: WheelEvent) => {
      if (!isHoveringRef.current) return;

      e.preventDefault();

      const delta = e.deltaY || e.deltaX;

      if (delta > 0) {
        swiper.slideNext(250);
      } else {
        swiper.slidePrev(250);
      }
    };

    document.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      document.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div ref={containerRef} className={tabsContainer}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Mousewheel, FreeMode]}
        slidesPerView="auto"
        centeredSlides={true}
        centeredSlidesBounds={true}
        simulateTouch={true}
        spaceBetween={8}
        touchStartPreventDefault={false}
        touchMoveStopPropagation={true}
        allowTouchMove={true}
        //swipe
        threshold={20}
        touchAngle={45}
        touchRatio={1}
        //-------
        freeMode={{
          enabled: true,
          sticky: true,
          momentum: true,
          momentumRatio: 0.5,
        }}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1.5,
          releaseOnEdges: true,
        }}
        cssMode={false}
        grabCursor
        preventClicks={true}
        preventClicksPropagation={true}
        className={swiper}
      >
        {tabs.map((tab, index) => (
          <SwiperSlide key={index} className={swiperSlide}>
            <button
              onClick={() => handleTabClick(index)}
              className={`${tabStyle} ${index === localIndex ? active : ""}`}
              style={{
                borderBottom:
                  index === localIndex
                    ? "2px solid var(--foreground)"
                    : "2px solid transparent",
                userSelect: "none",
              }}
            >
              {tab}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
