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
            mkd: `1. Од ка*де сте ___ ? — ___ сме од Буга*риjа.`,
            answer: [`вие`, `ние`],
          },
          {
            mkd: `2.  ___ сум Би*лjана.`,
            answer: [`jас`],
          },
          {
            mkd: `3.  ___ е Ни*колче.`,
            answer: [`тоj`],
          },
          {
            mkd: `4. Од ка*де си ___ ? — Од Че*шка.`,
            answer: [`ти`],
          },
          {
            mkd: `5.  ___ се од По*лска.`,
            answer: [`тие`],
          },
        ],
      },
    },
  ],
};
