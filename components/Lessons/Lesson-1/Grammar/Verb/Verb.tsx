import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph";
import { ExamplesTable, GrammarTable } from "@/components/lesson/Tables";
import { FillInExercise } from "@/components/lesson/Exercises";

import { grammarLesson1 } from "@/prisma/lessons/paragraph";
import { grammarPronouns } from "@/prisma/lessons/tables";
import { examples } from "@/prisma/lessons/tables";
import { exercisesLesson1 } from "@/prisma/lessons/exercises";

const { toBe } = grammarLesson1;

const { exercise2, exercise3 } = exercisesLesson1;

const { grammarPronouns2 } = grammarPronouns;

const { lesson1 } = examples;
const { example1 } = lesson1;

export const Verb = () => {
  return (
    <>
      <Paragraph data={toBe} />
      <GrammarTable data={grammarPronouns2} />
      <ExamplesTable data={example1} />
      <FillInExercise data={exercise2} />
      <FillInExercise data={exercise3} />
    </>
  );
};
