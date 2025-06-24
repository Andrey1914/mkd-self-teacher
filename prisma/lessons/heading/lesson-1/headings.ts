import { LessonHeadingSchema } from "@/types/headingTypes";

export const lectureLesson1: LessonHeadingSchema = {
  title: [`<span>Урок 1, Лекциjя 1</span>`],
  slug: "lesson-1",
  level: 1,
  sections: [
    {
      type: "lecture",
      level: 2,
      title: [`ЛЕКСИКА`, `<span>ЛЕКСИКА</span>`],
      content: {
        level: 3,
        subtitle: ["ВВЕДЕНИЕ"],
      },
    },
    {
      type: "lecture",
      level: 2,
      title: [`ЛЕКСИКА`, `<span>ЛЕКСИКА</span>`],
      content: {
        level: 2,
        subtitle: [`ДИАЛОГ`, `<span>ДИЈАЛОГ</span>`],
      },
    },
  ],
};
