import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-3";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-3";
import { payAttentionsLesson3 } from "@/prisma/lessons/pay-attention";
import { glossary, pronounsTable, examples } from "@/prisma/lessons/tables";
import { grammarLesson3 } from "@/prisma/lessons/paragraph";
import { exercisesLesson3 } from "@/prisma/lessons/exercises";

const { payAttention1, payAttention2 } = payAttentionsLesson3;

const { occupationTable } = glossary;

const { personalPronouns, needVerb } = grammarLesson3;

const { personalPronounsTable } = pronounsTable;

const { lesson3: examplesLesson3 } = examples;

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
} = examplesLesson3;

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
} = exercisesLesson3;

export const lesson3 = {
  title: {
    ru: "Урок 3",
    mkd: "Лекциjя 3",
  },
  numericId: 3,
  slug: "lesson-3",
  sections: [
    {
      type: "lecture",
      slug: "lesson-3",
      title: {
        ru: "ЗНАКОМСТВО",
        mkd: "ЗАПОЗНАВАЊЕ",
      },
      subtitle: {
        ru: "ЛЕКСИКА",
        mkd: "ЛЕКСИКА",
      },
    },
  ],
  paragraph: [personalPronouns, needVerb],
  vocabulary: [vocabulary],
  dialogues: [dialogueBlock],
  payAttention: [payAttention1, payAttention2],

  tables: [
    occupationTable,
    personalPronounsTable,
    { ...example1, slug: "lesson-3" },
    { ...example2, slug: "lesson-3" },
    { ...example3, slug: "lesson-3" },
    { ...example4, slug: "lesson-3" },
    { ...example5, slug: "lesson-3" },
    { ...example6, slug: "lesson-3" },
    { ...example7, slug: "lesson-3" },
    { ...example8, slug: "lesson-3" },
    { ...example9, slug: "lesson-3" },
    { ...example10, slug: "lesson-3" },
    { ...example11, slug: "lesson-3" },
    { ...example12, slug: "lesson-3" },
  ],
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
  ],
};
