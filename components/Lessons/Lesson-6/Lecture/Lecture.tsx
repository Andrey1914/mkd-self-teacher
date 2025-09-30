import React from "react";

import { TripToOhrid } from "./Dialogue";
import { Intro } from "./Intro";
import { Paragraph } from "@/components/lesson/Paragraph";
import { Vocabulary } from "@/components/lesson/Vocabulary";
// import { GlossaryTable } from "@/components/lesson/Tables";

import { lectureLesson6 } from "@/prisma/lessons/paragraph";
// import { glossary } from "@/prisma/lessons/tables";

import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-6";

const { intro } = lectureLesson6;

// const { foodTable } = glossary;

export const Lecture = () => {
  return (
    <>
      <Intro />
      <TripToOhrid />
      <Paragraph data={intro} />
      <Vocabulary lesson={vocabulary} />
      {/* <GlossaryTable data={foodTable} /> */}
      {/* <Paragraph data={ruleAfterGlossary} /> */}
    </>
  );
};
