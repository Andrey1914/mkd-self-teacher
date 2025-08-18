import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph";
import { AlphabetTable } from "@/components/lesson/Tables";
import { StaticExercise } from "@/components/lesson/Exercises";

import { paragraph } from "@/prisma/lessons/paragraph";
import { exercisesLesson1 } from "@/prisma/lessons/exercises";

const { exercise1 } = exercisesLesson1;
const { phonetics, features, accent, exceptions, spelling } = paragraph;

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
