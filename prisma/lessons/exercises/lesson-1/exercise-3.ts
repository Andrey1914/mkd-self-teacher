import { FillInExerciseData } from "@/types/exerciseTypes";

const exercise3: FillInExerciseData = {
  title: "Упражнение 3",
  slug: "lesson-1",
  sections: [
    {
      type: "exercise-fill-in",
      prompt: [`Вставьте личные местоимения.`],
      content: {
        sentences: [
          {
            mkd: `Од каде сте ___ ? — ___ сме од Бугариjа.`,
            answer: [`вие`, `ние`],
          },
          {
            mkd: ` ___ сум Билjана.`,
            answer: [`jас`],
          },
          {
            mkd: ` ___ е Николче.`,
            answer: [`тоj`],
          },
          {
            mkd: `Од каде си ___ ? — Од Чешка.`,
            answer: [`ти`],
          },
          {
            mkd: ` ___ се од Полска.`,
            answer: [`тие`],
          },
        ],
      },
    },
  ],
};

export default exercise3;
