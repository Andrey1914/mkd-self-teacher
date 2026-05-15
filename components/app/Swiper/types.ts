import type { Swiper as SwiperType } from "swiper";

export type LessonSwiperProps = {
  lessons: LessonItem[];
  activeIndex: number;
  activeLessonId: number;
  initialIndex: number;
  onSlideChange: (swiper: SwiperType) => void;
};

interface LessonItem {
  id: number;
  component: string;
  title: string;
  description: string;
}
