import { FillInExerciseData } from "@/types/exerciseTypes";

const exercise6: FillInExerciseData = {
  title: "Упражнение 6",
  slug: "lesson-1",
  sections: [
    {
      type: "exercise-fill-in",
      prompt: [`Поставьте глаголы в скобках в нужную форму.`],
      content: {
        sentences: [
          {
            mkd: `Jас ___ (пие) чаj, а маж ми ___ (пие) кафе.`,
            answer: [`пиjам`, `пие`],
          },
          {
            mkd: `А каде тие ___ (живее)?`,
            answer: [`живеат`],
          },
          {
            mkd: `И ти ___ (jаде) сендвич?`,
            answer: [`jадеш`],
          },
          {
            mkd: `И вие ___ (живее) во Париз? - Не, ние ___ (живее) во Киев.`,
            answer: [`живеете`, `живееме`],
          },
        ],
      },
    },
  ],
};

export default exercise6;
