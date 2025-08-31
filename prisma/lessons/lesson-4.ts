import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-4";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-4";
import { payAttentionsLesson4 } from "@/prisma/lessons/pay-attention";
// import { glossary, pronounsTable, examples } from "@/prisma/lessons/tables";
import { grammarLesson4 } from "@/prisma/lessons/paragraph";
import { grammarTables } from "@/prisma/lessons/tables";
// import { exercisesLesson3 } from "@/prisma/lessons/exercises";

const { payAttention1, payAttention2 } = payAttentionsLesson4;

// const { occupationTable } = glossary;

const { definitenessCategory } = grammarLesson4;

const { definitenessCategoryTable } = grammarTables;

// const { personalPronounsTable } = pronounsTable;

// const { lesson3: examplesLesson3 } = examples;

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
// } = examplesLesson3;

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
// } = exercisesLesson3;

export const lesson4 = {
  title: [`<span>Урок 4, Лекциjя 4</span>`],
  slug: "lesson-4",
  sections: [
    {
      type: "lecture",
      title: [`ЗНАКОМСТВО С ГОРОДОМ`, `<span>ЗАПОЗНАВАЊЕ СО ГРАДОТ</span>`],
      subtitle: [`ЛЕКСИКА`, `<span>ЛЕКСИКА</span>`],
    },
  ],
  paragraph: [definitenessCategory],

  vocabulary: [vocabulary],

  dialogues: [dialogueBlock],

  payAttention: [payAttention1, payAttention2],

  tables: [
    definitenessCategoryTable,
    // { ...example1, slug: "lesson-4" },
    // { ...example2, slug: "lesson-4" },
    // { ...example3, slug: "lesson-4" },
    // { ...example4, slug: "lesson-4" },
    // { ...example5, slug: "lesson-4" },
    // { ...example6, slug: "lesson-4" },
    // { ...example7, slug: "lesson-4" },
    // { ...example8, slug: "lesson-4" },
    // { ...example9, slug: "lesson-4" },
    // { ...example10, slug: "lesson-4" },
    // { ...example11, slug: "lesson-4" },
    // { ...example12, slug: "lesson-4" },
  ],
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
  //   ],
};
