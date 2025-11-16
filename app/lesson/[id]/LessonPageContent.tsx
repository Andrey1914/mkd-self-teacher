"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import styles from "../../page.module.css";

import {
  Lesson1,
  Lesson2,
  Lesson3,
  Lesson4,
  Lesson5,
  Lesson6,
  Lesson7,
  Lesson8,
  Lesson9,
} from "@/components/Lessons";
import { Header } from "@/components/app";

const LessonComponents: { [key: string]: React.ElementType } = {
  Lesson1,
  Lesson2,
  Lesson3,
  Lesson4,
  Lesson5,
  Lesson6,
  Lesson7,
  Lesson8,
  Lesson9,
};

interface LessonItem {
  id: number;
  component: string;
  title: string;
  description: string;
}

interface LessonPageContentProps {
  lessons: LessonItem[];
  activeLessonId: number;
}

export function LessonPageContent({
  lessons,
  activeLessonId,
}: LessonPageContentProps) {
  const initialIndex = useMemo(() => {
    return lessons.findIndex((l) => l.id === activeLessonId) || 0;
  }, [lessons, activeLessonId]);

  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleTabChange = (index: number) => {
    const lessonId = lessons[index].id;
    window.history.pushState(null, "", `/lesson/${lessonId}`);
    setActiveIndex(index);
    swiperRef.current?.slideTo(index);
  };

  useEffect(() => {
    if (activeIndex !== initialIndex) {
      const lessonId = lessons[activeIndex].id;
      window.history.replaceState(null, "", `/lesson/${lessonId}`);
    }
  }, [activeIndex, lessons, initialIndex]);

  return (
    <>
      <div className={styles.page}>
        <Header
          activeIndex={activeIndex}
          onChange={handleTabChange}
          lessonTitles={lessons.map((l) => l.title)}
        />
        <main className={styles.main}>
          <Swiper
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={15}
            slidesPerView={1}
            allowTouchMove
            initialSlide={initialIndex}
            style={{ padding: "10px 5px" }}
          >
            {lessons.map((lesson) => {
              const LessonComponent = LessonComponents[lesson.component];
              if (!LessonComponent) return null;

              return (
                <SwiperSlide key={lesson.id}>
                  <LessonComponent />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </main>
        <footer className={styles.footer}>
          <p>- Ready to move on to the next lesson? -</p>
        </footer>
      </div>
    </>
  );
}
