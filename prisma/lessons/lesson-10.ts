import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-10";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-10";
import { grammarLesson10 } from "@/prisma/lessons/paragraph";
import { glossary, grammarTables } from "@/prisma/lessons/tables";
import { exercisesLesson10 } from "@/prisma/lessons/exercises";

const { aorist } = grammarLesson10;
const { health } = glossary;
const { aSubtypes, oSubtypes, eSubtypes, nullSubtypes } = grammarTables;
const { aSubtype1, aSubtype2, aSubtype3 } = aSubtypes;
const { oSubtype1, oSubtype2 } = oSubtypes;
const { eSubtype } = eSubtypes;
const { nullSubtype } = nullSubtypes;

const {
  exercise1,
  //   exercise2,
  //   exercise3,
  //   exercise4,
  //   exercise5,
  //   exercise6,
} = exercisesLesson10;

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
  paragraph: [aorist],
  vocabulary: [vocabulary],
  dialogues: [dialogueBlock],
  tables: [
    health,
    aSubtype1,
    aSubtype2,
    aSubtype3,
    oSubtype1,
    oSubtype2,
    eSubtype,
    nullSubtype,
  ],

  exercises: [
    exercise1,
    //     exercise2,
    //     exercise3,
    //     exercise4,
    //     exercise5,
    //     exercise6,
  ],
};
