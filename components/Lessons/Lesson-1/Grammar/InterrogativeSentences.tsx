import React from "react";

import { Examples } from "./Examples";
import {
  ParagraphExercise,
  TranslateParagraphExercise,
} from "@/components/lesson/Exercises";

import { exercisesLesson1 } from "@/prisma/lessons/exercises";

const { exercise7, exercise8, exercise9 } = exercisesLesson1;

export const InterrogativeSentences = () => {
  return (
    <>
      <Examples />
      <ParagraphExercise data={exercise7} />
      <TranslateParagraphExercise data={exercise8} />
      <TranslateParagraphExercise data={exercise9} />
    </>
  );
};
