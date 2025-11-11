import React from "react";

// import { Dialogue } from "./Dialogue";
import { Intro } from "./Intro";
// import { Paragraph } from "@/components/lesson/Paragraph";
// import { GenericTable } from "@/components/lesson/Tables";

// import { lectureLesson8 } from "@/prisma/lessons/paragraph";
// import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-8";

// import {
//   getColorizedItalicTdClassName,
//   tableWithoutBorderClassName,
//   getColorizedThClassName,
// } from "@/components/lesson/Tables/rules";

// const { intro } = lectureLesson8;

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
    </>
  );
};
