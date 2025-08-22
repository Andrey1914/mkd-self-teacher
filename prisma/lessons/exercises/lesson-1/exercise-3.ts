// import { FillInExerciseData } from "@/types/exerciseTypes";
import { ExercisesProps } from "@/types";

export const exercise3: ExercisesProps = {
  type: "exercises",
  title: "Упражнение 3",
  slug: "lesson-1",
  sections: [
    {
      type: "exercise-fill-in",
      prompt: [`Вставьте личные местоимения.`],
      content: {
        sentences: [
          {
            mkd: `1. Од каде сте ___ ? — ___ сме од Бугариjа.`,
            answer: [`вие`, `ние`],
          },
          {
            mkd: `2.  ___ сум Билjана.`,
            answer: [`jас`],
          },
          {
            mkd: `3.  ___ е Николче.`,
            answer: [`тоj`],
          },
          {
            mkd: `4. Од каде си ___ ? — Од Чешка.`,
            answer: [`ти`],
          },
          {
            mkd: `5.  ___ се од Полска.`,
            answer: [`тие`],
          },
        ],
      },
    },
  ],
};
