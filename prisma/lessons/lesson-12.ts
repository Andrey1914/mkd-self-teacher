import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-12";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-12";
import { lectureLesson12, grammarLesson12 } from "@/prisma/lessons/paragraph";
import { glossary, examples, grammarTables } from "@/prisma/lessons/tables";
import { exercisesLesson12 } from "@/prisma/lessons/exercises";

const { family } = glossary;
const { intro, ruleAfterVocabulary, ruleAfterGlossary } = lectureLesson12;
const { perfectLForm } = grammarLesson12;
const { lesson12: examplesLesson12 } = examples;
const { perfect } = grammarTables;
const { example1, example2, example3, example4, example5 } = examplesLesson12;

const {
  exercise1,
  exercise2,
  // exercise3, exercise4, exercise5, exercise6, exercise7, exercise8, exercise9
} = exercisesLesson12;

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
  paragraph: [intro, ruleAfterVocabulary, ruleAfterGlossary, perfectLForm],
  dialogues: [dialogueBlock],
  tables: [
    family,
    perfect,
    { ...example1, slug: "lesson-12" },
    { ...example2, slug: "lesson-12" },
    { ...example3, slug: "lesson-12" },
    { ...example4, slug: "lesson-12" },
    { ...example5, slug: "lesson-12" },
  ],

  exercises: [
    exercise1,
    exercise2,
    // exercise3, exercise4, exercise5, exercise6, exercise7, exercise8, exercise9
  ],
};
