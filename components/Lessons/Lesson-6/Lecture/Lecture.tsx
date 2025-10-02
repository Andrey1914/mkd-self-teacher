import React from "react";

import { TripToOhrid } from "./Dialogue";
import { Intro } from "./Intro";
import { Paragraph } from "@/components/lesson/Paragraph";
import { GenericTable } from "@/components/lesson/Tables";

import { lectureLesson6 } from "@/prisma/lessons/paragraph";
import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-6";

import {
  getColorizedItalicTdClassName,
  tableWithoutBorderClassName,
  getColorizedThClassName,
} from "@/components/lesson/Tables/rules";

const { intro } = lectureLesson6;

export const Lecture = () => {
  return (
    <>
      <Intro />
      <TripToOhrid />
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
