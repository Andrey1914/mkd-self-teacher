import { Dialogue } from "./Dialogue";
import { Intro } from "./Intro";
// import { GenericTable } from "@/components/lesson/Tables";

// import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-11";
// import { glossary } from "@/prisma/lessons/tables";

// import {
//   tableWithoutBorderClassName,
//   getColorizedThClassName,
//   getColorizedFirstTdClassName,
//   getColorizedItalicTdClassName,
// } from "@/components/lesson/Tables/rules";

// const { time } = glossary;

export const Lecture = () => {
  return (
    <>
      <Intro />
      <Dialogue />
      {/* <GenericTable
        lesson={vocabulary}
        classNames={{
          table: tableWithoutBorderClassName,
          th: getColorizedThClassName,
          td: getColorizedItalicTdClassName,
        }}
      /> */}
      {/* <GenericTable
        data={time}
        classNames={{
          table: tableWithoutBorderClassName,
          th: getColorizedThClassName,
          td: getColorizedFirstTdClassName,
        }}
      /> */}
    </>
  );
};
