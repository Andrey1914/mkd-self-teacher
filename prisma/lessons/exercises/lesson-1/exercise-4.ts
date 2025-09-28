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
            mkd: `1. И*ван и jас ___ (ку*пува) пода*роци.`,
            answer: [`купуваме`],
          },
          {
            mkd: `2. Ти ___ (поми*нува) па*сошка ко*нтрола?`,
            answer: [`поминуваш`],
          },
          {
            mkd: `3. Бла*гоjа и Не*над ___ (че*ка) бо*рдинг.`,
            answer: [`чекаат`],
          },
          {
            mkd: `4. Jас ___ (и*ма) вре*ме, а же*на ми ___ (не*ма).`,
            answer: [`имам`, `нема`],
          },
          {
            mkd: `5. И ви*е ___ (па*тува) за Ло*ндон?.`,
            answer: [`патувате`],
          },
        ],
      },
    },
  ],
};
