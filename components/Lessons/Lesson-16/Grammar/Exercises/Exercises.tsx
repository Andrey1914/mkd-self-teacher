import {
  FillInExercise,
  TranslateParagraphExercise,
} from "@/components/lesson/Exercises";

import { exercisesLesson16 } from "@/prisma/lessons/exercises";

const {
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  exercise5,
  exercise6,
  //   exercise7,
  //   exercise8,
  //   exercise9,
} = exercisesLesson16;

export const Exercises = () => {
  return (
    <>
      <FillInExercise data={exercise1} />
      <FillInExercise data={exercise2} />
      <FillInExercise data={exercise3} />
      <FillInExercise data={exercise4} />
      <FillInExercise data={exercise5} />
      <FillInExercise data={exercise6} />
      {/* <TranslateParagraphExercise data={exercise5} /> */}
      {/* <TranslateParagraphExercise data={exercise6} /> */}
      <div data-lesson-end />
    </>
  );
};
