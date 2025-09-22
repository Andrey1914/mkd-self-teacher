import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-5";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-5";
// import { payAttentionsLesson4 } from "@/prisma/lessons/pay-attention";
import { glossary, examples } from "@/prisma/lessons/tables";
import { lectureLesson5 } from "@/prisma/lessons/paragraph";
// import { grammarTables } from "@/prisma/lessons/tables";
// import { exercisesLesson4 } from "@/prisma/lessons/exercises";

const { intro, ruleAfterGlossary, verbalNoun } = lectureLesson5;

const { foodTable } = glossary;

// const { payAttention1, payAttention2 } = payAttentionsLesson4;

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
} = examplesLesson5;

// const {
//   exercise1,
//   exercise2,
//   exercise3,
//   exercise4,
//   exercise5,
//   exercise6,
//   exercise7,
//   exercise8,
// } = exercisesLesson4;

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

  //   payAttention: [payAttention1, payAttention2],

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
  //   ],
};
