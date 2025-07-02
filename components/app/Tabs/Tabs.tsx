"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";
import { TabsProps } from "@/types";

export const Tabs = ({ tabs, activeIndex, onChange }: TabsProps) => {
  return (
    <div
      style={{
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}
    >
      <Swiper slidesPerView="auto" spaceBetween={8}>
        {tabs.map((tab, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "auto",
              flexShrink: 0,
              margin: 0,
            }}
          >
            <button
              onClick={() => onChange(index)}
              style={{
                backgroundColor:
                  index === activeIndex
                    ? "rgba(191, 191, 191, 0.2)"
                    : "transparent",

                border: "none",
                borderBottom:
                  index === activeIndex
                    ? "2px solid #fff"
                    : "1px solid transparent",
                padding: "0.5rem 1rem",
                color: index === activeIndex ? "#fff" : "#c6b8b8",
                fontWeight: index === activeIndex ? "700" : "400",
                cursor: "pointer",
                transition: "border-bottom 0.2s ease",
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
