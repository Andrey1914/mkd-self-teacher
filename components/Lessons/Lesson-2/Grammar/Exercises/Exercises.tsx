import React from "react";

import { FillInExercise } from "@/components/lesson/Exercises";

import {
  exercise1,
  exercise2,
  exercise3,
  exercise4,
} from "@/prisma/lessons/exercises/lesson-2";

const Exercises = () => {
  return (
    <>
      <FillInExercise data={exercise1} />
      <FillInExercise data={exercise2} />
      <FillInExercise data={exercise3} />
      <FillInExercise data={exercise4} />
    </>
  );
};

export default Exercises;
