import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";
import { ExamplesTable, GrammarTable } from "@/components/lesson/Tables";
import { FillInExercise } from "@/components/lesson/Exercises";

import { grammar } from "@/prisma/lessons/paragraph";
import { grammarPronouns2 } from "@/prisma/lessons/tables";
import { example1 as examplesLesson1 } from "@/prisma/lessons/tables/examples";
import { exercise2, exercise3 } from "@/prisma/lessons/exercises/lesson-1";

const { toBe, formsToVerb } = grammar;

const Verb = () => {
  return (
    <>
      <Paragraph data={toBe} />
      <GrammarTable data={grammarPronouns2} />
      <Paragraph data={formsToVerb} />
      <ExamplesTable data={examplesLesson1} />
      <FillInExercise data={exercise2} />
      <FillInExercise data={exercise3} />
    </>
  );
};

export default Verb;
