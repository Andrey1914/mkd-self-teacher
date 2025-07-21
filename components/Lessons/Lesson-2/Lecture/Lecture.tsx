import React from "react";

import { DialogueAtTaxiAndHotel } from "@/components/Lessons/Lesson-2/Lecture/Dialogue";
import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";
import { Vocabulary } from "@/components/lesson/Vocabulary/Vocabulary";

import { lecture } from "@/prisma/lessons/paragraph";
import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-2";

const { ruleAfterDialogue, explanation } = lecture;

const Lecture = () => {
  return (
    <>
      <DialogueAtTaxiAndHotel />
      <Paragraph data={ruleAfterDialogue} />
      <Vocabulary lesson={vocabulary} />
      <Paragraph data={explanation} />
    </>
  );
};

export default Lecture;
