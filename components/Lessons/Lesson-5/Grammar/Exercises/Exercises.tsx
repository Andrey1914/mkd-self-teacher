import {
  FillInExercise,
  HighlightWordsExercise,
  TranslateParagraphExercise,
} from "@/components/lesson/Exercises";

import { exercisesLesson5 } from "@/prisma/lessons/exercises";

const {
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  exercise5,
  exercise6,
  exercise7,
  exercise8,
  exercise9,
} = exercisesLesson5;

export const Exercises = () => {
  return (
    <>
      <FillInExercise data={exercise1} />
      <FillInExercise data={exercise2} />
      <HighlightWordsExercise data={exercise3} />
      <FillInExercise data={exercise4} />
      <TranslateParagraphExercise data={exercise5} />
      <FillInExercise data={exercise6} />
      <FillInExercise data={exercise7} />
      <FillInExercise data={exercise8} />
      <TranslateParagraphExercise data={exercise9} />
    </>
  );
};
