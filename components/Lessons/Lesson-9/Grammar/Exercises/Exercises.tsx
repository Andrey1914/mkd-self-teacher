import React from "react";

import {
  FillInExercise,
  TranslateParagraphExercise,
} from "@/components/lesson/Exercises";

import { exercisesLesson9 } from "@/prisma/lessons/exercises";

const {
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  exercise5,
  exercise6,
  exercise7,
  exercise8,
  exercise9,
  exercise10,
} = exercisesLesson9;

export const Exercises = () => {
  return (
    <>
      <FillInExercise data={exercise1} />
      <FillInExercise data={exercise2} />
      <TranslateParagraphExercise data={exercise3} />
      <FillInExercise data={exercise4} />
      <FillInExercise data={exercise5} />
      <FillInExercise data={exercise6} />
      <FillInExercise data={exercise7} />
      <FillInExercise data={exercise8} />
      <TranslateParagraphExercise data={exercise9} />
      <TranslateParagraphExercise data={exercise10} />
    </>
  );
};
