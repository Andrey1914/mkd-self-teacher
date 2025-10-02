import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";
import { GenericTable } from "@/components/lesson/Tables";

import { grammarLesson2 } from "@/prisma/lessons/paragraph";
import { genderNumberPronominalOfAdjectives } from "@/prisma/lessons/tables/adjectives";

import {
  tableWithoutBorderClassName,
  getColorizedThClassName,
  tdColorizedWithoutBorderClassName,
} from "@/components/lesson/Tables/rules";

const { introAdjectives, genderNumberPronominalText } = grammarLesson2;

export const Adjectives = () => {
  return (
    <>
      <Paragraph data={introAdjectives} />
      <GenericTable
        data={genderNumberPronominalOfAdjectives}
        classNames={{
          table: tableWithoutBorderClassName,
          td: tdColorizedWithoutBorderClassName,
          th: getColorizedThClassName,
        }}
      />
      <Paragraph data={genderNumberPronominalText} />
    </>
  );
};
