import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-10";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-10";
// import { lectureLesson10 } from "@/prisma/lessons/paragraph";
import {
  glossary,
  // grammarTables, examples
} from "@/prisma/lessons/tables";
// import { payAttentionsLesson10 } from "@/prisma/lessons/pay-attention";
// import { exercisesLesson10 } from "@/prisma/lessons/exercises";

// const { intro, ruleAfterGlossary } = lectureLesson10;
const { health } = glossary;
// const { aorist, iClassVerbs, perfectiveVerbs } = grammarTables;
// const { lesson9: examplesLesson10 } = examples;
// const { example1 } = examplesLesson10;

// const { payAttention1 } = payAttentionsLesson10;

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
// } = exercisesLesson10;

export const lesson10 = {
  title: {
    ru: "Урок 10",
    mkd: "Лекциjя 10",
  },
  numericId: 10,
  slug: "lesson-10",
  sections: [
    {
      type: "lecture",
      slug: "lesson-10",
      title: {
        ru: "ЗДОРОВЬЕ",
        mkd: "ЗДРАВJЕ",
      },
      subtitle: {
        ru: "ЛЕКСИКА",
        mkd: "ЛЕКСИКА",
      },
    },
  ],
  //   paragraph: [intro, ruleAfterGlossary],
  vocabulary: [vocabulary],
  dialogues: [dialogueBlock],
  tables: [
    health,
    // { ...example1, slug: "lesson-10" },
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
  //   ],
};
