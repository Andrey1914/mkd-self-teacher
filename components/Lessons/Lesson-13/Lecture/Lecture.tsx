import { Dialogue } from "./Dialogue";
import { Intro } from "./Intro";
import { Paragraph } from "@/components/lesson/Paragraph";
import { GenericTable } from "@/components/lesson/Tables";

import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-13";
import { glossary } from "@/prisma/lessons/tables";
import { lectureLesson13 } from "@/prisma/lessons/paragraph";

import {
  tableWithoutBorderClassName,
  getColorizedThClassName,
  getColorizedFirstTdClassName,
  getColorizedItalicTdClassName,
} from "@/components/lesson/Tables/rules";

const { appearanceAndCare } = glossary;
const { intro, ruleAfterVocabulary, ruleAfterGlossary } = lectureLesson13;

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
        data={appearanceAndCare}
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
