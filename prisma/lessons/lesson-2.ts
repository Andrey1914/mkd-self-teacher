import { lectureLesson2, grammarLesson2 } from "@/prisma/lessons/paragraph";
import { adjectivesTable, numeralsTable } from "@/prisma/lessons/tables";
import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-2";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-2";
import {
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  exercise5,
  exercise6,
  exercise7,
  exercise8,
} from "@/prisma/lessons/exercises/lesson-2";

const { ruleAfterDialogue, explanation } = lectureLesson2;

const {
  genderOfNouns,
  pluralOfNouns,
  feminineNouns,
  masculineNouns,
  neuterNouns,
  countablePlural,
  introAdjectives,
  genderNumberPronominalText,
  cardinalOrdinalNumerals,
  finalPartCardinalOrdinalNumerals,
} = grammarLesson2;

const { genderNumberPronominalOfAdjectives } = adjectivesTable;

const { cardinalOrdinalNumeralsTable } = numeralsTable;

export const lesson2 = {
  title: {
    ru: "Урок 2",
    mkd: "Лекциjя 2",
  },
  numericId: 2,
  slug: "lesson-2",
  sections: [
    {
      type: "lecture",
      slug: "lesson-2",
      title: {
        ru: "ТАКСИ И ГОСТИНИЦА",
        mkd: "ТАКСИ И ХОТЕЛ",
      },
      subtitle: {
        ru: "ЛЕКСИКА",
        mkd: "ЛЕКСИКА",
      },
    },
  ],
  paragraph: [
    genderOfNouns,
    pluralOfNouns,
    feminineNouns,
    ruleAfterDialogue,
    explanation,
    masculineNouns,
    neuterNouns,
    countablePlural,
    introAdjectives,
    genderNumberPronominalText,
    cardinalOrdinalNumerals,
    finalPartCardinalOrdinalNumerals,
  ],
  vocabulary: [vocabulary],
  dialogues: [dialogueBlock],
  tables: [
    {
      type: "adjectives",
      category: "adjectives",
      title: "gender-number-pronominal",
      content: genderNumberPronominalOfAdjectives.content,
    },
    {
      type: "numerals",
      category: "numerals",
      title: "cardinal-ordinal-numerals",
      content: cardinalOrdinalNumeralsTable.content,
    },
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
  ],
};
