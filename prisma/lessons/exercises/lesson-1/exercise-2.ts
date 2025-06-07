import { FillInExerciseData } from "@/types/exerciseTypes";

const exercise2: FillInExerciseData = {
  title: "Упражнение 2",
  slug: "lesson-1",
  sections: [
    {
      type: "exercise-fill-in",
      prompt: [`Вставьте глагол <span>сум</span> в нужной форме.`],
      content: {
        sentences: [
          {
            mkd: `Јас ___ од Ру́сија, а Вие? — А ние ___ од Фра́нција.`,
            answer: [`сум`, `сме`],
          },
          {
            mkd: `Вие ___ од Хрва́тска? — Не, Ма́рија и јас ___ од С́рбија.`,
            answer: [`сте`, `сме`],
          },
          {
            mkd: `Џејмс и Ке́трин ___ од А́нглија.`,
            answer: [`се`],
          },
          {
            mkd: `Ти ___ од Аме́рика?`,
            answer: [`си`],
          },
          {
            mkd: `Ја́нис ___ од Ѓрција.`,
            answer: [`е`],
          },
        ],
      },
    },
  ],
};

export default exercise2;
