import type { LessonData } from "@/types";
import { grammarLesson1, lectureLesson1 } from "@/prisma/lessons/paragraph";
import {
  conjugationLesson1,
  grammarPronouns,
  alphabetTable,
  countriesNationalitiesTable,
  examples,
} from "@/prisma/lessons/tables";
import {
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  exercise5,
  exercise6,
  exercise7,
  exercise8,
  exercise9,
} from "@/prisma/lessons/exercises/lesson-1";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-1";
import { payAttentionsLesson1 } from "@/prisma/lessons/pay-attention";
import { vocabulary1, vocabulary2 } from "@/prisma/lessons/vocabulary/lesson-1";

const { payAttention1, payAttention2, payAttention3 } = payAttentionsLesson1;

const {
  phonetics,
  features,
  accent,
  exceptions,
  spelling,
  toBe,
  verbConjugation,
  verbType,
  intro,
  ruleConjugation,
  negation,
} = grammarLesson1;

const { intro: lectureIntro } = lectureLesson1;

const { aClass, eClass, iClass } = conjugationLesson1; //tables

const { lesson1: examplesLesson1 } = examples;
const {
  example1,
  example2,
  example3,
  example4,
  example5,
  example6,
  example7,
  example8,
} = examplesLesson1;

const { grammarPronouns1, grammarPronouns2 } = grammarPronouns;

export const lesson1: LessonData = {
  title: {
    ru: "Урок 1",
    mkd: "Лекциjа 1",
  },
  numericId: 1,
  slug: "lesson-1",
  sections: [
    {
      type: "lecture",
      slug: "lesson-1",
      anchor: "lesson-1_airport",
      title: {
        ru: "АЭРОПОРТ",
        mkd: "АЕРОДРОМ",
      },
      subtitle: {
        ru: "ЛЕКСИКА",
        mkd: "ЛЕКСИКА",
      },
    },
    lectureIntro,
    ...alphabetTable.sections.map((section) => ({
      ...section,
      type: "alphabet",
      title: "",
    })),
  ],
  paragraph: [
    phonetics,
    features,
    accent,
    exceptions,
    spelling,
    toBe,
    verbConjugation,
    verbType,
    intro,
    ruleConjugation,
    negation,
    lectureIntro,
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
  dialogues: [dialogueBlock],
  payAttention: [payAttention1, payAttention2, payAttention3],
  vocabulary: [vocabulary1, vocabulary2],
  tables: [
    { ...aClass, slug: "lesson-1" },
    { ...eClass, slug: "lesson-1" },
    { ...iClass, slug: "lesson-1" },

    { ...example1, slug: "lesson-1" },
    { ...example2, slug: "lesson-1" },
    { ...example3, slug: "lesson-1" },
    { ...example4, slug: "lesson-1" },
    { ...example5, slug: "lesson-1" },
    { ...example6, slug: "lesson-1" },
    { ...example7, slug: "lesson-1" },
    { ...example8, slug: "lesson-1" },

    grammarPronouns1,
    grammarPronouns2,

    countriesNationalitiesTable,
  ],
};
