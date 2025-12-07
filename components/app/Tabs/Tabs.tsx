"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { TabsProps } from "@/types";

export const Tabs = ({ tabs, activeIndex, onChange }: TabsProps) => {
  return (
    <div
      style={{
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}
    >
      <Swiper slidesPerView="auto" spaceBetween={8} style={{ padding: "10px" }}>
        {tabs.map((tab, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "auto",
              flexShrink: 0,
              margin: "0 20px",
            }}
          >
            <button
              onClick={() => onChange(index)}
              style={{
                backdropFilter: index === activeIndex ? "blur(5px)" : "none",
                backgroundColor:
                  index === activeIndex
                    ? "rgba(0, 0, 90, 0.08)"
                    : "transparent",
                border: "none",
                borderRadius: "5px",
                borderBottom:
                  index === activeIndex
                    ? "0.5px solid #fff"
                    : "1px solid transparent",
                padding: "0.5rem 0.75rem",
                color: "#fff",
                fontWeight: index === activeIndex ? "700" : "300",
                cursor: "pointer",
                boxShadow:
                  index === activeIndex
                    ? `0 8px 32px rgba(0, 0, 0, 0.1),
         inset 0 1px 0 rgba(255, 255, 255, 0.5),
         inset 0 -1px 0 rgba(255, 255, 255, 0.1),
         inset 0 0 6px 3px rgba(255, 255, 255, 0.3)`
                    : "none",
                // boxShadow:
                //   index === activeIndex
                //     ? `rgb(255, 255, 255) 0px 0px 8px 0px`
                //     : "none",

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
