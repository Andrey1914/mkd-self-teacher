import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";
import { AlphabetTable } from "@/components/lesson/Tables";
import { StaticExercise } from "@/components/lesson/Exercises";

import { paragraph } from "@/prisma/lessons/paragraph";

import { exercise1 } from "@/prisma/lessons/exercises/lesson-1";

export const Phonetics = () => {
  return (
    <>
      <Paragraph data={paragraph.phonetics} part="title" />
      <AlphabetTable />
      <Paragraph data={paragraph.phonetics} part="text" />
      <Paragraph data={paragraph.features} />
      <Paragraph data={paragraph.accent} />
      <Paragraph data={paragraph.exceptions} />
      <Paragraph data={paragraph.spelling} />
      <StaticExercise data={exercise1} />
    </>
  );
};
