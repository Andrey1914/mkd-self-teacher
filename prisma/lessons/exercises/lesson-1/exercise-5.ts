// import { FillInExerciseData } from "@/types/exerciseTypes";
import { ExercisesProps } from "@/types";

export const exercise5: ExercisesProps = {
  type: "exercises",
  title: "Упражнение 5",
  slug: "lesson-1",
  sections: [
    {
      type: "exercise-fill-in",
      prompt: [`Поставте глаголы в скобках в нужную форму.`],
      content: {
        sentences: [
          {
            mkd: `1. Jас ___ (стои), а ти ___ (седи).`,
            answer: [`стоjам`, `седиш`],
          },
          {
            mkd: `2. А каде вие ___ (оди)?`,
            answer: [`одите`],
          },
          {
            mkd: `3. Ние ___ (стои), а Траjко ___ (седи).`,
            answer: [`стоиме`, `седи`],
          },
          {
            mkd: `4. Лилиjана и Стоjан ___ (оди) за Москва.`,
            answer: [`одат`],
          },
        ],
      },
    },
  ],
};
