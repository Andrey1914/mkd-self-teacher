import { FillInExerciseData } from "@/types/exerciseTypes";

const exercise4: FillInExerciseData = {
  title: "Упражнение 4",
  slug: "lesson-1",
  sections: [
    {
      type: "exercise-fill-in",
      prompt: [`Поставте глаголы в скобках в нужную форму.`],
      content: {
        sentences: [
          {
            mkd: `Иван и jас ___ (купува) подароци.`,
            answer: [`купуваме`],
          },
          {
            mkd: `Ти ___ (поминува) пасошка контрола?`,
            answer: [`поминуваш`],
          },
          {
            mkd: `Благоjа и Ненад ___ (чека) бординг.`,
            answer: [`чекаат`],
          },
          {
            mkd: `Jас ___ (има) време, а жена ми ___ (нема).`,
            answer: [`имам`, `нема`],
          },
          {
            mkd: `И вие ___ (патува) за Лондон?.`,
            answer: [`патувате`],
          },
        ],
      },
    },
  ],
};

export default exercise4;
