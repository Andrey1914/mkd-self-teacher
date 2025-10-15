import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-7";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-7";
import { lectureLesson7 } from "@/prisma/lessons/paragraph";
import { examples } from "@/prisma/lessons/tables";
// import { exercisesLesson7 } from "@/prisma/lessons/exercises";

const { intro } = lectureLesson7;
const { lesson7: examplesLesson7 } = examples;
const { example1, example2, example3, example4 } = examplesLesson7;

// const {
//   exercise1,
//   exercise2,
//   exercise3,
//   exercise4,
//   exercise5,
//   exercise6,
//   exercise7,
//   exercise8,
// } = exercisesLesson7;

export const lesson7 = {
  title: {
    ru: "Урок 7",
    mkd: "Лекциjя 7",
  },
  slug: "lesson-7",
  sections: [
    {
      type: "lecture",
      slug: "lesson-7",
      title: {
        ru: "АПАРТАМЕНТЫ",
        mkd: "АПАРТМАН",
      },
      subtitle: {
        ru: "ЛЕКСИКА",
        mkd: "ЛЕКСИКА",
      },
    },
  ],
  paragraph: [intro],
  vocabulary: [vocabulary],
  dialogues: [dialogueBlock],
  tables: [
    { ...example1, slug: "lesson-7" },
    { ...example2, slug: "lesson-7" },
    { ...example3, slug: "lesson-7" },
    { ...example4, slug: "lesson-7" },
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
