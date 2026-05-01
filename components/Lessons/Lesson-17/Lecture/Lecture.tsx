import { Dialogue } from "./Dialogue";
import { Intro } from "./Intro";
import { Paragraph } from "@/components/lesson/Paragraph";
import { GenericTable } from "@/components/lesson/Tables";

import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-17";
import { lectureLesson17 } from "@/prisma/lessons/paragraph";

import {
  tableWithoutBorderClassName,
  getColorizedThClassName,
  getColorizedItalicTdClassName,
} from "@/components/lesson/Tables/rules";

const { ruleAfterVocabulary } = lectureLesson17;

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
      <Paragraph data={ruleAfterVocabulary} />
    </>
  );
};
