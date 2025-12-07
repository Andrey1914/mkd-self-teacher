import { DialogueCity } from "./Dialogue";
import { Intro } from "./Intro";
import { Paragraph } from "@/components/lesson/Paragraph";
import { GenericTable } from "@/components/lesson/Tables";

import { lectureLesson5 } from "@/prisma/lessons/paragraph";
import { glossary } from "@/prisma/lessons/tables";
import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-5";

import {
  tableWithoutBorderClassName,
  getColorizedThClassName,
  getColorizedFirstTdClassName,
  getColorizedItalicTdClassName,
} from "@/components/lesson/Tables/rules";

const { intro, ruleAfterGlossary } = lectureLesson5;
const { foodTable } = glossary;

export const Lecture = () => {
  return (
    <>
      <Intro />
      <DialogueCity />
      <Paragraph data={intro} />
      <GenericTable
        lesson={vocabulary}
        classNames={{
          table: tableWithoutBorderClassName,
          th: getColorizedThClassName,
          td: getColorizedItalicTdClassName,
        }}
      />
      <GenericTable
        data={foodTable}
        classNames={{
          table: tableWithoutBorderClassName,
          th: getColorizedThClassName,
          td: getColorizedFirstTdClassName,
        }}
      />
      <Paragraph data={ruleAfterGlossary} />
    </>
  );
};
