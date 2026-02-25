import {
  FillInExercise,
  TranslateParagraphExercise,
  SelectOptionExercise,
} from "@/components/lesson/Exercises";

import { exercisesLesson15 } from "@/prisma/lessons/exercises";

const {
  exercise1,
  exercise2,
  // exercise3,
  // exercise4,
  // exercise5,
  // exercise6,
} = exercisesLesson15;

export const Exercises = () => {
  return (
    <>
      <FillInExercise data={exercise1} />
      <FillInExercise data={exercise2} />
      {/* <FillInExercise data={exercise3} /> */}
      {/* <FillInExercise data={exercise4} /> */}
      {/* <TranslateParagraphExercise data={exercise5} /> */}
      {/* <SelectOptionExercise data={exercise6} /> */}
      <div data-lesson-end />
    </>
  );
};
