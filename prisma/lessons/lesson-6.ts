import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-6";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-6";
import { lectureLesson6 } from "@/prisma/lessons/paragraph";
import { examples } from "@/prisma/lessons/tables";
import { exercisesLesson6 } from "@/prisma/lessons/exercises";

const { intro } = lectureLesson6;
const { lesson6: examplesLesson6 } = examples;
const { example1, example2, example3 } = examplesLesson6;

const {
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  exercise5,
  exercise6,
  //   exercise7,
  //   exercise8,
  //   exercise9,
} = exercisesLesson6;

export const lesson6 = {
  title: {
    ru: "Урок 6",
    mkd: "Лекциjя 6",
  },
  slug: "lesson-6",
  sections: [
    {
      type: "lecture",
      slug: "lesson-6",
      title: {
        ru: "АРЕНДА АВТОМОБИЛЯ",
        mkd: "ИЗНАJМУВАЊЕ АВТОМОБИЛ",
      },
      subtitle: {
        ru: "ЛЕКСИКА",
        mkd: "ЛЕКСИКА",
      },
    },
  ],
  paragraph: [intro],
  vocabulary: [vocabulary],
  dialogues: [dialogueBlock],
  tables: [
    { ...example1, slug: "lesson-6" },
    { ...example2, slug: "lesson-6" },
    { ...example3, slug: "lesson-6" },
  ],
  exercises: [
    exercise1,
    exercise2,
    exercise3,
    exercise4,
    exercise5,
    exercise6,
    // exercise7,
    // exercise8,
    // exercise9,
  ],
};
