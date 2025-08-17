import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-3";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-3";
import { payAttention1 } from "@/prisma/lessons/pay-attention/lesson-3";
import { glossary, pronounsTable, examples } from "@/prisma/lessons/tables";
import { pronouns } from "@/prisma/lessons/paragraph";
// import {
//   exercise1,
//   exercise2,
//   exercise3,
//   exercise4,
//   exercise5,
//   exercise6,
//   exercise7,
//   exercise8,
// } from "@/prisma/lessons/exercises/lesson-3";

const { occupationTable } = glossary;

const { personalPronouns } = pronouns;
const { personalPronounsTable } = pronounsTable;

const { lesson3: examplesLesson3 } = examples;
const {
  example1,
  // example2,
  // example3,
  // example4,
  // example5,
  // example6,
  // example7,
  // example8,
} = examplesLesson3;

const lesson3 = {
  title: [`<span>Урок 3, Лекциjя 3</span>`],
  slug: "lesson-3",
  sections: [
    {
      type: "lecture",
      title: [`ЗНАКОМСТВО`, `<span>ЗАПОЗНАВАЊЕ</span>`],
      subtitle: [`ЛЕКСИКА`, `<span>ЛЕКСИКА</span>`],
    },
  ],
  paragraph: [personalPronouns],
  vocabulary: [vocabulary],
  dialogues: [dialogueBlock],
  payAttention: [payAttention1],
  tables: [
    occupationTable,
    personalPronounsTable,
    { ...example1, slug: "lesson-3" },
    // {
    //   title: personalPronounsTable.title || "personal-pronouns-table",
    //   data: personalPronounsTable,
    // },
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

export default lesson3;
