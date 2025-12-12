import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-11";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-11";
import { glossary, examples } from "@/prisma/lessons/tables";
// import { exercisesLesson11 } from "@/prisma/lessons/exercises";

const { time } = glossary;
const { lesson11: examplesLesson11 } = examples;
const {
  example1,
  example2,
  example3,
  example4,
  example5,
  example6,
  example7,
  example8,
  example9,
  example10,
  example11,
  example12,
  example13,
} = examplesLesson11;

// const { exercise1, exercise2, exercise3, exercise4, exercise5 } =
//   exercisesLesson11;

export const lesson11 = {
  title: {
    ru: "Урок 11",
    mkd: "Лекциjя 11",
  },
  numericId: 11,
  slug: "lesson-11",
  sections: [
    {
      type: "lecture",
      slug: "lesson-11",
      title: {
        ru: "СОЧЕЛЬНИК И РОЖДЕСТВО",
        mkd: "БАДНИК И БОЖИК",
      },
      subtitle: {
        ru: "ЛЕКСИКА",
        mkd: "ЛЕКСИКА",
      },
    },
  ],
  vocabulary: [vocabulary],
  dialogues: [dialogueBlock],
  tables: [
    time,
    { ...example1, slug: "lesson-11" },
    { ...example2, slug: "lesson-11" },
    { ...example3, slug: "lesson-11" },
    { ...example4, slug: "lesson-11" },
    { ...example5, slug: "lesson-11" },
    { ...example6, slug: "lesson-11" },
    { ...example7, slug: "lesson-11" },
    { ...example8, slug: "lesson-11" },
    { ...example9, slug: "lesson-11" },
    { ...example10, slug: "lesson-11" },
    { ...example11, slug: "lesson-11" },
    { ...example12, slug: "lesson-11" },
    { ...example13, slug: "lesson-11" },
  ],

  //   exercises: [exercise1, exercise2, exercise3, exercise4, exercise5],
};
