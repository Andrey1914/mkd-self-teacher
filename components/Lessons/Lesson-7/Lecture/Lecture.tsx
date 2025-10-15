import React from "react";

import { Apartments } from "./Dialogue";
import { Intro } from "./Intro";
import { Paragraph } from "@/components/lesson/Paragraph";
import { GenericTable } from "@/components/lesson/Tables";

import { lectureLesson7 } from "@/prisma/lessons/paragraph";
import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-7";

import {
  getColorizedItalicTdClassName,
  tableWithoutBorderClassName,
  getColorizedThClassName,
} from "@/components/lesson/Tables/rules";

const { intro } = lectureLesson7;

export const Lecture = () => {
  return (
    <>
      <Intro />
      <Apartments />
      <Paragraph data={intro} />
      <GenericTable
        lesson={vocabulary}
        classNames={{
          table: tableWithoutBorderClassName,
          th: getColorizedThClassName,
          td: getColorizedItalicTdClassName,
        }}
      />
    </>
  );
};
