import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-13";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-13";
import { lectureLesson13, grammarLesson13 } from "@/prisma/lessons/paragraph";
import { glossary, examples } from "@/prisma/lessons/tables";
import { exercisesLesson13 } from "@/prisma/lessons/exercises";

const { appearanceAndCare } = glossary;
const { intro, ruleAfterVocabulary, ruleAfterGlossary } = lectureLesson13;
const { formsOfRetelling } = grammarLesson13;
const { lesson13: examplesLesson13 } = examples;
const { example1, example2, example3, example4, example5 } = examplesLesson13;

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
} = exercisesLesson13;

export const lesson13 = {
  title: {
    ru: "Урок 13",
    mkd: "Лекциjя 13",
  },
  numericId: 13,
  slug: "lesson-13",
  sections: [
    {
      type: "lecture",
      slug: "lesson-13",
      title: {
        ru: "НАТАША ТЕРЯЕТ КОШЕЛЁК",
        mkd: "НАТАША ГУБИ ПАРИЧНИК",
      },
      subtitle: {
        ru: "ЛЕКСИКА",
        mkd: "ЛЕКСИКА",
      },
    },
  ],
  vocabulary: [vocabulary],
  paragraph: [intro, ruleAfterVocabulary, ruleAfterGlossary, formsOfRetelling],
  dialogues: [dialogueBlock],
  tables: [
    appearanceAndCare,
    { ...example1, slug: "lesson-13" },
    { ...example2, slug: "lesson-13" },
    { ...example3, slug: "lesson-13" },
    { ...example4, slug: "lesson-13" },
    { ...example5, slug: "lesson-13" },
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
