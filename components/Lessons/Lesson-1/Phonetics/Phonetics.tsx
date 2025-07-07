import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";
import { AlphabetTable } from "@/components/lesson/Tables";
import { StaticExercise } from "@/components/lesson/Exercises";

import {
  phonetics,
  features,
  accent,
  exceptions,
  spelling,
} from "@/prisma/lessons/paragraph";
import { exercise1 } from "@/prisma/lessons/exercises/lesson-1";

export const Phonetics = () => {
  return (
    <>
      <Paragraph data={phonetics} part="title" />
      <AlphabetTable />
      <Paragraph data={phonetics} part="text" />
      <Paragraph data={features} />
      <Paragraph data={accent} />
      <Paragraph data={exceptions} />
      <Paragraph data={spelling} />
      <StaticExercise data={exercise1} />
    </>
  );
};
