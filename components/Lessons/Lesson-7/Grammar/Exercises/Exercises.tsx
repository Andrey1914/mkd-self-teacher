import React from "react";

import {
  FillInExercise,
  TranslateParagraphExercise,
} from "@/components/lesson/Exercises";

import { exercisesLesson7 } from "@/prisma/lessons/exercises";

const {
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  exercise5,
  exercise6,
  exercise7,
  exercise8,
} = exercisesLesson7;

export const Exercises = () => {
  return (
    <>
      <FillInExercise data={exercise1} />
      <FillInExercise data={exercise2} />
      <FillInExercise data={exercise3} />
      <FillInExercise data={exercise4} />
      <TranslateParagraphExercise data={exercise5} />
      <FillInExercise data={exercise6} />
      <FillInExercise data={exercise7} />
      <TranslateParagraphExercise data={exercise8} />
    </>
  );
};
