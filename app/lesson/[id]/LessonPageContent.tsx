"use client";

import { useState, useRef, useEffect, useMemo, startTransition } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { LessonComponents } from "@/components/Lessons/LessonRegistry";

import styles from "@/app/page.module.css";

import { Header } from "@/components/app";

import { useLessonCompletion, useWindowScrollRestore } from "@/hooks";

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
  const [isSwiperLocked, setIsSwiperLocked] = useState(false);

  const slideRef = useRef<HTMLDivElement | null>(null);
  const [showCompletion, setShowCompletion] = useState(false);

  const [renderedSlides, setRenderedSlides] = useState(() => {
    const initial = new Set<number>();

    [initialIndex].forEach((i) => {
      if (i >= 0 && i < lessons.length) initial.add(i);
    });
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
    const saved = localStorage.getItem(`lesson-${activeLessonId}-index`);
    if (saved) {
      const index = parseInt(saved);
      if (index >= 0 && index < lessons.length) {
        setActiveIndex(index);
        swiperRef.current?.slideTo(index, 0);
      }
    }
  }, [activeLessonId, lessons.length]);

  useEffect(() => {
    setShowCompletion(false);
  }, [activeIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderedSlides((prev) => {
        const next = new Set(prev);

        [activeIndex].forEach((i) => {
          if (i >= 0 && i < lessons.length) next.add(i);
        });
        return next;
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [activeIndex, lessons.length]);

  const handleTabChange = (index: number) => {
    const lessonId = lessons[index].id;

    window.history.pushState(null, "", `/lesson/${lessonId}`);

    swiperRef.current?.slideTo(index);

    startTransition(() => {
      setActiveIndex(index);
      localStorage.setItem(`lesson-${lessonId}-index`, index.toString());
    });
  };

  const onSlideChange = (swiper: SwiperType) => {
    const index = swiper.activeIndex;
    startTransition(() => {
      setActiveIndex(index);
      localStorage.setItem(
        `lesson-${lessons[index].id}-index`,
        index.toString(),
      );
    });
  };

  const setSwiperRef = (swiper: SwiperType) => {
    swiperRef.current = swiper;
  };

  const handleSwiperLock = (locked: boolean) => {
    setIsSwiperLocked(locked);
    if (swiperRef.current) {
      if (locked) {
        swiperRef.current.disable();
      } else {
        swiperRef.current.enable();
      }
    }
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
            autoHeight={false}
            onSlideChange={onSlideChange}
            onSwiper={setSwiperRef}
            spaceBetween={50}
            slidesPerView={1}
            allowTouchMove={!isSwiperLocked}
            initialSlide={initialIndex}
            style={{ padding: "10px 5px", height: "auto" }}
          >
            {lessons.map((lesson, index) => {
              const LessonComponent = LessonComponents[lesson.component];
              if (!LessonComponent) return null;

              const isLoaded = renderedSlides.has(index);
              // console.log(`Slide ${index}: ${isLoaded ? "RENDER" : "skip"}`);

              return (
                <SwiperSlide key={lesson.id} style={{ height: "100%" }}>
                  <div
                    ref={index === activeIndex ? slideRef : null}
                    style={{ display: "contents" }}
                  >
                    {isLoaded && (
                      <LessonComponent onSwiperLock={handleSwiperLock} />
                    )}

                    <p
                      className={`${styles.lessonCompletion} ${
                        showCompletion ? styles.visible : ""
                      }`}
                    >
                      Ready to move on to the next lesson?
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </main>
        <footer className={styles.footer}>
          {/* <p>- Ready to move on to the next lesson? -</p> */}
        </footer>
      </div>
    </>
  );
}
