"use client";

import { useState, useEffect, useMemo, startTransition } from "react";
import { useRouter } from "next/navigation";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import { useWindowScrollRestore } from "@/hooks";
import { LessonPageContentProps } from "./types";

import { Header } from "@/components/app";
import { LessonSwiper } from "@/components/app/Swiper";

import styles from "@/app/page.module.css";

export function LessonPageContent({
  lessons,
  activeLessonId,
}: LessonPageContentProps) {
  const router = useRouter();

  const initialIndex = useMemo(() => {
    const idx = lessons.findIndex((l) => l.id === activeLessonId);
    return idx >= 0 ? idx : 0;
  }, [lessons, activeLessonId]);

  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(false);

  const currentLessonId = useMemo(() => {
    return lessons[activeIndex]?.id.toString() || activeLessonId.toString();
  }, [activeIndex, lessons, activeLessonId]);

  useWindowScrollRestore(currentLessonId);

  const handleTabChange = (index: number) => {
    if (index === activeIndex) return;

    setIsLoading(true);

    const lessonId = lessons[index].id;

    router.push(`/lesson/${lessonId}`);
    setActiveIndex(index);

    localStorage.setItem(`lesson-${lessonId}-index`, index.toString());

    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  };

  const onSlideChange = (swiper: SwiperType) => {
    const index = swiper.activeIndex;
    const lessonId = lessons[index].id;

    startTransition(() => {
      setActiveIndex(index);

      router.push(`/lesson/${lessonId}`);

      localStorage.setItem(`lesson-${lessonId}-index`, index.toString());
    });
  };

  useEffect(() => {
    if (activeIndex !== initialIndex) {
      const lessonId = lessons[activeIndex].id;
      window.history.replaceState(null, "", `/lesson/${lessonId}`);
    }
  }, [activeIndex, lessons, initialIndex]);

  return (
    <div className={styles.page}>
      <Header
        activeIndex={activeIndex}
        onChange={handleTabChange}
        lessonTitles={lessons.map((l) => l.title)}
        isLoading={isLoading}
      />

      <main className={styles.main}>
        <LessonSwiper
          lessons={lessons}
          activeIndex={activeIndex}
          activeLessonId={activeLessonId}
          initialIndex={initialIndex}
          onSlideChange={onSlideChange}
        />
      </main>

      <footer className={styles.footer} />
    </div>
  );
}
