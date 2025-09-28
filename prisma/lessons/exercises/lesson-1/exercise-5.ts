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
            mkd: `1. Jас ___ (сто*и), а ти ___ (се*ди).`,
            answer: [`стоjам`, `седиш`],
          },
          {
            mkd: `2. А ка*де ви*е ___ (о*ди)?`,
            answer: [`одите`],
          },
          {
            mkd: `3. Ни*е ___ (сто*и), а Тра*jко ___ (се*ди).`,
            answer: [`стоиме`, `седи`],
          },
          {
            mkd: `4. Лили*jана и Сто*jан ___ (о*ди) за Ва*ршава.`,
            answer: [`одат`],
          },
        ],
      },
    },
  ],
};
