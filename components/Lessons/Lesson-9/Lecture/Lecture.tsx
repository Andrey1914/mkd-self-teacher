import { Dialogue } from "./Dialogue";
import { Intro } from "./Intro";
import { Paragraph } from "@/components/lesson/Paragraph";
import { GenericTable } from "@/components/lesson/Tables";

import { lectureLesson9 } from "@/prisma/lessons/paragraph";
import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-9";
import { glossary } from "@/prisma/lessons/tables";

import {
  getColorizedItalicTdClassName,
  tableWithoutBorderClassName,
  getColorizedThClassName,
  getColorizedFirstTdClassName,
} from "@/components/lesson/Tables/rules";

const { intro, ruleAfterGlossary } = lectureLesson9;
const { clothingAccessories } = glossary;

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
      <GenericTable
        data={clothingAccessories}
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
