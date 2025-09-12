import React from "react";

import { DialogueAtTaxiAndHotel } from "./Dialogue";
import { Paragraph } from "@/components/lesson/Paragraph";
import { Vocabulary } from "@/components/lesson/Vocabulary";

import { lectureLesson2 } from "@/prisma/lessons/paragraph";
import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-2";

const { ruleAfterDialogue, explanation } = lectureLesson2;

export const Lecture = () => {
  return (
    <>
      <DialogueAtTaxiAndHotel />
      <Paragraph data={ruleAfterDialogue} />
      <Vocabulary lesson={vocabulary} />
      <Paragraph data={explanation} />
    </>
  );
};
