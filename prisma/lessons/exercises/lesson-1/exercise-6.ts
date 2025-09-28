import { ExercisesProps } from "@/types";

export const exercise6: ExercisesProps = {
  type: "exercises",
  title: "Упражнение 6",
  slug: "lesson-1",
  sections: [
    {
      type: "exercise-fill-in",
      prompt: [`Поставьте глаголы в скобках в нужную форму.`],
      content: {
        sentences: [
          {
            mkd: `1. Jас ___ (пи*е) чаj, а маж ми ___ (пи*е) ка*фе.`,
            answer: [`пиjам`, `пие`],
          },
          {
            mkd: `2. А ка*де ти*е ___ (жи*вее)?`,
            answer: [`живеат`],
          },
          {
            mkd: `3. И ти ___ (jа*де) се*ндвич?`,
            answer: [`jадеш`],
          },
          {
            mkd: `4. И ви*е ___ (жи*вее) во Па*риз? - Не, ни*е ___ (жи*вее) во Ки*ев.`,
            answer: [`живеете`, `живееме`],
          },
        ],
      },
    },
  ],
};
