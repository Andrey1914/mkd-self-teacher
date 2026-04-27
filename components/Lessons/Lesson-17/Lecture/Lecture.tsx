// import { Dialogue } from "./Dialogue";
import { Intro } from "./Intro";
// import { Paragraph } from "@/components/lesson/Paragraph";
import { GenericTable } from "@/components/lesson/Tables";

import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-17";
// import { lectureLesson16 } from "@/prisma/lessons/paragraph";
// import { glossary } from "@/prisma/lessons/tables";

import {
  tableWithoutBorderClassName,
  getColorizedThClassName,
  // getColorizedFirstTdClassName,
  getColorizedItalicTdClassName,
} from "@/components/lesson/Tables/rules";

// const { ruleAfterVocabulary, ruleAfterGlossary } = lectureLesson16;
// const { music } = glossary;

export const Lecture = () => {
  return (
    <>
      <Intro />
      {/* <Dialogue /> */}
      <GenericTable
        lesson={vocabulary}
        classNames={{
          table: tableWithoutBorderClassName,
          th: getColorizedThClassName,
          td: getColorizedItalicTdClassName,
        }}
      />
      {/* <Paragraph data={ruleAfterVocabulary} /> */}
      {/* <GenericTable
        data={music}
        classNames={{
          table: tableWithoutBorderClassName,
          th: getColorizedThClassName,
          td: getColorizedFirstTdClassName,
        }}
      /> */}
      {/* <Paragraph data={ruleAfterGlossary} /> */}
    </>
  );
};
