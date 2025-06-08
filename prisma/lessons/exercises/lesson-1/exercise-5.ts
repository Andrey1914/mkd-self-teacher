import { FillInExerciseData } from "@/types/exerciseTypes";

const exercise5: FillInExerciseData = {
  title: "Упражнение 5",
  slug: "lesson-1",
  sections: [
    {
      type: "exercise-fill-in",
      prompt: [`Поставте глаголы в скобках в нужную форму.`],
      content: {
        sentences: [
          {
            mkd: `Jас ___ (стои), а ти ___ (седи).`,
            answer: [`стоjам`, `седиш`],
          },
          {
            mkd: `А каде вие ___ (оди)?`,
            answer: [`одите`],
          },
          {
            mkd: `Ние ___ (стои), а Траjко ___ (седи).`,
            answer: [`стоиме`, `седи`],
          },
          {
            mkd: `Лилиjана и Стоjан ___ (оди) за Москва.`,
            answer: [`одат`],
          },
        ],
      },
    },
  ],
};

export default exercise5;
