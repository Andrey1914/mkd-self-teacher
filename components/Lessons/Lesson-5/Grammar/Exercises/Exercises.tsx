import React from "react";

import {
  FillInExercise,
  HighlightWordsExercise,
  //   ParagraphExercise,
  // TranslateParagraphExercise,
} from "@/components/lesson/Exercises";

import { exercisesLesson5 } from "@/prisma/lessons/exercises";

const {
  exercise1,
  exercise2,
  exercise3,
  //   exercise4,
  //   exercise5,
  //   exercise6,
  //   exercise7,
  //   exercise8,
} = exercisesLesson5;

export const Exercises = () => {
  return (
    <>
      <FillInExercise data={exercise1} />
      <FillInExercise data={exercise2} />
      {/* <ParagraphExercise data={exercise3} /> */}
      <HighlightWordsExercise data={exercise3} />
      {/* <FillInExercise data={exercise5} /> */}
      {/* <FillInExercise data={exercise6} /> */}
      {/* <FillInExercise data={exercise7} /> */}
      {/* <TranslateParagraphExercise data={exercise8} /> */}
    </>
  );
};
