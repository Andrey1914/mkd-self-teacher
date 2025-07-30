import { noun, lecture } from "@/prisma/lessons/paragraph";
import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-2";
import { dialogueBlock } from "@/prisma/lessons/dialogues/lesson-2";

const {
  genderOfNouns,
  pluralOfNouns,
  feminineNouns,
  masculineNouns,
  neuterNouns,
} = noun;

const { ruleAfterDialogue, explanation } = lecture;

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
  ],
  vocabulary: [vocabulary],
  dialogues: [dialogueBlock],
};

export default lesson2;
