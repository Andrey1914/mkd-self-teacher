"use client";

import { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import styles from "./page.module.css";
import { Lesson1, Lesson2, Lesson3, Lesson4 } from "@/components/Lessons";
import { Header } from "@/components/app";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const lessons = [
    { title: "Урок 1", component: <Lesson1 /> },
    { title: "Урок 2", component: <Lesson2 /> },
    { title: "Урок 3", component: <Lesson3 /> },
    { title: "Урок 4", component: <Lesson4 /> },
  ];

  const handleTabChange = (index: number) => {
    setActiveIndex(index);
    swiperRef.current?.slideTo(index);
  };

  return (
    <>
      <div className={styles.page}>
        <>
          <Header
            activeIndex={activeIndex}
            onChange={handleTabChange}
            lessonTitles={lessons.map((l) => l.title)}
          />
        </>
        <main className={styles.main}>
          <Swiper
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={0}
            slidesPerView={1}
            allowTouchMove
            initialSlide={activeIndex}
          >
            {lessons.map((lesson, index) => (
              <SwiperSlide key={index}>{lesson.component}</SwiperSlide>
            ))}
          </Swiper>
        </main>
        <footer className={styles.footer}>
          <p>- Ready to move on to the next lesson? -</p>
        </footer>
      </div>
    </>
  );
}
