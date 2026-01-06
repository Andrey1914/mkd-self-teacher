// import { Dialogue } from "./Dialogue";
import { Intro } from "./Intro";
// import { Paragraph } from "@/components/lesson/Paragraph";
// import { GenericTable } from "@/components/lesson/Tables";

// import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-12";
// import { glossary } from "@/prisma/lessons/tables";
// import { lectureLesson12 } from "@/prisma/lessons/paragraph";

// import {
//   tableWithoutBorderClassName,
//   getColorizedThClassName,
//   getColorizedFirstTdClassName,
//   getColorizedItalicTdClassName,
// } from "@/components/lesson/Tables/rules";

// const { family } = glossary;
// const { intro, ruleAfterVocabulary, ruleAfterGlossary } = lectureLesson12;

export const Lecture = () => {
  return (
    <>
      <Intro />
      {/* <Dialogue /> */}
      {/* <Paragraph data={intro} /> */}
      {/* <GenericTable
        lesson={vocabulary}
        classNames={{
          table: tableWithoutBorderClassName,
          th: getColorizedThClassName,
          td: getColorizedItalicTdClassName,
        }}
      /> */}
      {/* <Paragraph data={ruleAfterVocabulary} /> */}
      {/* <GenericTable
        data={family}
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
