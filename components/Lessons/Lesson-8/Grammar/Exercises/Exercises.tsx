import React from "react";

import {
  FillInExercise,
  TranslateParagraphExercise,
} from "@/components/lesson/Exercises";

import { exercisesLesson8 } from "@/prisma/lessons/exercises";

const {
  exercise1,
  exercise2,
  //   exercise3,
  //   exercise4,
  //   exercise5,
  //   exercise6,
  //   exercise7,
  //   exercise8,
} = exercisesLesson8;

export const Exercises = () => {
  return (
    <>
      <FillInExercise data={exercise1} />
      <TranslateParagraphExercise data={exercise2} />

      {/* <FillInExercise data={exercise2} /> */}
      {/* <FillInExercise data={exercise3} /> */}
      {/* <FillInExercise data={exercise4} /> */}
      {/* <FillInExercise data={exercise6} /> */}
      {/* <FillInExercise data={exercise7} /> */}
      {/* <TranslateParagraphExercise data={exercise8} /> */}
    </>
  );
};
