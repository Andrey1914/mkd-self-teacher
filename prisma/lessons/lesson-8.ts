import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-8";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-8";
import { lectureLesson8, grammarLesson8 } from "@/prisma/lessons/paragraph";
import { examples } from "@/prisma/lessons/tables";
import { payAttentionsLesson8 } from "@/prisma/lessons/pay-attention";
import { exercisesLesson8 } from "@/prisma/lessons/exercises";

const { intro } = lectureLesson8;
const { imperative } = grammarLesson8;
const { lesson8: examplesLesson8 } = examples;
const {
  example1,
  example2,
  example3,
  example4,
  example5,
  example6,
  example7,
  example8,
} = examplesLesson8;

const { payAttention1 } = payAttentionsLesson8;

const {
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  exercise5,
  exercise6,
  exercise7,
  exercise8,
  exercise9,
  exercise10,
  exercise11,
  // exercise12,
  // exercise13,
  // exercise14,
  // exercise15,
} = exercisesLesson8;

export const lesson8 = {
  title: {
    ru: "Урок 8",
    mkd: "Лекциjя 8",
  },
  slug: "lesson-8",
  sections: [
    {
      type: "lecture",
      slug: "lesson-8",
      title: {
        ru: "ДОРОГА",
        mkd: "ПАТ",
      },
      subtitle: {
        ru: "ЛЕКСИКА",
        mkd: "ЛЕКСИКА",
      },
    },
  ],
  paragraph: [intro, imperative],
  vocabulary: [vocabulary],
  dialogues: [dialogueBlock],
  tables: [
    { ...example1, slug: "lesson-8" },
    { ...example2, slug: "lesson-8" },
    { ...example3, slug: "lesson-8" },
    { ...example4, slug: "lesson-8" },
    { ...example5, slug: "lesson-8" },
    { ...example6, slug: "lesson-8" },
    { ...example7, slug: "lesson-8" },
    { ...example8, slug: "lesson-8" },
  ],
  payAttention: [payAttention1],

  exercises: [
    exercise1,
    exercise2,
    exercise3,
    exercise4,
    exercise5,
    exercise6,
    exercise7,
    exercise8,
    exercise9,
    exercise10,
    exercise11,
    // exercise12,
    // exercise13,
    // exercise14,
    // exercise15,
  ],
};
