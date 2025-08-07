import React from "react";

import { FillInExercise } from "@/components/lesson/Exercises";

import { exercise1 } from "@/prisma/lessons/exercises/lesson-2";

const Exercises = () => {
  return (
    <>
      <FillInExercise data={exercise1} />
    </>
  );
};

export default Exercises;
