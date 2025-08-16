import React from "react";

import { ExamplesTable } from "@/components/lesson/Tables";
import { ParagraphExercise } from "@/components/lesson/Exercises";
import { TranslateParagraphExercise } from "@/components/lesson/Exercises";

import { examples } from "@/prisma/lessons/tables";
import {
  exercise7,
  exercise8,
  exercise9,
} from "@/prisma/lessons/exercises/lesson-1";

const { lesson1 } = examples;
const { example3, example4, example5, example6, example7, example8 } = lesson1;

export const InterrogativeSentences = () => {
  return (
    <>
      <ExamplesTable data={example3} />
      <ExamplesTable data={example4} />
      <ExamplesTable data={example5} />
      <ExamplesTable data={example6} />
      <ExamplesTable data={example7} />
      <ExamplesTable data={example8} />
      <ParagraphExercise data={exercise7} />
      <TranslateParagraphExercise data={exercise8} />
      <TranslateParagraphExercise data={exercise9} />
    </>
  );
};
