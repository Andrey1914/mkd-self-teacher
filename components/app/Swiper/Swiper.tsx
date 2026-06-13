"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import { useLessonCompletion, useWindowScrollRestore } from "@/hooks";
import { LessonSwiperProps } from "./types";

import { LessonComponents } from "@/components/Lessons/LessonRegistry";

import styles from "@/app/page.module.css";

export function LessonSwiper({
  lessons,
  activeIndex,
  activeLessonId,
  initialIndex,
  onSlideChange,
}: LessonSwiperProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  const slideRef = useRef<HTMLDivElement | null>(null);

  const [isSwiperLocked, setIsSwiperLocked] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);

  const isLastLesson = activeIndex === lessons.length - 1;

  const [renderedSlides, setRenderedSlides] = useState(() => {
    const initial = new Set<number>();

    if (initialIndex >= 0) {
      initial.add(initialIndex);
    }

    return initial;
  });

  const currentLessonId = useMemo(() => {
    return lessons[activeIndex]?.id.toString() || activeLessonId.toString();
  }, [activeIndex, lessons, activeLessonId]);

  useWindowScrollRestore(currentLessonId);

  useLessonCompletion(slideRef.current, activeIndex, () =>
    setShowCompletion(true),
  );

  useEffect(() => {
    setShowCompletion(false);
  }, [activeIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderedSlides((prev) => {
        const next = new Set(prev);

        if (activeIndex >= 0 && activeIndex < lessons.length) {
          next.add(activeIndex);
        }

        return next;
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [activeIndex, lessons.length]);

  // useEffect(() => {
  //   const saved = localStorage.getItem(`lesson-${activeLessonId}-index`);

  //   if (!saved) return;

  //   const index = parseInt(saved);

  //   if (index >= 0 && index < lessons.length) {
  //     swiperRef.current?.slideTo(index, 0);
  //   }
  // }, [activeLessonId, lessons.length]);

  useEffect(() => {
    if (!swiperRef.current) return;

    swiperRef.current.slideTo(activeIndex, 300);
  }, [activeIndex]);

  const setSwiperRef = (swiper: SwiperType) => {
    swiperRef.current = swiper;
  };

  const handleSwiperLock = (locked: boolean) => {
    setIsSwiperLocked(locked);

    if (!swiperRef.current) return;

    if (locked) {
      swiperRef.current.disable();
    } else {
      swiperRef.current.enable();
    }
  };

  return (
    <Swiper
      autoHeight={false}
      onSlideChange={onSlideChange}
      onSwiper={setSwiperRef}
      spaceBetween={50}
      slidesPerView={1}
      allowTouchMove={!isSwiperLocked}
      initialSlide={initialIndex}
      style={{
        padding: "10px 5px",
        height: "auto",
      }}
    >
      {lessons.map((lesson, index) => {
        const LessonComponent = LessonComponents[lesson.component];

        if (!LessonComponent) return null;

        const isLoaded = renderedSlides.has(index);

        return (
          <SwiperSlide key={lesson.id} style={{ height: "100%" }}>
            <div
              ref={index === activeIndex ? slideRef : null}
              style={{ display: "contents" }}
            >
              {isLoaded && <LessonComponent onSwiperLock={handleSwiperLock} />}

              <p
                className={`${styles.lessonCompletion} ${
                  showCompletion ? styles.visible : ""
                }`}
              >
                {isLastLesson
                  ? "🎉 Курс завершён! Вы прошли все уроки!"
                  : "Готовы перейти к следующему уроку?"}
              </p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
