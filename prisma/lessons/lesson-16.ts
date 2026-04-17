import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-16";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-16";
import { lectureLesson16 } from "@/prisma/lessons/paragraph";
import { examples } from "@/prisma/lessons/tables";
import { exercisesLesson16 } from "@/prisma/lessons/exercises";

const { ruleAfterVocabulary, ruleAfterGlossary } = lectureLesson16;

const { lesson16: examplesLesson16 } = examples;
const { example1, example2, example3, example4 } = examplesLesson16;

const {
  exercise1,
  // exercise2, exercise3, exercise4, exercise5, exercise6, exercise7, exercise8, exercise9
} = exercisesLesson16;

export const lesson16 = {
  title: {
    ru: "Урок 16",
    mkd: "Лекциjа 16",
  },
  numericId: 16,
  slug: "lesson-16",
  sections: [
    {
      type: "lecture",
      slug: "lesson-16",
      title: {
        ru: "МУЗЫКА",
        mkd: "МУЗИКА",
      },
      subtitle: {
        ru: "ЛЕКСИКА",
        mkd: "ЛЕКСИКА",
      },
    },
  ],
  vocabulary: [vocabulary],
  paragraph: [ruleAfterVocabulary, ruleAfterGlossary],
  dialogues: [dialogueBlock],
  tables: [
    { ...example1, slug: "lesson-16" },
    { ...example2, slug: "lesson-16" },
    { ...example3, slug: "lesson-16" },
    { ...example4, slug: "lesson-16" },
  ],

  exercises: [
    exercise1,
    // exercise2, exercise3, exercise4, exercise5, exercise6, exercise7, exercise8, exercise9
  ],
};
