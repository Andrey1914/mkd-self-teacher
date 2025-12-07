import {
  FillInExercise,
  TranslateParagraphExercise,
} from "@/components/lesson/Exercises";

import { exercisesLesson8 } from "@/prisma/lessons/exercises";

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
  exercise10,
  exercise11,
  exercise12,
  exercise13,
  exercise14,
  exercise15,
} = exercisesLesson8;

export const Exercises = () => {
  return (
    <>
      <FillInExercise data={exercise1} />
      <TranslateParagraphExercise data={exercise2} />
      <FillInExercise data={exercise3} />
      <FillInExercise data={exercise4} />
      <FillInExercise data={exercise5} />
      <FillInExercise data={exercise6} />
      <FillInExercise data={exercise7} />
      <FillInExercise data={exercise8} />
      <FillInExercise data={exercise9} />
      <TranslateParagraphExercise data={exercise10} />
      <FillInExercise data={exercise11} />
      <TranslateParagraphExercise data={exercise12} />
      <FillInExercise data={exercise13} />
      <TranslateParagraphExercise data={exercise14} />
      <TranslateParagraphExercise data={exercise15} />
    </>
  );
};
