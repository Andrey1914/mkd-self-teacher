import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import { TabsProps } from "@/types";

export const Tabs = ({ tabs, activeIndex, onChange }: TabsProps) => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const timeoutId = setTimeout(() => {
      swiper.slideTo(activeIndex, 300);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [activeIndex]);

  return (
    <div>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Mousewheel]}
        slidesPerView="auto"
        centeredSlides={true}
        centeredSlidesBounds={true}
        simulateTouch={true}
        spaceBetween={8}
        //swipe
        threshold={50}
        touchAngle={45}
        touchRatio={0.5}
        //-------
        // simulateTouch
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: false,
          eventsTarget: "container",
        }}
        grabCursor
        style={{
          paddingTop: "10px",
          borderBottom: "var(--tabs-border-bottom)",
        }}
      >
        {tabs.map((tab, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "auto",
              flexShrink: 0,
            }}
          >
            <button
              onClick={() => onChange(index)}
              style={{
                backgroundColor: "transparent",
                border: "none",

                borderBottom:
                  index === activeIndex
                    ? "2px solid var(--foreground)"
                    : "2px solid transparent",
                padding: "0.5rem 0.75rem 1rem 0.75rem",
                color:
                  index === activeIndex
                    ? "var(--foreground)"
                    : "var(--tab-inactive)",
                fontWeight: index === activeIndex ? "700" : "300",
                cursor: "pointer",

                transition: "border-bottom 0.2s ease, box-shadow 0.2s ease",
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
