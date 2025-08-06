import {
  noun,
  lecture,
  adjectives,
  numerals,
} from "@/prisma/lessons/paragraph";
import { adjectivesTable, numeralsTable } from "@/prisma/lessons/tables";
import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-2";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-2";

const {
  genderOfNouns,
  pluralOfNouns,
  feminineNouns,
  masculineNouns,
  neuterNouns,
  countablePlural,
} = noun;

const { ruleAfterDialogue, explanation } = lecture;

const { introAdjectives, genderNumberPronominalText } = adjectives;

const { cardinalOrdinalNumerals } = numerals;

const { genderNumberPronominalOfAdjectives } = adjectivesTable;

const { cardinalOrdinalNumeralsTable } = numeralsTable;

const lesson2 = {
  title: [`<span>Урок 2, Лекциjя 2</span>`],
  slug: "lesson-2",
  sections: [
    {
      type: "lecture",
      title: [`ТАКСИ И ГОСТИНИЦА`, `<span>ТАКСИ И ХОТЕЛ</span>`],
      subtitle: [`ЛЕКСИКА`, `<span>ЛЕКСИКА</span>`],
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
};

export default lesson2;
