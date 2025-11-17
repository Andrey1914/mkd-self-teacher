import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-9";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-9";
import {
  lectureLesson9,
  // grammarLesson9
} from "@/prisma/lessons/paragraph";
import {
  glossary,
  grammarTables,
  // examples
} from "@/prisma/lessons/tables";
// import { payAttentionsLesson9 } from "@/prisma/lessons/pay-attention";
// import { exercisesLesson9 } from "@/prisma/lessons/exercises";

const { intro, ruleAfterGlossary } = lectureLesson9;
const { clothingAccessories } = glossary;
const { aorist } = grammarTables;
// const { imperative } = grammarLesson9;
// const { lesson9: examplesLesson9 } = examples;
// const {
//   example1,
//   example2,
//   example3,
//   example4,
//   example5,
//   example6,
//   example7,
//   example8,
// } = examplesLesson9;

// const { payAttention1 } = payAttentionsLesson9;

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
//   exercise10,
//   exercise11,
//   exercise12,
//   exercise13,
//   exercise14,
//   exercise15,
// } = exercisesLesson9;

export const lesson9 = {
  title: {
    ru: "Урок 9",
    mkd: "Лекциjя 9",
  },
  numericId: 9,
  slug: "lesson-9",
  sections: [
    {
      type: "lecture",
      slug: "lesson-9",
      title: {
        ru: "МАГАЗИН",
        mkd: "ПРОДАВНИЦА",
      },
      subtitle: {
        ru: "ЛЕКСИКА",
        mkd: "ЛЕКСИКА",
      },
    },
  ],
  paragraph: [intro, ruleAfterGlossary],
  vocabulary: [vocabulary],
  dialogues: [dialogueBlock],
  tables: [
    clothingAccessories,
    aorist,
    //     { ...example1, slug: "lesson-8" },
    //     { ...example2, slug: "lesson-8" },
    //     { ...example3, slug: "lesson-8" },
    //     { ...example4, slug: "lesson-8" },
    //     { ...example5, slug: "lesson-8" },
    //     { ...example6, slug: "lesson-8" },
    //     { ...example7, slug: "lesson-8" },
    //     { ...example8, slug: "lesson-8" },
  ],
  //   payAttention: [payAttention1],

  //   exercises: [
  //     exercise1,
  //     exercise2,
  //     exercise3,
  //     exercise4,
  //     exercise5,
  //     exercise6,
  //     exercise7,
  //     exercise8,
  //     exercise9,
  //     exercise10,
  //     exercise11,
  //     exercise12,
  //     exercise13,
  //     exercise14,
  //     exercise15,
  //   ],
};
