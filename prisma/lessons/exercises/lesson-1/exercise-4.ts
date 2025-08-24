import { ExercisesProps } from "@/types";

export const exercise4: ExercisesProps = {
  type: "exercises",
  title: "Упражнение 4",
  slug: "lesson-1",
  sections: [
    {
      type: "exercise-fill-in",
      prompt: [`Поставте глаголы в скобках в нужную форму.`],
      content: {
        sentences: [
          {
            mkd: `1. Иван и jас ___ (купува) подароци.`,
            answer: [`купуваме`],
          },
          {
            mkd: `2. Ти ___ (поминува) пасошка контрола?`,
            answer: [`поминуваш`],
          },
          {
            mkd: `3. Благоjа и Ненад ___ (чека) бординг.`,
            answer: [`чекаат`],
          },
          {
            mkd: `4. Jас ___ (има) време, а жена ми ___ (нема).`,
            answer: [`имам`, `нема`],
          },
          {
            mkd: `5. И вие ___ (патува) за Лондон?.`,
            answer: [`патувате`],
          },
        ],
      },
    },
  ],
};
