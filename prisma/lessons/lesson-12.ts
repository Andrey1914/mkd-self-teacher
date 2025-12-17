import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-12";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-12";
import { lectureLesson12 } from "@/prisma/lessons/paragraph";
import { glossary, examples } from "@/prisma/lessons/tables";
// import { exercisesLesson11 } from "@/prisma/lessons/exercises";

const { family } = glossary;
const { intro, ruleAfterVocabulary, ruleAfterGlossary } = lectureLesson12;
const { lesson12: examplesLesson12 } = examples;
const {
  example1,
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
} = examplesLesson12;

// const { exercise1, exercise2, exercise3, exercise4, exercise5 } =
//   exercisesLesson11;

export const lesson12 = {
  title: {
    ru: "Урок 12",
    mkd: "Лекциjя 12",
  },
  numericId: 12,
  slug: "lesson-12",
  sections: [
    {
      type: "lecture",
      slug: "lesson-12",
      title: {
        ru: "НЕОЖИДАННАЯ ВСТРЕЧА",
        mkd: "НЕОЧЕКУВАНА СРЕДБА",
      },
      subtitle: {
        ru: "ЛЕКСИКА",
        mkd: "ЛЕКСИКА",
      },
    },
  ],
  vocabulary: [vocabulary],
  paragraph: [intro, ruleAfterVocabulary, ruleAfterGlossary],
  dialogues: [dialogueBlock],
  tables: [
    family,
    { ...example1, slug: "lesson-11" },
    //     { ...example2, slug: "lesson-11" },
    //     { ...example3, slug: "lesson-11" },
    //     { ...example4, slug: "lesson-11" },
    //     { ...example5, slug: "lesson-11" },
    //     { ...example6, slug: "lesson-11" },
    //     { ...example7, slug: "lesson-11" },
    //     { ...example8, slug: "lesson-11" },
    //     { ...example9, slug: "lesson-11" },
    //     { ...example10, slug: "lesson-11" },
    //     { ...example11, slug: "lesson-11" },
    //     { ...example12, slug: "lesson-11" },
    //     { ...example13, slug: "lesson-11" },
  ],

  //   exercises: [exercise1, exercise2, exercise3, exercise4, exercise5],
};
