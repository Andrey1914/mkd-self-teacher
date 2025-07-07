import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";
import { ExamplesTable, GrammarTable } from "@/components/lesson/Tables";
import { FillInExercise } from "@/components/lesson/Exercises";

import { toBe, formsToVerb } from "@/prisma/lessons/paragraph";
import { grammarPronouns2, example1 } from "@/prisma/lessons/tables";
import { exercise2, exercise3 } from "@/prisma/lessons/exercises/lesson-1";

export const Verb = () => {
  return (
    <>
      <Paragraph data={toBe} />
      <GrammarTable data={grammarPronouns2} />
      <Paragraph data={formsToVerb} />
      <ExamplesTable data={example1} />
      <FillInExercise data={exercise2} />
      <FillInExercise data={exercise3} />
    </>
  );
};
