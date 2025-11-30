import React from "react";

import { Dialogue } from "./Dialogue";
import { Intro } from "./Intro";
// import { Paragraph } from "@/components/lesson/Paragraph";
import { GenericTable } from "@/components/lesson/Tables";

// import { lectureLesson10 } from "@/prisma/lessons/paragraph";
import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-10";
import { glossary } from "@/prisma/lessons/tables";

import {
  getColorizedItalicTdClassName,
  tableWithoutBorderClassName,
  getColorizedThClassName,
} from "@/components/lesson/Tables/rules";

// const {  ruleAfterGlossary } = lectureLesson10;
const { health } = glossary;

export const Lecture = () => {
  return (
    <>
      <Intro />
      <Dialogue />
      <GenericTable
        lesson={vocabulary}
        classNames={{
          table: tableWithoutBorderClassName,
          th: getColorizedThClassName,
          td: getColorizedItalicTdClassName,
        }}
      />
      <GenericTable
        data={health}
        classNames={{
          table: tableWithoutBorderClassName,
          th: getColorizedThClassName,
          td: getColorizedItalicTdClassName,
        }}
      />
      {/* <Paragraph data={ruleAfterGlossary} /> */}
    </>
  );
};
