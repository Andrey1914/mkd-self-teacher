import { Dialogue } from "./Dialogue";
import { Intro } from "./Intro";
import { Paragraph } from "@/components/lesson/Paragraph";
import { GenericTable } from "@/components/lesson/Tables";

import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-14";
import { glossary } from "@/prisma/lessons/tables";
import { lectureLesson14 } from "@/prisma/lessons/paragraph";

import {
  tableWithoutBorderClassName,
  getColorizedThClassName,
  getColorizedFirstTdClassName,
  getColorizedItalicTdClassName,
} from "@/components/lesson/Tables/rules";

const { sport } = glossary;
const { intro, ruleAfterVocabulary } = lectureLesson14;

export const Lecture = () => {
  return (
    <>
      <Intro />
      <Dialogue />
      <Paragraph data={intro} />
      <GenericTable
        lesson={vocabulary}
        classNames={{
          table: tableWithoutBorderClassName,
          th: getColorizedThClassName,
          td: getColorizedItalicTdClassName,
        }}
      />
      <Paragraph data={ruleAfterVocabulary} />
      <GenericTable
        data={sport}
        classNames={{
          table: tableWithoutBorderClassName,
          th: getColorizedThClassName,
          td: getColorizedFirstTdClassName,
        }}
      />
    </>
  );
};
