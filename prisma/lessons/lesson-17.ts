import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-17";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-17";
import { lectureLesson17 } from "@/prisma/lessons/paragraph";
// import { examples } from "@/prisma/lessons/tables";
// import { exercisesLesson17 } from "@/prisma/lessons/exercises";

const { ruleAfterVocabulary } = lectureLesson17;

// const { lesson17: examplesLesson17 } = examples;
// const { example1, example2, example3, example4 } = examplesLesson17;

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
// } = exercisesLesson17;

export const lesson17 = {
  title: {
    ru: "Урок 17",
    mkd: "Лекциjа 17",
  },
  numericId: 17,
  slug: "lesson-17",
  sections: [
    {
      type: "lecture",
      slug: "lesson-17",
      title: {
        ru: "ПРОЩАНИЕ",
        mkd: "ЗБОГУВАЊЕ",
      },
      subtitle: {
        ru: "ЛЕКСИКА",
        mkd: "ЛЕКСИКА",
      },
    },
  ],
  vocabulary: [vocabulary],
  paragraph: [ruleAfterVocabulary],
  dialogues: [dialogueBlock],
  //   tables: [
  //     { ...example1, slug: "lesson-17" },
  //     { ...example2, slug: "lesson-17" },
  //     { ...example3, slug: "lesson-17" },
  //     { ...example4, slug: "lesson-17" },
  //   ],

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
