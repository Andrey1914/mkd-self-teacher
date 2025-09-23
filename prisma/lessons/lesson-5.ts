import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-5";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-5";
import { glossary, examples } from "@/prisma/lessons/tables";
import { lectureLesson5 } from "@/prisma/lessons/paragraph";
import { exercisesLesson5 } from "@/prisma/lessons/exercises";

const { intro, ruleAfterGlossary, verbalNoun } = lectureLesson5;

const { foodTable } = glossary;

const { lesson5: examplesLesson5 } = examples;

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
  example14,
} = examplesLesson5;

const {
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  //   exercise5,
  //   exercise6,
  //   exercise7,
  //   exercise8,
} = exercisesLesson5;

export const lesson5 = {
  title: [`<span>Урок 5, Лекциjя 5</span>`],
  slug: "lesson-5",
  sections: [
    {
      type: "lecture",
      title: [`РЕСТОРАН`, `<span>РЕСТОРАН</span>`],
      subtitle: [`ЛЕКСИКА`, `<span>ЛЕКСИКА</span>`],
    },
  ],
  paragraph: [intro, ruleAfterGlossary, verbalNoun],

  vocabulary: [vocabulary],

  dialogues: [dialogueBlock],

  tables: [
    foodTable,
    { ...example1, slug: "lesson-5" },
    { ...example2, slug: "lesson-5" },
    { ...example3, slug: "lesson-5" },
    { ...example4, slug: "lesson-5" },
    { ...example5, slug: "lesson-5" },
    { ...example6, slug: "lesson-5" },
    { ...example7, slug: "lesson-5" },
    { ...example8, slug: "lesson-5" },
    { ...example9, slug: "lesson-5" },
    { ...example10, slug: "lesson-5" },
    { ...example11, slug: "lesson-5" },
    { ...example12, slug: "lesson-5" },
    { ...example13, slug: "lesson-5" },
    { ...example14, slug: "lesson-5" },
  ],
  exercises: [
    exercise1,
    exercise2,
    exercise3,
    exercise4,
    //     exercise5,
    //     exercise6,
    //     exercise7,
    //     exercise8,
  ],
};
