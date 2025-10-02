import React from "react";

import { DialogueAtTaxiAndHotel } from "./Dialogue";
import { Paragraph } from "@/components/lesson/Paragraph";
import { GenericTable } from "@/components/lesson/Tables";

import { lectureLesson2 } from "@/prisma/lessons/paragraph";
import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-2";

import {
  getColorizedItalicTdClassName,
  tableWithoutBorderClassName,
  getColorizedThClassName,
} from "@/components/lesson/Tables/rules";

const { ruleAfterDialogue, explanation } = lectureLesson2;

export const Lecture = () => {
  return (
    <>
      <DialogueAtTaxiAndHotel />
      <Paragraph data={ruleAfterDialogue} />
      <GenericTable
        lesson={vocabulary}
        classNames={{
          table: tableWithoutBorderClassName,
          th: getColorizedThClassName,
          td: getColorizedItalicTdClassName,
        }}
      />
      <Paragraph data={explanation} />
    </>
  );
};
