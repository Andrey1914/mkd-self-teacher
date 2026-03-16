import {
  FillInExercise,
  TranslateParagraphExercise,
  SelectOptionExercise,
} from "@/components/lesson/Exercises";

import { exercisesLesson15 } from "@/prisma/lessons/exercises";

const {
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  // exercise5,
  // exercise6,
} = exercisesLesson15;

export const Exercises = () => {
  return (
    <>
      <FillInExercise data={exercise1} />
      <FillInExercise data={exercise2} />
      <FillInExercise data={exercise3} />
      <SelectOptionExercise data={exercise4} />
      {/* <FillInExercise data={exercise4} /> */}
      {/* <TranslateParagraphExercise data={exercise5} /> */}
      <div data-lesson-end />
    </>
  );
};
