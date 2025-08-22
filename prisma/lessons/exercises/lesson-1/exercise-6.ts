// import { FillInExerciseData } from "@/types/exerciseTypes";
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
            mkd: `1. Jас ___ (пие) чаj, а маж ми ___ (пие) кафе.`,
            answer: [`пиjам`, `пие`],
          },
          {
            mkd: `2. А каде тие ___ (живее)?`,
            answer: [`живеат`],
          },
          {
            mkd: `3. И ти ___ (jаде) сендвич?`,
            answer: [`jадеш`],
          },
          {
            mkd: `4. И вие ___ (живее) во Париз? - Не, ние ___ (живее) во Киев.`,
            answer: [`живеете`, `живееме`],
          },
        ],
      },
    },
  ],
};
