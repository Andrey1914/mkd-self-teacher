import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-9";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-9";
import { lectureLesson9 } from "@/prisma/lessons/paragraph";
import { glossary, grammarTables, examples } from "@/prisma/lessons/tables";
import { payAttentionsLesson9 } from "@/prisma/lessons/pay-attention";
import { exercisesLesson9 } from "@/prisma/lessons/exercises";

const { intro, ruleAfterGlossary } = lectureLesson9;
const { clothingAccessories } = glossary;
const { aorist, iClassVerbs, perfectiveVerbs } = grammarTables;
const { lesson9: examplesLesson9 } = examples;
const { example1 } = examplesLesson9;

const { payAttention1 } = payAttentionsLesson9;

const {
  exercise1,
  //   exercise2,
  //   exercise3,
  //   exercise4,
  //   exercise5,
  //   exercise6,
  //   exercise7,
  //   exercise8,
  //   exercise9,
  //   exercise10,
} = exercisesLesson9;

export const lesson9 = {
  title: {
    ru: "Урок 9",
    mkd: "Лекциjя 9",
  },
  numericId: 9,
  slug: "lesson-9",
  sections: [
    {
      type: "lecture",
      slug: "lesson-9",
      title: {
        ru: "МАГАЗИН",
        mkd: "ПРОДАВНИЦА",
      },
      subtitle: {
        ru: "ЛЕКСИКА",
        mkd: "ЛЕКСИКА",
      },
    },
  ],
  paragraph: [intro, ruleAfterGlossary],
  vocabulary: [vocabulary],
  dialogues: [dialogueBlock],
  tables: [
    clothingAccessories,
    aorist,
    iClassVerbs,
    perfectiveVerbs,
    { ...example1, slug: "lesson-9" },
  ],
  payAttention: [payAttention1],

  exercises: [
    exercise1,
    //     exercise2,
    //     exercise3,
    //     exercise4,
    //     exercise5,
    //     exercise6,
    //     exercise7,
    //     exercise8,
    //     exercise9,
    //     exercise10,
  ],
};
