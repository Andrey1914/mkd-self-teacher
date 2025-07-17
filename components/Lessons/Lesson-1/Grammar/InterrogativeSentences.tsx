import React from "react";

import { Paragraph } from "@/components/lesson/Paragraph/Paragraph";
import { ExamplesTable } from "@/components/lesson/Tables";
import { ParagraphExercise } from "@/components/lesson/Exercises";
import { TranslateParagraphExercise } from "@/components/lesson/Exercises";

import { sentences } from "@/prisma/lessons/paragraph";

import {
  example3,
  example4,
  example5,
  example6,
  example7,
  example8,
} from "@/prisma/lessons/tables";
import {
  exercise7,
  exercise8,
  exercise9,
} from "@/prisma/lessons/exercises/lesson-1";

export const InterrogativeSentences = () => {
  return (
    <>
      <Paragraph data={sentences.sentences1} />
      <ExamplesTable data={example3} />
      <Paragraph data={sentences.sentences2} />
      <ExamplesTable data={example4} />
      <Paragraph data={sentences.sentences3} />
      <ExamplesTable data={example5} />
      <Paragraph data={sentences.sentences4} />
      <ExamplesTable data={example6} />
      <Paragraph data={sentences.sentences5} />
      <ExamplesTable data={example7} />
      <Paragraph data={sentences.sentences6} />
      <ExamplesTable data={example8} />
      <ParagraphExercise data={exercise7} />
      <TranslateParagraphExercise data={exercise8} />
      <TranslateParagraphExercise data={exercise9} />
    </>
  );
};
