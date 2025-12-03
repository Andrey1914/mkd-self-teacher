import React from "react";

import { Dialogue } from "./Dialogue";
import { Intro } from "./Intro";
import { GenericTable } from "@/components/lesson/Tables";

import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-10";
import { glossary } from "@/prisma/lessons/tables";

import {
  getColorizedItalicTdClassName,
  tableWithoutBorderClassName,
  getColorizedThClassName,
} from "@/components/lesson/Tables/rules";

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
    </>
  );
};
