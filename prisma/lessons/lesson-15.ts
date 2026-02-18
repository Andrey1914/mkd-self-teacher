import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-14";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-14";
import { lectureLesson14, grammarLesson14 } from "@/prisma/lessons/paragraph";
import { glossary, examples, grammarTables } from "@/prisma/lessons/tables";
import { exercisesLesson14 } from "@/prisma/lessons/exercises";

const { sport } = glossary;
const { intro, ruleAfterVocabulary } = lectureLesson14;
const { futureInThePast } = grammarTables;
const { indefinitePronouns } = grammarLesson14;
const { lesson14: examplesLesson14 } = examples;
const { example1, example2, example3, example4, example5 } = examplesLesson14;

const {
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  exercise5,
  exercise6,
  exercise7,
} = exercisesLesson14;

export const lesson15 = {
  title: {
    ru: "Урок 15",
    mkd: "Лекциjя 15",
  },
  numericId: 15,
  slug: "lesson-15",
  sections: [
    {
      type: "lecture",
      slug: "lesson-15",
      title: {
        ru: "ИЗУЧЕНИЕ ЯЗЫКА",
        mkd: "УЧЕЊЕ ЈАЗИК",
      },
      subtitle: {
        ru: "ЛЕКСИКА",
        mkd: "ЛЕКСИКА",
      },
    },
  ],
  //   vocabulary: [vocabulary],
  //   paragraph: [intro, ruleAfterVocabulary, indefinitePronouns],
  //   dialogues: [dialogueBlock],
  //   tables: [
  //     sport,
  //     futureInThePast,
  //     { ...example1, slug: "lesson-14" },
  //     { ...example2, slug: "lesson-14" },
  //     { ...example3, slug: "lesson-14" },
  //     { ...example4, slug: "lesson-14" },
  //     { ...example5, slug: "lesson-14" },
  //   ],

  //   exercises: [
  //     exercise1,
  //     exercise2,
  //     exercise3,
  //     exercise4,
  //     exercise5,
  //     exercise6,
  //     exercise7,
  //   ],
};
