import {
  useRef,
  useState,
  useEffect,
  useCallback,
  startTransition,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { TabsProps } from "@/types";

import { styles } from "./styles";

export const Tabs = ({ tabs, activeIndex, onChange }: TabsProps) => {
  const swiperRef = useRef<any>(null);
  const [localIndex, setLocalIndex] = useState(activeIndex);
  const { swiper, swiperSlide, active, tab: tabStyle } = styles.tabs;

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

      startTransition(() => {
        onChange(index);
      });
    },
    [localIndex, onChange],
  );

  return (
    <>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Mousewheel, FreeMode]}
        slidesPerView="auto"
        centeredSlides={true}
        centeredSlidesBounds={true}
        simulateTouch={true}
        spaceBetween={8}
        touchStartPreventDefault={false}
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
          releaseOnEdges: false,
          eventsTarget: "container",
        }}
        cssMode={false}
        grabCursor
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
              }}
            >
              {tab}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
