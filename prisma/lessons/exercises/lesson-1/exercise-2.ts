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
            mkd: `<span>Јас ___ од Ру́сија, а Вие? — А ние ___ од Фра́нција.</span>`,
            answer: [`сум`, `сме`],
          },
          {
            mkd: `<span>Вие ___ од Хрва́тска? — Не, Ма́рија и јас ___ од С́рбија.</span>`,
            answer: [`сте`, `сме`],
          },
          {
            mkd: `<span>Џејмс и Ке́трин ___ од А́нглија.</span>`,
            answer: [`се`],
          },
          {
            mkd: `<span>Ти ___ од Аме́рика?</span>`,
            answer: [`си`],
          },
          {
            mkd: `<span>Ја́нис ___ од Ѓрција.</span>`,
            answer: [`е`],
          },
        ],
      },
    },
  ],
};

export default exercise2;
