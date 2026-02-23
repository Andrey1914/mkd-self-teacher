import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-15";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-15";
import { lectureLesson15, grammarLesson15 } from "@/prisma/lessons/paragraph";
import { examples, grammarTables } from "@/prisma/lessons/tables";
// import { exercisesLesson15 } from "@/prisma/lessons/exercises";

const { ruleAfterVocabulary } = lectureLesson15;
const { pluperfect } = grammarLesson15;
const { pluperfect: pluperfectTable } = grammarTables;
const { lesson15: examplesLesson15 } = examples;
const { example1, example2, example3, example4, example5 } = examplesLesson15;

// const {
//   exercise1,
//   exercise2,
//   exercise3,
//   exercise4,
//   exercise5,
//   exercise6,
// } = exercisesLesson15;

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
  vocabulary: [vocabulary],
  paragraph: [ruleAfterVocabulary, pluperfect],
  dialogues: [dialogueBlock],
  tables: [
    pluperfectTable,
    { ...example1, slug: "lesson-15" },
    { ...example2, slug: "lesson-15" },
    { ...example3, slug: "lesson-15" },
    { ...example4, slug: "lesson-15" },
    { ...example5, slug: "lesson-15" },
  ],

  //   exercises: [
  //     exercise1,
  //     exercise2,
  //     exercise3,
  //     exercise4,
  //     exercise5,
  //     exercise6,
  //   ],
};
