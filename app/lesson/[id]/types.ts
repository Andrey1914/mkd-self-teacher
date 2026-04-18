export interface LessonPageContentProps {
  lessons: LessonItem[];
  activeLessonId: number;
}

interface LessonItem {
  id: number;
  component: string;
  title: string;
  description: string;
}
