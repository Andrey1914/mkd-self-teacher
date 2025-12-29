import { ExercisesProps } from "@/types";

export const exercise1: ExercisesProps = {
  type: "exercises",
  title: "Упражнение 1",
  slug: "lesson-12",
  sections: [
    {
      type: "exercise-fill-in",
      prompt: [`Образуйте звательные формы от следующих существительных:`],

      content: {
        sentences: [
          {
            mkd: `И*вана ___,`,
            answer: [`Ивано`],
          },
          {
            mkd: `И*ванка ___,`,
            answer: [`Иванко`],
          },
          {
            mkd: `И*ван ___,`,
            answer: [`Иване`],
          },
          {
            mkd: `на*ставник ___,`,
            answer: [`**наставнику / наставниче**`],
          },
          {
            mkd: `наста*вничка ___,`,
            answer: [`наставничке`],
          },
          {
            mkd: `шеф ___,`,
            answer: [`шефе`],
          },
          {
            mkd: `ма*jстор ___,`,
            answer: [`маjсторе`],
          },
        ],
      },
    },
  ],
};
