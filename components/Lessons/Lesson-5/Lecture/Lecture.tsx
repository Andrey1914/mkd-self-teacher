import React from "react";

import { DialogueCity } from "./Dialogue";
import { Intro } from "./Intro";
import { Paragraph } from "@/components/lesson/Paragraph";
// import { PayAttentionBlock } from "@/components/lesson/PayAttentionBlock";
import { Vocabulary } from "@/components/lesson/Vocabulary";
import { GlossaryTable } from "@/components/lesson/Tables";

import { lectureLesson5 } from "@/prisma/lessons/paragraph";
import { glossary } from "@/prisma/lessons/tables";

import { vocabulary } from "@/prisma/lessons/vocabulary/lesson-5";

const { intro, ruleAfterGlossary } = lectureLesson5;

const { foodTable } = glossary;

export const Lecture = () => {
  return (
    <>
      <Intro />
      <DialogueCity />
      <Paragraph data={intro} />
      <Vocabulary lesson={vocabulary} />
      <GlossaryTable data={foodTable} />
      <Paragraph data={ruleAfterGlossary} />
    </>
  );
};
