import {
  FillInExercise,
  //   TranslateParagraphExercise,
} from "@/components/lesson/Exercises";

import { exercisesLesson12 } from "@/prisma/lessons/exercises";

const {
  exercise1,
  exercise2,
  exercise3,
  // exercise4, exercise5,
} = exercisesLesson12;

export const Exercises = () => {
  return (
    <>
      <FillInExercise data={exercise1} />
      <FillInExercise data={exercise2} />
      <FillInExercise data={exercise3} />
      {/* <TranslateParagraphExercise data={exercise4} /> */}
      {/* <TranslateParagraphExercise data={exercise5} /> */}
      <div data-lesson-end />
    </>
  );
};
