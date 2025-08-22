// import { FillInExerciseData } from "@/types/exerciseTypes";
import { ExercisesProps } from "@/types";

export const exercise2: ExercisesProps = {
  type: "exercises",
  title: "Упражнение 2",
  slug: "lesson-1",
  sections: [
    {
      type: "exercise-fill-in",
      prompt: [`Вставьте глагол <span>сум</span> в нужной форме.`],
      content: {
        sentences: [
          {
            mkd: `1. Јас ___ од Ру́сија, а Вие? — А ние ___ од Фра́нција.`,
            answer: [`сум`, `сме`],
          },
          {
            mkd: `2. Вие ___ од Хрва́тска? — Не, Ма́рија и јас ___ од С́рбија.`,
            answer: [`сте`, `сме`],
          },
          {
            mkd: `3. Џејмс и Ке́трин ___ од А́нглија.`,
            answer: [`се`],
          },
          {
            mkd: `4. Ти ___ од Аме́рика?`,
            answer: [`си`],
          },
          {
            mkd: `5. Ја́нис ___ од Ѓрција.`,
            answer: [`е`],
          },
        ],
      },
    },
  ],
};
