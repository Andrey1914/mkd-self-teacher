import React from "react";

import {
  FillInExercise,
  //   TranslateParagraphExercise,
  //   ParagraphExercise,
} from "@/components/lesson/Exercises";

import { exercisesLesson3 } from "@/prisma/lessons/exercises";

const {
  exercise1,
  //   exercise2,
  //   exercise3,
  //   exercise4,
  //   exercise5,
  //   exercise6,
  //   exercise7,
  //   exercise8,
} = exercisesLesson3;

export const Exercises = () => {
  return (
    <>
      <FillInExercise data={exercise1} />
      {/* <FillInExercise data={exercise2} />
      <FillInExercise data={exercise3} />
      <FillInExercise data={exercise4} />
      <FillInExercise data={exercise5} />
      <TranslateParagraphExercise data={exercise6} />
      <ParagraphExercise data={exercise7} />
      <TranslateParagraphExercise data={exercise8} /> */}
    </>
  );
};
