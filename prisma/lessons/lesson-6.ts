import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-6";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-6";
import { lectureLesson6 } from "@/prisma/lessons/paragraph";
import { grammarLesson6 } from "@/prisma/lessons/paragraph";

const { intro } = lectureLesson6;

const { imperfect } = grammarLesson6;

// const { foodTable } = glossary;

// const { lesson5: examplesLesson6 } = examples;

// const {
//   example1,
//   example2,
//   example3,
//   example4,
//   example5,
//   example6,
//   example7,
//   example8,
//   example9,
//   example10,
//   example11,
//   example12,
//   example13,
//   example14,
// } = examplesLesson6;

// const {
//   exercise1,
//   exercise2,
//   exercise3,
//   exercise4,
//   exercise5,
//   exercise6,
//   exercise7,
//   exercise8,
//   exercise9,
// } = exercisesLesson6;

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
  paragraph: [intro, imperfect],
  vocabulary: [vocabulary],
  dialogues: [dialogueBlock],
  //   tables: [
  // foodTable,
  // { ...example1, slug: "lesson-5" },
  // { ...example2, slug: "lesson-5" },
  // { ...example3, slug: "lesson-5" },
  // { ...example4, slug: "lesson-5" },
  // { ...example5, slug: "lesson-5" },
  // { ...example6, slug: "lesson-5" },
  // { ...example7, slug: "le/sson-5" },
  // { ...example8, slug: "lesson-5" },
  // { ...example9, slug: "lesson-5" },
  // { ...example10, slug: "lesson-5" },
  // { ...example11, slug: "lesson-5" },
  // { ...example12, slug: "lesson-5" },
  // { ...example13, slug: "lesson-5" },
  // { ...example14, slug: "lesson-5" },
  //   ],
  //   exercises: [
  // exercise1,
  // exercise2,
  // exercise3,
  // exercise4,
  // exercise5,
  // exercise6,
  // exercise7,
  // exercise8,
  // exercise9,
  //   ],
};
